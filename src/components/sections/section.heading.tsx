import { SectionHeadingProps } from "@/types/props/sections.props.types";
import FadeIn from "@/components/ui/fade-in/fade.in";

// h2 metrics from globals.css, so an h1 heading looks identical to an h2 one.
const H2_LOOK = "text-(length:--fs-h2) leading-[1.2] font-bold";

const SectionHeading = ({ title, as: Heading = "h2" }: SectionHeadingProps) => {
  return (
    <>
      {title ? (
        <FadeIn delay={150} threshold={0}>
          <Heading
            className={`after:block lg:after:bottom-12 after:bottom-6 after:absolute relative after:bg-primary pb-8 lg:pb-12 after:rounded-lg after:w-20 after:h-1.5 font-arima ${Heading === "h1" ? H2_LOOK : ""}`}
          >
            {title}
          </Heading>
        </FadeIn>
      ) : null}
    </>
  );
};

export default SectionHeading;
