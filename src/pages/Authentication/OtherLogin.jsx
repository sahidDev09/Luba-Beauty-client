import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import google from "../../assest/companies/Googlelogin.png";

const OtherLogin = () => {
  const { googleLogin } = useContext(AuthContext);

  // code for navigation route

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";

  const handleSocial = (socialProvider) => {
    socialProvider().then((result) => {
      if (result.user) {
        //navigate route
        toast.success("Logged in", { autoClose: 2000 });
        setTimeout(() => {
          navigate(from);
        }, 1000);
      }
    });
  };

  return (
    <div className=" my-2">
      <div
        onClick={() => handleSocial(googleLogin)}
        className=" cursor-pointer google bg-[#d5868573] hover:bg-[#d58685] hover:border p-2 rounded-md flex items-center gap-2">
        <div className=" flex gap-2 items-center mx-auto">
          <div className=" p-2 bg-slate-200 w-10 rounded-md">
            <img src={google} alt="" />
          </div>
          <h1 className=" text-white text-md lg:text-normal">
            Login with <span className=" font-semibold">Google Accounts</span>
          </h1>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default OtherLogin;
