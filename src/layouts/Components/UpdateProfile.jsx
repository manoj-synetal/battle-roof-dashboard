import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { useDispatch } from "react-redux";
import { updateProfile } from "../../redux/actions/authAction";

const UpdateProfile = ({ handleCloseModal }) => {
  const dispatch = useDispatch();
  const [formInput, setFormInput] = useState({});

  // handleChange
  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "profilePicture") {
      setFormInput({ ...formInput, [name]: event.target.files[0] });
    } else {
      setFormInput({ ...formInput, [name]: value });
    }
  };

  // handleSubmit
  const handleSubmit = (event) => {
    event.preventDefault();
    const { mobileNumber, name, profilePicture } = formInput;
    const payload = new FormData();
    payload.append(name);
    payload.append(mobileNumber);
    payload.append(profilePicture);

    dispatch(updateProfile(payload));
  };

  return (
    <div className="tracking-wider overflow-hidden absolute z-50 top-0 flex justify-end left-0 w-full h-screen bg-modal">
      <div className="w-96 pb-10 md:w-1/2 h-full overflow-auto lg:w-1/3 p-4 bg-secondary shadow-xl">
        {/* Top */}
        <div className="flex justify-between items-center">
          <span className="text-color">Update Profile</span>
          <MdClose
            className="text-xl cursor-pointer"
            onClick={handleCloseModal}
          />
        </div>

        <form onSubmit={handleSubmit} className="mt-10 grid gap-5">
          {/* Profile Picture */}
          <div className="mb-4">
            <div className="relative w-36 h-36 border-2 p-0.5 border-color rounded-full mx-auto">
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80"
                alt=""
                className="w-full h-full object-cover object-top rounded-full mx-auto"
              />
              <label
                htmlFor="images"
                className="absolute bottom-2 text-lg cursor-pointer right-0 icon-bg w-7 h-7 flex justify-center items-center rounded-full"
              >
                +
              </label>
            </div>
            <input
              id="images"
              type="file"
              name="profilePicture"
              accept="image/*"
              onChange={handleChange}
              className="rounded py-1.5 px-2 hidden outline-none border"
            />
          </div>

          {/* Name */}
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

          {/* Phone */}
          <div className="grid gap-1">
            <label htmlFor="Phone" className="text-sm">
              Phone*
            </label>
            <input
              id="Phone"
              type="text"
              name="mobileNumber"
              value={formInput?.mobileNumber}
              onChange={handleChange}
              className="rounded py-1.5 px-2 outline-none border"
            />
          </div>

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

export default UpdateProfile;
