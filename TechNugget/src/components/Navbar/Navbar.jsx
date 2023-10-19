import { useContext, useState } from "react";
import { GrTechnology } from "react-icons/gr";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { user, logoutUser } = useContext(AuthContext);
  const handleLogout = () => {
    logoutUser()
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };
  return (
    <div className="w-full py-5">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-20 px-5">
        <div className="font-bold text-3xl md:text-5xl cursor-pointer ">
          <Link className="flex items-center gap-2">
            <GrTechnology />
            <span>TechNugget</span>
          </Link>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-5 top-[1.4rem] cursor-pointer md:hidden w-7 h-7 text-2xl font-bold"
        >
          {open ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
        <ul
          className={`md:flex md:items-center text-xl font-medium md:pb-0 pb-6 absolute bg-white pl-5 md:pl-0 rounded-xl md:static md:z-auto z-[10] top-[4rem] w-full md:w-auto transition-all duration-500 ease-in ${
            open ? "left-[250px]" : "left-[500px]"
          }`}
        >
          <li className="text-[#212529] md:ml-8 ">
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li className="text-[#212529] md:ml-8 my-3 md:my-0">
            <NavLink to={"/addProduct"}>Add Product</NavLink>
          </li>
          <li className="text-[#212529] md:mx-8 mb-3 md:mb-0">
            <NavLink to={`/cart/${user?.email}`}>My Cart</NavLink>
          </li>
          {/* {user && (
            <>
              <li>
                <img
                  className="w-10 border mr-1 rounded-full"
                  src={user.photoURL}
                  alt=""
                />
              </li>
              <li>{user.displayName}</li>
            </>
          )} */}

          {user != null ? (
            <>
              <li>
                <img
                  className="w-10 border mr-1 rounded-full"
                  src={user.photoURL}
                  alt=""
                />
              </li>
              <li>{user.displayName}</li>
              <button
                onClick={handleLogout}
                className="bg-[#212529] text-white md:ml-8 font-semibold px-10 py-3 rounded-xl duration-500 md:static"
              >
                Logout
              </button>
            </>
          ) : (
            <Link to={"/login"}>
              <button className="bg-[#212529] text-white md:ml-8 font-semibold px-10 py-3 rounded-xl duration-500 md:static">
                Login
              </button>
            </Link>
          )}
        </ul>
      </div>
    </div>
  );
}
