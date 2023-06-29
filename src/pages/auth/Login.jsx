import React, { useState } from "react";
import Logo from "../../assets/Logo.png";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const naviagte = useNavigate();
  const [isView, setIsView] = useState(false);
  const [formInput, setFormInput] = useState();

  // showPassword
  const showPassword = () => setIsView(!isView);

  // handleChange
  const handleChange = (event) => {
    setFormInput({ ...formInput, [event.target.name]: event.target.value });
  };

  // handleSubmit
  const handleSubmit = (event) => {
    event.preventDefault();
    // navigate
    naviagte("/dashboard");
  };

  return (
    <section className="sm:h-screen flex justify-center items-center overflow-hidden">
      {/* Content */}
      <div className="container mx-auto flex items-center h-full justify-center">
        {/* Form */}
        <div className="form-section  bg-white z-20 grid rounded shadow p-10">
          {/* Details */}
          <div className="flex flex-col gap-5 items-center text-center justify-center ">
            <img src={Logo} alt="Login" className="w-48" />
            <h2 className="uppercase text-blue-600 font-extrabold text-2xl">
              Sign In
            </h2>
            <p className="text-gray-600">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor,
              esse.
            </p>
          </div>

          {/* Form Inputs */}
          <form onSubmit={handleSubmit} className="tracking-wider grid gap-5">
            {/* Phone */}
            <div className="grid gap-1">
              <label htmlFor="phone">Phone*</label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formInput?.phone}
                onChange={handleChange}
                maxLength={10}
                className="outline-none rounded  border-slate-200 border p-2"
              />
            </div>
            {/* Password */}
            <div className="grid gap-1">
              <label htmlFor="password">Password*</label>
              <div className="outline-none rounded flex items-center border-slate-200 border p-2">
                <input
                  type={isView ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formInput?.password}
                  onChange={handleChange}
                  className="outline-none w-full"
                />
                <span onClick={showPassword} className="cursor-pointer text-xl">
                  {isView ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </span>
              </div>
            </div>
            {/* Button */}
            <button
              type="submit"
              className="p-2 uppercase tracking-wider rounded text-white bg-pink-500 text-center w-full"
            >
              Login
            </button>
          </form>
        </div>
      </div>

      {/* Circles */}
      <div className="rounded-full w-44 h-44 fixed -top-14 -left-16 bg-blue-400"></div>
      <div className="rounded-full w-44 h-44 fixed -bottom-14 -right-16 bg-blue-400"></div>
    </section>
  );
};

export default Login;
