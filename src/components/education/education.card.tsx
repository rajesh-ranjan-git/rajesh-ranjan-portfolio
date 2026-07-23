import { EducationCardProps } from "@/types/props/sections.props.types";
import EducationImage from "@/components/education/education.image";
import EducationText from "@/components/education/education.text";

const EducationCard = ({ education }: EducationCardProps) => {
  return (
    <div className="group before:absolute relative before:inset-0 flex items-center bg-surface-bg before:bg-[url('/assets/background/education-bg.webp')] before:bg-position-[-1rem] hover:bg-surface-bg-hover before:bg-no-repeat before:opacity-5 shadow-[0_12px_20px_var(--color-surface-shadow)] backdrop-blur-xl mt-36 md:mt-0 md:ml-20 p-6 py-8 md:py-16 pt-36 pr-8 pl-8 md:pl-52 border border-surface-border hover:border-surface-border-active rounded-2xl before:rounded-2xl hover:rounded-3xl before:bg-size-[200%] before:content-[''] transition-all duration-300 before:pointer-events-none">
      {education?.imageSrc ? (
        <EducationImage imageSrc={education.imageSrc} />
      ) : null}

      <EducationText details={education} />
    </div>
  );
};

export default EducationCard;
