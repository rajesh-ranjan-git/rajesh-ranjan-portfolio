"use server";

import { PHONE_REGEX } from "@/constants/regex.constants";
import { propertyConstraintsConfig } from "@/config/common.config";
import {
  ContactFormStateType,
  FieldErrorsType,
} from "@/types/types/actions.types";
import { emailValidator, nameValidator } from "@/validators/contact.validators";
import {
  numberRegexPropertiesValidator,
  stringPropertiesValidator,
} from "@/validators/common.validators";
import { toSentenceCase, toTitleCase } from "@/utils/common.utils";
import AppError from "@/services/error/error.service";
import logger from "@/services/logger/logger";
import { emailService } from "@/services/email/email.service";
import { contactNotificationEmail } from "@/services/email/email.templates";

export const sendMessage = async (
  _prevState: ContactFormStateType,
  formData: FormData,
): Promise<ContactFormStateType> => {
  const nameResult = nameValidator(formData.get("name"));
  const emailResult = emailValidator(formData.get("email"));
  const phoneResult = numberRegexPropertiesValidator(
    "phone",
    formData.get("phone"),
    PHONE_REGEX,
  );
  const subjectResult = stringPropertiesValidator(
    "subject",
    formData.get("subject"),
    propertyConstraintsConfig.minSubjectLength,
    propertyConstraintsConfig.maxSubjectLength,
  );
  const messageResult = stringPropertiesValidator(
    "message",
    formData.get("message"),
    propertyConstraintsConfig.minMessageLength,
    propertyConstraintsConfig.maxMessageLength,
  );

  if (
    !nameResult.isPropertyValid ||
    !emailResult.isPropertyValid ||
    !phoneResult.isPropertyValid ||
    !subjectResult.isPropertyValid ||
    !messageResult.isPropertyValid
  ) {
    const errors: FieldErrorsType = {
      name: nameResult.isPropertyValid ? null : nameResult.message,
      email: emailResult.isPropertyValid ? null : emailResult.message,
      phone: phoneResult.isPropertyValid ? null : phoneResult.message,
      subject: subjectResult.isPropertyValid ? null : subjectResult.message,
      message: messageResult.isPropertyValid ? null : messageResult.message,
    };

    return {
      status: "ERROR",
      code: "VALIDATION FAILED",
      message: "Please provide valid details!",
      errors,
    };
  }

  const name = nameResult.validatedProperty;
  const email = emailResult.validatedProperty;
  const phone = phoneResult.validatedProperty;
  const subject = subjectResult.validatedProperty;
  const message = messageResult.validatedProperty;

  try {
    const result = await emailService.send({
      subject: `📩 New Portfolio Enquiry from ${toTitleCase(name) || email} — ${toSentenceCase(subject)}`,
      template: contactNotificationEmail({
        name,
        email,
        phone,
        subject,
        message,
      }),
    });

    logger.success(`📩 [CONTACT] Email sent, messageId: ${result.messageId}`);

    return {
      status: "SUCCESS",
      code: "EMAIL SEND SUCCESS",
      message: result.message,
    };
  } catch (error) {
    const appError = AppError.from(error, {
      code: "EMAIL SEND FAILED",
      path: "action:sendMessage",
    });

    logger.logAppError(appError);

    return {
      status: "ERROR",
      code: appError.code,
      message: "Unable to send your message right now, please try again later!",
    };
  }
};
