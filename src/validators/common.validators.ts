import {
  RequiredValidatorResultType,
  ValidatorResultType,
} from "@/types/types/validators.types";
import { toTitleCase } from "@/utils/common.utils";

export const numberRegexPropertiesValidator = (
  propertyName: string,
  propertyValue: unknown,
  regex: RegExp,
): ValidatorResultType<string> => {
  if (!propertyValue) {
    return { isPropertyValid: true, validatedProperty: null };
  }

  const stringValue =
    typeof propertyValue === "string"
      ? propertyValue.trim()
      : String(propertyValue);

  if (!regex.test(stringValue) || isNaN(Number(stringValue))) {
    return {
      isPropertyValid: false,
      message: `${toTitleCase(propertyName)} is invalid!`,
    };
  }

  return { isPropertyValid: true, validatedProperty: stringValue };
};

export const stringPropertiesValidator = (
  propertyName: string,
  propertyValue: unknown,
  minLength: number,
  maxLength: number,
): RequiredValidatorResultType<string> => {
  if (!propertyValue) {
    return {
      isPropertyValid: false,
      message: `Please provide ${toTitleCase(propertyName)}!`,
    };
  }

  if (typeof propertyValue !== "string") {
    return {
      isPropertyValid: false,
      message: `${toTitleCase(propertyName)} is invalid!`,
    };
  }

  const trimmedProperty = propertyValue.trim().toLowerCase();

  if (/^\d+(\.\d+)?$/.test(trimmedProperty)) {
    return {
      isPropertyValid: false,
      message: `${toTitleCase(propertyName)} must be a valid text, not a number!`,
    };
  }

  if (/^(true|false)$/i.test(trimmedProperty)) {
    return {
      isPropertyValid: false,
      message: `${toTitleCase(propertyName)} must be a valid text, not boolean!`,
    };
  }

  if (/^[\[{].*[\]}]$/.test(trimmedProperty)) {
    return {
      isPropertyValid: false,
      message: `${toTitleCase(propertyName)} must be plain text, not an object!`,
    };
  }

  if (/^function\s*\(|^\(\)\s*=>/.test(trimmedProperty)) {
    return {
      isPropertyValid: false,
      message: `${toTitleCase(propertyName)} must not be a function!`,
    };
  }

  if (trimmedProperty.length < minLength) {
    return {
      isPropertyValid: false,
      message: `${toTitleCase(propertyName)} must be at least ${minLength} characters long!`,
    };
  }

  if (trimmedProperty.length > maxLength) {
    return {
      isPropertyValid: false,
      message: `${toTitleCase(propertyName)} must not be more than ${maxLength} characters long!`,
    };
  }

  return {
    isPropertyValid: true,
    validatedProperty: trimmedProperty,
  };
};
