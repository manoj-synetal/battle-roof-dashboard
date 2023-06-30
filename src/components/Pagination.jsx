import React from "react";
import { MdExpandLess } from "react-icons/md";

const Pagination = (props) => {
  const { handlePrev, from, to, total, handleForw } = props;

  return (
    <div className=" p-3 sm:text-sm text-xs bg-secondary absolute bottom-0 right-0 w-full flex items-center gap-3 justify-end">
      <div className="">
        {from + 1}
        {` - ${to >= total ? total : to}`} of {total}
      </div>
      <div className=" flex gap-1">
        {/* Previous */}
        <button
          type="button"
          onClick={handlePrev}
          className="w-6 h-6  rounded-full flex justify-center items-center cursor-pointer "
        >
          <MdExpandLess className="text-xl rotate-[270deg]" />
        </button>

        {/* next */}
        <button
          type="button"
          onClick={handleForw}
          className="w-6 h-6  rounded-full flex justify-center items-center cursor-pointer "
        >
          <MdExpandLess className="text-xl rotate-[90deg]" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
