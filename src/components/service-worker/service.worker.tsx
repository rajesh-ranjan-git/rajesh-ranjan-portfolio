"use client";

import { useEffect } from "react";
import { MODE } from "@/constants/env.constants";
import logger from "@/services/logger/logger";

const unregisterStaleServiceWorkers = async () => {
  const registrations = await navigator.serviceWorker.getRegistrations();
  await Promise.all(
    registrations.map((registration) => registration.unregister()),
  );

  if ("caches" in window) {
    const cacheKeys = await caches.keys();
    await Promise.all(cacheKeys.map((key) => caches.delete(key)));
  }
};

const ServiceWorker = () => {
  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;

    if (MODE !== "production") {
      unregisterStaleServiceWorkers().catch((err) =>
        logger.error("Unable to clear stale Service Worker/cache:", err),
      );
      return;
    }

    navigator.serviceWorker
      .register("/service-worker/service-worker.js", {
        scope: "/",
      })
      .then(() => logger.info("Service Worker registered successfully!"))
      .catch((err) => logger.error("Unable to register Service Worker:", err));
  }, []);

  return null;
};

export default ServiceWorker;
