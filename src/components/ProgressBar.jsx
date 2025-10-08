import React from "react";

const ProgressBar = ({ value = 0 }) => {
  const clampedValue = Math.min(Math.max(value, 0), 100);

  
  let color;
  if (clampedValue < 40) color = "#EF4444"; 
  else if (clampedValue < 70) color = "#FACC15"; 
  else color = "#22C55E"; 

  return (
    <div className="flex items-center w-full gap-3">
      
      <div className="flex-1 bg-gray-200 rounded-full h-2 overflow-hidden shadow-inner">
        <div
          className="h-full transition-all duration-700 ease-out"
          style={{
            width: `${clampedValue}%`,
            backgroundColor: color,
          }}
        ></div>
      </div>

      
      <span className="text-sm font-medium text-gray-600 min-w-[2.5rem] text-right">
        {clampedValue}%
      </span>
    </div>
  );
};

export default ProgressBar;
