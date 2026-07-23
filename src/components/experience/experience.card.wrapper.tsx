import experienceStyles from "@/styles/experience.module.css";
import {
  getExperienceDuration,
  getExperienceTimeLine,
} from "@/helpers/owner.helpers";
import { ExperienceCardWrapperProps } from "@/types/props/sections.props.types";
import ExperienceCard from "@/components/experience/experience.card";
import FadeIn from "@/components/ui/fade-in/fade.in";

const ExperienceCardWrapper = ({
  isReversed,
  experience,
}: ExperienceCardWrapperProps) => {
  const timeline = getExperienceTimeLine(
    experience.startMonth,
    experience.startYear,
    experience.endMonth,
    experience.endYear,
    experience.isCurrent,
  );
  const duration = getExperienceDuration(
    experience.startMonth,
    experience.startYear,
    experience.endMonth,
    experience.endYear,
    experience.isCurrent,
  );

  return (
    <div className="relative gap-0 grid grid-cols-[40px_1fr] md:grid-cols-[1fr_72px_1fr] auto-cols-fr py-12 w-full">
      <div
        className={`justify-end items-stretch text-left [grid-area:1/2/2/3] md:[grid-area:auto] ${isReversed ? "md:order-3 md:text-left" : "md:order-1 md:text-right"}`}
      >
        <div className="top-[50vh] sticky mb-4 md:mb-0">
          <FadeIn delay={150} distance={40}>
            <>
              <h4 className="font-alkatra">{timeline || "2026"}</h4>
              {duration ? (
                <h6 className="font-arima font-bold text-secondary">
                  &#40;{duration}&#41;
                </h6>
              ) : null}
            </>
          </FadeIn>
        </div>
      </div>
      <div className="flex justify-start md:justify-center md:order-2 [grid-area:1/1/3/2] md:[grid-area:auto]">
        <div
          className={`top-[50vh] sticky bg-alternate-secondary border-4 border-alternate-bg rounded-full w-6 h-6 hover:scale-105 transition-all duration-300 ${experienceStyles.timeline_circle}`}
        ></div>
      </div>
      <div
        className={`${experienceStyles.timeline_right} ${isReversed ? "md:order-1" : "md:order-3"}`}
      >
        <FadeIn delay={150} threshold={0}>
          <ExperienceCard experience={experience} />
        </FadeIn>
      </div>
    </div>
  );
};

export default ExperienceCardWrapper;
