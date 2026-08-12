import { internships } from "@/config/owner.config";
import { SectionProps } from "@/types/props/sections.props.types";
import SectionHeading from "@/components/sections/section.heading";
import SectionDescription from "@/components/sections/section.description";
import InternshipCard from "@/components/internships/internship.card";
import FadeIn from "@/components/ui/fade-in/fade.in";

const Internships = ({ title, description }: SectionProps) => {
  return (
    <section id="internships">
      {title ? <SectionHeading title={title} /> : null}

      {description ? <SectionDescription description={description} /> : null}

      <div className="justify-center items-center gap-8 grid grid-cols-1 lg:grid-cols-2 w-full">
        {internships.map((internship) => (
          <FadeIn
            delay={150}
            distance={40}
            threshold={0}
            key={internship.designation}
          >
            <InternshipCard internship={internship} />
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default Internships;
