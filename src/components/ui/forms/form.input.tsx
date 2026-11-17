import { ChangeEvent } from "react";
import { FormInputProps } from "@/types/props/forms.props.types";

const FormInput = ({
  ref,
  className = "",
  startIcon,
  endIcon,
  placeholder,
  error,
  required,
  numericOnly,
  maxDigits,
  ...props
}: FormInputProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;

    if (numericOnly) {
      value = value.replace(/\D/g, "");

      if (maxDigits) {
        value = value.slice(0, maxDigits);
      }

      e.currentTarget.value = value;
    }

    props.onChange?.(e);
  };

  return (
    <div className="group/input relative w-full">
      {startIcon && (
        <div
          className={`top-1/2 left-4 absolute transition-all -translate-y-1/2 duration-300 ${error ? "text-error" : "text-input-placeholder group-focus-within/input:text-accent-blue"}`}
        >
          {startIcon}
        </div>
      )}

      <input
        ref={ref}
        {...props}
        placeholder={`${placeholder}${required ? " *" : ""}`}
        onChange={handleChange}
        className={`bg-input-bg disabled:opacity-50 shadow-sm backdrop-blur-md px-4 py-2.5 border rounded-xl outline-none w-full text-input-text placeholder:text-input-placeholder transition-all duration-300 disabled:cursor-not-allowed ${startIcon ? "pl-10" : ""} ${endIcon ? "pr-10" : ""} ${error ? "focus:shadow-error border-error" : "focus:shadow-md border-input-border hover:border-input-border-active focus:border-input-border-active focus:shadow-input-border-active"} ${className}`}
      />

      {endIcon && (
        <div
          className={`top-1/2 right-4 absolute transition-all -translate-y-1/2 duration-300 ${error ? "text-error" : "text-input-placeholder group-focus-within/input:text-accent-blue"}`}
        >
          {endIcon}
        </div>
      )}
    </div>
  );
};

export default FormInput;
