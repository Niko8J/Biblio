// Service worker: funciona sin conexión. Cambia VERSION al actualizar el banco de preguntas.
const VERSION = "v11";
const CACHE = "test-biblio-" + VERSION;
const ASSETS = [
  "./", "index.html", "bank.js", "manifest.webmanifest",
  "icons/icon-192.png", "icons/icon-512.png", "icons/maskable-512.png",
  "icons/apple-touch-icon.png", "icons/favicon.png"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Caché primero, y actualiza en segundo plano (stale-while-revalidate)
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  if (new URL(e.request.url).pathname.includes("/audio/")) return; // los audios no pasan por la caché
  e.respondWith(
    caches.open(CACHE).then(async cache => {
      const hit = await cache.match(e.request, { ignoreSearch: true });
      const net = fetch(e.request).then(r => {
        if (r && r.ok && new URL(e.request.url).origin === location.origin) cache.put(e.request, r.clone());
        return r;
      }).catch(() => hit);
      return hit || net;
    })
  );
});
