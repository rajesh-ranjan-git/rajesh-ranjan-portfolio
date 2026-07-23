"use client";

import { CSSProperties, useEffect, useState } from "react";
import Image from "next/image";
import skillsStyles from "@/styles/skills.module.css";
import { RainItem } from "@/types/types/sections.types";
import { RainSkillsProps } from "@/types/props/sections.props.types";

const RainSkills = ({ icons, count = 20, className = "" }: RainSkillsProps) => {
  const [items, setItems] = useState<RainItem[]>([]);

  const generateItems = () => {
    return Array.from({ length: count }, (_, index) => ({
      id: index,
      src: icons[Math.floor(Math.random() * icons.length)],
      left: Math.random() * 100,
      size: 60,
      duration: 6 + Math.random() * 6,
      delay: Math.random() * -12,
      drift: 0,
      rotation: Math.random() * 360,
      opacity: 0.3 + Math.random() * 0.7,
    }));
  };

  useEffect(() => {
    setItems(generateItems());
  }, []);

  return (
    <div
      className={`pointer-events-none rounded-2xl absolute inset-0 overflow-hidden ${skillsStyles.rain_mask} ${className}`}
    >
      {items.map((item) => (
        <Image
          key={item.id}
          src={item.src}
          alt=""
          width={item.size}
          height={item.size}
          draggable={false}
          className={`${skillsStyles.icon_rain} absolute select-none bg-fixed-light/80 rounded-2xl p-2`}
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
        />
      ))}
    </div>
  );
};

export default RainSkills;
