import { MODE, LOG_LEVEL } from "@/constants/env.constants";
import { ansiConfig } from "@/config/banner.config";
import {
  AppErrorLogPayloadType,
  LogLevelType,
} from "@/types/types/logger.types";
import { getDateToShow } from "@/utils/date.utils";
import type AppError from "@/services/error/error.service";

const mode = (MODE ?? "development").toLowerCase();
const LOGGING_LEVEL = (LOG_LEVEL ?? "info").toLowerCase();

const LEVELS: Record<LogLevelType, number> = {
  error: 0,
  warn: 1,
  info: 2,
  debug: 3,
};

const shouldLog = (level: LogLevelType): boolean => {
  if (mode === "test") return false;

  return (LEVELS[level] ?? 99) <= (LEVELS[LOGGING_LEVEL as LogLevelType] ?? 2);
};

const isServer = typeof window === "undefined";

const css = {
  info: "color:#38bdf8;font-weight:bold;",
  log: "color:#22c55e;font-weight:bold;",
  debug: "color:#d8b4fe;font-weight:bold;",
  warn: "color:#f59e0b;font-weight:bold;",
  error: "color:#ef4444;font-weight:bold;",
};

const serverPrint = (
  method: "info" | "log" | "warn" | "error" | "debug",
  color: string,
  label: string,
  args: unknown[],
) => {
  console[method](`${color}${label}`, ...args);
};

const isAppErrorLogPayload = (
  value: unknown,
): value is AppErrorLogPayloadType => {
  return (
    !!value &&
    typeof value === "object" &&
    "appError" in value &&
    "metadata" in value
  );
};

const readPath = (source: unknown, path: string[]): unknown =>
  path.reduce<unknown>((value, key) => {
    if (!value || typeof value !== "object") return undefined;
    return (value as Record<string, unknown>)[key];
  }, source);

const readString = (source: unknown, path: string[]): string | undefined => {
  const value = readPath(source, path);
  return typeof value === "string" ? value : undefined;
};

const hasOwnEntries = (value: unknown): value is Record<string, unknown> =>
  !!value && typeof value === "object" && Object.keys(value).length > 0;

const browserPrint = (
  method: "info" | "log" | "warn" | "error" | "debug",
  style: string,
  label: string,
  args: unknown[],
) => {
  console[method](`%c${label}`, style, ...args);
};

