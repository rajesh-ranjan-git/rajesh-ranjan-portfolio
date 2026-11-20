import { FormTextareaProps } from "@/types/props/forms.props.types";
import { getFieldErrorId } from "@/helpers/forms.helpers";

const FormTextarea = ({
  ref,
  className = "",
  error,
  required,
  ...props
}: FormTextareaProps) => (
  <div className="w-full">
    <textarea
      ref={ref}
      {...props}
      aria-required={required || undefined}
      aria-invalid={error ? true : undefined}
      aria-describedby={
        error && props.id ? getFieldErrorId(props.id) : undefined
      }
      className={`bg-input-bg disabled:opacity-50 shadow-sm backdrop-blur-md -mb-2 px-4 py-2.5 border rounded-xl outline-none w-full text-input-text placeholder:text-input-placeholder transition-all duration-300 resize-none disabled:cursor-not-allowed ${error ? "focus:shadow-error border-error" : "focus:shadow-md border-input-border hover:border-input-border-active focus:border-input-border-active focus:shadow-input-border-active"} ${className}`}
    />
  </div>
);

export default FormTextarea;
