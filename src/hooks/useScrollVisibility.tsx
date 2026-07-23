import { useEffect, useState } from "react";
import { UseScrollVisibilityProps } from "@/types/props/hooks.props.types";

export const useScrollVisibility = ({
  threshold = 100,
  useViewportHeight = false,
}: UseScrollVisibilityProps = {}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = useViewportHeight
        ? window.innerHeight * threshold
        : threshold;

      setIsVisible(window.scrollY > triggerPoint);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshold, useViewportHeight]);

  return isVisible;
};
