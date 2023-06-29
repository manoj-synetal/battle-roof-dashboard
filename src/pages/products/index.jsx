import React, { useState } from "react";
import Layout from "../../layouts";
import Heading from "../../components/Heading";
import Button from "../../components/Button";
import { BsPlus, BsThreeDots } from "react-icons/bs";
import NewProduct from "./NewProduct";
import { GoSearch } from "react-icons/go";
import { MdExpandLess } from "react-icons/md";
import { Link } from "react-router-dom";

const Products = () => {
  const [editData, setEditData] = useState();
  const [showOption, setShowOption] = useState();
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => {
    setOpenModal(false);
    setEditData();
  };

  return (
    <div className="tracking-wider h-full">
      <Heading title="Products" />

      <section className="w-full relative overflow-hidden h-[80vh] sm:h-[80vh] pb-24 sm:pb-14 bg-white p-3 mt-2 sm:mt-3 rounded shadow">
        {/* search & button */}
        <div className="flex sm:flex-row flex-col gap-3 pt-1 pb-3 sm:items-center sm:justify-between">
          <div className="rounded flex w-full sm:w-60 items-center  py-2 px-2.5 border">
            <input
              type="text"
              className=" outline-none tracking-wider text-sm w-full"
              placeholder="Search Products..."
            />
            <GoSearch className="text-gray-500 text-xl cursor-pointer ml-2" />
          </div>
          <Button
            title={`Add New Product`}
            icon={<BsPlus className="text-xl" />}
            event={handleOpenModal}
          />
        </div>

        {/* Table Data */}
        <div className="table-container">
          <table className="w-full text-left whitespace-no-wrap">
            <thead>
              <tr>
                <th className="p-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-[rgb(226,225,239)] rounded-tl-lg ">
                  Name
                </th>
                <th className="p-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-[rgb(226,225,239)]">
                  Description
                </th>
                <th className="p-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-[rgb(226,225,239)]">
                  Prices
                </th>
                <th className="p-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-[rgb(226,225,239)]">
                  Image
                </th>
                <th className="p-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-[rgb(226,225,239)]">
                  Status
                </th>
                <th className="p-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-[rgb(226,225,239)] rounded-tr-lg ">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="text-sm relative h-full overflow-y-auto">
              {["", "", "", "", "", ""].map((item, i) => {
                return (
                  <tr
                    className={`${
                      i % 2 !== 0 && "bg-[rgb(248,248,252)]"
                    } border-b`}
                  >
                    <td className="px-4 py-2 text-color">Jeans</td>
                    <td className="px-4 py-2">This is the best jeans</td>
                    <td className="px-4 py-2">
                      <div>
                        Price : <span className="font-bold">Rs.100</span>
                      </div>
                    </td>
                    <td className="px-4 py-2  text-gray-900">
                      <img
                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80"
                        alt=""
                        className="w-9 h-9 rounded-full object-cover object-top"
                      />
                    </td>
                    <td className="px-4 py-2  text-gray-900">Published</td>
                    <td className="px-4 text-center sm:relative ">
                      <BsThreeDots
                        onClick={() => {
                          setShowOption(showOption === i ? "" : i);
                        }}
                        className="text-xl cursor-pointer"
                      />
                      {showOption === i && (
                        <div className="rounded p-2 gap-1.5 pl-4 z-30 absolute top-12 sm:left-0 right-0 bg-white  grid text-left shadow">
                          <span
                            onClick={() => {
                              handleOpenModal();
                              setEditData({ h: "l" });
                              setShowOption("");
                            }}
                            className="cursor-pointer"
                          >
                            Edit
                          </span>
                          <Link to="/games/view/" className="cursor-pointer">
                            View
                          </Link>
                          <span
                            onClick={() => setShowOption("")}
                            className="cursor-pointer"
                          >
                            Delete
                          </span>
                        </div>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className=" p-3 text-sm bg-white absolute bottom-0 right-0 w-full flex items-center gap-10 justify-end">
          <div className="">1-6 of 40</div>
          <div className=" flex gap-0.5">
            <span className="w-6 h-6  rounded-full flex justify-center items-center cursor-pointer ">
              <MdExpandLess className="text-lg rotate-[270deg]" />
            </span>
            <span className="w-6 h-6  rounded-full flex justify-center items-center cursor-pointer ">
              1
            </span>
            <span className="w-6 h-6 text-color bg-color rounded-full flex justify-center items-center cursor-pointer ">
              2
            </span>
            <span className="w-6 h-6  rounded-full flex justify-center items-center cursor-pointer ">
              3
            </span>
            <span className="w-6 h-6  rounded-full flex justify-center items-center cursor-pointer ">
              4
            </span>
            <span className="w-6 h-6  rounded-full flex justify-center items-center cursor-pointer ">
              ...
            </span>
            <span className="w-6 h-6  rounded-full flex justify-center items-center cursor-pointer ">
              <MdExpandLess className="text-lg rotate-[90deg]" />
            </span>
          </div>
        </div>
      </section>

      {/* Add & Update Modal */}
      {openModal && (
        <NewProduct editData={editData} handleCloseModal={handleCloseModal} />
      )}
    </div>
  );
};

export default Layout(Products);
