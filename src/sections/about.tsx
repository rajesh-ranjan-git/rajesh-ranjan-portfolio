import { getAboutDetails } from "@/helpers/owner.helpers";
import { SectionProps } from "@/types/props/sections.props.types";
import AboutImage from "@/components/about/about.image";
import AboutText from "@/components/about/about.text";
import SectionHeading from "@/components/sections/section.heading";
import SectionDescription from "@/components/sections/section.description";
import FadeIn from "@/components/ui/fade-in/fade.in";

const About = ({ title, description }: SectionProps) => {
  const aboutDetails = getAboutDetails();

  return (
    <section id="about">
      {title ? <SectionHeading title={title} /> : null}

      {description ? <SectionDescription description={description} /> : null}

      <div className="items-center gap-12 md:gap-28 grid grid-cols-1 lg:grid-cols-[minmax(18rem,20rem)_minmax(0,1fr)] lg:pl-12 w-full">
        <FadeIn
          delay={150}
          distance={40}
          className="justify-self-center order-2 lg:order-1 w-full md:w-1/2 lg:w-full max-w-[18rem] sm:max-w-[20rem] md:max-w-none"
        >
          <AboutImage />
        </FadeIn>

        <FadeIn
          delay={150}
          distance={40}
          className="order-1 lg:order-2 w-full min-w-0"
        >
          <AboutText
            title={aboutDetails.title}
            description={aboutDetails.description}
            details={aboutDetails.details}
          />
        </FadeIn>
      </div>
    </section>
  );
};

export default About;
