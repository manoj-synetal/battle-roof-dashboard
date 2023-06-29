import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import { GoSearch } from "react-icons/go";
import { HiOutlineMenu } from "react-icons/hi";
import { BsChatDots, BsChevronDown } from "react-icons/bs";
import { MdOutlineNotificationsActive } from "react-icons/md";

const Header = ({ handleToggle, toggle }) => {
  const [showModal, setShowModal] = useState();

  // handleOpenModal
  const handleOpenModal = (value) =>
    setShowModal(showModal === value ? "" : value);

  return (
    <div className="p-4 shadow tracking-wider flex items-center">
      <HiOutlineMenu
        onClick={handleToggle}
        className="sm:text-2xl text-xl cursor-pointer text-color"
      />

      <img
        src={Logo}
        alt="ApkiStore"
        className={`sm:w-36 w-24 ${
          toggle ? "flex md:hidden" : "hidden md:flex"
        }  ml-3 sm:ml-8`}
      />

      {/* Icons */}
      <section className="flex relative items-center ml-auto gap-3 sm:gap-5">
        <div className="bg-color flex justify-center items-center text-2xl sm:text-3xl font-bold w-7 h-7 sm:w-10 sm:h-10 text-color rounded-full p-1.5 sm:p-2.5 cursor-pointer">
          <GoSearch />
        </div>
        <div
          onClick={() => handleOpenModal("Notification")}
          className="bg-color flex justify-center items-center text-2xl sm:text-3xl font-bold w-7 h-7 sm:w-10 sm:h-10 text-color rounded-full p-1.5 sm:p-2.5 cursor-pointer"
        >
          <MdOutlineNotificationsActive />
        </div>
        <div className="bg-color flex justify-center items-center text-2xl sm:text-3xl font-bold w-7 h-7 sm:w-10 sm:h-10 text-color rounded-full p-1.5 sm:p-2.5 cursor-pointer">
          <BsChatDots />
        </div>

        {/* Dropdown */}
        {showModal === "Notification" && (
          <div className="rounded p-2 w-60 text-sm gap-1.5 pl-4 z-30 absolute top-12 left-0 bg-white  grid text-left shadow">
            Notifications
          </div>
        )}

        {/* Profile */}
        <section className="flex gap-2  sm:gap-3  items-center">
          <div className="bg-color z-10 flex justify-center items-center text-3xl font-bold w-7 h-7 sm:w-10 sm:h-10 text-color rounded-full cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80"
              alt=""
              onClick={() => handleOpenModal("Profile")}
              className="w-full h-full object-cover object-top rounded-full"
            />
          </div>
          <div className="sm:flex hidden flex-col">
            <span className="text-sm font-bold text-color">Merchant</span>
            <span className="text-xs text-gray-500">apkistore@gamil.com</span>
          </div>
          {/* Down Arrow */}
          <span
            onClick={() => handleOpenModal("Profile")}
            className="text-color cursor-pointer text-sm font-medium"
          >
            <BsChevronDown />
          </span>
          {/* Dropdown */}
          {showModal === "Profile" && (
            <div className="rounded p-2 text-sm gap-1.5 pl-4 w-40 z-30 absolute top-12 right-0 bg-white  grid text-left shadow">
              <span className="cursor-pointer">My Profile</span>
              <span className="cursor-pointer">Setting</span>
              <hr />
              <span className="cursor-pointer">Sign Out</span>
            </div>
          )}
        </section>
      </section>
    </div>
  );
};

export default Header;
