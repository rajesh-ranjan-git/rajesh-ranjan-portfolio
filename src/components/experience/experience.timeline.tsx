import { experience } from "@/config/owner.config";
import ExperienceProgress from "@/components/experience/experience.progress";
import ExperienceCardWrapper from "@/components/experience/experience.card.wrapper";

const ExperienceTimeline = () => {
  return (
    <div className="relative flex flex-col justify-center items-center">
      <ExperienceProgress />

      {experience.map((experienceItem, index) => {
        const isReversed = index % 2 === 1;

        return (
          <ExperienceCardWrapper
            key={experienceItem.designation}
            isReversed={isReversed}
            experience={experienceItem}
          />
        );
      })}
    </div>
  );
};

export default ExperienceTimeline;
