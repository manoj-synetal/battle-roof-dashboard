import React from "react";
import Select from "react-select";
import { MdClose, MdOutlineCloudUpload } from "react-icons/md";
import Button from "../../components/Button";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const Drawer = ({ handleCloseModal, editData }) => {
  return (
    <div className="tracking-wider overflow-hidden absolute z-50 top-0 flex justify-end left-0 w-full h-screen bg-modal">
      <div className="w-96 pb-10 md:w-1/2 h-full overflow-auto lg:w-2/5 p-4 bg-white">
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
          {/* Name & Stock */}
          <section className="grid sm:grid-cols-2 gap-2">
            <div className="flex flex-col">
              <label htmlhtmlFor="GameName" className="text-sm">
                Game Name*
              </label>
              <Select id="GameName" options={options} />
            </div>
            <div className="flex flex-col">
              <label htmlhtmlFor="tournamentName" className="text-sm">
                Tournament Name
              </label>
              <input
                id="tournamentName"
                type="text"
                className="rounded py-1 px-2 outline-none border"
              />
            </div>
          </section>

          {/* Prices */}
          <section className="grid sm:grid-cols-2 gap-2">
            <div className="flex flex-col">
              <label htmlhtmlFor="Tournament" className="text-sm">
                Tournament Type
              </label>
              <Select id="Tournament" options={options} />
            </div>
            <div className="flex flex-col">
              <label htmlhtmlFor="link" className="text-sm">
               Link
              </label>
              <input
                id="link"
                type="text"
                className="rounded py-1 px-2 outline-none border"
              />
            </div>
            <div className="flex flex-col">
              <label htmlhtmlFor="maps" className="text-sm">
                Maps*
              </label>
              <Select id="maps" options={options} />
            </div>
            <div className="flex flex-col">
              <label htmlhtmlFor="fee" className="text-sm">
                Entry Fee
              </label>
              <input
                id="fee"
                type="text"
                className="rounded py-1 px-2 outline-none border"
              />
            </div>
            <div className="flex flex-col">
              <label htmlhtmlFor="prizepool" className="text-sm">
               Prize Pool
              </label>
              <input
                id="prizepool"
                type="text"
                className="rounded py-1 px-2 outline-none border"
              />
            </div>

            <div className="flex flex-col">
              <label htmlhtmlFor="slots" className="text-sm">
              Total Slots
              </label>
              <input
                id="slots"
                type="text"
                className="rounded py-1 px-2 outline-none border"
              />
            </div>
            <div className="flex flex-col">
              <label htmlhtmlFor="mode" className="text-sm">
                Game Mode
              </label>
              <input
                id="mode"
                type="text"
                className="rounded py-1 px-2 outline-none border"
              />
            </div>
            <div className="flex flex-col">
              <label htmlhtmlFor="status" className="text-sm">
                Status
              </label>
              <input
                id="status"
                type="text"
                className="rounded py-1 px-2 outline-none border"
              />
            </div>
            <div className="flex flex-col">
              <label htmlhtmlFor="time" className="text-sm">
                Time
              </label>
              <input
                id="time"
                type="text"
                className="rounded py-1 px-2 outline-none border"
              />
            </div>

           
          </section>

         

         
          
         

        

          {/* Images */}
          <div className="mt-2">
            <label
              htmlhtmlFor="images"
              className="text-sm flex flex-col justify-center rounded border-dashed border p-5 items-center"
            >
              <MdOutlineCloudUpload className="text-3xl mb-0.5" />
              Upload Images
            </label>
            <input
              id="images"
              type="file"
              className="rounded py-1 px-2 hidden outline-none border"
            />
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

export default Drawer;
