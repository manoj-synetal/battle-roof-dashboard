import React from "react";

const Button = ({ title, icon, event }) => {
  return (
    <button
      type="button"
      onClick={event}
      className="bg-primary-button justify-center text-sm flex items-center gap-1.5 cursor-pointer tracking-wider p-2 rounded text-white"
    >
      {icon}
      {title}
    </button>
  );
};

export default Button;
