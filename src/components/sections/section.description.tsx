import { SectionProps } from "@/types/props/sections.props.types";
import FadeIn from "@/components/ui/fade-in/fade.in";

const SectionDescription = ({ description }: Partial<SectionProps>) => {
  return (
    <>
      {description ? (
        <FadeIn delay={150} distance={40}>
          <h6 className="pb-4 lg:pb-8">{description}</h6>
        </FadeIn>
      ) : null}
    </>
  );
};

export default SectionDescription;
