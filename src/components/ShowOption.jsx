import React from "react";
import { AiOutlineEdit, AiOutlineEye } from "react-icons/ai";
import { BsTrash3 } from "react-icons/bs";

const ShowOption = (props) => {
  const { handleEdit, handleDelete, handleView } = props;
  return (
    <div className="rounded z-50 text-base  right-20 text-color gap-3 flex ">
      <span onClick={handleEdit} className="cursor-pointer">
        <AiOutlineEdit />
      </span>

      <span onClick={handleView} className="cursor-pointer">
        <AiOutlineEye />
      </span>
      <span onClick={handleDelete} className="cursor-pointer">
        <BsTrash3 />
      </span>
    </div>
  );
};

export default ShowOption;
