import { ResponseData } from "@/types/types/response.types";

export const sanitizeSingleData = (data: unknown): unknown => {
  if (!data || typeof data !== "object") {
    return data;
  }

  if (Array.isArray(data)) {
    return data.map((item) => sanitizeSingleData(item));
  }

  if (data instanceof Date) {
    return data;
  }

  const incomingData = data as ResponseData;

  if (
    incomingData.constructor &&
    incomingData.constructor.name === "ObjectId"
  ) {
    return incomingData.toString?.();
  }

  const plainData: Record<string, unknown> =
    typeof incomingData.toObject === "function"
      ? incomingData.toObject()
      : incomingData;

  const sanitized: Record<string, unknown> = { ...plainData };

  if (sanitized._id) {
    sanitized.id = (sanitized._id as { toString(): string }).toString();
    delete sanitized._id;
  }

  if (sanitized.__v === 0) {
    delete sanitized.__v;
  }

  Object.keys(sanitized).forEach((key) => {
    const value = sanitized[key];

    if (value && typeof value === "object") {
      sanitized[key] = sanitizeSingleData(value);
    }
  });

  return sanitized;
};

export const sanitizeData = (data: unknown): unknown => {
  if (!data) {
    return data;
  }

  if (Array.isArray(data)) {
    return data.map((d) => sanitizeSingleData(d));
  }

  return sanitizeSingleData(data);
};
