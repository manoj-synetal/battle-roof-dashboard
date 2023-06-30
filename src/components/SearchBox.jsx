import React from "react";

const SearchBox = ({ value, handleChange, placeholder }) => {
  return (
    <div className="rounded-full border-color flex w-full sm:w-60 items-center border  p-2 pl-4 ">
      <input
        type="text"
        className=" outline-none  bg-transparent tracking-wider text-sm w-full"
        placeholder={`Search ${placeholder}...`}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
