"use client";

import fadeInStyles from "@/styles/fade.in.module.css";
import { FadeInProps } from "@/types/props/hooks.props.types";
import { useInView } from "@/hooks/useInView";

const FadeIn = ({
  children,
  delay = 0,
  distance = 24,
  className = "",
  once,
  threshold,
}: FadeInProps) => {
  const { ref, isInView } = useInView<HTMLDivElement>({ once, threshold });

  return (
    <div
      ref={ref}
      className={`${fadeInStyles.fade_in} ${isInView ? fadeInStyles.visible : ""} ${className}`}
      style={
        {
          transitionDelay: `${delay}ms`,
          "--distance": `${distance}px`,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
};

export default FadeIn;
