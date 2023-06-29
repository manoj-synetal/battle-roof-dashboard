import React from "react";
import { GoSearch } from "react-icons/go";
import { MdClose } from "react-icons/md";

const SearchBar = ({ handleOpenModal }) => {
  return (
    <div className="w-full flex tracking-wider items-center gap-3">
      <div className="flex justify-center items-center text-2xl sm:text-3xl font-bold w-7 h-7 sm:w-10 sm:h-10 text-color rounded-full p-1.5 sm:p-2.5 cursor-pointer">
        <GoSearch />
      </div>

      <input
        type="text"
        className="w-full text-sm outline-none"
        placeholder="Explore Battle Roof"
      />
      <div
        onClick={() => handleOpenModal("Search")}
        className="bg-color flex justify-center items-center text-2xl sm:text-3xl font-bold w-7 h-7 sm:w-10 sm:h-10 text-color rounded-full p-1.5 sm:p-2.5 cursor-pointer"
      >
        <MdClose />
      </div>
    </div>
  );
};

export default SearchBar;
