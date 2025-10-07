import React from "react";

const Button = ({ text, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`relative overflow-hidden ${className} group  flex items-center justify-center`}
    >
      <span className="block transition-transform duration-900 ease-in-out group-hover:-translate-y-[150%]">
        {text}
      </span>

      <span className="absolute left-full top-[25%] w-full transition-transform duration-900 ease-in-out group-hover:-translate-x-[100%]">
        {text}
      </span>
    </button>
  );
};

export default Button;
