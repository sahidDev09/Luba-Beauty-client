import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const { logOut, user } = useContext(AuthContext);

  const handlelogOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to logout this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Logout!",
    }).then((result) => {
      if (result.isConfirmed) {
        logOut();
        Swal.fire({
          title: "Logged-out!",
          text: "logout sucessfully.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div className=" bg-pink-50">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? " bg-pink-200 px-4 py-2 rounded-md"
                      : "text-black"
                  }>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/products"
                  className={({ isActive }) =>
                    isActive
                      ? " bg-pink-200 px-4 py-2 rounded-md"
                      : "text-black"
                  }>
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/outlets"
                  className={({ isActive }) =>
                    isActive
                      ? " bg-pink-200 px-4 py-2 rounded-md"
                      : "text-black"
                  }>
                  Outlets
                </NavLink>
              </li>
            </ul>
          </div>
          <NavLink to="/">
            <img
              className=" w-16 md:w-24"
              src="https://i.ibb.co/58dnSPv/COSMETICS-1.png"
              alt="logo"
            />
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? " bg-[#e58c8a] px-4 py-2 rounded-md text-white"
                    : "text-black"
                }>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  isActive
                    ? " bg-[#e58c8a] px-4 py-2 rounded-md text-white"
                    : "text-black"
                }>
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/outlets"
                className={({ isActive }) =>
                  isActive
                    ? " bg-[#e58c8a] px-4 py-2 rounded-md text-white"
                    : "text-black"
                }>
                Outlets
              </NavLink>
            </li>
          </ul>
        </div>
        {user ? (
          <div className="navbar-end">
            <div className="flex gap-2">
              <div className="form-control hidden md:inline">
                <input
                  type="text"
                  placeholder="Search"
                  className="input input-bordered w-24 md:w-auto"
                />
              </div>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img alt="PROFILE" src={user?.photoURL} />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                  <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li onClick={handlelogOut}>
                    <a>Logout</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="navbar-end">
            <NavLink className="btn bg-[#e58c8a] text-white" to="/login">
              Sign-in
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
