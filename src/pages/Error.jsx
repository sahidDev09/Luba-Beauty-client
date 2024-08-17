import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div
      className=" bg-[#EDAEAD] w-full min-h-screen
        ">
      <div className=" text-white text-center">
        <img
          className=" w-[500px] mx-auto"
          src="https://i.ibb.co/r3q4Vz2/Pngtree-404-construction-worker-repair-vector-4629781-1.png"
          alt="error page"
        />
        <h1 className=" md:text-5xl uppercase font-extrabold m-2 text-black">
          Page Under <br /> Reconstruction
        </h1>
        <p className=" text-gray-700">
          Currenty not available we will back as soon as possible
        </p>
        <NavLink to="/">
          <button
            className=" btn my-2
            ">
            Back to home
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Error;
