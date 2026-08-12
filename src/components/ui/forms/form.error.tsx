import { FormErrorMessageProps } from "@/types/props/forms.props.types";

const FormErrorMessage = ({ error, className }: FormErrorMessageProps) => {
  return (
    <p
      className={`ml-2 my-0.5 overflow-hidden text-error text-xs origin-top transition-all duration-500 ${
        error ? "max-h-10 opacity-100" : "max-h-0 opacity-0"
      } ${className}`}
    >
      {error}
    </p>
  );
};

export default FormErrorMessage;
