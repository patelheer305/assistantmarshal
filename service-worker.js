const CACHE_NAME = "marshal-cache-v1";

const urlsToCache = [
  "/Assistant/",
  "/Assistant/index.html",
  "/Assistant/style.css",
  "/Assistant/script.js"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
