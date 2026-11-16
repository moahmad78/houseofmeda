/* WebCopier replay SW stub: present so capture HTML HEAD checks succeed.
   Does not intercept fetches — replay goes through the HTTP server. */
self.addEventListener('install', function (e) { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
