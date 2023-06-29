import Logo from "../assets/Logo.png";
import React, { useState } from "react";
import { GoSearch } from "react-icons/go";
import { HiOutlineMenu } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { BsChatDots, BsChevronDown } from "react-icons/bs";
import { MdClose, MdOutlineNotificationsActive } from "react-icons/md";

const Header = ({ handleToggle, toggle }) => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState();

  // handleOpenModal
  const handleOpenModal = (value) =>
    setShowModal(showModal === value ? "" : value);

  return (
    <div className="p-2.5 shadow tracking-wider flex items-center">
      {showModal === "Search" ? (
        <div className="w-full flex tracking-wider items-center gap-3">
          <div className="flex justify-center items-center text-2xl sm:text-3xl font-bold w-7 h-7 sm:w-10 sm:h-10 text-color rounded-full p-1.5 sm:p-2.5 cursor-pointer">
            <GoSearch />
          </div>

          <input
            type="text"
            className="w-full text-sm outline-none"
            placeholder="Explore Battle Roof"
          />
          <div
            onClick={() => handleOpenModal("Search")}
            className="bg-color flex justify-center items-center text-2xl sm:text-3xl font-bold w-7 h-7 sm:w-10 sm:h-10 text-color rounded-full p-1.5 sm:p-2.5 cursor-pointer"
          >
            <MdClose />
          </div>
        </div>
      ) : (
        <>
          <HiOutlineMenu
            onClick={handleToggle}
            className="sm:text-2xl text-xl cursor-pointer text-color"
          />

          <img
            src={Logo}
            alt="ApkiStore"
            className={`sm:w-24 w-24 ${
              toggle ? "flex md:hidden" : "hidden md:flex"
            }  ml-3 sm:ml-8`}
          />

          {/* Icons */}
          <section className="flex relative items-center ml-auto gap-3 sm:gap-5">
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

            {/* Dropdown */}
            {showModal === "Notification" && (
              <div className="rounded p-2 h-80 w-72 text-sm gap-1.5 z-30 absolute top-12 left-0 bg-white  grid text-left shadow-lg border">
                <div className="w-full text-lg font-medium">Notifications</div>
              </div>
            )}

            {/* Profile */}
            <section className="flex gap-2  sm:gap-3  items-center">
              <div className="bg-color z-10 flex justify-center items-center text-3xl font-bold w-8 h-8 sm:w-9 sm:h-9 text-color border rounded-full cursor-pointer">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80"
                  alt=""
                  onClick={() => handleOpenModal("Profile")}
                  className="w-full h-full object-cover object-top rounded-full"
                />
              </div>
              <div className="sm:flex hidden flex-col">
                <span className="text-sm font-bold text-color">Merchant</span>
                <span className="text-xs text-gray-500">
                  apkistore@gamil.com
                </span>
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
