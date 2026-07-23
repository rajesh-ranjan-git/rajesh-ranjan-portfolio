import { SendEmailCommand, SESClient } from "@aws-sdk/client-ses";
import { render } from "@react-email/render";
import {
  MODE,
  AWS_EMAIL_FROM,
  AWS_EMAIL_TO,
  AWS_DEV_EMAIL_OVERRIDE,
  AWS_SES_REGION,
  AWS_SES_ACCESS_KEY_ID,
  AWS_SES_SECRET_ACCESS_KEY,
} from "@/constants/env.constants";
import { httpStatusConfig } from "@/config/http.config";
import {
  EmailRecipientsType,
  SendEmailParamsType,
  SendEmailResultType,
} from "@/types/types/email.types";
import AppError from "@/services/error/error.service";

class EmailService {
  private readonly client: SESClient;

  constructor() {
    this.client = new SESClient({
      region: AWS_SES_REGION,
      ...(AWS_SES_ACCESS_KEY_ID && AWS_SES_SECRET_ACCESS_KEY
        ? {
            credentials: {
              accessKeyId: AWS_SES_ACCESS_KEY_ID,
              secretAccessKey: AWS_SES_SECRET_ACCESS_KEY,
            },
          }
        : {}),
    });
  }

  private normalizeRecipients(recipients: EmailRecipientsType): string[] {
    if (!recipients) return [];

    const list = Array.isArray(recipients) ? recipients : recipients.split(",");

    return list
      .map((recipient) => recipient?.trim().toLowerCase())
      .filter((recipient): recipient is string => Boolean(recipient));
  }

  private getRecipients(to: EmailRecipientsType): string[] {
    if (MODE !== "production" && AWS_DEV_EMAIL_OVERRIDE) {
      return this.normalizeRecipients(AWS_DEV_EMAIL_OVERRIDE);
    }

    return this.normalizeRecipients(to ?? AWS_EMAIL_TO);
  }

  async send({
    to,
    subject,
    template,
  }: SendEmailParamsType): Promise<SendEmailResultType> {
    const recipients = this.getRecipients(to);

    if (!AWS_EMAIL_FROM || !recipients.length) {
      throw AppError.serviceUnavailable({
        message: "Email service is not configured!",
        code: "EMAIL SERVICE NOT CONFIGURED",
      });
    }

    const html = await render(template);
    const text = await render(template, { plainText: true });

    const command = new SendEmailCommand({
      Source: AWS_EMAIL_FROM,
      Destination: { ToAddresses: recipients },
      Message: {
        Subject: { Data: subject, Charset: "UTF-8" },
        Body: {
          Html: { Data: html, Charset: "UTF-8" },
          Text: { Data: text, Charset: "UTF-8" },
        },
      },
    });

    try {
      const result = await this.client.send(command);

      return {
        success: true,
        message: "Email sent successfully!",
        messageId: result.MessageId,
      };
    } catch (error) {
      throw AppError.from(error, {
        code: "EMAIL SEND FAILED",
        statusCode: httpStatusConfig.serviceUnavailable.statusCode,
      });
    }
  }
}

export const emailService = new EmailService();
