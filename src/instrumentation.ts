import type { Instrumentation } from "next";
import logger from "@/services/logger/logger";

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
