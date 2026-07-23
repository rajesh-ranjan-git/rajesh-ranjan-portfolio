import { SectionProps } from "@/types/props/sections.props.types";
import FadeIn from "@/components/ui/fade-in/fade.in";

const SectionHeading = ({ title }: Partial<SectionProps>) => {
  return (
    <>
      {title ? (
        <FadeIn delay={150} distance={40}>
          <h2 className="after:block lg:after:bottom-12 after:bottom-6 after:absolute relative after:bg-primary pb-8 lg:pb-12 after:rounded-lg after:w-20 after:h-1.5 font-arima">
            {title}
          </h2>
        </FadeIn>
      ) : null}
    </>
  );
};

export default SectionHeading;
