"use client";

import { useActionState, useEffect } from "react";
import Form from "next/form";
import { FaPhone, FaUserTie } from "react-icons/fa6";
import { MdEmail, MdSubject } from "react-icons/md";
import { TbSendFilled } from "react-icons/tb";
import { PHONE_REGEX } from "@/constants/regex.constants";
import { propertyConstraintsConfig } from "@/config/common.config";
import { initialState } from "@/config/forms.config";
import useInputFieldValidator from "@/hooks/useInputFieldValidation";
import { useToast } from "@/hooks/toast";
import { getFullName } from "@/helpers/owner.helpers";
import { emailValidator, nameValidator } from "@/validators/contact.validators";
import {
  numberRegexPropertiesValidator,
  stringPropertiesValidator,
} from "@/validators/common.validators";
import { sendMessage } from "@/lib/actions/email";
import Card from "@/components/ui/card/card";
import FormField from "@/components/ui/forms/form.field";
import FormInput from "@/components/ui/forms/form.input";
import FormTextarea from "@/components/ui/forms/form.textarea";
import FormButton from "@/components/ui/forms/form.button";

const ContactForm = () => {
  const { showToast } = useToast();

  const validateName = (val: string): string => {
    const { message: nameError } = nameValidator(val);

    if (!nameError) return "";

    return (
      nameError ??
      `A valid name is required to send a message to ${getFullName()}!`
    );
  };

  const validateEmail = (val: string): string => {
    if (!val) return `Email is required to send a message to ${getFullName()}!`;

    const { message: emailError } = emailValidator(val);

    if (!emailError) return "";

    return (
      emailError ??
      `A valid email is required to send a message to ${getFullName()}!`
    );
  };

  const validatePhone = (val: string): string => {
    const { message: phoneError } = numberRegexPropertiesValidator(
      "phone",
      val,
      PHONE_REGEX,
    );

    if (!phoneError) return "";

    return (
      phoneError ??
      `A valid phone number is required to send a message to ${getFullName()}!`
    );
  };

  const validateSubject = (val: string): string => {
    if (!val)
      return `Subject is required to send a message to ${getFullName()}!`;

    const { message: subjectError } = stringPropertiesValidator(
      "subject",
      val,
      propertyConstraintsConfig.minSubjectLength,
      propertyConstraintsConfig.maxSubjectLength,
    );

    if (!subjectError) return "";

    return (
      subjectError ??
      `A valid subject is required to send a message to ${getFullName()}!`
    );
  };

  const validateMessage = (val: string): string => {
    if (!val)
      return `Message is required to send a message to ${getFullName()}!`;

    const { message: messageError } = stringPropertiesValidator(
      "message",
      val,
      propertyConstraintsConfig.minMessageLength,
      propertyConstraintsConfig.maxMessageLength,
    );

    if (!messageError) return "";

    return (
      messageError ??
      `A valid message is required to send a message to ${getFullName()}!`
    );
  };

  const nameField = useInputFieldValidator<string>({
    initialValue: "",
    validate: validateName,
  });

  const emailField = useInputFieldValidator<string>({
    initialValue: "",
    validate: validateEmail,
  });

  const phoneField = useInputFieldValidator<string>({
    initialValue: "",
    validate: validatePhone,
  });

  const subjectField = useInputFieldValidator<string>({
    initialValue: "",
    validate: validateSubject,
  });

  const messageField = useInputFieldValidator<string>({
    initialValue: "",
    validate: validateMessage,
  });

  const action = async (prevState: any, formData: FormData): Promise<any> =>
    sendMessage(prevState, formData);

  const [state, formAction, isPending] = useActionState(action, initialState);

  useEffect(() => {
    if (state && state.status === "IDLE") return;

    if (state?.success) {
      showToast({
        title: state.status,
        message: state.message ?? "Email sent successfully!",
        variant: "success",
      });

      nameField.reset();
      emailField.reset();
      phoneField.reset();
      subjectField.reset();
      messageField.reset();
    } else {
      showToast({
        title: state.code,
        message: state.message,
        variant: "error",
      });
    }
  }, [state]);

  const isDisabled =
    isPending ||
    !!emailField.error ||
    !!subjectField.error ||
    !!messageField.error;

  return (
    <Card
      animateBorder
      className="w-full h-full md:max-h-120 overflow-y-auto no-scrollbar"
    >
      <div className="flex flex-col my-auto w-full">
        <Form action={formAction} autoComplete="false">
          <h5 className="font-bold text-center">Whats on your mind...?</h5>

          <div className="relative flex md:flex-row flex-col gap-4 py-4">
            <FormField htmlFor="name" error={nameField.error}>
              <FormInput
                id="name"
                name="name"
                placeholder="Your Name"
                autoComplete="off"
                value={nameField.raw}
                className="pr-9"
                onChange={(e) => nameField.handleInput(e.currentTarget.value)}
                onBlur={nameField.handleBlur}
                endIcon={<FaUserTie />}
                error={nameField.error}
              />
            </FormField>

            <FormField htmlFor="email" required error={emailField.error}>
              <FormInput
                id="email"
                name="email"
                placeholder="Your Email"
                autoComplete="off"
                value={emailField.raw}
                className="pr-9"
                onChange={(e) => emailField.handleInput(e.currentTarget.value)}
                onBlur={emailField.handleBlur}
                endIcon={<MdEmail />}
                error={emailField.error}
              />
            </FormField>
          </div>

          <div className="relative flex flex-col gap-4 mb-4">
            <FormField htmlFor="phone" error={phoneField.error}>
              <FormInput
                id="phone"
                name="phone"
                placeholder="Your Phone"
                autoComplete="off"
                value={phoneField.raw}
                className="pr-9"
                onChange={(e) => phoneField.handleInput(e.currentTarget.value)}
                onBlur={phoneField.handleBlur}
                endIcon={<FaPhone />}
                error={phoneField.error}
              />
            </FormField>

            <FormField htmlFor="subject" required error={subjectField.error}>
              <FormInput
                id="subject"
                name="subject"
                placeholder="Subject"
                autoComplete="off"
                value={subjectField.raw}
                className="pr-9"
                onChange={(e) =>
                  subjectField.handleInput(e.currentTarget.value)
                }
                onBlur={subjectField.handleBlur}
                endIcon={<MdSubject />}
                error={subjectField.error}
              />
            </FormField>

            <FormField htmlFor="message" required error={messageField.error}>
              <FormTextarea
                id="message"
                name="message"
                placeholder="Message"
                autoComplete="off"
                value={messageField.raw}
                className="pr-9"
                onChange={(e) =>
                  messageField.handleInput(e.currentTarget.value)
                }
                onBlur={messageField.handleBlur}
                error={messageField.error}
              />
            </FormField>

            <FormButton
              type="submit"
              variant="primary"
              loading={isPending}
              disabled={isDisabled}
              className="rounded-xl w-full"
            >
              <span>Send Message</span>
              <TbSendFilled size={18} />
            </FormButton>
          </div>
        </Form>
      </div>
    </Card>
  );
};

export default ContactForm;
