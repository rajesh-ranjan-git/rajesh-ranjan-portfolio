export const MODE = process.env.NEXT_PUBLIC_NODE_ENV || "development";

export const LOG_LEVEL = process.env.NEXT_PUBLIC_LOG_LEVEL;

export const BASE_PORT = process.env.NEXT_PUBLIC_BASE_PORT || 1995;
export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const AWS_SES_REGION = process.env.NEXT_AWS_SES_REGION;
export const AWS_EMAIL_FROM = process.env.NEXT_AWS_EMAIL_FROM;
export const AWS_EMAIL_TO = process.env.NEXT_AWS_EMAIL_TO;
export const AWS_DEV_EMAIL_OVERRIDE = process.env.NEXT_AWS_DEV_EMAIL_OVERRIDE;
export const AWS_SES_ACCESS_KEY_ID = process.env.NEXT_AWS_SES_ACCESS_KEY_ID;
export const AWS_SES_SECRET_ACCESS_KEY =
  process.env.NEXT_AWS_SES_SECRET_ACCESS_KEY;
