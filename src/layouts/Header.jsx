import Logo from "../assets/Logo.png";
import React, { useState } from "react";
import { GoSearch } from "react-icons/go";
import { HiOutlineMenu } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { BsChevronDown } from "react-icons/bs";
import { MdOutlineNotificationsActive } from "react-icons/md";
import SearchBar from "./Components/SearchBar";
import UpdateProfile from "./Components/UpdateProfile";

const Header = ({ handleToggle, toggle }) => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState();
  const [updateProfile, setUpdateProfile] = useState(false);

  const { email, role, ...data } = JSON.parse(localStorage.getItem("Admin"));

  // handleOpenModal
  const handleOpenModal = (value) =>
    setShowModal(showModal === value ? "" : value);

  return (
    <div className="p-2 sm:py-2.5 sm:px-4 rounded bg-secondary shadow tracking-wider flex items-center">
      {showModal === "Search" ? (
        <SearchBar handleOpenModal={handleOpenModal} />
      ) : (
        <>
          <HiOutlineMenu
            onClick={handleToggle}
            className="text-xl cursor-pointer text-color"
          />

          {/* Logo */}
          <img
            src={Logo}
            alt="ApkiStore"
            className={`sm:w-24 w-20 ${
              toggle ? "flex md:hidden" : "hidden md:flex"
            }  ml-4 sm:ml-8`}
          />

          {/* Icons */}
          <section className="flex sm:relative items-center ml-auto gap-3 sm:gap-5">
            <div
              onClick={() => handleOpenModal("Search")}
              className="icon-bg flex justify-center items-center text-2xl sm:text-3xl font-bold w-7 h-7 sm:w-9 sm:h-9 text-color rounded-full p-1.5 sm:p-2.5 cursor-pointer"
            >
              <GoSearch />
            </div>
            <div
              type="button"
              onClick={() => handleOpenModal("Notification")}
              className="icon-bg flex justify-center items-center text-2xl sm:text-3xl font-bold w-7 h-7 sm:w-9 sm:h-9 text-color rounded-full p-1.5 sm:p-2.5 cursor-pointer"
            >
              <MdOutlineNotificationsActive />
            </div>

            {/* Notification Drawer */}
            {/* {showModal === "Notification" && <Notifications />} */}

            {/* Profile */}
            <section className="flex gap-2  sm:gap-3  items-center">
              <div className="icon-bg z-10 flex justify-center items-center text-3xl font-bold w-7 h-7 sm:w-9 sm:h-9 text-color rounded-full">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80"
                  alt=""
                  className="w-full h-full object-cover object-top rounded-full"
                />
              </div>
              <div className="sm:flex hidden flex-col">
                <span className="text-sm font-bold text-color capitalize">
                  {role}
                </span>
                <span className="text-xs ">{email}</span>
              </div>
              {/* Down Arrow */}
              <button
                type="button"
                onClick={() => handleOpenModal("Profile")}
                className="text-color cursor-pointer text-sm font-medium"
              >
                <BsChevronDown />
              </button>
              {/* Profile Drawer */}
              {showModal === "Profile" && (
                <div className="rounded p-3  gap-1.5 w-36 z-30 absolute top-16 sm:top-14 right-3   bg-secondary text-xs  grid text-left shadow">
                  <span
                    onClick={() => {
                      navigate("/setting/profile");
                      handleOpenModal("Profile");
                    }}
                    className="cursor-pointer"
                  >
                    My Profile
                  </span>

                  <span
                    onClick={() => {
                      setUpdateProfile(true);
                      handleOpenModal("Profile");
                    }}
                    className="cursor-pointer"
                  >
                    Update Profile
                  </span>
                  <span
                    onClick={() => {
                      localStorage.clear();
                      navigate("/");
                    }}
                    className="cursor-pointer"
                  >
                    Sign Out
                  </span>
                </div>
              )}
            </section>
          </section>

          {/* Update Profile */}
          {updateProfile && (
            <UpdateProfile
              data={data}
              handleCloseModal={() => setUpdateProfile(false)}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Header;
