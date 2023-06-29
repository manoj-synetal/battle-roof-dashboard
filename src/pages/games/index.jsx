import React, { useState } from "react";
import Layout from "../../layouts";
import Heading from "../../components/Heading";
import Button from "../../components/Button";
import { BsPlus, BsThreeDots } from "react-icons/bs";
import NewGame from "./NewGame";
import { GoSearch } from "react-icons/go";
import { MdExpandLess, MdOutlineCloudDownload } from "react-icons/md";
import dummy from "../../components/Dummy";
import Pagination from "../../components/Pagination";

const Products = () => {
  const [editData, setEditData] = useState();
  const [showOption, setShowOption] = useState();
  const [openModal, setOpenModal] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const perPageItems = 6;
  const totalItems = dummy.length;
  const numberOfPages = Math.ceil(totalItems / perPageItems);

  const trimStart = (currentPage - 1) * perPageItems;
  const trimEnd = trimStart + perPageItems;

  // handle Paginations
  const handlePrev = () => currentPage !== 1 && setCurrentPage(currentPage - 1);
  const handleForw = () =>
    trimEnd <= totalItems && setCurrentPage(currentPage + 1);

  const handlePages = (item) => setCurrentPage(item);

  // handle Modals
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => {
    setOpenModal(false);
    setEditData();
  };

  return (
    <div className="tracking-wider h-full">
      <Heading title="Games" />

      <section className="w-full relative overflow-hidden h-[80vh] sm:h-[80vh] pb-24 sm:pb-14 bg-white p-3 mt-2 sm:mt-3 rounded shadow">
        {/* search & button */}
        <div className="flex sm:flex-row flex-col gap-3 pt-1 pb-3 sm:items-center sm:justify-between">
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
        </div>

        {/* Table Data */}
        <div className="table-container">
          <table className="w-full text-left whitespace-no-wrap">
            <thead>
              <tr>
                <th className="p-3 px-4 title-font tracking-wider font-medium text-gray-900 text-sm bg-[rgb(226,225,239)] rounded-tl-lg ">
                  Name
                </th>
                <th className="p-3 px-4 title-font tracking-wider font-medium text-gray-900 text-sm bg-[rgb(226,225,239)]">
                  Image
                </th>
                <th className="p-3 px-4 title-font tracking-wider font-medium text-gray-900 text-sm bg-[rgb(226,225,239)]">
                  Banner
                </th>
                <th className="p-3 px-4 title-font tracking-wider font-medium text-gray-900 text-sm bg-[rgb(226,225,239)]">
                  Link
                </th>

                <th className="p-3 px-4 title-font tracking-wider font-medium text-gray-900 text-sm bg-[rgb(226,225,239)]">
                  Status
                </th>

                <th className="p-3 px-4 title-font tracking-wider font-medium text-gray-900 text-sm bg-[rgb(226,225,239)] rounded-tr-lg ">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="text-xs relative h-full overflow-y-auto">
              {dummy.slice(trimStart, trimEnd).map((item, i) => {
                return (
                  <tr
                    className={`${
                      i % 2 !== 0 && "bg-[rgb(248,248,252)]"
                    } border-b`}
                  >
                    <td className="px-4 py-2 text-color">PUBG</td>

                    <td className="px-4 py-2  text-gray-900">
                      <img
                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80"
                        alt=""
                        className="w-9 h-9 rounded-full object-cover object-top"
                      />
                    </td>
                    <td className="px-4 py-2  text-gray-900">
                      <img
                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80"
                        alt=""
                        className="w-9 h-9 rounded-full object-cover object-top"
                      />
                    </td>
                    <td className="px-4 py-2">----</td>
                    <td className="px-4 py-2">Active</td>

                    <td className="px-4 text-center  sm:relative ">
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
        <Pagination
          handlePrev={handlePrev}
          from={trimStart}
          to={trimEnd}
          total={totalItems}
          handleForw={handleForw}
          currentPage={currentPage}
          numberOfPages={numberOfPages}
        />
      </section>

      {/* Add & Update Modal */}
      {openModal && (
        <NewGame editData={editData} handleCloseModal={handleCloseModal} />
      )}
    </div>
  );
};

export default Layout(Products);
