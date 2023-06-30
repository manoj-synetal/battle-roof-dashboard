import React, { useState } from "react";
import Layout from "../../layouts";
import Heading from "../../components/Heading";
import Button from "../../components/Button";
import { BsPlus, BsThreeDots } from "react-icons/bs";
import NewTour from "./NewTour";
import { GoSearch } from "react-icons/go";
import { MdExpandLess, MdOutlineCloudDownload } from "react-icons/md";
import Pagination from "../../components/Pagination";
import ShowOption from "../../components/ShowOption";
import SearchBox from "../../components/SearchBox";

const GameList = [
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

const Tournaments = () => {
  const [editData, setEditData] = useState();
  const [showOption, setShowOption] = useState();
  const [openModal, setOpenModal] = useState(false);
  const [searchValue, setSearchValue] = useState();

  // pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const perPageItems = 7;
  const totalItems = GameList.length;

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
  const filteredData = GameList.filter(
    (item) =>
      item.name && item.name?.toLowerCase().includes(searchValue?.toLowerCase())
  );

  return (
    <div className="tracking-wider h-full">
      <Heading title="Tournaments" />

      <section className="w-full relative overflow-hidden h-[80vh] sm:h-[80vh] pb-24 sm:pb-14 bg-secondary p-3 mt-2 sm:mt-3 rounded shadow ">
        {/* search & button */}
        <div className="flex sm:flex-row flex-col gap-3 pt-1 pb-4 sm:items-center sm:justify-between">
          <SearchBox placeholder="Tournament" />
          <span className="grid sm:flex grid-cols-2 gap-2">
            <Button
              title={`Export`}
              icon={<MdOutlineCloudDownload className="text-xl" />}
            />
            <Button
              title={`Add Tournament`}
              icon={<BsPlus className="text-xl" />}
              event={handleOpenModal}
            />
          </span>
        </div>

        {/* Table Data */}
        <div className="table-container">
          <table className="w-full text-left whitespace-nowrap">
            <thead>
              <tr>
                <th className="p-3 px-4 title-font tracking-wider font-medium text-gray-900 text-sm table-head rounded-tl-lg ">
                  Game
                </th>
                <th className="p-3 px-4 title-font tracking-wider font-medium text-gray-900 text-sm table-head">
                  Tournament
                </th>
                <th className="p-3 px-4 title-font tracking-wider font-medium text-gray-900 text-sm table-head">
                  Type
                </th>
                <th className="p-3 px-4 title-font tracking-wider font-medium text-gray-900 text-sm table-head">
                  Link
                </th>
                <th className="p-3 px-4 title-font tracking-wider font-medium text-gray-900 text-sm table-head">
                  Map
                </th>
                <th className="p-3 px-4 title-font tracking-wider font-medium text-gray-900 text-sm table-head">
                  Fee
                </th>
                <th className="p-3 px-4 title-font tracking-wider font-medium text-gray-900 text-sm table-head">
                  Prize
                </th>
                <th className="p-3 px-4 title-font tracking-wider font-medium text-gray-900 text-sm table-head">
                  Slots
                </th>
                <th className="p-3 px-4 title-font tracking-wider font-medium text-gray-900 text-sm table-head">
                  Mode
                </th>
                <th className="p-3 px-4 title-font tracking-wider font-medium text-gray-900 text-sm table-head">
                  Status
                </th>
                <th className="p-3 px-4 title-font tracking-wider font-medium text-gray-900 text-sm table-head">
                  Time
                </th>
                <th className="p-3 px-4 title-font tracking-wider font-medium text-gray-900 text-sm table-head">
                  Image
                </th>

                <th className="p-3 px-4 title-font tracking-wider font-medium text-gray-900 text-sm table-head rounded-tr-lg ">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="text-xs relative h-full overflow-y-auto">
              {(searchValue ? filteredData : GameList)
                .slice(trimStart, trimEnd)
                .map((item, i) => {
                  return (
                    <tr
                      key={item.name}
                      className={`${i % 2 !== 0 && "table-head"} `}
                    >
                      <td className="px-4 py-3">{item.name}</td>
                      <td className="px-4 py-2">BattleRoof</td>
                      <td className="px-4 py-2">Solo</td>
                      <td className="px-4 py-2">http:/google.com</td>
                      <td className="px-4 py-2">Erangle</td>
                      <td className="px-4 py-2">100$</td>
                      <td className="px-4 py-2">1000$</td>
                      <td className="px-4 py-2">43 Left</td>
                      <td className="px-4 py-2">Active</td>
                      <td className="px-4 py-2">Completed</td>

                      <td className="px-4 py-2">26/03/2023</td>

                      <td className="px-4 py-2  text-gray-900">
                        <img
                          src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80"
                          alt=""
                          className="w-9 h-9 rounded-full object-cover object-top"
                        />
                      </td>

                      <td className="px-4 text-center  relative ">
                        <BsThreeDots
                          onClick={() => {
                            setShowOption(showOption === i ? "" : i);
                          }}
                          className="text-xl cursor-pointer"
                        />
                        {showOption === i && (
                          <ShowOption
                            handleDelete={() => setShowOption("")}
                            handleView={() => console.log("/")}
                            handleEdit={() => {
                              handleOpenModal();
                              setEditData({ h: "l" });
                              setShowOption("");
                            }}
                          />
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
        <NewTour editData={editData} handleCloseModal={handleCloseModal} />
      )}
    </div>
  );
};

export default Layout(Tournaments);
