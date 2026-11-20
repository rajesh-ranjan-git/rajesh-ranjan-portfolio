import buttonStyles from "@/styles/button.module.css";
import { ButtonProps } from "@/types/props/common.props.types";
import { NEW_TAB_HINT } from "@/config/common.config";

const MaskedButton = ({
  name,
  btnTextSize,
  variant,
  color,
  children,
  className,
  onClick,
  href,
}: ButtonProps) => {
  const textSizeClassName = btnTextSize ? `text-${btnTextSize}` : `text-sm`;
  const controlClassName = `p-1 border-2 w-full h-full text-fixed-light cursor-pointer mask-no-repeat uppercase transition-all duration-300 ${textSizeClassName} ${variant === "mask-1" ? buttonStyles.btn_mask_1 : buttonStyles.btn_mask_2} ${className}`;
  const controlStyle = { backgroundColor: color, borderColor: color };

  return (
    <div className="relative shadow-[0_5px_10px_var(--color-surface-shadow)] rounded-xl overflow-hidden font-semibold active:scale-95 duration-500 has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-(--focus-ring)">
      {/* Visual underlay revealed by the mask animation; the control below
          carries the accessible name. */}
      <span
        aria-hidden="true"
        style={{ borderColor: color, color: color }}
        className={`absolute flex bg-fixed-light border-2 justify-center items-center m-auto rounded-xl w-full h-full overflow-hidden text-center uppercase transition-all duration-300 ${textSizeClassName} ${className}`}
      >
        {children}
      </span>

      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name}
          style={controlStyle}
          className={`block text-center ${controlClassName}`}
        >
          {children}
          {name ? null : <span className="sr-only">{NEW_TAB_HINT}</span>}
        </a>
      ) : (
        <button
          type="button"
          aria-label={name}
          style={controlStyle}
          onClick={onClick}
          className={controlClassName}
        >
          {children}
        </button>
      )}
    </div>
  );
};

export default MaskedButton;
