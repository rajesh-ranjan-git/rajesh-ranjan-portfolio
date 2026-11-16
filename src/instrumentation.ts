import type { Instrumentation } from "next";
import logger from "@/services/logger/logger";

// One place for every unhandled server error (render, route handler, server
// action). Next.js already prints these in development, so only production
// writes the structured JSON line.
export const onRequestError: Instrumentation.onRequestError = (
  error,
  request,
  context,
) => {
  if (process.env.NODE_ENV !== "production") return;

  logger.error("Unhandled request error", {
    path: request.path,
    method: request.method,
    routePath: context.routePath,
    routeType: context.routeType,
    routerKind: context.routerKind,
    error,
  });
};
