"use client";

import { useState } from "react";
import { skillsConfig, toolsConfig } from "@/config/technologies.config";
import { SectionProps } from "@/types/props/sections.props.types";
import { useAppStore } from "@/store/store";
import SectionHeading from "@/components/sections/section.heading";
import SectionDescription from "@/components/sections/section.description";
import SkillsToggle from "@/components/skills/skills.toggle";
import SkillsContainer from "@/components/skills/skills.container";
import ToolsContainer from "@/components/skills/tools.container";
import RainSkills from "@/components/skills/rain.skills";
import FadeIn from "@/components/ui/fade-in/fade.in";

const Skills = ({ title, description }: SectionProps) => {
  const [activeSkillButton, setActiveSkillButton] = useState<
    "skills" | "tools"
  >("skills");

  const activeTheme = useAppStore((state) => state.activeTheme);
  const iconTheme = activeTheme === "dark" ? "light" : "dark";

  const icons = [
    ...skillsConfig.map((skill) =>
      skill.themed
        ? `/assets/tech-img/${skill.id}-${iconTheme}.svg`
        : `/assets/tech-img/${skill.id}.svg`,
    ),
    ...toolsConfig.map((tool) =>
      tool.themed
        ? `/assets/tech-img/${tool.id}-${iconTheme}.svg`
        : `/assets/tech-img/${tool.id}.svg`,
    ),
  ];

  return (
    <section id="skills">
      {title ? <SectionHeading title={title} /> : null}

      {description ? <SectionDescription description={description} /> : null}

      <div className="items-center gap-12 md:gap-24 grid grid-cols-1 lg:grid-cols-2 w-full">
        <FadeIn
          delay={150}
          distance={40}
          threshold={0}
          className="w-full h-full"
        >
          <div className="flex flex-col justify-between items-center gap-4 w-full h-full">
            <SkillsToggle
              activeSkillButton={activeSkillButton}
              setActiveSkillButton={setActiveSkillButton}
            />

            <div className="relative rounded-2xl w-full md:h-full min-h-20">
              <RainSkills icons={icons} />
            </div>
          </div>
        </FadeIn>

        <div className="relative">
          {activeSkillButton === "skills" ? (
            <FadeIn delay={150} threshold={0}>
              <SkillsContainer
                activeSkillButton={activeSkillButton}
                iconTheme={iconTheme}
              />
            </FadeIn>
          ) : null}

          {activeSkillButton === "tools" ? (
            <FadeIn delay={150} threshold={0}>
              <ToolsContainer
                activeSkillButton={activeSkillButton}
                iconTheme={iconTheme}
              />
            </FadeIn>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default Skills;
