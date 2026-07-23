import { MODE, LOG_LEVEL } from "@/constants/env.constants";
import { ansiConfig } from "@/config/banner.config";
import {
  AppErrorLogPayloadType,
  LogContextType,
  LogEntryType,
  LogLevelType,
} from "@/types/types/logger.types";
import { getDateToShow, getDateToStore } from "@/utils/date.utils";
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
  return (LEVELS[level] ?? 99) <= (LEVELS[LOGGING_LEVEL as LogLevelType] ?? 2);
};

let _dbAdapter: ((entry: LogEntryType) => Promise<void> | void) | null = null;

export const setDbAdapter = (
  fn: (entry: LogEntryType) => Promise<void> | void,
) => {
  if (typeof fn !== "function")
    throw new TypeError("DB adapter must be a function!");
  _dbAdapter = fn;
};

const writeToDB = async (entry: LogEntryType) => {
  if (!_dbAdapter) {
    process.stderr.write(
      "[Logger Service] DB target enabled but no adapter registered. " +
        "Call setDbAdapter(fn) to register one.\n",
    );
    return;
  }
  try {
    await _dbAdapter(entry);
  } catch (dbErr) {
    const errMessage = dbErr instanceof Error ? dbErr.message : String(dbErr);
    process.stderr.write(`[logger] DB write failed: ${errMessage}\n`);
  }
};

const buildEntry = (
  level: LogLevelType,
  args: unknown[],
  context: LogContextType = {},
): LogEntryType => {
  const message = args
    .map((a) => (typeof a === "object" ? JSON.stringify(a) : String(a)))
    .join(" ");

  return {
    timestamp: getDateToStore(new Date()),
    level,
    mode,
    message,
    code: context.code ?? "LOG",
    statusCode: context.statusCode ?? undefined,
    details: context.details ?? undefined,
    path: context.path ?? undefined,
    requestId: context.requestId ?? undefined,
    isOperational: context.isOperational ?? undefined,
    stack:
      mode === "development" || context.isOperational === false
        ? (context.stack ?? undefined)
        : undefined,
    originalStack: context.originalStack ?? undefined,
    meta: context.meta ?? undefined,
  };
};

const runSinks = async (
  level: LogLevelType,
  args: unknown[],
  context: LogContextType = {},
) => {
  if (mode === "test" || !shouldLog(level)) return;
  const entry = buildEntry(level, args, context);
  await writeToDB(entry);
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
    if (isServer) {
      serverPrint(
        "info",
        ansiConfig.blue,
        `⏰ [${getDateToShow(new Date())}] 📢 [ INFO ]`,
        args,
      );

      runSinks("info", args, { code: "INFO" });
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
    if (isServer) {
      serverPrint(
        "log",
        ansiConfig.green,
        `⏰ [${getDateToShow(new Date())}] ✅ [ SUCCESS ]`,
        args,
      );

      runSinks("info", args, { code: "SUCCESS" });
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
    if (isServer) {
      serverPrint(
        "log",
        ansiConfig.green,
        `⏰ [${getDateToShow(new Date())}] 📝 [ LOG ]`,
        args,
      );

      runSinks("info", args, { code: "LOG" });
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
    if (isServer) {
      serverPrint(
        "debug",
        ansiConfig.magenta,
        `⏰ [${getDateToShow(new Date())}] 🐞 [ DEBUG ]`,
        args,
      );

      runSinks("debug", args, { code: "DEBUG" });
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

        runSinks(
          "warn",
          [incomingError.message ?? "An unknown warning has occurred!"],
          {
            code: incomingError.code,
            statusCode: incomingError.statusCode,
            details: incomingError.details,
            path:
              readString(nestedRequestMetadata, ["path"]) ??
              incomingError.metadata.path,
            requestId:
              readString(nestedRequestMetadata, ["requestId"]) ??
              incomingError.metadata.requestId,
            isOperational: incomingError.metadata.isOperational,
          },
        );

        return;
      }

      serverPrint(
        "warn",
        ansiConfig.yellow,
        `⏰ [${getDateToShow(new Date())}] 🚨 [ WARNING ]`,
        args,
      );

      runSinks("warn", args, { code: "WARNING" });
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

        runSinks(
          "error",
          [incomingError.message ?? "An unknown error has occurred!"],
          {
            code: incomingError.code,
            statusCode: incomingError.statusCode,
            details: incomingError.details,
            path:
              readString(nestedRequestMetadata, ["path"]) ??
              incomingError.metadata.path,
            requestId:
              readString(nestedRequestMetadata, ["requestId"]) ??
              incomingError.metadata.requestId,
            isOperational: incomingError.metadata.isOperational,
            stack: incomingError.stack,
          },
        );

        return;
      }

      serverPrint(
        "error",
        ansiConfig.red,
        `⏰ [${getDateToShow(new Date())}] ❌ [ ERROR ]`,
        args,
      );

      runSinks("error", args, { code: "ERROR" });
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
