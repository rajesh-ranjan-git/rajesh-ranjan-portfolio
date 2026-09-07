import { NextResponse } from "next/server";

const CACHE_VERSION = String(Date.now());

const SERVICE_WORKER_SCRIPT = `const CACHE_NAME = "portfolio-static-${CACHE_VERSION}";
const PRECACHE_ASSETS = [
  \`/manifest/manifest.json\`,
  \`/assets/favicon/favicon.ico\`,
];

self.addEventListener("install", (event) => {
  self.skipWaiting();

  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE_ASSETS);
    }),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    Promise.all([
      self.clients.claim(),

      caches
        .keys()
        .then((cacheNames) =>
          Promise.all(
            cacheNames
              .filter((name) => name !== CACHE_NAME)
              .map((name) => caches.delete(name)),
          ),
        ),
    ]),
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;

  if (request.method !== "GET") return;

  const url = new URL(request.url);

  const isStaticAsset =
    url.pathname.startsWith(\`/_next/static/\`) ||
    url.pathname.startsWith(\`/assets/\`) ||
    url.pathname.startsWith(\`/manifest/\`);

  if (!isStaticAsset) return;

  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(request).then((response) => {
        if (!response.ok) {
          return response;
        }

        const responseClone = response.clone();

        caches.open(CACHE_NAME).then((cache) => {
          cache.put(request, responseClone);
        });

        return response;
      });
    }),
  );
});
`;

export function GET() {
  return new NextResponse(SERVICE_WORKER_SCRIPT, {
    headers: {
      "Content-Type": "text/javascript; charset=utf-8",
      "Cache-Control": "no-cache",
      "Service-Worker-Allowed": "/",
    },
  });
}
