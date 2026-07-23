import { EMAIL_REGEX, NAME_REGEX } from "@/constants/regex.constants";
import { propertyConstraintsConfig } from "@/config/common.config";
import { ValidatorResultType } from "@/types/types/validators.types";

export const nameValidator = (name: unknown): ValidatorResultType<string> => {
  if (!name) return { isPropertyValid: true, validatedProperty: null };

  if (typeof name !== "string") {
    return {
      isPropertyValid: false,
      message: "Name must be a string!",
    };
  }

  const trimmedName = name.trim().toLowerCase();

  if (trimmedName.length < propertyConstraintsConfig.minNameLength) {
    return {
      isPropertyValid: false,
      message: `Name must be at least ${propertyConstraintsConfig.minNameLength} character long!`,
    };
  }

  if (trimmedName.length > propertyConstraintsConfig.maxNameLength) {
    return {
      isPropertyValid: false,
      message: `Name must not be longer than ${propertyConstraintsConfig.maxNameLength} characters!`,
    };
  }

  if (!NAME_REGEX.test(trimmedName)) {
    return {
      isPropertyValid: false,
      message: "Name must only contain alphabets (a-z or A-Z)!",
    };
  }

  return { isPropertyValid: true, validatedProperty: trimmedName };
};

export const emailValidator = (email: unknown): ValidatorResultType<string> => {
  if (!email) {
    return { isPropertyValid: false, message: "Please provide your email!" };
  }

  if (typeof email !== "string") {
    return { isPropertyValid: false, message: "Email must be a string!" };
  }

  const incomingEmail = email.trim().toLowerCase();

  if (!EMAIL_REGEX.test(incomingEmail)) {
    return {
      isPropertyValid: false,
      message: "Please provide a valid email address!",
    };
  }

  return { isPropertyValid: true, validatedProperty: incomingEmail };
};
