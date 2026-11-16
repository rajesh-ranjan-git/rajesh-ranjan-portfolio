import { NextResponse } from "next/server";

// Rendered once at build time, so the cache version changes with every deploy.
export const dynamic = "force-static";

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

  const isHashedBuildAsset = url.pathname.startsWith(\`/_next/static/\`);
  const isPublicAsset =
    url.pathname.startsWith(\`/assets/\`) ||
    url.pathname.startsWith(\`/manifest/\`);

  if (!isHashedBuildAsset && !isPublicAsset) return;

  const fetchAndCache = () =>
    fetch(request).then((response) => {
      if (response.ok) {
        const responseClone = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(request, responseClone));
      }

      return response;
    });

  // Build assets have content hashes in their names, so cache-first is safe.
  // Public assets keep the same URL when replaced, so serve the cached copy
  // and refresh it in the background (stale-while-revalidate).
  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      if (!cachedResponse) return fetchAndCache();

      if (isPublicAsset) {
        event.waitUntil(fetchAndCache().catch(() => undefined));
      }

      return cachedResponse;
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
