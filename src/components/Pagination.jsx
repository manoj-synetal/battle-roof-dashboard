import React from "react";
import { MdExpandLess } from "react-icons/md";

const Pagination = (props) => {
  const {
    handlePrev,
    from,
    to,
    total,
    currentPage,
    numberOfPages,
    handleForw,
  } = props;

  console.log(from, to, total);

  return (
    <div className=" p-3 bg-white absolute bottom-0 right-0 w-full flex items-center gap-5 justify-end">
      <div className="text-sm">
        {from + 1}
        {` - ${to >= total ? total : to}`} of {total}
      </div>
      <div className=" flex gap-2">
        {/* Previous */}
        <span
          onClick={handlePrev}
          className="w-6 h-6  rounded-full flex justify-center items-center cursor-pointer "
        >
          <MdExpandLess className="text-lg rotate-[270deg]" />
        </span>

        {/* Numbers */}
        {Array(numberOfPages)
          .fill()
          .slice(0, 5)
          .map((item, index) => {
            const page = index + 1;
            return (
              <span
                key={index}
                className={`w-6 h-6 ${
                  index + 1 === currentPage && " text-color bg-color"
                } rounded-full flex justify-center items-center cursor-pointer `}
              >
                {page}
              </span>
            );
          })}

        {numberOfPages > 5 && (
          <span
            className={`w-6 h-6 rounded-full flex justify-center items-center cursor-pointer `}
          >
            ...
          </span>
        )}

        {/* next */}
        <span
          onClick={handleForw}
          className="w-6 h-6  rounded-full flex justify-center items-center cursor-pointer "
        >
          <MdExpandLess className="text-lg rotate-[90deg]" />
        </span>
      </div>
    </div>
  );
};

export default Pagination;
