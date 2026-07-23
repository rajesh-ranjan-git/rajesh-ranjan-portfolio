import { forwardRef } from "react";
import { FormTextareaProps } from "@/types/props/forms.props.types";

const FormTextarea = forwardRef<HTMLTextAreaElement, FormTextareaProps>(
  ({ className = "", error, ...props }, ref) => (
    <div className="w-full">
      <textarea
        ref={ref}
        {...props}
        className={`bg-input-bg disabled:opacity-50 shadow-sm backdrop-blur-md -mb-2 px-4 py-2.5 border rounded-xl outline-none w-full text-input-text placeholder:text-input-placeholder transition-all duration-300 resize-none disabled:cursor-not-allowed ${error ? "focus:shadow-[#e94335] border-[#e94335]" : "focus:shadow-md border-input-border hover:border-input-border-active focus:border-input-border-active focus:shadow-input-border-active"} ${className}`}
      />
    </div>
  ),
);

export default FormTextarea;
