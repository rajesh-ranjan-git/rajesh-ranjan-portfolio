import Image from "next/image";
import { EducationImageProps } from "@/types/props/sections.props.types";

const EducationImage = ({ imageSrc }: EducationImageProps) => {
  return (
    <div className="top-0 md:top-1/2 left-1/2 md:-left-20 z-10 absolute flex justify-start items-center rounded-4xl w-64 md:w-68 overflow-hidden group-hover:scale-102 transition-all -translate-x-1/2 -translate-y-1/2 md:-translate-y-1/2 md:translate-x-0 duration-300 lg:72 shrink-0">
      <Image
        src={imageSrc}
        alt="Education Background"
        width={500}
        height={500}
        className="bg-linear-to-br from-ink via-ink shadow-[0_12px_20px_var(--color-surface-shadow)] border-2 border-fixed-light/80 rounded-4xl w-full h-full transition-all duration-300 to-accent-blue"
      />
    </div>
  );
};

export default EducationImage;
