import { BsPlus } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineCloudDownload } from "react-icons/md";

import {
  deleteGame,
  getGames,
  updateGameStatus,
} from "../../redux/actions/gameAction";

import NewGame from "./NewGame";
import Layout from "../../layouts";
import Toggle from "../../components/Toggle";
import Button from "../../components/Button";
import Heading from "../../components/Heading";
import SearchBox from "../../components/SearchBox";
import TableImage from "../../components/TableImage";
import Pagination from "../../components/Pagination";
import ShowOption from "../../components/ShowOption";
import ConfrimationModal from "../../components/ConfrimationModal";

const Products = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [editData, setEditData] = useState();
  const [showConfirm, setShowConfirm] = useState();
  const [searchValue, setSearchValue] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [openModal, setOpenModal] = useState(false);
  const { results, imageUrl } = useSelector((state) => state.gameReducer.games);

  // handle modals
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
  const handleDeleteGame = () => {
    dispatch(deleteGame(editData._id, handleCloseConfirm));
  };
  const handleStatusUpdate = (event) => {
    const payload = { status: event.target.checked };
    dispatch(updateGameStatus(event.target.id, payload));
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

  useEffect(() => {
    dispatch(getGames());
  }, [dispatch]);

  return (
    <div className="tracking-wider h-full">
      <Heading title="Games" />

      <section className="w-full relative overflow-hidden max-h-[80vh] sm:max-h-[80vh] pb-24 sm:pb-14 bg-secondary p-3 mt-2 sm:mt-3 rounded shadow ">
        {/* search & button */}
        <div className="flex sm:flex-row flex-col gap-3 pt-1 pb-4 sm:items-center sm:justify-between">
          <SearchBox
            placeholder="Games"
            value={searchValue}
            handleChange={(event) => setSearchValue(event.target.value)}
          />
          <span className="grid sm:flex grid-cols-2 gap-2">
            {results?.length !== 0 && (
              <Button
                title={`Export`}
                icon={<MdOutlineCloudDownload className="text-xl" />}
                event={downloadDataInCsv}
              />
            )}
            <Button
              title={`Add Game`}
              icon={<BsPlus className="text-xl" />}
              event={handleOpenModal}
            />
          </span>
        </div>

        {/* Table Data */}
        {results?.length === 0 ? (
          <div className="text-center py-14">No Game Found</div>
        ) : (
          <>
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
                  {(searchValue ? filteredData : results)
                    ?.slice(trimStart, trimEnd)
                    .map((item, i) => {
                      const { _id, name, status, slug, image, banner } = item;

                      return (
                        <tr
                          key={_id}
                          className={`${i % 2 !== 0 && "table-head"}`}
                        >
                          <td className="px-4 py-2.5">{name}</td>
                          <td className="px-4 py-2.5  max-w-[50px]  ">
                            <TableImage src={`${imageUrl}${image}`} />
                          </td>
                          <td className="px-4 py-2.5  max-w-[50px]  ">
                            <TableImage src={`${imageUrl}${banner}`} />
                          </td>
                          <td className="px-4 py-2.5">
                            <AiOutlinePlayCircle className="text-2xl text-color cursor-pointer" />
                          </td>
                          <td className="px-4 py-2.5">
                            <Toggle
                              _id={_id && _id}
                              value={status}
                              handleChange={handleStatusUpdate}
                            />
                          </td>

                          <td className="px-4 text-center relative ">
                            <ShowOption
                              handleDelete={() => {
                                setShowConfirm(true);
                                setEditData(item);
                              }}
                              handleView={() =>
                                navigate(`/games/${slug}`, { state: slug })
                              }
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

      {/*--------  Modals -------- */}
      {openModal && (
        <NewGame editData={editData} handleCloseModal={handleCloseModal} />
      )}

      {showConfirm && (
        <ConfrimationModal
          handleCancel={handleCloseConfirm}
          handleConfirm={handleDeleteGame}
          title="Tournament"
        />
      )}
    </div>
  );
};

export default Layout(Products);
