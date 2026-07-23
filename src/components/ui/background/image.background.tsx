import { ImageBackgroundProps } from "@/types/props/common.props.types";

const ImageBackground = ({ className }: ImageBackgroundProps) => {
  return (
    <div
      className={`-z-1 absolute inset-0 rounded-[84px] bg-surface-bg hover:bg-surface-bg-hover border border-surface-border hover:border-surface-border-hover shadow-[0_12px_20px_var(--color-surface-shadow)] ${className}`}
    />
  );
};

export default ImageBackground;
