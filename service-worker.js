const CACHE_NAME = 'bagagli-v1';
const urlsToCache = [
  './index.html',
  './manifest.json'
];

// Installazione del Service Worker
self.addEventListener('install', event => {
  console.log('Service Worker: Installazione in corso...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Service Worker: Cache aperta');
        return cache.addAll(urlsToCache);
      })
      .then(() => self.skipWaiting())
  );
});

// Attivazione del Service Worker
self.addEventListener('activate', event => {
  console.log('Service Worker: Attivato');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Service Worker: Rimozione cache vecchia', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Intercetta le richieste di rete
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Se la risorsa è in cache, restituiscila
        if (response) {
          return response;
        }

        // Altrimenti, prova a scaricarla dalla rete
        return fetch(event.request).then(response => {
          // Controlla se la risposta è valida
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          // Clona la risposta
          const responseToCache = response.clone();

          // Aggiungi alla cache
          caches.open(CACHE_NAME)
            .then(cache => {
              cache.put(event.request, responseToCache);
            });

          return response;
        }).catch(() => {
          // Se la rete non è disponibile e la risorsa non è in cache
          // Restituisci una pagina offline di fallback se vuoi
          return caches.match('./index.html');
        });
      })
  );
});
