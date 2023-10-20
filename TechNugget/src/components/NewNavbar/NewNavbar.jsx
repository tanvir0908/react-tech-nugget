import { useContext } from "react";
import { GrTechnology } from "react-icons/gr";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

export default function NewNavbar() {
  const { user, logoutUser } = useContext(AuthContext);

  const handleLogout = () => {
    logoutUser()
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  return (
    <div className="navbar md:text-xl bg-base-100 md:px-20 py-5">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-5 z-[1] shadow bg-base-100 rounded-box w-52"
          >
            <li className="text-xl font-semibold">
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li className="text-lg font-semibold">
              <NavLink to={"/addProduct"}>Add Product</NavLink>
            </li>
            <li className="text-lg font-semibold">
              <NavLink to={`/cart/${user?.email}`}>My Cart</NavLink>
            </li>
          </ul>
        </div>
        <div className="font-bold text-2xl md:text-5xl cursor-pointer ">
          <Link className="flex items-center gap-2">
            <GrTechnology />
            <span>TechNugget</span>
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="text-lg font-semibold">
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li className="text-lg font-semibold">
            <NavLink to={"/addProduct"}>Add Product</NavLink>
          </li>
          <li className="text-lg font-semibold">
            <NavLink to={`/cart/${user?.email}`}>My Cart</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <img
              className="w-10 hidden md:inline border mr-1 rounded-full"
              src={user.photoURL}
              alt=""
            />
            <p className="my-3 hidden md:inline font-medium md:my-0">
              {user.displayName}
            </p>
            <button
              onClick={handleLogout}
              className="bg-[#212529] text-white font-semibold md:ml-8 px-5 py-2 mr-4 md:mr-0 md:px-10 md:py-3 rounded-xl"
            >
              Logout
            </button>
          </>
        ) : (
          <Link to={"/login"}>
            <button className="bg-[#212529] text-white font-semibold px-5 py-2 mr-4 md:mr-0 md:px-10 md:py-3 rounded-xl">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}
