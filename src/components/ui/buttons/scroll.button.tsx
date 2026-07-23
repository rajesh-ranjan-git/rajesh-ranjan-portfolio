"use client";

import { FaHandPointUp } from "react-icons/fa6";
import { useAppStore } from "@/store/store";
import { useScrollVisibility } from "@/hooks/useScrollVisibility";
import MaskedButton from "@/components/ui/buttons/masked.button";

const ScrollButton = () => {
  const activeTheme = useAppStore((state) => state.activeTheme);
  const isVisible = useScrollVisibility({
    threshold: 0.5,
    useViewportHeight: true,
  });

  const scrollToTop = () => {
    window.history.replaceState(null, "", "/");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`fixed z-20 right-2 bottom-2 transition-all duration-500 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <MaskedButton
        btnTextSize="md"
        variant="mask-2"
        color={activeTheme === "dark" ? "#3f82d9" : "#040b14"}
        className="p-2 md:text-2xl"
        onClick={scrollToTop}
      >
        <FaHandPointUp />
      </MaskedButton>
    </div>
  );
};

export default ScrollButton;
