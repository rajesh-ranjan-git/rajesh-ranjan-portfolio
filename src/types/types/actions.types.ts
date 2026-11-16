export type FieldErrorsType = {
  name?: string | null;
  email?: string | null;
  phone?: string | null;
  subject?: string | null;
  message?: string | null;
};

export type ContactFormStatusType = "IDLE" | "SUCCESS" | "ERROR";

export type ContactFormStateType = {
  status: ContactFormStatusType;
  code: string;
  message: string;
  errors?: FieldErrorsType;
};
