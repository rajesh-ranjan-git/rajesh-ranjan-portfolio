"use client";

import { useEffect, useRef, useState } from "react";
import { UseInViewOptionsProps } from "@/types/props/hooks.props.types";

export function useInView<T extends HTMLElement = HTMLDivElement>(
  options: UseInViewOptionsProps = {},
) {
  const {
    threshold = 0.15,
    rootMargin = "0px 0px 5% 0px",
    once = false,
  } = options;

  const ref = useRef<T | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (once) observer.unobserve(entry.target);
        } else if (!once) {
          setIsInView(false);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, isInView };
}
