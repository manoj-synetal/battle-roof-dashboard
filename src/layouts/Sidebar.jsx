import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import {
  MdOutlineSpaceDashboard,
  MdRadioButtonChecked,
  MdRadioButtonUnchecked,
} from "react-icons/md";
import { FaOpencart, FaProductHunt } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import Button2 from "../components/Button2";
import { BiArrowBack } from "react-icons/bi";

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
      name: "Dashboard",
      path: "/dashboard",
      icon: <MdOutlineSpaceDashboard />,
    },
    {
      name: "Games",
      icon: <FaProductHunt />,
      path: "/games",
    },
    {
      name: "Tournaments",
      path: "/tournaments",
      icon: <FaOpencart />,
    },
  ];

  return (
    <div className="md:z-auto z-40">
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
                  } hover-text-color  flex items-center gap-3 `}
                >
                  <span className="text-lg">{item.icon}</span>
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
                <div className="flex flex-col gap-2 p-2 pt-0 rounded mb-3">
                  {item.other.map((ite) => {
                    return (
                      <div className="flex items-center gap-2.5">
                        <MdRadioButtonUnchecked />
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
