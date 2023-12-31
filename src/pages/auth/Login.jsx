import React, { useState } from "react";
import Logo from "../../assets/Logo.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authLogin } from "../../redux/actions/authAction";
import { toast } from "react-hot-toast";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [formInput, setFormInput] = useState({});
  const { loading } = useSelector((state) => state.authReducer);

  // handleChange
  const handleChange = (event) => {
    setFormInput({ ...formInput, [event.target.name]: event.target.value });
  };

  // handleSubmit
  const handleSubmit = () => {
    const { email, password } = formInput;

    if (!email || !password) {
      toast.error("Please fill the fields");
    } else {
      const callBack = () => navigate("/dashboard");
      dispatch(authLogin(formInput, callBack));
    }
  };

  return (
    <div className="flex w-full h-screen mx-auto overflow-hidden shadow-lg  ">
      <div
        className="hidden bg-cover lg:block lg:w-2/3"
        style={{
          backgroundImage: `url(
              "https://images.unsplash.com/photo-1606660265514-358ebbadc80d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1575&q=80"
            )`,
        }}
      ></div>

      <div className="max-w-lg mx-auto itemc w-full px-6 py-8 flex flex-col justify-center md:px-8 lg:w-1/3">
        <div className="flex justify-center mx-auto">
          <img className="w-auto h-10 sm:h-12" src={Logo} alt="" />
        </div>

        <p className="mt-3 text-xl text-center  ">Welcome back!</p>

        {/* Email */}
        <div className="mt-4">
          <label className="block mb-2 text-sm font-medium  " htmlFor="email">
            Email Address
          </label>
          <input
            id="email"
            className="block w-full px-4 py-2 bg-transparent border-gray-700 outline-none  border rounded-lg  "
            type="email"
            value={formInput?.email}
            name="email"
            onChange={handleChange}
          />
        </div>

        {/* Password */}
        <div className="mt-4">
          <div className="flex justify-between">
            <label
              className="block mb-2 text-sm font-medium  "
              htmlFor="password"
            >
              Password
            </label>
          </div>

          <div className="flex gap-2 border-gray-700 border rounded-lg px-4 items-center">
            <input
              id="password"
              className="block w-full  py-2 outline-none"
              type={show ? "text" : "password"}
              value={formInput?.password}
              name="password"
              onChange={handleChange}
            />
            <span
              onClick={() => setShow(!show)}
              className="text-lg cursor-pointer text-color"
            >
              {show ? <AiFillEyeInvisible /> : <AiFillEye />}
            </span>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-6">
          <button
            type="button"
            disabled={loading}
            onClick={handleSubmit}
            className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform  rounded-lg bg-button focus:outline-none "
          >
            {loading ? "loading...." : " Sign In"}
          </button>
        </div>

        {/* Label */}
        <div className="flex items-center justify-between mt-4">
          <span className="w-1/5 border-b  md:w-1/4"></span>

          <div className="text-xs text-color uppercase ">❤ Battle roof</div>

          <span className="w-1/5 border-b  md:w-1/4"></span>
        </div>
      </div>
    </div>
  );
};

export default Login;
