import { FormLabelProps } from "@/types/props/forms.props.types";

const FormLabel = ({ htmlFor, children, required }: FormLabelProps) => (
  <label
    htmlFor={htmlFor}
    className="block text-label mb-1 ml-2 font-semibold text-xs uppercase tracking-wide"
  >
    {children}
    {required && (
      <span className="ml-1 text-accent-purple" aria-hidden>
        *
      </span>
    )}
  </label>
);

export default FormLabel;
