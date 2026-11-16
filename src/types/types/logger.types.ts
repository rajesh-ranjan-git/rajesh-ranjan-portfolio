import type AppError from "@/services/error/error.service";

export type LogLevelType = "error" | "warn" | "info" | "debug";

export type AppErrorLogPayloadType = {
  appError: AppError;
  metadata: Record<string, unknown>;
};
