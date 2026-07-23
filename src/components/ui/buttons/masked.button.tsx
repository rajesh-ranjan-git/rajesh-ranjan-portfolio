import buttonStyles from "@/styles/button.module.css";
import { ButtonProps } from "@/types/props/common.props.types";

const MaskedButton = ({
  btnTextSize,
  variant,
  color,
  children,
  className,
  onClick,
}: ButtonProps) => {
  return (
    <div className="relative shadow-[0_5px_10px_var(--color-surface-shadow)] rounded-xl overflow-hidden font-semibold active:scale-95 duration-500">
      <span
        style={{ borderColor: color, color: color }}
        className={`absolute flex bg-fixed-light border-2 justify-center items-center m-auto rounded-xl w-full h-full overflow-hidden text-center uppercase transition-all duration-300 ${btnTextSize ? `text-${btnTextSize}` : `text-sm`} ${className}`}
      >
        {children}
      </span>
      <button
        style={{ backgroundColor: color, borderColor: color }}
        onClick={onClick}
        className={`p-1 border-2 w-full h-full text-fixed-light cursor-pointer mask-no-repeat uppercase transition-all duration-300 ${btnTextSize ? `text-${btnTextSize}` : `text-sm`} ${variant === "mask-1" ? buttonStyles.btn_mask_1 : buttonStyles.btn_mask_2} ${className}`}
      >
        {children}
      </button>
    </div>
  );
};

export default MaskedButton;
