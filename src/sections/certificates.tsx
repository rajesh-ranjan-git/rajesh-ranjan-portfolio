"use client";

import { certificates } from "@/config/owner.config";
import { SectionProps } from "@/types/props/sections.props.types";
import { useAppStore } from "@/store/store";
import SectionHeading from "@/components/sections/section.heading";
import SectionDescription from "@/components/sections/section.description";
import Carousel from "@/components/ui/carousel/carousel";
import FadeIn from "@/components/ui/fade-in/fade.in";

const Certificates = ({ title, description }: SectionProps) => {
  const activeSection = useAppStore((state) => state.activeSection);

  return (
    <section id="certificates">
      {title ? <SectionHeading title={title} /> : null}

      {description ? <SectionDescription description={description} /> : null}

      <FadeIn delay={150} distance={40}>
        <div className="w-full">
          <Carousel
            slides={certificates}
            autoPlay={activeSection === "certificates"}
            autoPlayInterval={3000}
            showArrows={false}
            scale="all"
            slideHeightClassName="h-72 sm:h-80 md:h-96 lg:h-104"
          />
        </div>
      </FadeIn>
    </section>
  );
};

export default Certificates;
