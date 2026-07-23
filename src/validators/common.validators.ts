import { ValidatorResultType } from "@/types/types/validators.types";
import { toTitleCase } from "@/utils/common.utils";

export const numberRegexPropertiesValidator = (
  propertyName: string,
  propertyValue: any,
  regex: RegExp,
): ValidatorResultType<string> => {
  if (!propertyValue) {
    return { isPropertyValid: true, validatedProperty: null };
  }

  propertyValue =
    typeof propertyValue === "string" ? propertyValue.trim() : propertyValue;

  if (!regex.test(propertyValue) || isNaN(Number(propertyValue))) {
    return {
      isPropertyValid: false,
      message: `${toTitleCase(propertyName)} is invalid!`,
    };
  }

  return { isPropertyValid: true, validatedProperty: propertyValue };
};

export const stringPropertiesValidator = (
  propertyName: string,
  propertyValue: any,
  minLength: number,
  maxLength: number,
): ValidatorResultType<string> => {
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
