import { PHONE_REGEX } from "@/constants/regex.constants";
import { propertyConstraintsConfig } from "@/config/common.config";
import { FormStateType } from "@/types/types/actions.types";
import { emailValidator, nameValidator } from "@/validators/contact.validators";
import {
  numberRegexPropertiesValidator,
  stringPropertiesValidator,
} from "@/validators/common.validators";
import { api, ApiError } from "@/lib/api/apiHandler";

export const sendMessage = async (
  prevState: FormStateType,
  formData: FormData,
): Promise<FormStateType> => {
  const name = formData.get("name");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const subject = formData.get("subject");
  const message = formData.get("message");

  const errors: FormStateType["errors"] = {};

  const { validatedProperty: validatedName, message: nameErrorMessage } =
    nameValidator(name);
  errors.name = nameErrorMessage ?? null;

  const { validatedProperty: validatedEmail, message: emailErrorMessage } =
    emailValidator(email);
  errors.email = emailErrorMessage ?? null;

  const { validatedProperty: validatedPhone, message: phoneErrorMessage } =
    numberRegexPropertiesValidator("phone", phone, PHONE_REGEX);
  errors.phone = phoneErrorMessage ?? null;

  const { validatedProperty: validatedSubject, message: subjectErrorMessage } =
    stringPropertiesValidator(
      "subject",
      subject,
      propertyConstraintsConfig.minSubjectLength,
      propertyConstraintsConfig.maxSubjectLength,
    );
  errors.subject = subjectErrorMessage ?? null;

  const { validatedProperty: validatedMessage, message: messageErrorMessage } =
    stringPropertiesValidator(
      "message",
      message,
      propertyConstraintsConfig.minMessageLength,
      propertyConstraintsConfig.maxMessageLength,
    );
  errors.message = messageErrorMessage ?? null;

  if (Object.values(errors).some((error) => error !== null)) {
    return {
      success: false,
      status: "VALIDATION FAILED",
      code: "SEND EMAIL FAILED",
      statusCode: 422,
      message: "Please provide valid details!",
      details: errors,
      timestamp: new Date().toISOString(),
      metadata: null,
      errors,
      inputs: Object.fromEntries(formData),
    };
  }

  try {
    const response = await api.post("email", {
      name: validatedName,
      email: validatedEmail,
      phone: validatedPhone,
      subject: validatedSubject,
      message: validatedMessage,
    });

    return { ...response };
  } catch (error: unknown) {
    const apiError = error instanceof ApiError ? error : null;

    return {
      success: false,
      status: apiError?.name ?? "VALIDATION FAILED",
      code: apiError?.code ?? "SEND EMAIL FAILED",
      statusCode: apiError?.statusCode ?? 500,
      message: apiError?.message ?? "Unable to send email!",
      details: apiError?.details ?? null,
      timestamp: new Date().toISOString(),
      metadata: apiError?.metadata ?? null,
      inputs: Object.fromEntries(formData),
    };
  }
};
