const CACHE_NAME = 'bagagli-v2';
const urlsToCache = [
  './index.html',
  './categorie.js',
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
// Strategia "prima la rete, poi la cache":
//  - se sei ONLINE prendi sempre la versione più aggiornata dal sito
//    (e la salvi in cache per la prossima volta);
//  - se sei OFFLINE usi l'ultima versione salvata in cache.
// Vantaggio: quando modifichi categorie.js (o index.html) le novità
// arrivano da sole, senza dover cambiare il numero di versione qui sopra.
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Risposta valida: aggiorno la copia in cache
        if (response && response.status === 200 && response.type === 'basic') {
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseToCache);
          });
        }
        return response;
      })
      .catch(() => {
        // Rete non disponibile: uso la cache, con index.html come fallback
        return caches.match(event.request).then(cached => {
          return cached || caches.match('./index.html');
        });
      })
  );
});
