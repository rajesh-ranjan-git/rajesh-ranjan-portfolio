"use client";

import { FaHandPointUp } from "react-icons/fa6";
import useStore from "@/store/store";
import { MAIN_CONTENT_ID } from "@/config/common.config";
import useScrollVisibility from "@/hooks/useScrollVisibility";
import MaskedButton from "@/components/ui/buttons/masked.button";

const ScrollButton = () => {
  const activeTheme = useStore((state) => state.activeTheme);
  const isVisible = useScrollVisibility({
    threshold: 0.5,
    useViewportHeight: true,
  });

  const scrollToTop = () => {
    window.history.replaceState(null, "", window.location.pathname);

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: reduceMotion ? "auto" : "smooth",
    });

    // The button hides itself at the top, so hand focus back to the page start.
    document
      .getElementById(MAIN_CONTENT_ID)
      ?.focus({ preventScroll: true });
  };

  return (
    <div
      inert={!isVisible}
      className={`fixed z-20 right-2 bottom-2 transition-all duration-500 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <MaskedButton
        name="Scroll To Top"
        btnTextSize="md"
        variant="mask-2"
        color={activeTheme === "dark" ? "#3f82d9" : "#040b14"}
        className="p-2 md:text-2xl"
        onClick={scrollToTop}
      >
        <FaHandPointUp aria-hidden="true" />
      </MaskedButton>
    </div>
  );
};

export default ScrollButton;
