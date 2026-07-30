import Image from "next/image";
import { basicDetails } from "@/config/owner.config";
import { skillsConfig } from "@/config/technologies.config";
import { SkillsToolsProps } from "@/types/props/sections.props.types";
import Card from "@/components/ui/card/card";
import Tooltip from "@/components/ui/tooltip/tooltip";

const SkillsContainer = ({
  activeSkillButton,
  iconTheme,
}: SkillsToolsProps) => {
  const techItems = basicDetails.skills;

  return (
    <div
      className={`flex flex-wrap justify-center items-center gap-2 md:gap-4 transition-all duration-300 ease-in-out ${
        activeSkillButton === "skills"
          ? "opacity-100 scale-100 relative"
          : "opacity-0 scale-95 absolute inset-0 pointer-events-none"
      }`}
    >
      {techItems.map((item) => {
        const skill = skillsConfig.find((tech) => tech.id === item);

        if (!skill) return;

        return (
          <Tooltip
            key={skill?.id}
            content={skill?.label}
            position="top"
            delay={0}
          >
            <Card
              translate="bottom"
              className="px-1 py-1 rounded-[20px] w-20 h-20 overflow-hidden select-none shrink-0"
            >
              <Image
                src={
                  skill.themed
                    ? `/assets/tech-img/${skill.id}-${iconTheme}.svg`
                    : `/assets/tech-img/${skill.id}.svg`
                }
                alt={skill?.id ?? "skill-img"}
                width="100"
                height="100"
                className="w-full h-full object-contain transition-all duration-300 pointer-events-none"
                loading="lazy"
              />
            </Card>
          </Tooltip>
        );
      })}
    </div>
  );
};

export default SkillsContainer;
