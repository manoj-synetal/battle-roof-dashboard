import React from "react";

const Button = ({ title, icon, event }) => {
  return (
    <div
      onClick={event}
      className="bg-primary-button justify-center text-sm flex items-center gap-1 cursor-pointer tracking-wider py-2 px-4 rounded text-white"
    >
      {icon}
      {title}
    </div>
  );
};

export default Button;
