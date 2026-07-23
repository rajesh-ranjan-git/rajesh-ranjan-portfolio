"use client";

import { useState } from "react";
import { SectionProps } from "@/types/props/sections.props.types";
import SectionHeading from "@/components/sections/section.heading";
import SectionDescription from "@/components/sections/section.description";
import SkillsToggle from "@/components/skills/skills.toggle";
import SkillsContainer from "@/components/skills/skills.container";
import ToolsContainer from "@/components/skills/tools.container";
import RainSkills from "@/components/skills/rain.skills";
import FadeIn from "@/components/ui/fade-in/fade.in";

const icons = [
  "/assets/tech-img/react.svg",
  "/assets/tech-img/next-js.svg",
  "/assets/tech-img/javascript.svg",
  "/assets/tech-img/typescript.svg",
  "/assets/tech-img/node-js.svg",
  "/assets/tech-img/mongo-db.svg",
  "/assets/tech-img/git.svg",
  "/assets/tech-img/docker.svg",
];

const Skills = ({ title, description }: SectionProps) => {
  const [activeSkillButton, setActiveSkillButton] = useState<
    "skills" | "tools"
  >("skills");

  return (
    <section id="skills">
      {title ? <SectionHeading title={title} /> : null}

      {description ? <SectionDescription description={description} /> : null}

      <div className="items-center gap-12 md:gap-24 grid grid-cols-1 lg:grid-cols-2 w-full">
        <FadeIn delay={150} distance={40} className="w-full h-full">
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
          <FadeIn delay={150} distance={40}>
            <SkillsContainer activeSkillButton={activeSkillButton} />
          </FadeIn>

          <FadeIn delay={150} distance={40}>
            <ToolsContainer activeSkillButton={activeSkillButton} />
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Skills;
