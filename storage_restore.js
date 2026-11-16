
/* WebCopier storage restore */
(function() {
  const DUMP = {"localStorage": {"efl-uuid": "f2c2dbe7-3698-476e-812e-b2537f6c3acf", "yoo-newsletter-modal-shown-day-v1": "2026-11-16", "nuxt-color-mode": "light"}, "sessionStorage": {}, "indexedDB": {"firebase-heartbeat-database": {"version": 1, "stores": {"firebase-heartbeat-store": [{"lastSentHeartbeatDate": "2026-11-16", "heartbeats": []}]}, "keyPaths": {"firebase-heartbeat-store": null}, "indexes": {"firebase-heartbeat-store": []}, "keys": {"firebase-heartbeat-store": ["[DEFAULT]!1:1098993766011:web:1fbb8333faac3a08e11cde"]}}, "firebase-installations-database": {"version": 1, "stores": {"firebase-installations-store": [{"fid": "eH7cbTeJoml0d5Hl6EYiQw", "registrationStatus": 2, "refreshToken": "3_AS3qfwJZRU-NtraGwtp_8pEU0mkUTgskUnmmHSNAg8kwkyQUNMR1T4Ffe20OCb22Ed8itGGZDGv2IaWyOW0XIYZoGLHOqlKMxZVC90bDJYHeWfc", "authToken": {"token": "eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjE6MTA5ODk5Mzc2NjAxMTp3ZWI6MWZiYjgzMzNmYWFjM2EwOGUxMWNkZSIsImV4cCI6MTc5NTQwNjQyMSwiZmlkIjoiZUg3Y2JUZUpvbWwwZDVIbDZFWWlRdyIsInByb2plY3ROdW1iZXIiOjEwOTg5OTM3NjYwMTF9.AB2LPV8wRQIhAJXOIN-iyo4JgtZ0KhAtOGq3dsKCWap4PWfRQcJgUFGsAiALzjvXVquoE2knvaPfyNGTH875FU5SsWTUGzjXOR1jhg", "requestStatus": 2, "expiresIn": 604800000, "creationTime": 1794801622302}}]}, "keyPaths": {"firebase-installations-store": null}, "indexes": {"firebase-installations-store": []}, "keys": {"firebase-installations-store": ["[DEFAULT]!1:1098993766011:web:1fbb8333faac3a08e11cde"]}}}, "limitations": []};
  const USER_THEME = "wc_user_theme";
  window.__wcStorageReady = window.__wcStorageReady || Promise.resolve();
  function patchPersistTheme(raw, val) {
    if (!raw || raw.indexOf("theme") === -1) return raw;
    return raw
      .replace(/"theme"\s*:\s*"(light|dark|system)"/g, '"theme":"' + val + '"')
      .replace(/\\"theme\\":\\"(light|dark|system)\\"/g, '\\"theme\\":\\"' + val + '\\"');
  }
  function applyTheme(val) {
    if (!val || (val !== "dark" && val !== "light")) return;
    try {
      const root = document.documentElement;
      root.classList.toggle("dark", val === "dark");
      root.setAttribute("data-theme", val);
      root.style.colorScheme = val;
    } catch (e) {}
  }
  function b64ToBytes(b64) {
    const bin = atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) arr[i] = bin.charCodeAt(i);
    return arr;
  }
  function reviveBlobValue(row) {
    if (!row || typeof row !== "object") return row;
    if (row.__type === "Blob" && row.b64) {
      return new Blob([b64ToBytes(row.b64)], { type: row.mime || "application/octet-stream" });
    }
    if (row.__type === "ArrayBuffer" && row.b64) {
      return b64ToBytes(row.b64).buffer;
    }
    if (Array.isArray(row)) return row.map(reviveBlobValue);
    const out = {};
    for (const k in row) out[k] = reviveBlobValue(row[k]);
    return out;
  }
  function rewriteBlobStrings(val) {
    if (typeof val === "string" && val.indexOf("blob:") !== -1) {
      try {
        const reg = window.__eniBlobRegistry;
        if (reg && typeof reg.lookup === "function") {
          return val.replace(/blob:https?:\/\/[^\s"'\\)]+/g, function(u) {
            return reg.lookup(u) || u;
          });
        }
      } catch (e) {}
      return val;
    }
    if (Array.isArray(val)) return val.map(rewriteBlobStrings);
    if (val && typeof val === "object" && !val.__type) {
      const out = {};
      for (const k in val) out[k] = rewriteBlobStrings(val[k]);
      return out;
    }
    return val;
  }
  try {
    const ls = DUMP.localStorage || {};
    for (const k in ls) {
      localStorage.setItem(k, rewriteBlobStrings(ls[k]));
    }
    const chosen = localStorage.getItem(USER_THEME);
    if (chosen === "dark" || chosen === "light") {
      localStorage.setItem("theme", chosen);
      const persist = localStorage.getItem("persist:root");
      if (persist) localStorage.setItem("persist:root", patchPersistTheme(persist, chosen));
      applyTheme(chosen);
    } else {
      applyTheme(localStorage.getItem("theme") || "");
    }
  } catch (e) {}
  try {
    const ss = DUMP.sessionStorage || {};
    for (const k in ss) {
      sessionStorage.setItem(k, rewriteBlobStrings(ss[k]));
    }
  } catch (e) {}
  function createStore(db, storeName, keyPaths) {
    if (db.objectStoreNames.contains(storeName)) return db.transaction(storeName, "readwrite").objectStore(storeName);
    const kp = keyPaths[storeName];
    const opts = kp ? { keyPath: kp } : { autoIncrement: true };
    return db.createObjectStore(storeName, opts);
  }
  function applyIndexes(store, specs) {
    for (const spec of specs || []) {
      if (!spec || !spec.name || store.indexNames.contains(spec.name)) continue;
      try {
        store.createIndex(spec.name, spec.keyPath || spec.name, {
          unique: !!spec.unique,
          multiEntry: !!spec.multiEntry,
        });
      } catch (e) {}
    }
  }
  try {
    const idbs = DUMP.indexedDB || {};
    const jobs = [];
    for (const dbName in idbs) {
      jobs.push(new Promise((resolve) => {
        const spec = idbs[dbName] || {};
        const ver = spec.version || 1;
        const req = indexedDB.open(dbName, ver);
        req.onupgradeneeded = function(ev) {
          const db = ev.target.result;
          const stores = spec.stores || {};
          const keyPaths = spec.keyPaths || {};
          const indexes = spec.indexes || {};
          for (const storeName in stores) {
            let store;
            if (!db.objectStoreNames.contains(storeName)) {
              const kp = keyPaths[storeName];
              const opts = kp ? { keyPath: kp } : { autoIncrement: true };
              store = db.createObjectStore(storeName, opts);
            } else {
              store = ev.target.transaction.objectStore(storeName);
            }
            applyIndexes(store, indexes[storeName]);
          }
        };
        req.onerror = function() { resolve(null); };
        req.onsuccess = function(ev) {
          const db = ev.target.result;
          const stores = spec.stores || {};
          const names = Object.keys(stores).filter((n) => db.objectStoreNames.contains(n));
          if (!names.length) {
            try { db.close(); } catch (e) {}
            resolve(null);
            return;
          }
          try {
            const tx = db.transaction(names, "readwrite");
            tx.oncomplete = function() { try { db.close(); } catch (e) {} resolve(null); };
            tx.onerror = function() { try { db.close(); } catch (e) {} resolve(null); };
            for (const storeName of names) {
              const store = tx.objectStore(storeName);
              const rows = stores[storeName] || [];
              const keys = (spec.keys && spec.keys[storeName]) || [];
              for (let i = 0; i < rows.length; i++) {
                const row = reviveBlobValue(rewriteBlobStrings(rows[i]));
                if (row && row.__type && !row.b64) continue;
                try {
                  if (keys[i] != null && !store.keyPath) store.put(row, keys[i]);
                  else store.put(row);
                } catch (e) {}
              }
            }
          } catch (e) {
            try { db.close(); } catch (err) {}
            resolve(null);
          }
        };
      }));
    }
    window.__wcStorageReady = Promise.all(jobs).catch(function() {});
  } catch (e) {
    window.__wcStorageReady = Promise.resolve();
  }
})();
