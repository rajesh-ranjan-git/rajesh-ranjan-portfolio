import type AppError from "@/services/error/error.service";

export type LogLevelType = "error" | "warn" | "info" | "debug";

export type LogEntryType = {
  timestamp: string;
  level: LogLevelType;
  mode: string;
  message: string;
  code: string;
  statusCode?: number;
  details?: unknown;
  path?: string | null;
  requestId?: string | null;
  isOperational?: boolean;
  stack?: string;
  originalStack?: string;
  meta?: unknown;
};

export type LogContextType = {
  code?: string;
  statusCode?: number;
  details?: unknown;
  path?: string | null;
  requestId?: string | null;
  isOperational?: boolean;
  stack?: string;
  originalStack?: string;
  meta?: unknown;
};

export type AppErrorLogPayloadType = {
  appError: AppError;
  metadata: Record<string, unknown>;
};
