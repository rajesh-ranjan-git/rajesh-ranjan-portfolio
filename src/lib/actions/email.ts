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

  const nameResult = nameValidator(name);
  errors.name = nameResult.isPropertyValid ? null : nameResult.message;

  const emailResult = emailValidator(email);
  errors.email = emailResult.isPropertyValid ? null : emailResult.message;

  const phoneResult = numberRegexPropertiesValidator(
    "phone",
    phone,
    PHONE_REGEX,
  );
  errors.phone = phoneResult.isPropertyValid ? null : phoneResult.message;

  const subjectResult = stringPropertiesValidator(
    "subject",
    subject,
    propertyConstraintsConfig.minSubjectLength,
    propertyConstraintsConfig.maxSubjectLength,
  );
  errors.subject = subjectResult.isPropertyValid ? null : subjectResult.message;

  const messageResult = stringPropertiesValidator(
    "message",
    message,
    propertyConstraintsConfig.minMessageLength,
    propertyConstraintsConfig.maxMessageLength,
  );
  errors.message = messageResult.isPropertyValid ? null : messageResult.message;

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
      name: nameResult.isPropertyValid ? nameResult.validatedProperty : null,
      email: emailResult.isPropertyValid
        ? emailResult.validatedProperty
        : null,
      phone: phoneResult.isPropertyValid
        ? phoneResult.validatedProperty
        : null,
      subject: subjectResult.isPropertyValid
        ? subjectResult.validatedProperty
        : null,
      message: messageResult.isPropertyValid
        ? messageResult.validatedProperty
        : null,
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
