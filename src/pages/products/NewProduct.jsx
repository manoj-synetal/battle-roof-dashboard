import React from "react";
import Select from "react-select";
import { MdClose, MdOutlineCloudUpload } from "react-icons/md";
import Button from "../../components/Button";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const NewProduct = ({ handleCloseModal, editData }) => {
  return (
    <div className="tracking-wider overflow-hidden absolute z-50 top-0 flex justify-end left-0 w-full h-screen bg-modal">
      <div className="w-96 pb-10 md:w-1/2 h-full overflow-auto lg:w-2/5 p-4 bg-white">
        {/* Top */}
        <div className="flex justify-between items-center">
          <span className="text-color">
            {editData ? "Update" : "Add"} Product
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
              <label htmlFor="name" className="text-sm">
                Name*
              </label>
              <input
                id="name"
                type="text"
                className="rounded py-1 px-2 outline-none border"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="stocks" className="text-sm">
                Stocks*
              </label>
              <input
                id="stocks"
                type="text"
                className="rounded py-1 px-2 outline-none border"
              />
            </div>
          </section>

          {/* Prices */}
          <section className="grid sm:grid-cols-2 gap-2">
            <div className="flex flex-col">
              <label htmlFor="price" className="text-sm">
                Price*
              </label>
              <input
                id="price"
                type="text"
                className="rounded py-1 px-2 outline-none border"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="salePrice" className="text-sm">
                Sale Price
              </label>
              <input
                id="salePrice"
                type="text"
                className="rounded py-1 px-2 outline-none border"
              />
            </div>
          </section>

          {/* Description */}
          <div className="flex flex-col">
            <label htmlFor="category" className="text-sm">
              Description*
            </label>
            <textarea
              id="category"
              rows={4}
              className="rounded py-1 px-2 outline-none border"
            />
          </div>

          {/* Category & Sub Category */}
          <section className="grid sm:grid-cols-2 gap-2">
            <div className="flex flex-col">
              <label htmlFor="category" className="text-sm">
                Category*
              </label>
              <Select id="category" options={options} />
            </div>
            <div className="flex flex-col">
              <label htmlFor="subCategory" className="text-sm">
                Sub Category*
              </label>
              <Select id="subCategory" options={options} />
            </div>
          </section>

          {/* Tags */}
          <div className="flex flex-col">
            <label htmlFor="tags" className="text-sm">
              Tags
            </label>
            <textarea
              id="tags"
              rows={2}
              className="rounded py-1 px-2 outline-none border"
            />
          </div>

          {/* Sizes & Colors */}
          <section className="grid sm:grid-cols-2 gap-2">
            <div className="flex flex-col">
              <label htmlFor="size" className="text-sm">
                Size*
              </label>
              <Select id="size" options={options} />
            </div>
            <div className="flex flex-col">
              <label htmlFor="colors" className="text-sm">
                Colors*
              </label>
              <Select id="colors" options={options} />
            </div>
          </section>

          {/* Images */}
          <div className="mt-2">
            <label
              htmlFor="images"
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

export default NewProduct;
