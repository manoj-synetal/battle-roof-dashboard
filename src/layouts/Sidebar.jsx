import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import {
  MdOutlineGames,
  MdOutlineSpaceDashboard,
  MdRadioButtonUnchecked,
} from "react-icons/md";
import { FaOpencart, FaProductHunt, FaGamepad } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsChevronDown, BsChevronUp, BsFillGearFill } from "react-icons/bs";
import Button2 from "../components/Button2";
import { BiArrowBack, BiSupport } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { AiOutlineTransaction } from "react-icons/ai";

const Sidebar = ({ handleToggle }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const [dropdown, setDropdown] = useState(false);

  // handleDropdown
  const handleDropdown = () => setDropdown(!dropdown);

  // handleNavigate
  const handleNavigate = (path) => navigate(path);

  // navlinks
  const navLinks = [
    {

     id:1,
      name: "Dashboard",
      path: "/dashboard",
      icon: <MdOutlineSpaceDashboard />,
    },
    {
     id:2,
      name: "Games",
      icon: <FaGamepad />,
      path: "/games",
    },
    {
     id:3,
      name: "Tournaments",
      path: "/tournaments",
      icon: <MdOutlineGames />,
    },
    {
     id:4,
      name: "Users",
      path: "/users",
      icon: <FiUsers />,
    },
    {
     id:4,
      name: "Transaction",
      path: "/transaction",
      icon: <AiOutlineTransaction />,
    },
    {
     id:5,
      name: "Support",
      path: "/support",
      icon: <BiSupport />,
    },

    {
     id:6,
      name: "Setting",
      path: "/setting",
      icon: <BsFillGearFill />,
      other: [
        {
         id:1,
          name: "Profile",
          path: "/setting/profile",
          icon: <FaOpencart />,
        },
        {
         id:2,
          name: "How To Play",
          path: "/setting/howtoplay",
          icon: <FaOpencart />,
        },
      ],
    },
  ];

  return (
    <div className="md:z-auto w-full z-40">
      <img
        src={Logo}
        alt="ApkiStore"
        className="w-28 md:block hidden mb-9 mt-1"
      />

      <div
        onClick={handleToggle}
        className="mb-9 mt-1 flex md:hidden justify-end cursor-pointer"
      >
        <Button2 title="Back" icon={<BiArrowBack className="md:text-lg" />} />
      </div>

      {/* Links */}
      <section className="">
        {navLinks.map((item) => {
          return (
            <>
              <div
                key={item.name}
                onClick={() =>
                  item.other ? handleDropdown() : handleNavigate(item.path)
                }
                className="flex w-full cursor-pointer items-center relative gap-2 mb-3"
              >
                <div
                  className={`${
                    location.pathname === item.path
                      ? "text-color"
                      : "text-gray-500 "
                  } hover-text-color text-sm  flex items-center gap-3 `}
                >
                  <span className="text-lg" key={item.name}>{item.icon}</span>
                  {item.name}
                </div>
                {item.other && (
                  <span className="cursor-pointer text-xs">
                    {dropdown ? <BsChevronUp /> : <BsChevronDown />}
                  </span>
                )}
              </div>

              {/* Nested Links */}
              {item.other && dropdown && (
                <div className="flex text-sm flex-col gap-2 p-2 pt-0 rounded mb-3">
                  {item.other.map((id,ite) => {
                    return (

                      <div  className="flex items-center gap-1.5">
                        <MdRadioButtonUnchecked className="text-sm" />
                        <Link
                          key={ite.name}
                          to={ite.path}
                          className="hover-text-color cursor-pointer"
                        >
                          {ite.name}
                        </Link>
                      </div>
                    );
                  })}
                </div>
              )}
            </>
          );
        })}
      </section>
    </div>
  );
};

export default Sidebar;
