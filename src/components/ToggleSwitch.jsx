import React  from "react";

const ToggleSwitch = ({ isOn, onToggle }) => {


  return (
    <div className="relative z-50">
      <input
        type="checkbox"
        id="toggle-switch"
        className="hidden"
        checked={isOn}
        onChange={onToggle}
      />

      <label
        htmlFor="toggle-switch"
        className={`flex items-center justify-between 
          w-24 h-10 sm:w-30 sm:h-12 
          rounded-full cursor-pointer px-3 sm:px-4 transition-colors bg-gradient`}
      >
        <span
          className={`text-[#e9e9e9] font-bold text-xs sm:text-sm transition-opacity ${
            isOn ? "opacity-100" : "opacity-0"
          }`}
        >
          CLOSE
        </span>

        <span
          className={`absolute top-1 left-1 
            w-8 h-8 sm:w-10 sm:h-10 
            rounded-full bg-[#e9e9e9] flex flex-col items-center justify-center gap-1.5 duration-700 transition-transform 
            ${isOn ? "translate-x-14 sm:translate-x-18" : "translate-x-0"}`}
        >
          <span
            className={`w-[14px] sm:w-[18px] h-[2px] bg-black transition-transform ${
              isOn
                ? "rotate-45 translate-x-[2px] sm:translate-x-[3px] translate-y-[2px] sm:translate-y-[3px]"
                : ""
            }`}
          />
          <span
            className={`w-[14px] sm:w-[18px] h-[2px] bg-black transition-transform ${
              isOn
                ? "-rotate-45 translate-x-[2px] sm:translate-x-[3px] -translate-y-[2px] sm:-translate-y-[3px]"
                : ""
            }`}
          />
        </span>

        <span
          className={`text-[#e9e9e9] font-bold text-xs sm:text-sm transition-opacity ${
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
