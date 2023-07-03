import { BsPlus } from "react-icons/bs";
import React, { useEffect, useState } from "react";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineCloudDownload } from "react-icons/md";

import {
  deleteTournament,
  getTournaments,
  updateTourStatus,
} from "../../redux/actions/tournamentAction";

import NewTour from "./NewTour";
import Layout from "../../layouts";
import Badge from "../../components/Badge";
import Toggle from "../../components/Toggle";
import Button from "../../components/Button";
import Heading from "../../components/Heading";
import SearchBox from "../../components/SearchBox";
import Pagination from "../../components/Pagination";
import ShowOption from "../../components/ShowOption";
import TableImage from "../../components/TableImage";
import ConfrimationModal from "../../components/ConfrimationModal";

const Tournaments = () => {
  const dispatch = useDispatch();
  const [editData, setEditData] = useState();
  const [showConfirm, setShowConfirm] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [searchValue, setSearchValue] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const { tournaments } = useSelector((state) => state.tournamentReducer);
  const { results, imageUrl } = tournaments;

  // Handle Moadals
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => {
    setOpenModal(false);
    setEditData();
  };
  const handleCloseConfirm = () => {
    setShowConfirm(false);
    setEditData();
  };

  // Api Handles
  const handleDeleteTour = () => {
    dispatch(deleteTournament(editData._id, handleCloseConfirm));
  };
  const handleStatusUpdate = (event) => {
    const payload = { status: event.target.checked };
    dispatch(updateTourStatus(event.target.id, payload));
  };

  // Other Handles
  const filteredData = results?.filter(
    (item) =>
      item.name && item.name?.toLowerCase().includes(searchValue?.toLowerCase())
  );
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

  // Pagination Logic
  const perPageItems = 7;
  const totalItems = results?.length;
  const trimStart = (currentPage - 1) * perPageItems;
  const trimEnd = trimStart + perPageItems;
  const handlePrev = () => currentPage !== 1 && setCurrentPage(currentPage - 1);
  const handleForw = () =>
    trimEnd <= totalItems && setCurrentPage(currentPage + 1);

  // useEffect
  useEffect(() => {
    dispatch(getTournaments());
  }, [dispatch]);

  return (
    <div className="tracking-wider h-full">
      <Heading title="Tournaments" />

      <section className="w-full relative overflow-hidden max-h-[80vh] sm:max-h-[80vh] pb-24 sm:pb-14 bg-secondary p-3 mt-2 sm:mt-3 rounded shadow ">
        {/* search & button */}
        <div className="flex sm:flex-row flex-col gap-3 pt-1 pb-3 sm:items-center sm:justify-between">
          <SearchBox
            placeholder="Tournament"
            handleChange={(event) => setSearchValue(event.target.value)}
            value={searchValue}
          />
          <div className="sm:flex grid grid-cols-2 gap-2">
            {results?.length !== 0 && (
              <Button
                title={`Export`}
                icon={<MdOutlineCloudDownload />}
                event={downloadDataInCsv}
              />
            )}
            <Button
              title={`Add Tournament`}
              icon={<BsPlus />}
              event={handleOpenModal}
            />
          </div>
        </div>

        {results?.length === 0 ? (
          <div className="text-center py-16">No Record Found</div>
        ) : (
          <>
            <div className="table-container">
              <table className="w-full down text-left whitespace-nowrap">
                <thead>
                  <tr>
                    <th className="p-3 px-4 title-font tracking-wider font-medium text-gray-900 text-sm table-head rounded-tl-lg ">
                      Banner
                    </th>
                    <th className="p-3 px-4 title-font tracking-wider font-medium text-gray-900 text-sm table-head">
                      Tournament
                    </th>{" "}
                    <th className="p-3 px-4 title-font tracking-wider font-medium text-gray-900 text-sm table-head">
                      Game
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
                      Amount
                    </th>
                    <th className="p-3 px-4 title-font tracking-wider font-medium text-gray-900 text-sm table-head">
                      Status
                    </th>
                    <th className="p-3 px-4 title-font tracking-wider font-medium text-gray-900 text-sm table-head">
                      Time
                    </th>
                    <th className="p-3 px-4 title-font tracking-wider font-medium text-gray-900 text-sm table-head rounded-tr-lg ">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="text-xs relative h-full overflow-y-auto">
                  {(searchValue ? filteredData : results)
                    ?.slice(trimStart, trimEnd)
                    .map((item, index) => {
                      const {
                        name,
                        entryFee,
                        type,
                        prizePool,
                        _id,
                        gameMode,
                        map,
                        banner,
                        gameName,
                        totalSlots,
                        status,
                        startDateTime,
                        endDateTime,
                      } = item;
                      return (
                        <tr
                          key={_id}
                          className={`${index % 2 !== 0 && "table-head"} `}
                        >
                          <td className="px-4 min-w-[80px] py-2  text-gray-900">
                            <TableImage
                              src={`${imageUrl}${banner}`}
                              alt={name}
                            />
                          </td>

                          <td className="px-4 py-2">
                            {name}{" "}
                            <div className="flex items-center gap-1.5">
                              Mode :
                              <Badge title={gameMode} />
                            </div>
                            <div className="flex items-center gap-1.5">
                              Slots :
                              <Badge title={totalSlots} />
                            </div>
                          </td>
                          <td className="px-4 py-3">{gameName}</td>
                          <td className="px-4 py-2">{type}</td>
                          <td className="px-4 py-2">
                            <AiOutlinePlayCircle
                              title="play"
                              className="text-2xl text-color cursor-pointer"
                            />
                          </td>
                          <td className="px-4 py-2">{map}</td>
                          <td className="px-4 py-2">
                            <div className="flex items-center gap-2">
                              {" "}
                              Entry : <Badge title={`${entryFee} $`} />
                            </div>
                            <div className="flex items-center gap-2">
                              {" "}
                              Prize :<Badge title={`${prizePool} $`} />
                            </div>
                          </td>
                          <td className="px-4 py-2 text-color capitalize">
                            <Toggle
                              _id={_id && _id}
                              value={status}
                              handleChange={handleStatusUpdate}
                            />
                          </td>

                          <td className="px-4 py-2">
                            <div className="">Start at {startDateTime}</div>
                            <div className="">End at {endDateTime}</div>
                          </td>

                          <td className="px-4 text-center">
                            <ShowOption
                              handleDelete={() => {
                                setShowConfirm(true);
                                setEditData(item);
                              }}
                              handleView={() => console.log("/")}
                              handleEdit={() => {
                                setEditData(item);
                                handleOpenModal();
                              }}
                            />
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
            <Pagination
              handlePrev={handlePrev}
              from={trimStart}
              to={trimEnd}
              total={totalItems}
              handleForw={handleForw}
            />
          </>
        )}
      </section>

      {/* Add & Update Modal */}
      {openModal && (
        <NewTour editData={editData} handleCloseModal={handleCloseModal} />
      )}

      {/* Delete Modal */}
      {showConfirm && (
        <ConfrimationModal
          handleCancel={handleCloseConfirm}
          handleConfirm={handleDeleteTour}
          title="Tournament"
        />
      )}
    </div>
  );
};

export default Layout(Tournaments);
