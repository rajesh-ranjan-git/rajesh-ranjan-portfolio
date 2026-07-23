"use client";

import greetingsStyles from "@/styles/greetings.module.css";
import { basicDetails } from "@/config/owner.config";
import { getFullName } from "@/helpers/owner.helpers";
import Typewriter from "@/components/typewriter/typewriter";
import ScrambleText from "@/components/ui/scramble-text/scramble.text";
import { useAppStore } from "@/store/store";

const GreetingsText = () => {
  const fullName = getFullName();

  const splash = useAppStore((state) => state.splash);
  const activeSection = useAppStore((state) => state.activeSection);

  return (
    <div className="text-fixed-light flex flex-col justify-center pt-4 h-full text-2xl md:text-4xl lg:text-5xl leading-12 lg:leading-20">
      <h1 className="font-semibold">
        Hi There!&nbsp;
        <span
          className={`inline-block ${greetingsStyles.wave}`}
          role="img"
          aria-labelledby="wave"
        >
          👋🏻
        </span>
      </h1>

      <h1 className="text-nowrap">
        I'm
        <span className="text-shadow-[2px_2px_var(--color-surface-shadow-strong)] ml-4 font-alkatra font-bold uppercase text-accent-blue">
          <ScrambleText
            initialText="Loading..."
            finalText={fullName}
            delay={splash ? 2000 : 0}
            trigger={activeSection === "home" ? "visible" : "mount"}
          />
        </span>
      </h1>

      {basicDetails.typewriterTexts.length ? (
        <Typewriter
          words={basicDetails.typewriterTexts}
          typingSpeed={120}
          deletingSpeed={60}
          delayBetweenWords={1000}
          className="text-shadow-[1px_1px_var(--color-surface-shadow-strong)] font-semibold text-xl md:text-3xl lg:text-4xl text-accent-blue"
        />
      ) : null}
    </div>
  );
};

export default GreetingsText;
