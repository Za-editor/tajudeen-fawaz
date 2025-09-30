import React, { useState } from "react";

const ToggleSwitch = ({onToggle}) => {
    const [isOn, setIsOn] = useState(false);
    const checkState = () => {
        onToggle();
        setIsOn((prev) => !prev)
    }

  return (
    <div className="relative z-50">
      <input
        type="checkbox"
        id="toggle-switch"
        className="hidden"
        checked={isOn}
        onChange={checkState}
      />

      <label
        htmlFor="toggle-switch"
        className={`flex items-center justify-between w-30 h-12 rounded-full cursor-pointer px-4 transition-colors bg-[#192f3d]`}
      >
        <span
          className={`text-[#e9e9e9] font-bold text-sm transition-opacity ${
            isOn ? "opacity-100" : "opacity-0"
          }`}
        >
          CLOSE
        </span>

        <span
          className={`absolute top-1 left-1 w-10 h-10 rounded-full bg-[#e9e9e9] flex flex-col items-center justify-center gap-1.5 duration-700 transition-transform ${
            isOn ? "translate-x-18" : "translate-x-0"
          }`}
        >
          <span
            className={`w-[18px] h-[2px] bg-black transition-transform ${
              isOn ? "rotate-45 translate-x-[3px] translate-y-[3px]" : ""
            }`}
          />

          <span
            className={`w-[18px] h-[2px] bg-black transition-transform ${
              isOn ? "-rotate-45 translate-x-[3px] -translate-y-[3px]" : ""
            }`}
          />
        </span>

        <span
          className={`text-[#e9e9e9] font-bold text-sm transition-opacity ${
            !isOn ? "opacity-100" : "opacity-0"
          }`}
        >
          MENU
        </span>
      </label>
    </div>
  );
};

export default ToggleSwitch;
