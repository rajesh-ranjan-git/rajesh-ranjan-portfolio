import { FormButtonProps } from "@/types/props/forms.props.types";
import Loader from "@/components/ui/loader/loader";

const FormButton = ({
  variant = "secondary",
  size = "md",
  loading,
  children,
  className = "",
  disabled,
  ...props
}: FormButtonProps) => {
  const base =
    "inline-flex items-center justify-center gap-2 font-medium transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none shadow-[0_12px_20px_var(--color-surface-shadow)]";

  const sizes = {
    sm: "px-3 py-1.5 text-sm rounded-md",
    md: "px-5 py-2.5 text-base rounded-md",
  };

  const variants = {
    primary:
      "active:scale-[0.98] bg-button-bg text-fixed-light hover:bg-accent-blue border border-surface-border-hover cursor-pointer py-3 transition-all duration-300",
    secondary:
      "active:scale-[0.98] bg-button-bg text-fixed-light hover:bg-accent-blue border border-surface-border-hover cursor-pointer py-3 transition-all duration-300",
    ghost:
      "active:scale-[0.98] bg-button-bg text-fixed-light hover:bg-accent-blue border border-surface-border-hover cursor-pointer py-3 transition-all duration-300",
    danger:
      "active:scale-[0.98] bg-button-bg text-fixed-light hover:bg-accent-blue border border-surface-border-hover cursor-pointer py-3 transition-all duration-300",
  };

  return (
    <button
      {...props}
      disabled={disabled || loading}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
    >
      {loading ? <Loader /> : null}

      {children}
    </button>
  );
};

export default FormButton;
