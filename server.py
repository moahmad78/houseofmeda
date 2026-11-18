#!/usr/bin/env python3
"""Auto-generated local server for ENI Site Cloner / WebCopier output."""

from __future__ import annotations

import argparse
import datetime
import functools
import html
import http.server
import io
import json
import os
import socketserver
import sys
from pathlib import Path
from urllib.parse import parse_qs, unquote, urlparse

ROOT = Path(__file__).resolve().parent
PORT = 8777
SPA = True
UNAVAILABLE = ROOT / "webcopier-unavailable.html"
REPORT = ROOT / "clone_report.json"
API_ROUTES_PATH = ROOT / "api_routes.json"
API_BUNDLES_PATH = ROOT / "api_bundles.json"

# Top-level Chromium Location.assign/replace/href cannot be wrapped in JS.
# Serve a same-origin iframe shell for real browser document navigations so a
# live-origin jump is confined to the frame and reset. Tests/curl omit
# Sec-Fetch-Dest and still receive the captured HTML.
REPLAY_SHELL = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8"/>
<meta http-equiv="Content-Security-Policy" content="frame-src 'self'"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>WebCopier</title>
<style>
html,body{margin:0;height:100%;background:#09090b}
iframe{border:0;width:100%;height:100%;display:block}
</style>
</head>
<body>
<iframe id="wc-replay" title="Offline replay" sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals allow-downloads"></iframe>
<script>
(function() {
  var origin = location.origin;
  var frame = document.getElementById("wc-replay");
  function localPath() {
    return location.pathname + location.search + location.hash;
  }
  function isLocalHref(href) {
    try { return new URL(href, origin).origin === origin; } catch (e) { return false; }
  }
  function syncFrame(src) {
    var next = src || localPath();
    try {
      frame.removeAttribute("src");
      frame.src = next;
    } catch (e) {}
  }
  frame.addEventListener("load", function() {
    try {
      var href = frame.contentWindow.location.href;
      if (!isLocalHref(href)) throw new Error("escaped");
      var path = frame.contentWindow.location.pathname
        + frame.contentWindow.location.search
        + frame.contentWindow.location.hash;
      if (path && path !== localPath()) history.replaceState(null, "", path);
    } catch (e) {
      syncFrame(localPath());
    }
  });
  window.addEventListener("message", function(ev) {
    if (ev.origin !== origin) return;
    if (!ev.data || ev.data.wc !== "nav") return;
    var path = String(ev.data.path || "");
    if (path.charAt(0) !== "/") return;
    if (path !== localPath()) history.replaceState(null, "", path);
  });
  window.addEventListener("popstate", function() { syncFrame(localPath()); });
  setInterval(function() {
    try {
      var href = frame.contentWindow.location.href;
      if (!href || href === "about:blank") return;
      if (!isLocalHref(href)) throw new Error("escaped");
    } catch (e) {
      var msg = String((e && e.message) || e || "");
      if (msg === "escaped" || msg.indexOf("SecurityError") !== -1 || (e && e.name === "SecurityError")) {
        syncFrame(localPath());
      }
    }
  }, 400);
  syncFrame(localPath());
})();
</script>
</body>
</html>
"""

# Tiny valid images so Three/drei useTexture does not crash on ghost/404 paths.
_PLACEHOLDER_WEBP = bytes.fromhex(
    "524946464000000057454250565038580a00000010000000000000000000414c504802000000000056503820180000003001009d012a0100010001402625a400037000fefd366800"
)
_PLACEHOLDER_PNG = bytes.fromhex(
    "89504e470d0a1a0a0000000d49484452000000010000000108060000001f15c4890000000d49444154789c6360606060000000050001a5f645400000000049454e44ae426082"
)
_PLACEHOLDER_JPEG = bytes.fromhex(
    "ffd8ffe000104a46494600010100000100010000ffdb00430006040506050406060506070706080a100a0a09090a140e0f0c1017141818171416161a1d251f1a1b231c1616202c20232627292a29191f2d302d283025282928ffdb0043010707070a080a130a0a13281a161a2828282828282828282828282828282828282828282828282828282828282828282828282828282828282828282828282828ffc00011080001000103012200021101031101ffc4001f0000010501010101010100000000000000000102030405060708090a0bffc400b5100002010303020403050504040000017d01020300041105122131410613516107227114328191a1082342b1c11552d1f02433627282090a161718191a25262728292a3435363738393a434445464748494a535455565758595a636465666768696a737475767778797a838485868788898a92939495969798999aa2a3a4a5a6a7a8a9aab2b3b4b5b6b7b8b9bac2c3c4c5c6c7c8c9cad2d3d4d5d6d7d8d9dae1e2e3e4e5e6e7e8e9eaf1f2f3f4f5f6f7f8f9faffc4001f0100030101010101010101010000000000000102030405060708090a0bffc400b51100020102040403040705040400010277000102031104052131061241510761711322328108144291a1b1c109233352f0156272d10a162434e125f11718191a262728292a35363738393a434445464748494a535455565758595a636465666768696a737475767778797a82838485868788898a92939495969798999aa2a3a4a5a6a7a8a9aab2b3b4b5b6b7b8b9bac2c3c4c5c6c7c8c9cad2d3d4d5d6d7d8d9dae2e3e4e5e6e7e8e9eaf2f3f4f5f6f7f8f9faffda000c03010002110311003f00faa68a28a00fffd9"
)
_PLACEHOLDER_GIF = bytes.fromhex(
    "47494638396101000100800000000000ffffff21f90401000001002c000000000100010000020144003b"
)
_MEDIA_PLACEHOLDERS = {
    ".webp": ("image/webp", _PLACEHOLDER_WEBP),
    ".png": ("image/png", _PLACEHOLDER_PNG),
    ".jpg": ("image/jpeg", _PLACEHOLDER_JPEG),
    ".jpeg": ("image/jpeg", _PLACEHOLDER_JPEG),
    ".gif": ("image/gif", _PLACEHOLDER_GIF),
    ".bmp": ("image/png", _PLACEHOLDER_PNG),
    ".ico": ("image/png", _PLACEHOLDER_PNG),
    ".avif": ("image/webp", _PLACEHOLDER_WEBP),
}


def _parse_items_range(headers, total: int) -> tuple[int, int]:
    raw = headers.get("Range") or headers.get("range") or ""
    if "items=" not in raw:
        return 0, max(0, total - 1)
    part = raw.split("items=", 1)[1].split(",", 1)[0]
    if "-" not in part:
        return 0, max(0, total - 1)
    a, b = part.split("-", 1)
    try:
        start = max(0, int(a))
        end = min(total - 1, int(b))
    except ValueError:
        start, end = 0, max(0, total - 1)
    return start, end


INDEX_CHILD_NAMES = (
    "all",
    "list",
    "index",
    "overview",
    "default",
    "browse",
    "items",
    "records",
)


def prefer_index_child(path: str, captured: set) -> str | None:
    norm = (path or "/").rstrip("/") or "/"
    prefix = norm + "/"
    immediate = []
    for raw in captured:
        child = (raw or "/").rstrip("/") or "/"
        if child.startswith(prefix) and "/" not in child[len(prefix):]:
            immediate.append(child)
    by_name = {c.rsplit("/", 1)[-1].lower(): c for c in immediate}
    for name in INDEX_CHILD_NAMES:
        hit = by_name.get(name)
        if hit:
            return hit
    return None


def looks_auth_gate(path: str) -> bool:
    segs = [s for s in (path or "/").lower().rstrip("/").split("/") if s]
    if not segs:
        return False
    if segs[-1] in {"login", "signin", "sign-in", "sign-up", "signup", "logout", "register"}:
        return True
    return "auth" in segs


class ThreadingHTTPServer(socketserver.ThreadingMixIn, socketserver.TCPServer):
    daemon_threads = True
    # False: Windows SO_REUSEADDR would let Capture B bind the same port as A.
    allow_reuse_address = False


class Handler(http.server.SimpleHTTPRequestHandler):
    extensions_map = {
        **getattr(http.server.SimpleHTTPRequestHandler, "extensions_map", {}),
        ".js": "application/javascript",
        ".mjs": "application/javascript",
        ".wasm": "application/wasm",
        ".json": "application/json",
        ".webp": "image/webp",
        ".avif": "image/avif",
        ".woff2": "font/woff2",
        ".woff": "font/woff",
        ".ttf": "font/ttf",
        ".otf": "font/otf",
        ".svg": "image/svg+xml",
        ".html": "text/html",
        ".htm": "text/html",
        ".mp3": "audio/mpeg",
        ".ogg": "audio/ogg",
        ".wav": "audio/wav",
        ".mp4": "video/mp4",
        ".webm": "video/webm",
        ".glb": "model/gltf-binary",
        ".gltf": "model/gltf+json",
        ".hdr": "application/octet-stream",
        ".ktx2": "image/ktx2",
        ".htc": "text/x-component",
    }

    def guess_type(self, path):
        """Serve extensionless captured HTML as text/html (not octet-stream downloads)."""
        ctype = super().guess_type(path)
        if ctype and ctype != "application/octet-stream":
            return ctype
        try:
            p = Path(path)
            if not p.is_file():
                return ctype or "application/octet-stream"
            head = p.read_bytes()[:256]
            low = head.lstrip().lower()
            if low.startswith(b"<") or b"<!doctype" in low or b"<html" in low:
                return "text/html; charset=utf-8"
            stripped = head.lstrip()
            if stripped.startswith(b"{") or stripped.startswith(b"["):
                return "application/json; charset=utf-8"
            if head.startswith(b"\x1aE\xdf\xa3"):
                return "video/webm"
            if head.startswith(b"\xff\xd8\xff"):
                return "image/jpeg"
            if head.startswith(b"\x89PNG"):
                return "image/png"
        except OSError:
            pass
        return ctype or "application/octet-stream"

    def send_head(self):
        """Serve files with Accept-Ranges so media players can issue Range GETs."""
        path = self.translate_path(self.path)
        if os.path.isdir(path):
            return super().send_head()
        ctype = self.guess_type(path)
        try:
            f = open(path, "rb")
        except OSError:
            if self._send_data_placeholder():
                return None
            self.send_error(404, "File not found")
            return None
        try:
            fs = os.fstat(f.fileno())
            size = fs.st_size
            start, end = 0, max(0, size - 1)
            status = 200
            rng = self.headers.get("Range") or self.headers.get("range") or ""
            if rng.lower().startswith("bytes=") and size > 0:
                spec = rng.split("=", 1)[1].split(",", 1)[0].strip()
                if "-" in spec:
                    left, right = spec.split("-", 1)
                    try:
                        if left and right:
                            start = int(left)
                            end = min(int(right), size - 1)
                        elif left:
                            start = int(left)
                            end = size - 1
                        elif right:
                            suffix = int(right)
                            start = max(0, size - suffix)
                            end = size - 1
                        else:
                            start, end = 0, size - 1
                    except ValueError:
                        start, end = 0, size - 1
                    if start < 0 or start >= size or start > end:
                        f.close()
                        self.send_error(416, "Requested range not satisfiable")
                        return None
                    status = 206
            length = end - start + 1 if size else 0
            self._wc_range_length = length
            if start:
                f.seek(start)
            self.send_response(status)
            self.send_header("Content-Type", ctype)
            self.send_header("Accept-Ranges", "bytes")
            self.send_header("Content-Length", str(length))
            if status == 206:
                self.send_header("Content-Range", f"bytes {start}-{end}/{size}")
            self.send_header("Last-Modified", self.date_time_string(fs.st_mtime))
            self.end_headers()
            return f
        except Exception:
            f.close()
            raise

    def copyfile(self, source, outputfile):
        remaining = getattr(self, "_wc_range_length", None)
        if remaining is None:
            return super().copyfile(source, outputfile)
        while remaining > 0:
            chunk = source.read(min(65536, remaining))
            if not chunk:
                break
            outputfile.write(chunk)
            remaining -= len(chunk)

    def end_headers(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, HEAD, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "*")
        self.send_header("Cache-Control", "no-cache")
        self.send_header("X-WebCopier-Local", "1")
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(204)
        self.end_headers()

    def do_POST(self):
        path_only = self.path.split("?", 1)[0].split("#", 1)[0].rstrip("/") or "/"
        lower = path_only.lower()

        # Dedicated handler for newsletter subscriptions linked to official company email
        if lower == "/api/forms/newsletter":
            try:
                length = int(self.headers.get("Content-Length", 0))
                req_body = self.rfile.read(length) if length else b"{}"
                payload = json.loads(req_body.decode("utf-8", errors="replace")) if req_body else {}
            except Exception:
                payload = {}
            email = str(payload.get("email", "")).strip().lower()

            subscribers_file = ROOT / "newsletter_subscribers.json"
            subscribers = []
            if subscribers_file.is_file():
                try:
                    subscribers = json.loads(subscribers_file.read_text(encoding="utf-8"))
                    if not isinstance(subscribers, list):
                        subscribers = []
                except Exception:
                    subscribers = []

            entry = {
                "email": email,
                "timestamp": datetime.datetime.now(datetime.timezone.utc).isoformat(),
                "official_recipient": "hello@houseofmeda.com",
                "source": "newsletter-modal"
            }
            if email and not any(isinstance(s, dict) and s.get("email") == email for s in subscribers):
                subscribers.append(entry)
                try:
                    subscribers_file.write_text(json.dumps(subscribers, indent=2, ensure_ascii=False), encoding="utf-8")
                except Exception:
                    pass

            res_data = {
                "ok": True,
                "success": True,
                "message": "Thank you! You are subscribed to House of Meda updates.",
                "officialEmail": "hello@houseofmeda.com",
                "subscriber": email
            }
            body = json.dumps(res_data, ensure_ascii=False).encode("utf-8")
            self.send_response(200)
            self.send_header("Content-Type", "application/json; charset=utf-8")
            self.send_header("Access-Control-Allow-Origin", "*")
            self.send_header("Content-Length", str(len(body)))
            self.end_headers()
            if self.command != "HEAD":
                self.wfile.write(body)
            return None
        # Replay captured POST/GraphQL bodies when available
        posts_path = ROOT / "captured_posts.json"
        if posts_path.is_file():
            try:
                length = int(self.headers.get("Content-Length", 0))
                req_body = self.rfile.read(length) if length else b""
                posts = json.loads(posts_path.read_text(encoding="utf-8"))
                req_text = req_body.decode("utf-8", errors="replace")
                for entry in posts.values():
                    if not isinstance(entry, dict):
                        continue
                    entry_path = urlparse(str(entry.get("url", ""))).path.rstrip("/") or "/"
                    if entry_path != path_only and entry_path != lower:
                        continue
                    if entry.get("request_body") and entry.get("request_body") != req_text:
                        continue
                    resp = entry.get("response_json")
                    if resp is None:
                        resp = json.loads(entry.get("response_text") or "{}")
                    body = json.dumps(resp, ensure_ascii=False).encode("utf-8")
                    self.send_response(int(entry.get("status") or 200))
                    self.send_header("Content-Type", "application/json; charset=utf-8")
                    self.send_header("Content-Length", str(len(body)))
                    self.end_headers()
                    if self.command != "HEAD":
                        self.wfile.write(body)
                    return None
            except (OSError, json.JSONDecodeError, ValueError):
                pass
        stub_paths = (
            "/healthcheck",
            "/health",
        )
        if lower in stub_paths or lower.endswith(".ashx") or "/api/" in lower or "/json/" in lower:
            body = b'{"ok":true}' if lower in stub_paths else b"{}"
            self.send_response(200)
            self.send_header("Content-Type", "application/json; charset=utf-8")
            self.send_header("Content-Length", str(len(body)))
            self.end_headers()
            if self.command != "HEAD":
                self.wfile.write(body)
            return None
        self.send_error(501, "Unsupported method ('POST')")
        return None

    def _load_api_routes(self):
        if not API_ROUTES_PATH.is_file():
            return {}
        try:
            data = json.loads(API_ROUTES_PATH.read_text(encoding="utf-8"))
            return data if isinstance(data, dict) else {}
        except (OSError, json.JSONDecodeError):
            return {}

    def _prefer_full_flight(self, rel, path_only: str):
        """Replace a tiny App Router refresh stub with a fuller same-path flight."""
        if not rel or not str(rel).lower().endswith(".htc"):
            return rel
        fp = ROOT / str(rel).lstrip("/").replace("\\", "/")
        try:
            data = fp.read_bytes()
        except OSError:
            return rel
        if not (b"[null,null],true" in data and len(data) < 1024):
            return rel
        best = None
        for key, other in self._load_api_routes().items():
            if key.split("?", 1)[0] != path_only:
                continue
            if not str(other).lower().endswith(".htc"):
                continue
            ofp = ROOT / str(other).lstrip("/").replace("\\", "/")
            try:
                if ofp.is_file() and ofp.stat().st_size > len(data):
                    sz = ofp.stat().st_size
                    if best is None or sz > best[0]:
                        best = (sz, other)
            except OSError:
                continue
        return best[1] if best else rel

    def _resolve_api_route(self, raw_path: str, routes: dict) -> str | None:
        path_only = raw_path.split("?", 1)[0]
        if raw_path in routes:
            return self._prefer_full_flight(routes[raw_path], path_only)
        query = raw_path.split("?", 1)[1] if "?" in raw_path else ""
        is_rsc = "_rsc=" in query or (self.headers.get("RSC") or "").strip() == "1"
        # Document navigations must not be shadowed by bare RSC aliases.
        if self._wants_html_document() and self._saved_page_for(path_only) is not None:
            return None
        if path_only in routes:
            # Never serve bare path → .htc for document navigations.
            if self._wants_html_document() and str(routes[path_only]).lower().endswith((".htc", ".bin")):
                pass
            else:
                return self._prefer_full_flight(routes[path_only], path_only)
        path_hits = []
        for key, rel in routes.items():
            if key.split("?", 1)[0] == path_only:
                if self._wants_html_document() and str(rel).lower().endswith((".htc", ".bin")):
                    continue
                path_hits.append(rel)
        if is_rsc:
            token = ""
            for part in query.split("&"):
                if part.lower().startswith("_rsc="):
                    token = part.split("=", 1)[-1]
                    break
            if token:
                for key, rel in routes.items():
                    kq = key.split("?", 1)[1] if "?" in key else ""
                    if key.split("?", 1)[0] == path_only and f"_rsc={token}" in kq:
                        return self._prefer_full_flight(rel, path_only)
            next_url = (self.headers.get("Next-Url") or self.headers.get("next-url") or "").strip()
            if next_url:
                try:
                    from urllib.parse import urlparse as _up
                    nu_path = _up(next_url).path or next_url.split("?", 1)[0] or "/"
                except Exception:
                    nu_path = next_url.split("?", 1)[0] or "/"
                named = []
                for key, rel in routes.items():
                    if key.split("?", 1)[0] == nu_path and str(rel).lower().endswith(".htc"):
                        named.append(rel)
                route_named = [r for r in named if "assets/misc" not in str(r).replace("\\", "/")]
                if len(route_named) == 1:
                    return self._prefer_full_flight(route_named[0], path_only)
                if len(named) == 1:
                    return self._prefer_full_flight(named[0], path_only)
            htc_hits = [rel for rel in path_hits if str(rel).lower().endswith(".htc")]
            unique = list(dict.fromkeys(htc_hits))
            if len(unique) == 1:
                return self._prefer_full_flight(unique[0], path_only)
            named = [r for r in unique if "assets/misc" not in str(r).replace("\\", "/")]
            if len(named) == 1:
                return self._prefer_full_flight(named[0], path_only)
            # Same-path flights that differ only by an `_rsc` cache token: serve
            # the largest captured body (full navigation vs smaller prefetch).
            existing = []
            for rel in unique:
                fp = ROOT / str(rel).lstrip("/").replace("\\", "/")
                try:
                    if fp.is_file():
                        existing.append((fp.stat().st_size, rel))
                except OSError:
                    continue
            if existing:
                existing.sort(reverse=True)
                return self._prefer_full_flight(existing[0][1], path_only)
            return None
        if path_hits:
            return self._prefer_full_flight(path_hits[0], path_only)
        return None

    def _wants_html_document(self) -> bool:
        """True for normal browser navigations; False for Next.js RSC / data fetches."""
        raw = self.path or ""
        path_only = unquote(raw.split("?", 1)[0].split("#", 1)[0])
        suffix = Path(path_only).suffix.lower()
        if suffix in {
            ".js", ".mjs", ".cjs", ".css", ".map", ".json", ".wasm", ".zip",
            ".png", ".jpg", ".jpeg", ".gif", ".webp", ".avif", ".svg", ".ico", ".bmp",
            ".woff", ".woff2", ".ttf", ".otf", ".eot",
            ".mp3", ".ogg", ".wav", ".mp4", ".webm",
            ".glb", ".gltf", ".hdr", ".ktx2", ".bin", ".htc", ".epak", ".dat", ".pbf", ".arrow",
        }:
            return False
        dest = (self.headers.get("Sec-Fetch-Dest") or "").strip().lower()
        mode = (self.headers.get("Sec-Fetch-Mode") or "").strip().lower()
        # App Router falls back to a full document load of the flight URL
        # (path still carries ``_rsc``). That navigation must receive HTML.
        if dest in ("document", "iframe", "frame", "nested-document"):
            return True
        if mode in ("navigate", "nested-navigate"):
            return True
        q = raw.split("?", 1)[1] if "?" in raw else ""
        if "_rsc=" in q or "&_rsc=" in q or q.startswith("_rsc"):
            return False
        if (self.headers.get("RSC") or "").strip() == "1":
            return False
        accept = (self.headers.get("Accept") or "").lower()
        if "text/x-component" in accept:
            return False
        if "application/json" in accept and "text/html" not in accept:
            return False
        if dest and dest not in ("document", "iframe", "frame", "nested-document"):
            return False
        if dest == "empty" and mode == "cors":
            return False
        return True

    def _is_top_level_browser_nav(self) -> bool:
        dest = (self.headers.get("Sec-Fetch-Dest") or "").strip().lower()
        if dest != "document":
            return False
        mode = (self.headers.get("Sec-Fetch-Mode") or "").strip().lower()
        if mode and mode not in ("navigate", "nested-navigate"):
            return False
        return True

    def _serve_replay_shell(self) -> bool:
        # Nested browsing contexts are a first-divergence. Apps that check
        # window.self !== window.top (embed guards, App Router error UI,
        # canvas editors) boot a different tree than the captured origin
        # document. Live-origin jumps stay confined by the offline shim
        # Navigation API intercept and Location mapping.
        return False

    def _tab_key(self, query: str) -> str:
        q = unquote((query or "").lstrip("?"))
        for part in q.split("&"):
            if part.lower().startswith("tab="):
                return unquote(part.split("=", 1)[-1]).lower().replace("-", "").replace("_", "")
        return ""

    def _file_size(self, fp):
        try:
            return fp.stat().st_size
        except OSError:
            return -1

    def _looks_same_snapshot(self, a, b) -> bool:
        if a is None or b is None or a == b:
            return a == b
        sa, sb = self._file_size(a), self._file_size(b)
        if sa <= 0 or sb <= 0:
            return False
        return abs(sa - sb) / float(max(sa, sb)) < 0.03

    def _distinct_tab_file(self, pages: dict, want_norm: str, query: str, hit):
        """If a ?tab= snapshot is a duplicate of the default page, use a unique sibling tab."""
        tab = self._tab_key(query)
        if not tab or hit is None:
            return hit
        default = None
        siblings = []
        for canon, local in pages.items():
            try:
                from urllib.parse import urlparse as _up
                parsed = _up(str(canon))
            except Exception:
                continue
            p_norm = (parsed.path or "/").rstrip("/") or "/"
            if p_norm != want_norm:
                continue
            cand = ROOT / str(local).lstrip("/").replace("\\", "/")
            if not cand.is_file():
                continue
            t2 = self._tab_key(parsed.query or "")
            if not parsed.query:
                default = cand
            elif t2:
                siblings.append((t2, cand))
        if default is None or not self._looks_same_snapshot(hit, default):
            return hit
        best = None
        best_len = 0
        for t2, cand in siblings:
            if t2 == tab or self._looks_same_snapshot(cand, default):
                continue
            if t2 in tab or tab in t2:
                if len(t2) > best_len:
                    best = cand
                    best_len = len(t2)
        return best or hit

    def _canonical_tab_location(self, path_only: str, query: str):
        """Redirect label-compound ?tab= URLs to the unique captured sibling query."""
        q = unquote((query or "").lstrip("?").split("#", 1)[0])
        if not q:
            return None
        report = self._load_report() or {}
        pages = report.get("pages") if isinstance(report, dict) else None
        if not isinstance(pages, dict):
            return None
        rel = unquote(path_only).lstrip("/")
        want_norm = ("/" + rel.rstrip("/")) if rel else "/"
        want_norm = want_norm.rstrip("/") or "/"
        hit = None
        default = None
        siblings = []
        tab = self._tab_key(q)
        for canon, local in pages.items():
            try:
                from urllib.parse import urlparse as _up
                parsed = _up(str(canon))
            except Exception:
                continue
            p_norm = (parsed.path or "/").rstrip("/") or "/"
            if p_norm != want_norm:
                continue
            cand = ROOT / str(local).lstrip("/").replace("\\", "/")
            if not cand.is_file():
                continue
            t2 = self._tab_key(parsed.query or "")
            if not parsed.query:
                default = cand
            elif t2:
                siblings.append((t2, cand, parsed.query or ""))
            if (parsed.query or "") == q:
                hit = cand
        if hit is None or default is None or not self._looks_same_snapshot(hit, default):
            return None
        best_q = None
        best_len = 0
        for t2, cand, qstr in siblings:
            if t2 == tab or self._looks_same_snapshot(cand, default):
                continue
            if t2 in tab or tab in t2:
                if len(t2) > best_len:
                    best_q = qstr
                    best_len = len(t2)
        if not best_q or best_q == q:
            return None
        loc = path_only if str(path_only).startswith("/") else "/" + str(path_only)
        return loc + "?" + best_q

    def _saved_page_for(self, path_only: str, query: str = ""):
        rel = unquote(path_only).lstrip("/")
        q = unquote((query or "").lstrip("?").split("#", 1)[0])
        if not rel:
            index = ROOT / "index.html"
            return index if index.is_file() else None
        # Prefer clone_report page map (canonical path → saved html, often index.html).
        report = self._load_report() or {}
        pages = report.get("pages") if isinstance(report, dict) else None
        if isinstance(pages, dict):
            want = "/" + rel.rstrip("/") if rel else "/"
            want_slash = want + "/"
            want_norm = want.rstrip("/") or "/"
            if q:
                for canon, local in pages.items():
                    try:
                        from urllib.parse import urlparse as _up
                        parsed = _up(str(canon))
                    except Exception:
                        continue
                    p_norm = (parsed.path or "/").rstrip("/") or "/"
                    if p_norm == want_norm and (parsed.query or "") == q:
                        cand = ROOT / str(local).lstrip("/").replace("\\", "/")
                        if cand.is_file() and cand.suffix.lower() in (".html", ".htm", ""):
                            if cand.name != "__root__" and cand.suffix.lower() not in (".htc", ".bin"):
                                return self._distinct_tab_file(pages, want_norm, q, cand)
            for canon, local in pages.items():
                try:
                    from urllib.parse import urlparse as _up

                    parsed = _up(str(canon))
                    p = parsed.path or "/"
                    pq = parsed.query or ""
                except Exception:
                    p = str(canon)
                    pq = ""
                if q and pq:
                    continue
                p_norm = p.rstrip("/") or "/"
                if p_norm == want or p == want or p == want_slash or p_norm == want_norm:
                    cand = ROOT / str(local).lstrip("/").replace("\\", "/")
                    if cand.is_file() and cand.suffix.lower() in (".html", ".htm", ""):
                        if cand.name != "__root__" and cand.suffix.lower() not in (".htc", ".bin"):
                            return cand
        candidates = [
            ROOT / "pages" / (rel + ".html"),
            ROOT / "pages" / rel / "index.html",
            ROOT / (rel + ".html"),
            ROOT / rel / "index.html",
            ROOT / "pages" / rel,
            ROOT / rel,
        ]
        for c in candidates:
            if not c.is_file():
                continue
            if c.name == "__root__" or c.suffix.lower() in (".htc", ".bin"):
                continue
            return c
        return None

    def _captured_page_paths(self):
        found = set()
        report = self._load_report() or {}
        pages = report.get("pages") if isinstance(report, dict) else None
        if isinstance(pages, dict):
            for canon in pages:
                try:
                    from urllib.parse import urlparse as _up
                    p = (_up(str(canon)).path or "/").rstrip("/") or "/"
                    found.add(p)
                except Exception:
                    continue
        pages_root = ROOT / "pages"
        if pages_root.is_dir():
            for f in pages_root.rglob("*.html"):
                try:
                    rel = "/" + f.relative_to(pages_root).with_suffix("").as_posix()
                except ValueError:
                    continue
                if rel.endswith("/index"):
                    rel = rel[: -len("/index")] or "/"
                found.add(rel.rstrip("/") or "/")
        return found

    def _root_path_captured(self):
        report = self._load_report() or {}
        pages = report.get("pages") if isinstance(report, dict) else None
        if not isinstance(pages, dict):
            return False
        for canon in pages:
            try:
                from urllib.parse import urlparse as _up
                p = (_up(str(canon)).path or "/").rstrip("/") or "/"
            except Exception:
                continue
            if looks_auth_gate(p):
                continue
            if p == "/":
                return True
        return False

    def _replay_entry_path(self):
        report = self._load_report() or {}
        pages = report.get("pages") if isinstance(report, dict) else None
        if not isinstance(pages, dict) or not pages:
            return "/"
        home = "/"
        for canon, rel in pages.items():
            rel_n = str(rel).replace("\\", "/").lstrip("/")
            if rel_n not in ("index.html", "index.htm"):
                continue
            try:
                from urllib.parse import urlparse as _up
                parsed = _up(str(canon))
                p = parsed.path or "/"
            except Exception:
                continue
            if looks_auth_gate(p):
                continue
            if p and p != "/":
                home = p
            break
        if home != "/":
            return home
        if self._root_path_captured():
            return "/"
        try:
            first = next(iter(pages))
            from urllib.parse import urlparse as _up
            p = _up(str(first)).path or "/"
            if p not in ("/", "") and "tab=" not in str(first).lower() and not looks_auth_gate(p):
                return p
        except Exception:
            pass
        scored = []
        paths = []
        for canon in pages:
            try:
                from urllib.parse import urlparse as _up
                p = _up(str(canon)).path or "/"
            except Exception:
                continue
            if p in ("/", "") or "tab=" in str(canon).lower():
                continue
            if looks_auth_gate(p):
                continue
            paths.append(p)
        for p in paths:
            kids = sum(1 for o in paths if o == p or o.startswith(p.rstrip("/") + "/"))
            scored.append((-kids, len(p), p))
        if scored:
            scored.sort()
            return scored[0][2]
        return "/"

    def _canonical_path_for_storage_html(self, path_only: str):
        rel = unquote(path_only or "").lstrip("/")
        if not rel.startswith("pages/"):
            return None
        report = self._load_report() or {}
        pages = report.get("pages") if isinstance(report, dict) else None
        if not isinstance(pages, dict):
            return None
        want = rel.replace("\\", "/")
        for canon, local in pages.items():
            loc = str(local).replace("\\", "/").lstrip("/")
            if loc != want:
                continue
            try:
                from urllib.parse import urlparse as _up
                parsed = _up(str(canon))
            except Exception:
                continue
            # Same-document UI states are stored as files, not HTTP routes.
            if parsed.fragment:
                return None
            public = parsed.path or "/"
            if parsed.query:
                public += "?" + parsed.query
            if public.rstrip("/") == path_only.rstrip("/"):
                return None
            return public
        return None

    def _redirect_storage_html_path(self, path_only: str) -> bool:
        loc = self._canonical_path_for_storage_html(path_only)
        if not loc:
            return False
        self.send_response(302)
        self.send_header("Location", loc)
        self.end_headers()
        return True

    def _redirect_replay_entry(self, path_only: str) -> bool:
        if path_only not in ("/", "/index.html", "/index.htm"):
            return False
        if self._root_path_captured():
            return False
        home = self._replay_entry_path()
        if not home or home in ("/", "/index.html", "/index.htm"):
            return False
        loc = home if str(home).startswith("/") else "/" + str(home)
        self.send_response(302)
        self.send_header("Location", loc)
        self.end_headers()
        return True

    def _html_is_unresolved_shell(self, fp):
        try:
            text = fp.read_text(encoding="utf-8", errors="replace")[:500000]
        except OSError:
            return True
        pulse = text.count("animate-pulse") + text.lower().count('aria-busy="true"')
        return pulse >= 8

    def _redirect_unresolved_index(self, path_only: str) -> bool:
        child = prefer_index_child(path_only, self._captured_page_paths())
        if not child or child == path_only:
            return False
        child_fp = self._saved_page_for(child)
        if child_fp is None:
            return False
        parent_fp = self._saved_page_for(path_only)
        if parent_fp is not None and not self._html_is_unresolved_shell(parent_fp):
            return False
        self.send_response(302)
        self.send_header("Location", child)
        self.end_headers()
        return True

    def _serve_merged_json_slice(self) -> bool:
        raw_path = unquote(self.path.split("#", 1)[0].split("?", 1)[0])
        if not raw_path.endswith("__merged.json"):
            return False
        fp = ROOT / raw_path.lstrip("/")
        if not fp.is_file():
            return False
        try:
            data = json.loads(fp.read_text(encoding="utf-8"))
        except (OSError, json.JSONDecodeError):
            return False
        if not isinstance(data, list):
            return False
        start, end = _parse_items_range(self.headers, len(data))
        chunk = data[start : end + 1]
        body = json.dumps(chunk, ensure_ascii=False).encode("utf-8")
        self.send_response(206 if (self.headers.get("Range") or self.headers.get("range")) else 200)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.send_header(
            "Content-Range",
            f"items {start}-{end}/{len(data)}",
        )
        self.end_headers()
        if self.command != "HEAD":
            self.wfile.write(body)
        return True

    def _has_captured_app_pages(self):
        report = self._load_report() or {}
        pages = report.get("pages") if isinstance(report, dict) else None
        if not isinstance(pages, dict) or not pages:
            return False
        for canon in pages:
            try:
                from urllib.parse import urlparse as _up
                p = _up(str(canon)).path or "/"
            except Exception:
                continue
            if not looks_auth_gate(p):
                return True
        return False

    def do_GET(self):

        # Route hero videos to assets/videos/
        for vname in ["hom_showcase_1.mp4", "hom_showcase_2.mp4", "hom_showcase_3.mp4", "hom_showcase_4.mp4"]:
            if self.path.endswith(vname):
                self.path = "/assets/videos/" + vname
                return super().do_GET()
        raw_early = self.path.split("#", 1)[0]
        path_early = raw_early.split("?", 1)[0].rstrip("/") or "/"
        if self._is_top_level_browser_nav() and self._wants_html_document():
            if self._redirect_storage_html_path(path_early):
                return None
            if self._redirect_replay_entry(path_early):
                return None
        if self._serve_replay_shell():
            return None
        if self._serve_merged_json_slice():
            return None
        raw_path = self.path.split("#", 1)[0]
        path_only = raw_path.split("?", 1)[0].rstrip("/") or "/"
        query = raw_path.split("?", 1)[1] if "?" in raw_path else ""
        if path_only == "/_next/image" or path_only.endswith("/_next/image"):
            qs = raw_path.split("?", 1)
            if len(qs) > 1:
                origs = parse_qs(qs[1]).get("url") or parse_qs(qs[1]).get("src") or []
                if origs:
                    orig = unquote(origs[0]).split("?", 1)[0]
                    if orig.startswith("/") and not orig.startswith("//"):
                        cand = ROOT / orig.lstrip("/")
                        if cand.is_file():
                            self.path = orig
                            return super().do_GET()
        if path_only == "/webcopier-saved-pages":
            return self.send_saved_pages_index()
        runtime = self._alias_runtime_script(path_only)
        if runtime:
            self.path = runtime
            return super().do_GET()
        # Prefer captured HTML pages for real navigations before api_routes RSC shadows.
        if self._wants_html_document():
            if looks_auth_gate(path_only) and self._has_captured_app_pages() and (ROOT / "index.html").is_file():
                self.path = "/index.html"
                return super().do_GET()
            if self._redirect_replay_entry(path_only):
                return None
            if self._redirect_storage_html_path(path_only):
                return None
            if not query and self._redirect_unresolved_index(path_only):
                return None
            tab_loc = self._canonical_tab_location(path_only, query)
            if tab_loc:
                self.send_response(302)
                self.send_header("Location", tab_loc)
                self.end_headers()
                return None
            page_file = self._saved_page_for(path_only, query)
            if page_file is not None:
                self.path = "/" + page_file.relative_to(ROOT).as_posix()
                return super().do_GET()
            if (ROOT / "index.html").is_file():
                self.path = "/index.html"
                return super().do_GET()
        routes = self._load_api_routes()
        hit = self._resolve_api_route(raw_path, routes)
        if hit and self._wants_html_document() and str(hit).lower().endswith((".htc", ".bin")):
            hit = None
        if hit:
            self.path = "/" + str(hit).lstrip("/")
            return super().do_GET()
        if self._alias_under_captured_page_dirs():
            return super().do_GET()
        if self._alias_captured_cdn_path():
            return super().do_GET()
        if self._send_media_placeholder():
            return None
        if self._send_data_placeholder():
            return None
        if self._send_nonhtml_miss():
            return None
        return super().do_GET()

    def _alias_under_captured_page_dirs(self):
        """Serve uniquely captured document-directory assets at a collapsed root path.

        Relative tags on ``/play`` are sometimes rewritten to ``/libs/x.js`` while
        the bytes were persisted at ``play/libs/x.js``. When that root path is
        missing and exactly one captured page directory contains the file, alias
        it instead of 404ing the boot graph.
        """
        raw_path = self.path.split("#", 1)[0]
        path_only = unquote(raw_path.split("?", 1)[0])
        rel = path_only.lstrip("/").replace("\\", "/")
        if not rel or ".." in rel.split("/"):
            return False
        suffix = Path("/" + rel).suffix.lower()
        if suffix not in {
            ".js", ".mjs", ".cjs", ".css", ".map", ".json", ".wasm",
            ".png", ".jpg", ".jpeg", ".gif", ".webp", ".avif", ".svg", ".ico", ".bmp",
            ".woff", ".woff2", ".ttf", ".otf", ".eot",
            ".mp3", ".ogg", ".wav", ".mp4", ".webm",
            ".glb", ".gltf", ".hdr", ".ktx2",
        }:
            return False
        if (ROOT / rel).is_file():
            return False
        report = self._load_report() or {}
        pages = report.get("pages") if isinstance(report, dict) else None
        prefixes = []
        if isinstance(pages, dict):
            for canon in pages:
                try:
                    from urllib.parse import urlparse as _up
                    path = (_up(str(canon)).path or "/").rstrip("/")
                except Exception:
                    continue
                if not path or path == "/":
                    continue
                prefixes.append(path.lstrip("/"))
        hits = []
        seen = set()
        for prefix in prefixes:
            cand = ROOT / prefix / rel
            try:
                cand.resolve().relative_to(ROOT.resolve())
            except (OSError, ValueError):
                continue
            key = str(cand)
            if key in seen:
                continue
            seen.add(key)
            if cand.is_file():
                hits.append(cand)
                if len(hits) > 1:
                    return False
        if len(hits) != 1:
            return False
        alias = hits[0].relative_to(ROOT).as_posix()
        self.path = "/" + alias
        return True

    def _alias_captured_cdn_path(self):
        raw_path = self.path.split("#", 1)[0]
        path_only = unquote(raw_path.split("?", 1)[0])
        rel = path_only.lstrip("/").replace("\\", "/")
        if not rel or ".." in rel.split("/"):
            return False
        if (ROOT / rel).is_file():
            return False
        if rel.startswith("cdn/"):
            return False
        cdn_root = ROOT / "cdn"
        if not cdn_root.is_dir():
            return False
        hits = []
        try:
            for host_dir in cdn_root.iterdir():
                if not host_dir.is_dir():
                    continue
                cand = host_dir.joinpath(*rel.split("/"))
                try:
                    cand.resolve().relative_to(cdn_root.resolve())
                except (OSError, ValueError):
                    continue
                if cand.is_file():
                    hits.append(cand)
                if len(hits) > 1:
                    return False
        except OSError:
            return False
        if len(hits) != 1:
            return False
        alias = hits[0].relative_to(ROOT).as_posix()
        self.path = "/" + alias
        return True

    def _alias_runtime_script(self, path_only: str):
        name = unquote(path_only).lstrip("/").replace("\\", "/")
        if name not in {
            "storage_restore.js",
            "blob-offline.js",
            "clipboard-replay.js",
            "ws-offline.js",
            "eni-offline.js",
            "eni-section-nav.js",
        }:
            return None
        if (ROOT / name).is_file():
            return None
        hidden = ROOT / ".webcopier" / name
        if hidden.is_file():
            return "/.webcopier/" + name
        return None

    def _send_data_placeholder(self):
        """Uncaptured JSON/WASM/RSC must not become the HTML 404 page."""
        raw_path = self.path.split("#", 1)[0]
        path_only = unquote(raw_path.split("?", 1)[0])
        suffix = Path(path_only).suffix.lower()
        bodies = {
            ".json": (200, "application/json; charset=utf-8", b"{}"),
            ".map": (200, "application/json; charset=utf-8", b"{}"),
            ".wasm": (404, "application/wasm", b""),
            ".bin": (404, "application/octet-stream", b""),
            ".epak": (404, "application/octet-stream", b""),
            ".dat": (404, "application/octet-stream", b""),
            ".pbf": (404, "application/octet-stream", b""),
            ".arrow": (404, "application/octet-stream", b""),
            ".npz": (404, "application/octet-stream", b""),
            ".htc": (404, "text/x-component; charset=utf-8", b""),
        }
        spec = bodies.get(suffix)
        if not spec:
            return False
        rel = path_only.lstrip("/").replace("\\", "/")
        if not rel or ".." in rel.split("/"):
            return False
        dest = ROOT / rel
        if dest.is_file():
            return False
        status, ctype, body = spec
        self.send_response(status)
        self.send_header("Content-Type", ctype)
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Cache-Control", "no-store")
        self.end_headers()
        if self.command != "HEAD":
            self.wfile.write(body)
        return True

    def _send_nonhtml_miss(self):
        """Data fetches must never receive the HTML 404 document.

        Only for paths that are not on disk. Existing JS/CSS/wasm must still
        reach the static file handler.
        """
        if self._wants_html_document():
            return False
        raw = self.path.split("#", 1)[0]
        path_only = unquote(raw.split("?", 1)[0])
        rel = path_only.lstrip("/").replace("\\", "/")
        if rel and ".." not in rel.split("/"):
            dest = ROOT / rel
            if dest.is_file() or dest.is_dir():
                return False
        query = raw.split("?", 1)[1] if "?" in raw else ""
        accept = (self.headers.get("Accept") or "").lower()
        is_rsc = (
            "_rsc=" in query
            or (self.headers.get("RSC") or "").strip() == "1"
            or "text/x-component" in accept
        )
        if is_rsc:
            status, ctype, body = (404, "text/x-component; charset=utf-8", b"")
        elif "application/json" in accept and "text/html" not in accept:
            status, ctype, body = (200, "application/json; charset=utf-8", b"{}")
        else:
            status, ctype, body = (404, "application/octet-stream", b"")
        self.send_response(status)
        self.send_header("Content-Type", ctype)
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Cache-Control", "no-store")
        self.end_headers()
        if self.command != "HEAD":
            self.wfile.write(body)
        return True

    def _send_media_placeholder(self):
        raw_path = self.path.split("#", 1)[0]
        path_only = unquote(raw_path.split("?", 1)[0])
        spec = _MEDIA_PLACEHOLDERS.get(Path(path_only).suffix.lower())
        if not spec:
            return False
        rel = path_only.lstrip("/").replace("\\", "/")
        if not rel or ".." in rel.split("/"):
            return False
        dest = ROOT / rel
        if dest.is_file():
            return False
        ctype, body = spec
        self.send_response(200)
        self.send_header("Content-Type", ctype)
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Cache-Control", "no-store")
        self.end_headers()
        if self.command != "HEAD":
            self.wfile.write(body)
        return True

    def _load_report(self):
        if not REPORT.is_file():
            return None
        try:
            return json.loads(REPORT.read_text(encoding="utf-8"))
        except (OSError, json.JSONDecodeError):
            return None

    def send_saved_pages_index(self):
        report = self._load_report()
        pages = (report or {}).get("pages") or {}
        origin = html.escape(str((report or {}).get("origin") or ""))
        count = int((report or {}).get("pages_saved") or len(pages) or 0)
        items = ""
        if isinstance(pages, dict):
            for url, href in pages.items():
                safe_href = html.escape(str(href).lstrip("/"))
                items += f'<li><a href="/{safe_href}">{html.escape(str(url))}</a> <code>{safe_href}</code></li>'
        body = f"""<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"/><title>Saved pages</title>
        <base href="/"/><style>body{font-family:system-ui;background:#0b0f14;color:#e8eef4;padding:1.5rem}
        a{color:#2ec4b6} code{color:#8aa0b2;font-size:.8rem} li{margin:.45rem 0}</style></head>
        <body><h1>Saved pages ({count})</h1><p>Origin: {origin}</p><ul>{items or "<li>None</li>"}</ul>
        <p><a href="/">← Home</a></p></body></html>""".encode("utf-8")
        self.send_response(200)
        self.send_header("Content-Type", "text/html; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        if self.command != "HEAD":
            self.wfile.write(body)
        return None

    def list_directory(self, path):
        """Never show raw directory listings — redirect to home."""
        self.send_response(302)
        self.send_header("Location", "/")
        self.end_headers()
        return None

    def send_unavailable(self):
        data = self._unavailable_bytes()
        if data is None:
            self.send_error(404, "Page not in this archive")
            return None
        self.send_response(200)
        self.send_header("Content-Type", "text/html; charset=utf-8")
        self.send_header("Content-Length", str(len(data)))
        self.end_headers()
        if self.command != "HEAD":
            self.wfile.write(data)
        return None

    def _unavailable_bytes(self):
        report = self._load_report()
        try:
            from webcopier_unavailable import build_unavailable_html
            return build_unavailable_html(report).encode("utf-8")
        except Exception:
            pass
        try:
            return UNAVAILABLE.read_bytes()
        except OSError:
            return None

    def _contained_in_root(self, candidate):
        try:
            Path(candidate).resolve().relative_to(ROOT.resolve())
            return True
        except Exception:
            return False

    def translate_path(self, path):
        """Map clean URLs to saved HTML; never expose directory listings."""
        rel = unquote(path.split("?", 1)[0].split("#", 1)[0]).lstrip("/")
        if ".." in Path(rel).parts:
            return str(ROOT / "index.html")
        suffix = Path(rel).suffix.lower() if rel else ""
        asset_exts = {
            ".js", ".mjs", ".cjs", ".css", ".map", ".json", ".wasm", ".zip",
            ".png", ".jpg", ".jpeg", ".gif", ".webp", ".avif", ".svg", ".ico", ".bmp",
            ".woff", ".woff2", ".ttf", ".otf", ".eot",
            ".mp3", ".ogg", ".wav", ".mp4", ".webm",
            ".glb", ".gltf", ".hdr", ".ktx2", ".bin", ".htc",
        }

        # Document-like paths: prefer pages/*.html before asset dirs / __root__ RSC files.
        if not suffix or suffix not in asset_exts:
            page_file = self._saved_page_for("/" + rel if rel else "/")
            if page_file is not None and self._contained_in_root(page_file):
                return str(page_file)

        translated = super().translate_path(path)
        p = Path(translated)
        if not self._contained_in_root(p):
            return str(ROOT / "index.html")

        if p.is_file():
            return translated

        if p.is_dir():
            index = p / "index.html"
            if index.is_file():
                return str(index)
            root_file = p / "__root__"
            alt_file = p / "_"
            # JS/CSS saved as a folder (Windows trailing-slash collision) must
            # still be served as the file, never as HTML (Unexpected token '<').
            if suffix in asset_exts:
                if root_file.is_file():
                    return str(root_file)
                if alt_file.is_file():
                    return str(alt_file)
            if root_file.is_file() and not self._wants_html_document():
                return str(root_file)
            # Asset folders without an index must not become "Directory listing"
            return str(ROOT / "index.html")

        if not rel:
            return str(ROOT / "index.html")

        candidates = [
            ROOT / rel,
            ROOT / (rel + ".html"),
            ROOT / rel / "index.html",
            ROOT / "pages" / rel,
            ROOT / "pages" / (rel + ".html"),
            ROOT / "pages" / rel / "index.html",
            ROOT / "assets" / rel,
            ROOT / "css" / rel,
            ROOT / "js" / rel,
            ROOT / "images" / rel,
            ROOT / "fonts" / rel,
        ]
        if rel.startswith("pages/"):
            candidates.append(ROOT / rel)
            candidates.append(ROOT / (rel + ".html"))

        for c in candidates:
            if c.is_file() and self._contained_in_root(c):
                return str(c)

        # Missing binary/text assets must NEVER resolve to HTML (causes Unexpected token '<').
        if suffix in asset_exts:
            return translated

        if suffix in (".html", ".htm"):
            return str(ROOT / "index.html")

        # Auth gates that were never captured → keep the archived homepage, not the upsell wall.
        if looks_auth_gate("/" + rel if rel else "/") and (ROOT / "index.html").is_file():
            return str(ROOT / "index.html")

        # Unknown HTML navigations
        return str(ROOT / "index.html")

        index = ROOT / "index.html"
        if SPA and index.is_file():
            return str(index)

        return translated

    def log_message(self, fmt, *args):
        sys.stderr.write("[%s] %s\n" % (self.log_date_time_string(), fmt % args))


def _port_free(host: str, port: int) -> bool:
    import socket
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        try:
            s.bind((host, port))
            return True
        except OSError:
            return False


def _pick_port(host: str, preferred: int) -> int:
    if preferred > 0 and _port_free(host, preferred):
        return preferred
    for p in range(max(preferred, 18765), max(preferred, 18765) + 200):
        if _port_free(host, p):
            return p
    raise SystemExit("No free local port found for WebCopier server.")


def main():
    parser = argparse.ArgumentParser(description="Serve cloned site")
    parser.add_argument("-p", "--port", type=int, default=PORT)
    parser.add_argument("--host", default="127.0.0.1", help="Bind address (default 127.0.0.1)")
    args = parser.parse_args()

    port = _pick_port(args.host, args.port)
    port_file = ROOT / ".webcopier-port"
    try:
        port_file.write_text(str(port), encoding="utf-8")
    except OSError:
        pass

    handler = functools.partial(Handler, directory=str(ROOT))
    with ThreadingHTTPServer((args.host, port), handler) as httpd:
        url = f"http://{args.host}:{port}/"
        print(f"WebCopier serving at {url}", flush=True)
        print(f"WEBCOPIER_READY {url}", flush=True)
        print(f"Root: {ROOT}", flush=True)
        print("Press Ctrl+C to stop.", flush=True)
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nStopped.", flush=True)
        finally:
            try:
                port_file.unlink(missing_ok=True)
            except OSError:
                pass


if __name__ == "__main__":
    main()
