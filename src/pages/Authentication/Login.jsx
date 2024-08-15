import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import OtherLogin from "./OtherLogin";
import { useForm } from "react-hook-form";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();

  const [showPass, setShowPass] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";

  const onSubmit = (data) => {
    loginUser(data.email, data.password)
      .then((result) => {
        if (result.user) {
          toast.success("Logged in");
          setTimeout(() => {
            navigate(from);
          }, 1000);
        }
      })
      .catch(() => {
        toast.error("Incorrect email or password!");
      });
  };

  return (
    <div className="lg:px-40 md:px-10 lg:py-8 mainLogin p-2 md:p-0 md:min-h-screen flex items-center">
      <div className=" bg-slate-200 md:w-[500px] w-full rounded-xl mx-auto">
        <div className=" gap-3 p-10 justify-between">
          <img className=" w-40 flex mx-auto" src="https://i.ibb.co/58dnSPv/COSMETICS-1.png" alt="" />
          <hr className=" border-gray-400 my-2" />
          <h1 className=" text-3xl font-bold text-center">Login</h1>
          <div className="flex flex-col gap-3">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-3">
              <label className="ml-4">Email</label>
              <label className="input flex items-center gap-2 rounded-full h-[60px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70">
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input
                  type="email"
                  className="grow"
                  name="email"
                  autoComplete=""
                  placeholder="Enter your E-mail"
                  required
                  {...register("email", { required: true })}
                />
              </label>

              <label className=" ml-4">Password</label>

              <label className="input flex items-center justify-between gap-2 rounded-full h-[60px]">
                <div className=" flex items-center w-full gap-2 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 opacity-70">
                    <path
                      fillRule="evenodd"
                      d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <input
                    type={showPass ? "text" : "password"}
                    className="grow"
                    name="password"
                    autoComplete="current-password"
                    placeholder="Enter your secret password"
                    required
                    {...register("password", { required: true })}
                  />
                </div>
                <span onClick={() => setShowPass(!showPass)}>
                  {showPass ? (
                    <IoMdEyeOff className=" text-xl text-gray-600"></IoMdEyeOff>
                  ) : (
                    <IoMdEye className="text-xl text-gray-600"></IoMdEye>
                  )}
                </span>
              </label>

              <a className="text-sm ml-4 text-red-600 cursor-pointer">
                Forget your password
              </a>
              <input
                type="submit"
                className="grow mt-6 btn btn-success w-full rounded-full text-white"
                value="Login"
              />
            </form>
            <p className=" text-center mt-4">Login with other methods</p>

            {/* other methods google and git */}

            <OtherLogin />
          </div>

          {/* redicret register page */}

          <div className=" flex mx-auto">
            <h1 className=" flex items-center lg:gap-3 text-sm mx-auto ">
              Do not have any account
              <span>
                <FaArrowRightLong></FaArrowRightLong>
              </span>
              <Link to="/register">
                <button className=" font-bold text-blue-400">Register</button>
              </Link>
            </h1>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
