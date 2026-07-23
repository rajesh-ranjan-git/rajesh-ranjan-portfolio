import experienceStyles from "@/styles/experience.module.css";

const ExperienceProgress = () => {
  return (
    <div
      className={`absolute top-0 left-3 md:left-1/2 -translate-x-1/2 bg-fixed-secondary w-1 h-full ${experienceStyles.timeline_progress}`}
    >
      <div
        className={`absolute w-1 origin-top ${experienceStyles.timeline_progress_bar}`}
      ></div>
    </div>
  );
};

export default ExperienceProgress;
