import React from "react";
import { MdClose, MdOutlineCloudUpload } from "react-icons/md";

const NewGqme = ({ handleCloseModal, editData }) => {
  return (
    <div className="tracking-wider overflow-hidden absolute z-50 top-0 flex justify-end left-0 w-full h-screen bg-modal">
      <div className="w-96 pb-10 md:w-1/2 h-full overflow-auto lg:w-1/3 p-4 bg-white">
        {/* Top */}
        <div className="flex justify-between items-center">
          <span className="text-color">{editData ? "Update" : "Add"} Game</span>
          <MdClose
            className="text-xl cursor-pointer"
            onClick={handleCloseModal}
          />
        </div>

        <form className="mt-5 grid gap-3">
          {/* Name */}
          <div className="grid gap-1">
            <label htmlFor="name" className="text-sm">
              Name*
            </label>
            <input
              id="name"
              type="text"
              className="rounded py-1.5 px-2 outline-none border"
            />
          </div>

          {/* Image */}
          <div>
            <label
              htmlFor="images"
              className="text-xs flex flex-col gap-1 justify-center rounded border-dashed border-[1.5px] p-4 items-center"
            >
              <MdOutlineCloudUpload className="text-xl mb-0.5" />
              Upload Image
            </label>
            <input
              id="images"
              type="file"
              className="rounded py-1.5 px-2 hidden outline-none border"
            />
          </div>

          {/* Link */}
          <div className="grid gap-1">
            <label htmlFor="link" className="text-sm">
              Link*
            </label>
            <input
              id="link"
              type="text"
              className="rounded py-1.5 px-2 outline-none border"
            />
          </div>

          {/* Banner */}
          <div>
            <label
              htmlFor="banner"
              className="text-xs flex flex-col gap-1 justify-center rounded border-dashed border-[1.5px] p-4 items-center"
            >
              <MdOutlineCloudUpload className="text-xl mb-0.5" />
              Upload Banner
            </label>
            <input
              id="banner"
              type="file"
              className="rounded py-1.5 px-2 hidden outline-none border"
            />
          </div>

          {/* Status */}
          <div className="grid gap-1">
            <label htmlFor="status" className="text-sm">
              Status*
            </label>
            <select
              id="name"
              type="text"
              className="rounded text-sm p-2 outline-none border"
            >
              <option value={1}>Active</option>
              <option value={0}>InActive</option>
            </select>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="bg-primary-button justify-center flex items-center cursor-pointer tracking-wider py-2 px-4 mt-2 rounded text-white"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewGqme;
