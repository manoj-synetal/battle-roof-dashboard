import React from "react";
import Select from "react-select";
import { MdClose, MdOutlineCloudUpload } from "react-icons/md";
import Button from "../../components/Button";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const NewTour = ({ handleCloseModal, editData }) => {
  return (
    <div className="tracking-wider overflow-hidden absolute z-50 top-0 flex justify-end left-0 w-full h-screen bg-modal">
      <div className="w-96 md:w-1/2 h-full overflow-auto lg:w-1/3 p-4 bg-white">
        {/* Top */}
        <div className="flex justify-between items-center">
          <span className="text-color">
            {editData ? "Update" : "Add"} Tournaments
          </span>
          <MdClose
            className="text-xl cursor-pointer"
            onClick={handleCloseModal}
          />
        </div>

        <form className="mt-5 grid gap-3">
          {/* Tour Name */}
          <div className="grid gap-1">
            <label htmlFor="tournamentName" className="text-sm">
              Tournament Name
            </label>
            <input
              id="tournamentName"
              type="text"
              className="rounded py-1 px-2 outline-none border"
            />
          </div>

          {/* GameName */}
          <div className="grid gap-1">
            <label htmlFor="name" className="text-sm">
              Name*
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

          {/* TourType */}
          <div className="grid gap-1">
            <label htmlFor="name" className="text-sm">
              Tournament Type*
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

          {/* Fee */}
          <div className="grid gap-1">
            <label htmlFor="fee" className="text-sm">
              Entry Fee
            </label>
            <input
              id="fee"
              type="text"
              className="rounded py-1 px-2 outline-none border"
            />
          </div>

          {/* Prize */}
          <div className="grid gap-1">
            <label htmlFor="prizepool" className="text-sm">
              Prize Pool
            </label>
            <input
              id="prizepool"
              type="text"
              className="rounded py-1 px-2 outline-none border"
            />
          </div>

          {/* slots */}
          <div className="grid gap-1">
            <label htmlFor="slots" className="text-sm">
              Slots
            </label>
            <input
              id="slots"
              type="text"
              className="rounded py-1 px-2 outline-none border"
            />
          </div>

          {/* Mode */}
          <div className="flex flex-col">
            <label htmlFor="mode" className="text-sm">
              Game Mode
            </label>
            <input
              id="mode"
              type="text"
              className="rounded py-1 px-2 outline-none border"
            />
          </div>

          {/* Status */}
          <div className="flex flex-col">
            <label htmlFor="status" className="text-sm">
              Status
            </label>
            <input
              id="status"
              type="text"
              className="rounded py-1 px-2 outline-none border"
            />
          </div>

          {/* Time */}
          <div className="flex flex-col">
            <label htmlFor="time" className="text-sm">
              Time
            </label>
            <input
              id="time"
              type="datetime-local"
              className="rounded py-1 px-2 outline-none border"
            />
          </div>

          {/* TourType */}
          <div className="grid gap-1">
            <label htmlFor="name" className="text-sm">
              Maps
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

          <button
            type="submit"
            className="bg-primary-button justify-center flex items-center cursor-pointer tracking-wider py-2 px-4 rounded text-white"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewTour;