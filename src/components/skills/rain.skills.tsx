"use client";

import { CSSProperties } from "react";
import Image from "next/image";
import skillsStyles from "@/styles/skills.module.css";
import { RainSkillsProps } from "@/types/props/sections.props.types";
import { createSeededRandom } from "@/helpers/common.helpers";

const MAX_RAIN_ITEMS = 50;

const random = createSeededRandom(1995);

// Layout is generated once per module. Icons are picked by index at render
// time, so they follow the active theme.
const RAIN_LAYOUT = Array.from({ length: MAX_RAIN_ITEMS }, (_, index) => ({
  id: index,
  iconPick: random(),
  left: random() * 100,
  size: 60,
  duration: 6 + random() * 6,
  delay: random() * -12,
  drift: 0,
  rotation: random() * 360,
  opacity: 0.3 + random() * 0.7,
}));

const RainSkills = ({ icons, count = 20, className = "" }: RainSkillsProps) => {
  const items = RAIN_LAYOUT.slice(0, Math.min(count, MAX_RAIN_ITEMS));

  return (
    <div
      className={`pointer-events-none rounded-2xl absolute inset-0 overflow-hidden ${skillsStyles.rain_mask} ${className}`}
    >
      {icons.length
        ? items.map((item) => (
            <Image
              key={item.id}
              src={icons[Math.floor(item.iconPick * icons.length)]}
              alt=""
              aria-hidden="true"
              width={item.size}
              height={item.size}
              draggable={false}
              className={`${skillsStyles.icon_rain} absolute select-none bg-surface-bg rounded-[20px] p-0.5`}
              style={
                {
                  left: `${item.left}%`,
                  opacity: item.opacity,
                  "--duration": `${item.duration}s`,
                  "--delay": `${item.delay}s`,
                  "--drift": `${item.drift}px`,
                  "--rotation": `${item.rotation}deg`,
                } as CSSProperties
              }
              loading="lazy"
            />
          ))
        : null}
    </div>
  );
};

export default RainSkills;
