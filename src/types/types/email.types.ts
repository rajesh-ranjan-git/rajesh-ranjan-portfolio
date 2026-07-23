import { ReactElement, ReactNode } from "react";

export type ContactFormRequestBodyType = {
  name?: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
};

export type ContactNotificationEmailPropsType = {
  name: string | null;
  email: string;
  phone: string | null;
  subject: string;
  message: string;
};

export type EmailLayoutPropsType = {
  appName: string;
  preview: string;
  children: ReactNode;
};

export type EmailRecipientsType = string | string[] | null | undefined;

export type SendEmailParamsType = {
  to?: EmailRecipientsType;
  subject: string;
  template: ReactElement;
};

export type SendEmailResultType = {
  success: true;
  message: string;
  messageId?: string;
};
