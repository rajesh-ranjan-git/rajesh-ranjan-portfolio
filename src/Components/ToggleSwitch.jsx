import React, { useState } from "react";
import emoji from "react-easy-emoji";

const ToggleSwitch = () => {
  const [isChecked, setChecked] = useState(false);
  return (
    <label className="inline-block h-[30px] relative w-[54px] p-[2px]">
      <input
        className="scale-[0.5]"
        type="checkbox"
        checked={false}
        onChange={() => {
          setChecked(!isChecked);
        }}
      />
      <span
        className={
          !isChecked
            ? "flex items-center rounded-[34px] bottom-0 left-0 absolute transition-[0.4s] bg-[#ccc] cursor-pointer right-0 top-0 before:rounded-[50%] before:grid before:content-[''] before:h-[22px] before:left-[4px] before:w-[24px] before:absolute before:duration-[0.4s] before:bg-[#fff]"
            : "flex items-center rounded-[34px] bottom-0 left-0 absolute transition-[0.4s] bg-[#2196f3] cursor-pointer right-0 top-0 before:rounded-[50%] before:grid before:content-[''] before:h-[22px] before:w-[24px] before:absolute before:duration-[0.4s] before:translate-x-[26px] before:bg-[#fff]"
        }
      >
        <span
          className={
            !isChecked
              ? "flex items-center ml-[5px] z-10"
              : "flex items-center ml-[2px] z-10 translate-x-[26px]"
          }
        >
          {isChecked ? emoji("🌜") : emoji("☀️")}
        </span>
      </span>
    </label>
  );
};

export default ToggleSwitch;
