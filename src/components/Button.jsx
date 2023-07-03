import React from "react";

const Button = ({ title, icon, event }) => {
  return (
    <button
      type="button"
      onClick={event}
      className="bg-button justify-center text-xs sm:text-sm flex items-center gap-1 cursor-pointer tracking-wider p-2 sm:px-4 rounded text-white"
    >
      <span className="sm:text-xl text-lg">{icon}</span>
      {title}
    </button>
  );
};

export default Button;
