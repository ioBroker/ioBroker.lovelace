console.debug('Service worker disabled in development');

self.addEventListener('install', (event) => {
  self.skipWaiting();
});
