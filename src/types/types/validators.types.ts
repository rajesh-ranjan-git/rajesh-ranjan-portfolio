export type ValidatorResultType<T> =
  | { isPropertyValid: true; validatedProperty: T | null }
  | { isPropertyValid: false; message: string };

export type RequiredValidatorResultType<T> =
  | { isPropertyValid: true; validatedProperty: T }
  | { isPropertyValid: false; message: string };
