import React from "react";
import { AiOutlineEdit, AiOutlineEye } from "react-icons/ai";
import { BsTrash3 } from "react-icons/bs";

const ShowOption = (props) => {
  const { handleEdit, handleDelete, handleView } = props;
  return (
    <div className="rounded z-30 icon-bg absolute top-10 p-2 border border-color min-w-[80px] max-w-[100px] justify-center  sm:left-1 flex-col right-2 text-color gap-4 flex ">
      <span
        onClick={handleEdit}
        className="cursor-pointer flex items-center gap-2"
      >
        <AiOutlineEdit /> Edit
      </span>

      <span
        onClick={handleView}
        className="cursor-pointer flex items-center gap-2"
      >
        <AiOutlineEye /> View
      </span>
      <span
        onClick={handleDelete}
        className="cursor-pointer flex items-center gap-2"
      >
        <BsTrash3 /> Delete
      </span>
    </div>
  );
};

export default ShowOption;
