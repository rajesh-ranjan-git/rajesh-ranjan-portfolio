"use client";

import { basicDetails } from "@/config/owner.config";
import { useSectionNavigation } from "@/hooks/useSectionNavigation";
import MaskedButton from "@/components/ui/buttons/masked.button";

const GreetingsButtons = () => {
  const { scrollToSection } = useSectionNavigation({
    sectionIds: ["contact"],
  });

  return (
    <div className="flex justify-center lg:justify-start items-center gap-2 md:gap-6 w-full">
      <MaskedButton
        btnTextSize="md"
        variant="mask-1"
        color="#3f82d9"
        className="p-3 md:px-6 md:text-lg"
        onClick={() => {
          scrollToSection("contact");
        }}
      >
        Contact Me
      </MaskedButton>

      {basicDetails.resumeLink ? (
        <MaskedButton
          btnTextSize="md"
          variant="mask-2"
          color="#3f82d9"
          className="p-3 md:px-6 md:text-lg"
          onClick={() => {
            window.open(
              basicDetails.resumeLink,
              "_blank",
              "noopener,noreferrer",
            );
          }}
        >
          See My Resume
        </MaskedButton>
      ) : null}
    </div>
  );
};

export default GreetingsButtons;
