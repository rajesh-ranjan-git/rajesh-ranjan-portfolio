import { NextRequest } from "next/server";
import { PHONE_REGEX } from "@/constants/regex.constants";
import { propertyConstraintsConfig } from "@/config/common.config";
import { httpStatusConfig } from "@/config/http.config";
import { ContactFormRequestBodyType } from "@/types/types/email.types";
import { emailValidator, nameValidator } from "@/validators/contact.validators";
import {
  numberRegexPropertiesValidator,
  stringPropertiesValidator,
} from "@/validators/common.validators";
import { toSentenceCase, toTitleCase } from "@/utils/common.utils";
import AppError from "@/services/error/error.service";
import { emailService } from "@/services/email/email.service";
import { contactNotificationEmail } from "@/services/email/email.templates";
import { responseService } from "@/services/response/response.service";

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormRequestBodyType = await request.json();

    const { name, email, phone, subject, message } = body;

    const {
      isPropertyValid: isNameValid,
      validatedProperty: validatedName,
      message: nameErrorMessage,
    } = nameValidator(name);

    if (!isNameValid) {
      throw AppError.unprocessable({
        message: nameErrorMessage,
        code: "NAME VALIDATION FAILED",
        details: { name },
      });
    }

    const {
      isPropertyValid: isEmailValid,
      validatedProperty: validatedEmail,
      message: emailErrorMessage,
    } = emailValidator(email);

    if (!isEmailValid) {
      throw AppError.unprocessable({
        message: emailErrorMessage,
        code: "EMAIL VALIDATION FAILED",
        details: { email },
      });
    }

    const {
      isPropertyValid: isPhoneValid,
      validatedProperty: validatedPhone,
      message: phoneErrorMessage,
    } = numberRegexPropertiesValidator("phone", phone, PHONE_REGEX);

    if (!isPhoneValid) {
      throw AppError.unprocessable({
        message: phoneErrorMessage,
        code: "PHONE VALIDATION FAILED",
        details: { phone },
      });
    }

    const {
      isPropertyValid: isSubjectValid,
      validatedProperty: validatedSubject,
      message: subjectErrorMessage,
    } = stringPropertiesValidator(
      "subject",
      subject,
      propertyConstraintsConfig.minSubjectLength,
      propertyConstraintsConfig.maxSubjectLength,
    );

    if (!isSubjectValid) {
      throw AppError.unprocessable({
        message: subjectErrorMessage,
        code: "SUBJECT VALIDATION FAILED",
        details: { subject },
      });
    }

    const {
      isPropertyValid: isMessageValid,
      validatedProperty: validatedMessage,
      message: messageErrorMessage,
    } = stringPropertiesValidator(
      "message",
      message,
      propertyConstraintsConfig.minMessageLength,
      propertyConstraintsConfig.maxMessageLength,
    );

    if (!isMessageValid) {
      throw AppError.unprocessable({
        message: messageErrorMessage,
        code: "MESSAGE VALIDATION FAILED",
        details: { message },
      });
    }

    const result = await emailService.send({
      subject: `📩 New Portfolio Enquiry from ${toTitleCase(validatedName) || validatedEmail} — ${toSentenceCase(validatedSubject)}`,
      template: contactNotificationEmail({
        name: validatedName ?? null,
        email: validatedEmail as string,
        phone: validatedPhone ?? null,
        subject: validatedSubject as string,
        message: validatedMessage as string,
      }),
    });

    return responseService.successResponseHandler(request, {
      status: "EMAIL SEND SUCCESS",
      statusCode: httpStatusConfig.success.statusCode,
      message: result.message,
      data: { messageId: result.messageId },
    });
  } catch (error) {
    return responseService.errorResponseHandler(error, request);
  }
}
