self.addEventListener("install", event => {
  console.log("Service Worker installed");
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  console.log("Service Worker activated");
  self.clients.claim();
});

// Basic fetch handler (online first)
self.addEventListener("fetch", event => {
  event.respondWith(fetch(event.request));
});
