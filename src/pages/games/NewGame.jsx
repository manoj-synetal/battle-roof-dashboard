import Select from "react-select";
import { BiTrashAlt } from "react-icons/bi";
import { AiFillPlusCircle } from "react-icons/ai";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdClose, MdOutlineCloudUpload } from "react-icons/md";

import {
  addGame,
  getGameTypes,
  updateGame,
} from "../../redux/actions/gameAction";

const NewGame = ({ handleCloseModal, editData }) => {
  const dispatch = useDispatch();
  const [ruleInput, setRuleInput] = useState(
    editData ? [...editData.betAmount] : [""]
  );
  const [formInput, setFormInput] = useState({ ...editData });
  const { results, imageUrl } = useSelector(
    (state) => state.gameReducer.gameTypes
  );
  const [preview, setPreview] = useState({});

  // handle Change
  const handleChange = (event) => {
    const { name, type, value } = event.target;
    if (type === "file") {
      setPreview({
        ...preview,
        [name]: URL.createObjectURL(event.target.files[0]),
      });
      setFormInput({ ...formInput, [name]: event.target.files[0] });
    } else {
      setFormInput({ ...formInput, [name]: value });
    }
  };

  // Options
  const options = results?.map((item) => {
    return { value: item, label: item.name };
  });

  // duplicate bet amount
  const addRuleInput = () => {
    const rowsInput = "";
    setRuleInput([...ruleInput, rowsInput]);
  };

  // delete bet amount
  const deleteRuleInput = (index) => {
    const rows = [...ruleInput];
    rows.splice(index, 1);
    setRuleInput(rows);
  };

  // handle bet amount Change
  const handleRuleChange = (index, evnt) => {
    const { value } = evnt.target;
    const rowsInput = [...ruleInput];
    rowsInput[index] = value;
    setRuleInput(rowsInput);
  };

  // handle Submit
  const handleSubmit = (event) => {
    event.preventDefault();
    const payload = new FormData();
    payload.append("betAmount", ruleInput);
    Object.keys(formInput).map((item) => {
      return payload.append(
        item,
        item === "gameTypes"
          ? JSON.stringify(formInput[item].map((val) => val.value))
          : formInput[item]
      );
    });

    dispatch(
      editData
        ? updateGame(editData._id, payload, handleCloseModal)
        : addGame(payload, handleCloseModal)
    );
  };

  useEffect(() => {
    dispatch(getGameTypes());
    if (editData) {
      const data = editData?.gameTypes?.map((item) => {
        return { value: item, label: item.name };
      });

      setFormInput({ ...formInput, gameTypes: data });
    }
  }, [dispatch]);

  return (
    <div className="tracking-wider overflow-hidden absolute z-50 top-0 flex justify-end left-0 w-full h-screen bg-modal">
      <div className="w-96 pb-10 md:w-2/3 h-full overflow-auto xl:w-2/5 p-4 bg-secondary shadow-xl">
        {/* Top */}
        <div className="flex justify-between items-center">
          <span className="text-color">{editData ? "Update" : "Add"} Game</span>
          <MdClose
            className="text-xl cursor-pointer"
            onClick={handleCloseModal}
          />
        </div>

        <form onSubmit={handleSubmit} className="mt-5 grid gap-3">
          {/* Name & Ad Reward */}
          <section className="flex md:grid md:grid-cols-2 flex-col gap-2 ">
            <div className="grid gap-1">
              <label htmlFor="name" className="text-sm">
                Name*
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={formInput?.name}
                onChange={handleChange}
                className="rounded py-1.5 px-2 outline-none border"
              />
            </div>

            <div className="grid gap-1">
              <label htmlFor="name" className="text-sm">
                Ad Reward Coins*
              </label>
              <input
                id="name"
                type="text"
                name="adRewardCoins"
                value={formInput?.adRewardCoins}
                onChange={handleChange}
                className="rounded py-1.5 px-2 outline-none border"
              />
            </div>
          </section>

          {/* Link */}
          <div className="grid gap-1">
            <label htmlFor="link" className="text-sm">
              Link*
            </label>
            <input
              id="link"
              type="url"
              name="streamingLink"
              value={formInput?.streamingLink}
              onChange={handleChange}
              className="rounded py-1.5 px-2 outline-none border"
            />
          </div>

          {/* Types */}
          <div className="grid gap-1">
            <label htmlFor="status" className="text-sm">
              Types*
            </label>
            <Select
              name="gameTypes"
              isMulti
              value={formInput?.gameTypes}
              onChange={(event) =>
                setFormInput({ ...formInput, gameTypes: event })
              }
              options={options}
            />
          </div>

          {/* Bet Amount */}
          <div className="grid gap-1">
            <label htmlFor="rules" className="text-sm">
              Bet Amount*
            </label>
            <div className="grid grid-cols-2 gap-4">
              {ruleInput.map((item, index) => {
                return (
                  <div key={index} className="w-full flex items-center gap-2">
                    <input
                      id="rules"
                      type="number"
                      value={item}
                      onChange={(event) => handleRuleChange(index, event)}
                      className="rounded w-full bg-transparent py-1 px-2 outline-none border"
                    />
                    <div className="flex gap-2">
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
          </div>

          {/* Image */}
          <div className="grid gap-1">
            <label className="text-sm">Image*</label>
            <div>
              <label
                htmlFor="images"
                className="text-xs flex flex-col gap-1 justify-center rounded border-dashed border-[1.5px] p-4 items-center"
              >
                <img src={preview?.image} className="max-w-[170px] rounded" />
                <MdOutlineCloudUpload className="text-xl mb-0.5" />
                {formInput.image ? formInput?.image.name : " Upload Image"}
              </label>
              <input
                id="images"
                type="file"
                name="image"
                accept="image/*"
                onChange={handleChange}
                className="rounded py-1.5 px-2 hidden outline-none border"
              />
            </div>
          </div>

          {/* Banner */}
          <div className="grid gap-1">
            <label className="text-sm">Banner*</label>
            <div>
              <label
                htmlFor="banner"
                className="text-xs flex flex-col gap-1 justify-center rounded border-dashed border-[1.5px] p-4 items-center"
              >
                <img src={preview?.banner} className="max-w-[170px] rounded" />
                <MdOutlineCloudUpload className="text-xl mb-0.5" />
                {formInput.banner ? formInput?.banner.name : " Upload Banner"}
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
          </div>

          {/* Button */}
          <button
            type="submit"
            className="bg-button justify-center flex items-center cursor-pointer tracking-wider py-2 px-4 mt-2 rounded text-white"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewGame;
