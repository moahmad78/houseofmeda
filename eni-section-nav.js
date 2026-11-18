/* House of Meda — Section Navigation */
(function() {
  const NAV = [];
  if (!NAV || !NAV.length) return;
  const keepHint = /eni-offline|eni-section|storage_restore|blob-offline|ws-offline|clipboard/;
  function pageHasAppJs() {
    return Array.prototype.some.call(document.scripts || [], function (s) {
      const src = s.src || "";
      return src && !keepHint.test(src);
    });
  }

  const norm = (s) => String(s || "").trim().split("\n")[0].replace(/\s+/g, " ");

  function parentLabel(el) {
    let p = el.parentElement;
    const self = norm(el.innerText || el.getAttribute("aria-label") || "");
    for (let d = 0; d < 10 && p; d++) {
      const btn = p.querySelector(":scope > button, :scope > a, :scope > [role=button]");
      if (btn && btn !== el && !el.contains(btn)) {
        const t = norm(btn.innerText || btn.getAttribute("aria-label") || "");
        if (t && t !== self) return t;
      }
      p = p.parentElement;
    }
    return "";
  }

  function find(el) {
    const raw = (el && (el.innerText || (el.getAttribute && el.getAttribute("aria-label")))) || "";
    const t = norm(raw);
    if (!t) return null;
    const parent = el ? parentLabel(el) : "";
    if (parent) {
      for (const n of NAV) {
        if (norm(n.text) !== parent) continue;
        const kids = n.children || [];
        for (let i = 0; i < kids.length; i++) {
          if (norm(kids[i].text) === t) return kids[i];
        }
        if (norm(n.text) === t) return n;
      }
    }
    for (const n of NAV) {
      if (norm(n.text) === t) return n;
    }
    return null;
  }

  let drop = null;
  function hide() {
    if (drop && drop.parentNode) drop.parentNode.removeChild(drop);
    drop = null;
  }

  function show(anchor, children) {
    hide();
    const r = anchor.getBoundingClientRect();
    drop = document.createElement("div");
    drop.className = "wc-section-drop";
    drop.setAttribute("role", "menu");
    drop.style.cssText = [
      "position:fixed",
      "z-index:2147483646",
      "min-width:220px",
      "max-height:70vh",
      "overflow:auto",
      "background:#1f1f28",
      "color:#f4f4f5",
      "border:1px solid rgba(255,255,255,.12)",
      "border-radius:8px",
      "padding:6px 0",
      "box-shadow:0 12px 32px rgba(0,0,0,.4)",
      "font: 14px/1.4 system-ui, sans-serif"
    ].join(";");
    const rtl = getComputedStyle(document.documentElement).direction === "rtl"
      || getComputedStyle(anchor).direction === "rtl";
    drop.style.top = Math.round(r.bottom + 4) + "px";
    if (rtl) drop.style.right = Math.round(window.innerWidth - r.right) + "px";
    else drop.style.left = Math.round(r.left) + "px";
    for (const c of children) {
      const a = document.createElement("a");
      a.href = c.href;
      a.textContent = c.text;
      a.setAttribute("role", "menuitem");
      a.style.cssText = "display:block;color:#f4f4f5;text-decoration:none;padding:8px 16px;white-space:nowrap";
      a.addEventListener("mouseenter", () => { a.style.background = "rgba(255,255,255,.08)"; });
      a.addEventListener("mouseleave", () => { a.style.background = "transparent"; });
      drop.appendChild(a);
    }
    document.body.appendChild(drop);
  }

  document.addEventListener("click", function(ev) {
    if (pageHasAppJs()) return;
    const t = ev.target;
    if (!(t instanceof Element)) return;
    if (drop && drop.contains(t)) return;
    if (t.closest("input, textarea, select, option, [contenteditable], [role=textbox], [role=slider], [role=tab], [role=combobox], [role=listbox], [role=option], [aria-haspopup='listbox'], [data-radix-select-trigger]")) {
      hide();
      return;
    }
    const el = t.closest("a, button, [role=menuitem], .o_nav_entry, .dropdown-toggle");
    if (!el || el.closest(".o_menu_systray, .o_user_menu, .o_menu_toggle")) {
      hide();
      return;
    }
    if (el.closest("header") && !el.closest("aside, [data-sidebar], [class*='sidebar' i], .o_menu_sections, [role=menubar]")) {
      hide();
      return;
    }
    const inMain = !!(el.closest("main, [role=main], #main-content"));
    const inChrome = !!(el.closest(
      "aside, [data-sidebar], [class*='sidebar' i], .o_menu_sections, .o_main_navbar, [role=menubar]"
    ));
    if (inMain && !inChrome) {
      hide();
      return;
    }
    if (!inChrome) {
      hide();
      return;
    }
    const item = find(el);
    if (!item) {
      hide();
      return;
    }
    const kids = item.children || [];
    if (kids.length) {
      const samePage = kids.every(function (c) {
        const a = String(item.href || "").split("?")[0].replace(/\/$/, "");
        const b = String(c.href || "").split("?")[0].replace(/\/$/, "");
        return a && b && a === b;
      });
      if (samePage) {
        ev.preventDefault();
        ev.stopPropagation();
        if (item.href) location.href = item.href;
        return;
      }
      ev.preventDefault();
      ev.stopPropagation();
      show(el, kids);
      return;
    }
    if (item.href) {
      ev.preventDefault();
      ev.stopPropagation();
      location.href = item.href;
    }
  }, true);

  document.addEventListener("keydown", function(ev) {
    if (ev.key === "Escape") hide();
  });
})();
