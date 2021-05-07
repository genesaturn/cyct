var cacheName = 'my-site-cache-v1';
var urlsToCache = [
    'app/style.css',
    'app/style_wuling.css',
    'app/app.js'
];

self.addEventListener('install', function (event) {
    // Perform install steps
    event.waitUntil(
        caches.open(cacheName)
            .then(function (cache) {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          // Cache hit - return response
          if (response) {
            return response;
          }
          return fetch(event.request);
        }
      )
    );
  });