const logger = {
  info: (...args: unknown[]) => {
    if (!shouldLog("info")) return;

    if (isServer) {
      serverPrint(
        "info",
        ansiConfig.blue,
        `⏰ [${getDateToShow(new Date())}] 📢 [ INFO ]`,
        args,
      );
    } else {
      browserPrint(
        "info",
        css.info,
        `⏰ [${getDateToShow(new Date())}] 📢 [ INFO ]`,
        args,
      );
    }
  },

  success: (...args: unknown[]) => {
    if (!shouldLog("info")) return;

    if (isServer) {
      serverPrint(
        "log",
        ansiConfig.green,
        `⏰ [${getDateToShow(new Date())}] ✅ [ SUCCESS ]`,
        args,
      );
    } else {
      browserPrint(
        "log",
        css.log,
        `⏰ [${getDateToShow(new Date())}] ✅ [ SUCCESS ]`,
        args,
      );
    }
  },

  log: (...args: unknown[]) => {
    if (!shouldLog("info")) return;

    if (isServer) {
      serverPrint(
        "log",
        ansiConfig.green,
        `⏰ [${getDateToShow(new Date())}] 📝 [ LOG ]`,
        args,
      );
    } else {
      browserPrint(
        "log",
        css.log,
        `⏰ [${getDateToShow(new Date())}] 📝 [ LOG ]`,
        args,
      );
    }
  },

  debug: (...args: unknown[]) => {
    if (!shouldLog("debug")) return;

    if (isServer) {
      serverPrint(
        "debug",
        ansiConfig.magenta,
        `⏰ [${getDateToShow(new Date())}] 🐞 [ DEBUG ]`,
        args,
      );
    } else {
      browserPrint(
        "log",
        css.debug,
        `⏰ [${getDateToShow(new Date())}] 🐞 [ DEBUG ]`,
        args,
      );
    }
  },

  warn: (...args: unknown[]) => {
    if (!shouldLog("warn")) return;

    if (isServer) {
      const payload = isAppErrorLogPayload(args[0]) ? args[0] : null;
      const incomingError = payload?.appError;
      const incomingErrorMetadata = payload?.metadata;

      if (incomingError && incomingErrorMetadata) {
        const method = readString(incomingErrorMetadata, [
          "metadata",
          "method",
        ]);
        const statusCode = incomingError.statusCode;
        const status = incomingError.name;
        const code =
          incomingError.code ??
          readString(incomingErrorMetadata, ["appError", "code"]);
        const nestedDetails = readPath(incomingErrorMetadata, ["details"]);
        const details = hasOwnEntries(incomingError.details)
          ? incomingError.details
          : nestedDetails;
        const nestedRequestMetadata = readPath(incomingErrorMetadata, [
          "metadata",
        ]);

        const argsToPrint = [
          method ? `[ ${method} ]` : null,
          statusCode ? `( ${statusCode} )` : null,
          status ? `[ ${status} ]` : null,
          code ? `[ ${code} ]` : null,
          incomingError.message ?? "An unknown warning has occurred!",
          hasOwnEntries(details)
            ? `\nError Details: ${JSON.stringify(details, null, 2)}`
            : null,
          hasOwnEntries(incomingError.metadata) ||
          hasOwnEntries(nestedRequestMetadata)
            ? `\nError Metadata: ${JSON.stringify(
                {
                  path:
                    incomingError.metadata.path ||
                    readString(nestedRequestMetadata, ["path"]),
                  requestId:
                    incomingError.metadata.requestId ||
                    readString(nestedRequestMetadata, ["requestId"]),
                  isOperational:
                    incomingError.metadata.isOperational ||
                    readPath(nestedRequestMetadata, ["isOperational"]),
                },
                null,
                2,
              )}`
            : null,
        ];

        serverPrint(
          "warn",
          ansiConfig.yellow,
          `⏰ [${getDateToShow(new Date())}] 🚨 [ WARNING ]`,
          argsToPrint.filter((v) => v != null),
        );

        return;
      }

      serverPrint(
        "warn",
        ansiConfig.yellow,
        `⏰ [${getDateToShow(new Date())}] 🚨 [ WARNING ]`,
        args,
      );
    } else {
      browserPrint(
        "warn",
        css.warn,
        `⏰ [${getDateToShow(new Date())}] 🚨 [ WARNING ]`,
        args,
      );
    }
  },

  error: (...args: unknown[]) => {
    if (!shouldLog("error")) return;

    if (isServer) {
      const payload = isAppErrorLogPayload(args[0]) ? args[0] : null;
      const incomingError = payload?.appError;
      const incomingErrorMetadata = payload?.metadata;

      if (incomingError && incomingErrorMetadata) {
        const method = readString(incomingErrorMetadata, [
          "metadata",
          "method",
        ]);
        const statusCode = incomingError.statusCode;
        const status = incomingError.name;
        const code =
          incomingError.code ??
          readString(incomingErrorMetadata, ["appError", "code"]);
        const nestedDetails = readPath(incomingErrorMetadata, ["details"]);
        const details = hasOwnEntries(incomingError.details)
          ? incomingError.details
          : nestedDetails;
        const nestedRequestMetadata = readPath(incomingErrorMetadata, [
          "metadata",
        ]);

        const argsToPrint = [
          method ? `[ ${method} ]` : null,
          statusCode ? `( ${statusCode} )` : null,
          status ? `[ ${status} ]` : null,
          code ? `[ ${code} ]` : null,
          incomingError.message ?? "An unknown error has occurred!",
          hasOwnEntries(details)
            ? `\nError Details: ${JSON.stringify(details, null, 2)}`
            : null,
          hasOwnEntries(incomingError.metadata) ||
          hasOwnEntries(nestedRequestMetadata)
            ? `\nError Metadata: ${JSON.stringify(
                {
                  path:
                    incomingError.metadata.path ||
                    readString(nestedRequestMetadata, ["path"]),
                  requestId:
                    incomingError.metadata.requestId ||
                    readString(nestedRequestMetadata, ["requestId"]),
                  isOperational:
                    incomingError.metadata.isOperational ||
                    readPath(nestedRequestMetadata, ["isOperational"]),
                },
                null,
                2,
              )}`
            : null,
        ];

        serverPrint(
          "error",
          ansiConfig.red,
          `⏰ [${getDateToShow(new Date())}] ❌ [ ERROR ]`,
          argsToPrint.filter((v) => v != null),
        );

        return;
      }

      serverPrint(
        "error",
        ansiConfig.red,
        `⏰ [${getDateToShow(new Date())}] ❌ [ ERROR ]`,
        args,
      );
    } else {
      browserPrint(
        "error",
        css.error,
        `⏰ [${getDateToShow(new Date())}] ❌ [ ERROR ]`,
        args,
      );
    }
  },

  logAppError(appError: AppError, metadata: Record<string, unknown>) {
    const level: "error" | "warn" =
      (appError.statusCode ||
        (metadata.statusCode as number | undefined) ||
        0) >= 500
        ? "error"
        : "warn";

    this[level]({ appError, metadata });
  },

  config: Object.freeze({ mode, LOGGING_LEVEL }),
};

if (!globalThis.logger) {
  globalThis.logger = logger;
}

export default logger;

// NOTE: Use logger directly as it is available with global variable
