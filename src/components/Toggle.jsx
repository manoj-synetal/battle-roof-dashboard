import React from "react";

const Toggle = (props) => {
  const { _id, value, handleChange } = props;
  return (
    <label
      htmlFor={_id}
      className="inline-flex items-center  space-x-4 cursor-pointer "
    >
      <span className="relative ">
        <input
          id={_id}
          type="checkbox"
          checked={value}
          onChange={handleChange}
          className="hidden peer"
        />
        <div className="w-10 h-6 rounded-full shadow-inner bg-white peer-checked:bg-emerald-400"></div>
        <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 icon-bg rounded-full shadow peer-checked:right-0 peer-checked:left-auto "></div>
      </span>
    </label>
  );
};

export default Toggle;
