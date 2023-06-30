import Logo from "../assets/Logo.png";
import React, { useState } from "react";
import { GoSearch } from "react-icons/go";
import { HiOutlineMenu } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { BsChatDots, BsChevronDown } from "react-icons/bs";
import { MdClose, MdOutlineNotificationsActive } from "react-icons/md";
import Notifications from "./Components/Notifications";
import SearchBar from "./Components/SearchBar";

const Header = ({ handleToggle, toggle }) => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState();

  // handleOpenModal
  const handleOpenModal = (value) =>
    setShowModal(showModal === value ? "" : value);

  return (
    <div className="p-2.5 rounded bg-[#1E2A3A] shadow tracking-wider flex items-center">
      {showModal === "Search" ? (
        <>
          {/* Search Drawer */}
          <SearchBar handleOpenModal={handleOpenModal} />
        </>
      ) : (
        <>
          <HiOutlineMenu
            onClick={handleToggle}
            className="sm:text-2xl text-xl cursor-pointer text-color"
          />

          {/* Logo */}
          <img
            src={Logo}
            alt="ApkiStore"
            className={`sm:w-24 w-24 ${
              toggle ? "flex md:hidden" : "hidden md:flex"
            }  ml-3 sm:ml-8`}
          />

          {/* Icons */}
          <section className="flex sm:relative items-center ml-auto gap-3 sm:gap-5">
            <div
              onClick={() => handleOpenModal("Search")}
              className="bg-color flex justify-center items-center text-2xl sm:text-3xl font-bold w-8 h-8 sm:w-10 sm:h-10 text-color rounded-full p-1.5 sm:p-2.5 cursor-pointer"
            >
              <GoSearch />
            </div>
            <div
              onClick={() => handleOpenModal("Notification")}
              className="bg-color flex justify-center items-center text-2xl sm:text-3xl font-bold w-8 h-8 sm:w-10 sm:h-10 text-color rounded-full p-1.5 sm:p-2.5 cursor-pointer"
            >
              <MdOutlineNotificationsActive />
            </div>

            {/* Notification Drawer */}
            {showModal === "Notification" && <Notifications />}

            {/* Profile */}
            <section className="flex gap-2  sm:gap-3  items-center">
              <div className="bg-color z-10 flex justify-center items-center text-3xl font-bold w-8 h-8 sm:w-9 sm:h-9 text-color border rounded-full">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80"
                  alt=""
                  className="w-full h-full object-cover object-top rounded-full"
                />
              </div>
              <div className="sm:flex hidden flex-col">
                <span className="text-sm font-bold text-color">Merchant</span>
                <span className="text-xs ">apkistore@gamil.com</span>
              </div>
              {/* Down Arrow */}
              <span
                onClick={() => handleOpenModal("Profile")}
                className="text-color cursor-pointer text-sm font-medium"
              >
                <BsChevronDown />
              </span>
              {/* Profile Drawer */}
              {showModal === "Profile" && (
                <div className="rounded p-3 text-sm gap-1.5 pl-4 w-40 z-30 absolute top-14 right-2  bg-secondary  grid text-left shadow">
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
                    onClick={() => navigate("/")}
                    className="cursor-pointer"
                  >
                    Sign Out
                  </span>
                </div>
              )}
            </section>
          </section>
        </>
      )}
    </div>
  );
};

export default Header;
