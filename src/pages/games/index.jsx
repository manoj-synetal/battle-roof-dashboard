import React, { useState } from "react";
import { BsPlus, BsThreeDots, BsTrash3 } from "react-icons/bs";
import { MdOutlineCloudDownload } from "react-icons/md";

import NewGame from "./NewGame";
import Layout from "../../layouts";
import Button from "../../components/Button";
import Heading from "../../components/Heading";
import Pagination from "../../components/Pagination";
import { AiOutlineEdit, AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import SearchBox from "../../components/SearchBox";

const dummy = [
  {
    name: "PUBG",
  },
  {
    name: "Free fire",
  },
  {
    name: "Call Of Duty",
  },
  {
    name: "Chess",
  },
  {
    name: "Temple Run",
  },
  {
    name: "Hill Climb Racing",
  },
];

const Products = () => {
  const [editData, setEditData] = useState();
  const [showOption, setShowOption] = useState();
  const [searchValue, setSearchValue] = useState();
  const [openModal, setOpenModal] = useState(false);

  // pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const perPageItems = 7;
  const totalItems = dummy.length;

  const trimStart = (currentPage - 1) * perPageItems;
  const trimEnd = trimStart + perPageItems;

  // handle Paginations
  const handlePrev = () => currentPage !== 1 && setCurrentPage(currentPage - 1);
  const handleForw = () =>
    trimEnd <= totalItems && setCurrentPage(currentPage + 1);

  // handle Modals
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => {
    setOpenModal(false);
    setEditData();
  };

  // handle search
  const filteredData = dummy.filter(
    (item) =>
      item.name && item.name?.toLowerCase().includes(searchValue?.toLowerCase())
  );

  // Export To CSV
  const downloadDataInCsv = () => {
    var data = [];
    var rows = document.querySelectorAll("table.down tr");

    for (var i = 0; i < rows.length; i++) {
      var row = [],
        cols = rows[i].querySelectorAll("td, th");

      for (var j = 0; j < cols.length; j++) {
        row.push(cols[j].innerText);
      }

      data.push(row.join(","));
    }

    // Create downloadAble
    const a = document.createElement("a");
    const file = new Blob([data.join("\n")], { type: "text/csv" });
    a.href = URL.createObjectURL(file);
    a.download = "Data.csv";
    a.click();
  };

  return (
    <div className="tracking-wider h-full">
      <Heading title="Games" />

      <section className="w-full relative overflow-hidden h-[80vh] sm:h-[80vh] pb-24 sm:pb-14 bg-secondary p-3 mt-2 sm:mt-3 rounded shadow ">
        {/* search & button */}
        <div className="flex sm:flex-row flex-col gap-3 pt-1 pb-4 sm:items-center sm:justify-between">
          <SearchBox
            placeholder="Games"
            value={searchValue}
            handleChange={(event) => setSearchValue(event.target.value)}
          />
          <span className="grid sm:flex grid-cols-2 gap-2">
            <Button
              title={`Export`}
              icon={<MdOutlineCloudDownload className="text-xl" />}
              event={downloadDataInCsv}
            />
            <Button
              title={`Add Game`}
              icon={<BsPlus className="text-xl" />}
              event={handleOpenModal}
            />
          </span>
        </div>

        {/* Table Data */}
        <div className="table-container">
          <table className="w-full down  text-left whitespace-no-wrap">
            <thead>
              <tr>
                <th className="p-3 px-4 title-font tracking-wider font-medium text-sm table-head rounded-tl-lg ">
                  Name
                </th>
                <th className="p-3 px-4 title-font tracking-wider font-medium  text-sm table-head">
                  Image
                </th>
                <th className="p-3 px-4 title-font tracking-wider font-medium text-sm table-head">
                  Banner
                </th>
                <th className="p-3 px-4 title-font tracking-wider font-medium text-sm table-head">
                  Link
                </th>

                <th className="p-3 px-4 title-font tracking-wider font-medium text-sm table-head">
                  Status
                </th>

                <th className="p-3 px-4 title-font tracking-wider font-medium text-sm table-head rounded-tr-lg ">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="text-xs relative h-full overflow-y-auto">
              {(searchValue ? filteredData : dummy)
                .slice(trimStart, trimEnd)
                .map((item, i) => {
                  return (
                    <tr
                      key={item.name}
                      className={`${i % 2 !== 0 && "table-head"}`}
                    >
                      <td className="px-4 py-2.5">{item.name}</td>

                      <td className="px-4 py-2.5  ">
                        <img
                          src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80"
                          alt=""
                          className="w-8 h-8 rounded-full object-cover object-top"
                        />
                      </td>
                      <td className="px-4 py-2.5  ">
                        <img
                          src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80"
                          alt=""
                          className="w-8 h-8 rounded-full object-cover object-top"
                        />
                      </td>
                      <td className="px-4 py-2.5">----</td>
                      <td className="px-4 py-2.5">Active</td>

                      <td className="px-4 text-center relative ">
                        <BsThreeDots
                          onClick={() => {
                            setShowOption(showOption === i ? "" : i);
                          }}
                          className="text-xl cursor-pointer"
                        />
                        {showOption === i && (
                          <div className="rounded z-30 icon-bg absolute top-10 p-2 border border-color max-w-[100px] justify-center  sm:left-3 flex-col right-2 text-color gap-4 flex ">
                            <span
                              onClick={() => {
                                handleOpenModal();
                                setEditData({ h: "l" });
                                setShowOption("");
                              }}
                              className="cursor-pointer flex items-center gap-2"
                            >
                              <AiOutlineEdit /> Edit
                            </span>

                            <Link
                              to="/games/view/"
                              className="cursor-pointer flex items-center gap-2"
                            >
                              <AiOutlineEye /> View
                            </Link>
                            <span
                              onClick={() => setShowOption("")}
                              className="cursor-pointer flex items-center gap-2"
                            >
                              <BsTrash3 /> Delete
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
