import { SkillsToggleProps } from "@/types/props/sections.props.types";

const SkillsToggle = ({
  activeSkillButton,
  setActiveSkillButton,
}: SkillsToggleProps) => {
  return (
    <div className="relative flex items-center shadow-[0_12px_20px_var(--color-surface-shadow)] p-1 border border-primary rounded-full w-max font-semibold">
      <span
        className={`absolute left-1 top-1 bottom-1 w-[calc(50%-4px)] rounded-full bg-alternate-bg transition-transform duration-300 ease-in-out ${
          activeSkillButton === "tools" ? "translate-x-full" : "translate-x-0"
        }`}
      />

      <button
        onClick={() => setActiveSkillButton("skills")}
        className={`relative px-8 py-2 rounded-full transition-colors cursor-pointer ${activeSkillButton === "skills" ? "text-alternate-primary" : "text-primary"}`}
      >
        Skills
      </button>
      <button
        onClick={() => setActiveSkillButton("tools")}
        className={`relative px-8 py-2 rounded-full transition-colors cursor-pointer ${activeSkillButton === "tools" ? "text-alternate-primary" : "text-primary"}`}
      >
        Tools
      </button>
    </div>
  );
};

export default SkillsToggle;
