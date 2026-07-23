import {
  ApiErrorResponseType,
  ApiSuccessResponseType,
} from "@/types/types/api.types";

export type FieldErrorsType = {
  name?: string | null;
  email?: string | null;
  phone?: string | null;
  subject?: string | null;
  message?: string | null;
};

export type FormStateType<T = any> =
  | (ApiSuccessResponseType<T> & {
      inputs?: Record<string, FormDataEntryValue>;
      errors?: never;
    })
  | (ApiErrorResponseType<T> & {
      inputs?: Record<string, FormDataEntryValue>;
      errors?: FieldErrorsType;
    });
