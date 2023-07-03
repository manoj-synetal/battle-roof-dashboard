import React, { useEffect, useState } from "react";
import { MdClose, MdOutlineCloudUpload } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { addTournament } from "../../redux/actions/tournamentAction";
import { getGames } from "../../redux/actions/gameAction";
import { AiFillPlusCircle } from "react-icons/ai";
import { BiTrashAlt } from "react-icons/bi";

const NewTour = ({ handleCloseModal, editData }) => {
  const dispatch = useDispatch();
  const [preview, setPreview] = useState();
  const [formInput, setFormInput] = useState({ ...editData });
  const [ruleInput, setRuleInput] = useState([""]);

  const { results } = useSelector((state) => state.gameReducer.games);

  // handleChange
  const handleChange = (event) => {
    const { name, type, value } = event.target;
    if (type === "file") {
      setPreview(URL.createObjectURL(event.target.files[0]));
      setFormInput({ ...formInput, [name]: event.target.files[0] });
    } else {
      setFormInput({ ...formInput, [name]: value });
    }
  };

  // duplicate rule input
  const addRuleInput = () => {
    const rowsInput = "";
    setRuleInput([...ruleInput, rowsInput]);
  };

  // delete rule input
  const deleteRuleInput = (index) => {
    const rows = [...ruleInput];
    rows.splice(index, 1);
    setRuleInput(rows);
  };

  // handle Rule Change
  const handleRuleChange = (index, evnt) => {
    const { value } = evnt.target;
    const rowsInput = [...ruleInput];
    rowsInput[index] = value;
    setRuleInput(rowsInput);
  };

  // handleSubmit
  const handleSubmit = (event) => {
    event.preventDefault();
    const keys = Object.keys(formInput);
    const payload = new FormData();
    payload.append("rules", ruleInput);
    keys.map((item) => {
      return payload.append(item, formInput[item]);
    });

    dispatch(addTournament(payload, handleCloseModal));
  };

  useEffect(() => {
    dispatch(getGames());
  }, [dispatch]);

  return (
    <div className="tracking-wider overflow-hidden absolute z-50 top-0 flex justify-end left-0 w-full h-screen bg-modal">
      <div className="w-96 sm:w-2/3 lg:w-1/2 h-full overflow-auto p-4 bg-secondary">
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

        <form onSubmit={handleSubmit} className="mt-5 grid gap-4">
          {/* Name & Slots */}
          <section className="grid sm:grid-cols-2 gap-4">
            <div className="grid gap-1">
              <label htmlFor="tournamentName">Tournament Name*</label>
              <input
                id="tournamentName"
                type="text"
                name="name"
                value={formInput?.name}
                onChange={handleChange}
                className="rounded py-1 px-2  border
               outline-none bg-transparent tracking-wider text-sm w-full"
              />
            </div>
            <div className="grid gap-1">
              <label htmlFor="slots">Slots*</label>
              <input
                id="slots"
                type="number"
                name="totalSlots"
                value={formInput?.totalSlots}
                onChange={handleChange}
                className="rounded bg-transparent py-1 px-2 outline-none border"
              />
            </div>
          </section>

          {/* Game Name & Map & Link & Tour Type */}
          <section className="grid sm:grid-cols-2 gap-4">
            {/* GameID */}
            <div className="grid gap-1">
              <label htmlFor="gameId">Game Name*</label>
              <select
                id="gameId"
                name="gameId"
                value={formInput?.gameId}
                onChange={handleChange}
                className="rounded bg-select appearance-none text-sm p-2 outline-none border"
              >
                <option value="">Select Game</option>
                {results?.map((item) => {
                  return (
                    <option key={item._id} value={item._id}>
                      {item.name}
                    </option>
                  );
                })}
              </select>
            </div>

            {/* Tour Type */}
            <div className="grid gap-1">
              <label htmlFor="type">Tournament Type*</label>
              <select
                id="type"
                name="type"
                value={formInput?.type}
                onChange={handleChange}
                className="rounded bg-select text-sm p-2 outline-none border"
              >
                <option value="">Select Type </option>
                <option value="single match">Single Match</option>
                <option value="league">League</option>
              </select>
            </div>

            {/* Map */}
            <div className="grid gap-1">
              <label htmlFor="map">Game Map*</label>
              <input
                id="map"
                name="map"
                type="text"
                value={formInput?.map}
                onChange={handleChange}
                className="rounded bg-transparent text-sm p-2 outline-none border"
              />
            </div>
            {/* Format */}
            <div className="grid gap-1">
              <label htmlFor="streamingLink">Streaming Link*</label>
              <input
                id="streamingLink"
                name="streamingLink"
                type="text"
                value={formInput?.streamingLink}
                onChange={handleChange}
                className="rounded bg-transparent text-sm p-2 outline-none border"
              />
            </div>
          </section>

          {/*  Mode & Format */}
          <section className="grid sm:grid-cols-2 gap-4">
            <section className="grid gap-1">
              <span>Game Mode*</span>
              <div className="flex items-center text-xs gap-6">
                {/* solo */}
                <div className="flex gap-1">
                  <input
                    id="Solo"
                    type="radio"
                    value="solo"
                    name="gameMode"
                    onChange={handleChange}
                    className="rounded bg-transparent py-1 px-2 outline-none border"
                  />
                  <label htmlFor="Solo">Solo</label>
                </div>

                {/* Duo */}
                <div className="flex gap-1">
                  <input
                    id="Duo"
                    type="radio"
                    value="duo"
                    name="gameMode"
                    onChange={handleChange}
                    className="rounded bg-transparent py-1 px-2 outline-none border"
                  />
                  <label htmlFor="Duo">Duo</label>
                </div>

                {/* Squad */}
                <div className="flex gap-1">
                  <input
                    id="Squad"
                    type="radio"
                    value="squad"
                    name="gameMode"
                    onChange={handleChange}
                    className="rounded bg-transparent py-1 px-2 outline-none border"
                  />
                  <label htmlFor="Squad">Squad</label>
                </div>
              </div>
            </section>
            <section className="grid gap-1">
              <label htmlFor="format">Format*</label>
              <input
                id="format"
                name="format"
                type="input"
                value={formInput?.format}
                onChange={handleChange}
                className="rounded bg-transparent text-sm p-2 outline-none border"
              />
            </section>
          </section>

          {/* Entry Fee & Prize Pool */}
          <section className="grid sm:grid-cols-2 gap-4">
            <div className="grid gap-1">
              <label htmlFor="entryFee">Entry Fee*</label>
              <input
                id="entryFee"
                type="number"
                name="entryFee"
                value={formInput?.entryFee}
                onChange={handleChange}
                className="rounded bg-transparent  py-1 px-2 outline-none border"
              />
            </div>

            <div className="grid gap-1">
              <label htmlFor="prizePool">Prize Pool*</label>
              <input
                id="prizePool"
                type="number"
                name="prizePool"
                value={formInput?.prizePool}
                onChange={handleChange}
                className="rounded bg-transparent py-1 px-2 outline-none border"
              />
            </div>
          </section>

          {/* Start & End Time */}
          <section className="grid sm:grid-cols-2 gap-4">
            <div className="grid gap-1">
              <label htmlFor="time">Start Date-Time*</label>
              <input
                id="time"
                type="datetime-local"
                name="startDateTime"
                value={formInput?.startDateTime}
                onChange={handleChange}
                className="rounded bg-transparent py-1 px-2 outline-none border"
              />
            </div>
            <div className="grid gap-1">
              <label htmlFor="time">End Date-Time*</label>
              <input
                id="time"
                type="datetime-local"
                name="endDateTime"
                value={formInput?.endDateTime}
                onChange={handleChange}
                className="rounded bg-transparent py-1 px-2 outline-none border"
              />
            </div>
          </section>

          {/* Rules */}
          <div className="grid gap-1">
            <label htmlFor="rules">Rules</label>
            {ruleInput.map((item, index) => {
              return (
                <div key={index} className="w-full flex items-center gap-5">
                  <input
                    id="rules"
                    type="text"
                    value={item}
                    onChange={(event) => handleRuleChange(index, event)}
                    className="rounded w-full bg-transparent py-1 px-2 outline-none border"
                  />
                  <div className="flex gap-4">
                    {ruleInput.length !== 1 && (
                      <BiTrashAlt
                        onClick={() => deleteRuleInput(index)}
                        className="text-color text-xl cursor-pointer"
                      />
                    )}
                    <AiFillPlusCircle
                      onClick={addRuleInput}
                      className="text-color text-xl cursor-pointer"
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Banner*/}
          <section className="gap-4">
            <div>
              <label
                htmlFor="banner"
                className="text-xs flex cursor-pointer flex-col gap-1 justify-center rounded border-dashed border-[1.5px] p-4 items-center"
              >
                <img src={preview} className="max-w-[170px] rounded" />
                <MdOutlineCloudUpload className="text-xl mb-0.5" />
                {formInput.banner ? formInput?.banner?.name : "Upload Banner"}
              </label>
              <input
                id="banner"
                type="file"
                name="banner"
                accept="image/*"
                onChange={handleChange}
                className="rounded py-1.5 px-2 hidden outline-none border"
              />
            </div>
          </section>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-button justify-center flex items-center cursor-pointer tracking-wider py-2 px-4 rounded text-white"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewTour;
