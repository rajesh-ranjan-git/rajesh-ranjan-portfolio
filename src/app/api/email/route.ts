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

    const nameResult = nameValidator(name);

    if (!nameResult.isPropertyValid) {
      throw AppError.unprocessable({
        message: nameResult.message,
        code: "NAME VALIDATION FAILED",
        details: { name },
      });
    }

    const emailResult = emailValidator(email);

    if (!emailResult.isPropertyValid) {
      throw AppError.unprocessable({
        message: emailResult.message,
        code: "EMAIL VALIDATION FAILED",
        details: { email },
      });
    }

    const phoneResult = numberRegexPropertiesValidator(
      "phone",
      phone,
      PHONE_REGEX,
    );

    if (!phoneResult.isPropertyValid) {
      throw AppError.unprocessable({
        message: phoneResult.message,
        code: "PHONE VALIDATION FAILED",
        details: { phone },
      });
    }

    const subjectResult = stringPropertiesValidator(
      "subject",
      subject,
      propertyConstraintsConfig.minSubjectLength,
      propertyConstraintsConfig.maxSubjectLength,
    );

    if (!subjectResult.isPropertyValid) {
      throw AppError.unprocessable({
        message: subjectResult.message,
        code: "SUBJECT VALIDATION FAILED",
        details: { subject },
      });
    }

    const messageResult = stringPropertiesValidator(
      "message",
      message,
      propertyConstraintsConfig.minMessageLength,
      propertyConstraintsConfig.maxMessageLength,
    );

    if (!messageResult.isPropertyValid) {
      throw AppError.unprocessable({
        message: messageResult.message,
        code: "MESSAGE VALIDATION FAILED",
        details: { message },
      });
    }

    const validatedName = nameResult.validatedProperty;
    const validatedEmail = emailResult.validatedProperty;
    const validatedPhone = phoneResult.validatedProperty;
    const validatedSubject = subjectResult.validatedProperty;
    const validatedMessage = messageResult.validatedProperty;

    const result = await emailService.send({
      subject: `📩 New Portfolio Enquiry from ${toTitleCase(validatedName) || validatedEmail} — ${toSentenceCase(validatedSubject)}`,
      template: contactNotificationEmail({
        name: validatedName,
        email: validatedEmail,
        phone: validatedPhone,
        subject: validatedSubject,
        message: validatedMessage,
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
