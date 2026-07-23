import { FormFieldProps } from "@/types/props/forms.props.types";
import FormLabel from "@/components/ui/forms/form.label";
import FormErrorMessage from "@/components/ui/forms/form.error";

const FormField = ({
  label,
  htmlFor,
  required,
  error,
  children,
  hint,
  startIcon,
  endIcon,
}: FormFieldProps) => (
  <div className="w-full">
    {label && (
      <FormLabel htmlFor={htmlFor} required={required}>
        {label}
      </FormLabel>
    )}

    <div className="relative">
      {startIcon && (
        <div
          className={`top-1/2 left-4 absolute -translate-y-1/2 ${error ? "text-[#e94335]" : "text-label"}`}
        >
          {startIcon}
        </div>
      )}

      <div className={`${startIcon ? "pl-10" : ""} ${endIcon ? "pr-10" : ""}`}>
        {children}
      </div>

      {endIcon && (
        <div
          className={`top-1/2 right-4 absolute -translate-y-1/2 ${error ? "text-[#e94335]" : "text-label"}`}
        >
          {endIcon}
        </div>
      )}
    </div>

    {hint && !error && <p className="mt-1 text-text-muted text-xs">{hint}</p>}

    <FormErrorMessage error={error ? error : null} />
  </div>
);

export default FormField;
