import type AppError from "../error/error.service";

export type LogLevelType = "error" | "warn" | "info" | "debug";

type LabelType = LogLevelType | "success";

type LogContextType = Record<string, unknown>;

const LEVELS: Record<LogLevelType, number> = {
  error: 0,
  warn: 1,
  info: 2,
  debug: 3,
};

const LABELS: Record<
  LabelType,
  { icon: string; text: string; ansi: string; css: string }
> = {
  error: {
    icon: "❌",
    text: "ERROR",
    ansi: "\x1b[31m",
    css: "color:#ef4444;font-weight:bold;",
  },
  warn: {
    icon: "🚨",
    text: "WARNING",
    ansi: "\x1b[33m",
    css: "color:#f59e0b;font-weight:bold;",
  },
  info: {
    icon: "📢",
    text: "INFO",
    ansi: "\x1b[38;2;56;248;248m",
    css: "color:#38bdf8;font-weight:bold;",
  },
  success: {
    icon: "✅",
    text: "SUCCESS",
    ansi: "\x1b[32m",
    css: "color:#22c55e;font-weight:bold;",
  },
  debug: {
    icon: "🐞",
    text: "DEBUG",
    ansi: "\x1b[38;2;255;150;255m",
    css: "color:#d8b4fe;font-weight:bold;",
  },
};

const CONSOLE_METHODS: Record<
  LabelType,
  "error" | "warn" | "info" | "log" | "debug"
> = {
  error: "error",
  warn: "warn",
  info: "info",
  success: "log",
  debug: "debug",
};

const ANSI_RESET = "\x1b[0m";

const isBrowser = typeof window !== "undefined";

const getMode = (): string =>
  (
    process.env.NEXT_PUBLIC_NODE_ENV ||
    process.env.NODE_ENV ||
    "development"
  ).toLowerCase();

const isLevelEnabled = (level: LogLevelType): boolean => {
  const mode = getMode();

  if (mode === "test") return false;

  const configured = process.env.NEXT_PUBLIC_LOG_LEVEL?.toLowerCase();
  let threshold =
    configured && configured in LEVELS
      ? LEVELS[configured as LogLevelType]
      : LEVELS.info;

  if (isBrowser && mode === "production") {
    threshold = Math.min(threshold, LEVELS.warn);
  }

  return LEVELS[level] <= threshold;
};

const timeFormatter = new Intl.DateTimeFormat("en-IN", {
  timeZone: "Asia/Kolkata",
  day: "numeric",
  month: "short",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: true,
});

const getPrettyLabel = (label: LabelType): string => {
  const { icon, text } = LABELS[label];
  return `⏰ [${timeFormatter.format(new Date())}] ${icon} [ ${text} ]`;
};

const serializeValue = (value: unknown): unknown => {
  if (value instanceof Error) {
    return {
      name: value.name,
      message: value.message,
      ...("digest" in value ? { digest: value.digest } : {}),
      stack: value.stack,
    };
  }

  return value;
};

const toJsonLine = (entry: LogContextType): string => {
  const seen = new WeakSet<object>();

  try {
    return JSON.stringify(entry, (_key, value: unknown) => {
      const serialized = serializeValue(value);

      if (serialized && typeof serialized === "object") {
        if (seen.has(serialized)) return "[Circular]";
        seen.add(serialized);
      }

      return serialized;
    });
  } catch {
    return JSON.stringify({ ...entry, data: String(entry.data) });
  }
};

const write = (
  level: LogLevelType,
  label: LabelType,
  args: unknown[],
  context?: LogContextType,
): void => {
  if (!isLevelEnabled(level)) return;

  const method = CONSOLE_METHODS[label];

  if (isBrowser) {
    const extra = context ? [context] : [];
    console[method](
      `%c${getPrettyLabel(label)}`,
      LABELS[label].css,
      ...args,
      ...extra,
    );
    return;
  }

  if (getMode() !== "production") {
    const extra = context ? [context] : [];
    console[method](
      `${LABELS[label].ansi}${getPrettyLabel(label)}${ANSI_RESET}`,
      ...args,
      ...extra,
    );
    return;
  }

  const message = args.filter((arg) => typeof arg === "string").join(" ");
  const data = args.filter((arg) => typeof arg !== "string");

  console[method](
    toJsonLine({
      time: new Date().toISOString(),
      level,
      ...(label !== level ? { tag: label } : {}),
      msg: message,
      ...(data.length === 1 ? { data: data[0] } : {}),
      ...(data.length > 1 ? { data } : {}),
      ...context,
    }),
  );
};

const hasEntries = (value: unknown): boolean =>
  !!value && typeof value === "object" && Object.keys(value).length > 0;

const logger = {
  error: (...args: unknown[]) => write("error", "error", args),
  warn: (...args: unknown[]) => write("warn", "warn", args),
  info: (...args: unknown[]) => write("info", "info", args),
  success: (...args: unknown[]) => write("info", "success", args),
  debug: (...args: unknown[]) => write("debug", "debug", args),

  logAppError: (appError: AppError, extraContext: LogContextType = {}) => {
    const level: LogLevelType = appError.statusCode >= 500 ? "error" : "warn";
    const { path, requestId, isOperational } = appError.metadata;
    const showStack = getMode() === "development" || !isOperational;

    write(level, level, [`[ ${appError.code} ] ${appError.message}`], {
      code: appError.code,
      statusCode: appError.statusCode,
      ...(path ? { path } : {}),
      ...(requestId ? { requestId } : {}),
      isOperational,
      ...(hasEntries(appError.details) ? { details: appError.details } : {}),
      ...(showStack ? { stack: appError.originalStack ?? appError.stack } : {}),
      ...extraContext,
    });
  },
};

export default logger;
