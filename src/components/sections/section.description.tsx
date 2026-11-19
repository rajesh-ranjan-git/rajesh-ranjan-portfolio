import { SectionProps } from "@/types/props/sections.props.types";
import FadeIn from "@/components/ui/fade-in/fade.in";

const SectionDescription = ({ description }: Partial<SectionProps>) => {
  return (
    <>
      {description ? (
        <FadeIn delay={150} threshold={0}>
          <p className="pb-4 lg:pb-8 text-(length:--fs-h6) leading-[1.4] font-semibold">
            {description}
          </p>
        </FadeIn>
      ) : null}
    </>
  );
};

export default SectionDescription;
