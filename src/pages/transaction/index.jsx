import React, { useState } from "react";
import Layout from "../../layouts";
import Heading from "../../components/Heading";
import Button from "../../components/Button";
import { BsPlus, BsThreeDots } from "react-icons/bs";
// import NewProduct from "../";
import { GoSearch } from "react-icons/go";
import { MdExpandLess, MdOutlineCloudDownload } from "react-icons/md";
import { Link } from "react-router-dom";

const Transaction = () => {
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
      <Heading title="Transactions" />

      <section className="w-full relative overflow-hidden h-[80vh] sm:h-[80vh] pb-24 bg-secondary sm:pb-14 p-3 mt-2 sm:mt-3 rounded shadow">
        {/* search & button */}
        {/* <div className="flex sm:flex-row flex-col gap-3 pt-1 pb-3 sm:items-center sm:justify-between">
          <div className="rounded flex w-full sm:w-60 items-center  py-2 px-2.5 border">
            <input
              type="text"
              className=" outline-none tracking-wider text-sm w-full"
              placeholder="Search Games..."
            />
            <GoSearch className="text-gray-500 text-xl cursor-pointer ml-2" />
          </div>
          <span className="grid grid-cols-2 gap-2">
            <Button
              title={`Export`}
              icon={<MdOutlineCloudDownload className="text-xl" />}
            />
            <Button
              title={`Add Games`}
              icon={<BsPlus className="text-xl" />}
              event={handleOpenModal}
            />
          </span>
        </div> */}

        {/* Table Data */}
        <div className="table-container">
          <table className="w-full text-left whitespace-no-wrap">
            <thead>
              <tr>
                <th className="p-3 px-4 title-font tracking-wider font-medium text-gray-900 text-sm table-head rounded-tl-lg ">
                  Transaction ID
                </th>
                <th className="p-3 px-4 title-font tracking-wider font-medium text-gray-900 text-sm table-head">
                  Amount
                </th>
                <th className="p-3 px-4 title-font tracking-wider font-medium text-gray-900 text-sm table-head">
                  Type
                </th>
                <th className="p-3 px-4 title-font tracking-wider font-medium text-gray-900 text-sm table-head">
                  Date
                </th>
               
                
               
                <th className="p-3 px-4 title-font tracking-wider font-medium text-gray-900 text-sm table-head">
                  Status
                </th>
              

                <th className="p-3 px-4 title-font tracking-wider font-medium text-gray-900 text-sm table-head rounded-tr-lg ">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="text-xs relative h-full overflow-y-auto">
              {["", "", "", "", "", "", "", "", ""].map((item, i) => {
                return (
                  <tr
                    className={`${i % 2 !== 0 && "table-head"
                      } `}
                  >
                    <td className="px-4 py-7 text-color">#ADGF3754345</td>
                    <td className="px-4 py-7 text-color">100$</td>
                    <td className="px-4 py-7">Debit</td>
                    <td className="px-4 py-7">27/03/2023 8:00 PM</td>
                    <td className="px-4 py-7">Pending</td>
                   
                    <td className="px-4 text-center  sm:relative ">
                      <BsThreeDots
                        onClick={() => {
                          setShowOption(showOption === i ? "" : i);
                        }}
                        className="text-xl cursor-pointer"
                      />
                      {showOption === i && (
                        <div className="rounded p-2 gap-1.5 pl-4 z-30 absolute top-12 sm:left-0 right-0 bg-secondary  grid text-left shadow">
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
                          <a href="/product/view/" className="cursor-pointer">
                            View
                          </a>
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
        <div className=" p-3 text-sm bg-secondary absolute bottom-0 right-0 w-full flex items-center gap-10 justify-end">
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
      {/* {openModal && (
        <NewProduct editData={editData} handleCloseModal={handleCloseModal} />
      )} */}
    </div>
  );
};

export default Layout(Transaction);
