import { useContext, useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

export default function Login() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);
  const location = useLocation();
  const { loginUser, googleLogin } = useContext(AuthContext);
  const [loginError, setLoginError] = useState(null);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    loginUser(email, password)
      .then((result) => {
        navigate(location?.state ? location.state : "/");
        console.log(result.user);
        setTimeout(() => {}, 200);

        //Success message
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });
        Toast.fire({
          icon: "success",
          title: "Login successfully",
        });
      })
      .catch((error) => {
        console.log(error);
        setLoginError("Invalid email and password");
      });
  };

  const loginWithGoogle = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
        navigate(location?.state ? location.state : "/");
        setTimeout(() => {}, 200);

        //Success message
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });
        Toast.fire({
          icon: "success",
          title: "Login successfully",
        });
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="py-20 mb-20 mx-20 rounded-xl bg-gray-200">
      <h2 className="text-5xl font-bold text-[#212529] text-center my-10">
        Please Login
      </h2>
      <form className="md:w-3/4 lg:w-2/6 mx-auto" onSubmit={handleLogin}>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg font-medium">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="input input-bordered text-lg font-medium"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg font-medium">Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            className="input input-bordered text-lg font-medium"
            required
          />
        </div>
        <p className="text-center text-red-500 text-lg font-medium mt-5">
          {loginError}
        </p>
        <div className="form-control mt-6 ">
          <button className="bg-[#212529] text-white text-lg font-semibold py-3 rounded-xl duration-500">
            Login
          </button>
        </div>
      </form>
      <p className="text-center my-5 text-[#706F6F] font-medium">
        Do not have an account?{" "}
        <Link className="font-bold text-[#212529]" to={"/register"}>
          Register
        </Link>
      </p>
      <div className="flex justify-center items-center">
        <button
          onClick={loginWithGoogle}
          className="flex items-center px-5 py-2 rounded-lg gap-2 text-lg font-medium border-2 border-[#212529]"
        >
          <FcGoogle className="text-3xl" />
          Login with Google
        </button>
      </div>
    </div>
  );
}
