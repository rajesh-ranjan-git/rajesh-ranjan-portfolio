import {
  CARD_SCALE_CLASSES,
  CARD_TRANSLATE_CLASSES,
} from "@/constants/common.constants";
import { CardProps } from "@/types/props/common.props.types";

const Card = ({
  translate,
  scale,
  animateBorder,
  className,
  children,
}: CardProps) => {
  const animationClasses = [
    translate && CARD_TRANSLATE_CLASSES[translate],
    scale && CARD_SCALE_CLASSES[scale],
    animateBorder && "hover:rounded-3xl",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={`group bg-surface-bg hover:bg-surface-bg-hover shadow-[0_12px_20px_var(--color-surface-shadow)] backdrop-blur-xl p-6 border border-surface-border hover:border-surface-border-active rounded-2xl overflow-hidden transition-all duration-300 ${animationClasses} ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
