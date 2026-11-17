import {
  ButtonHTMLAttributes,
  InputHTMLAttributes,
  ReactNode,
  Ref,
  TextareaHTMLAttributes,
} from "react";

export interface FormLabelProps {
  htmlFor?: string;
  className?: string;
  children: ReactNode;
  required?: boolean;
}

export interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  ref?: Ref<HTMLInputElement>;
  children?: ReactNode;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  placeholder?: string;
  error?: string;
  required?: boolean;
  numericOnly?: boolean;
  maxDigits?: number;
}

export interface FormButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger";
  size?: "sm" | "md";
  loading?: boolean;
}

export interface FormTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  ref?: Ref<HTMLTextAreaElement>;
  error?: string;
}

export interface FormFieldProps {
  label?: string | ReactNode;
  htmlFor?: string;
  required?: boolean;
  error?: string;
  hint?: string;
  children: ReactNode;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}

export interface FormErrorMessageProps {
  error: string | null;
  className?: string;
}
