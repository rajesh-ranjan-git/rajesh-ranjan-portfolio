import { education } from "@/config/owner.config";
import { SectionProps } from "@/types/props/sections.props.types";
import SectionHeading from "@/components/sections/section.heading";
import SectionDescription from "@/components/sections/section.description";
import EducationCard from "@/components/education/education.card";
import FadeIn from "@/components/ui/fade-in/fade.in";

const Education = ({ title, description }: SectionProps) => {
  return (
    <section id="education">
      {title ? <SectionHeading title={title} /> : null}

      {description ? <SectionDescription description={description} /> : null}

      <div className="justify-center items-center gap-8 grid grid-cols-1 lg:grid-cols-2 w-full">
        {Object.values(education).map((educationItem) => (
          <FadeIn delay={150} distance={40} key={educationItem.name}>
            <EducationCard education={educationItem} />
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default Education;
