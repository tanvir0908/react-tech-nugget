import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";

export default function Register() {
  // For start page from start
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);
  // Password validation error
  const [error, setError] = useState(null);
  // Import function from AuthProvider
  const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;

    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(name, photo, email, password);

    // Password validation
    if (/^(?=.*[A-Z])(?=.*[\W_]).{6,}$/.test(password)) {
      // Create user
      createUser(email, password)
        .then((result) => {
          // Add username and picture to the firebase
          updateProfile(result.user, {
            displayName: name,
            photoURL: photo,
          });

          // Reload window
          window.location.reload();

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
            title: "Register successfully",
          });
        })
        .catch((error) => console.log(error));
    } else {
      setError(
        "Password should be more than 6 characters with at least 1 capital letter and 1 special character"
      );
    }
  };

  return (
    <div className="py-20 mb-20 mx-20 rounded-xl bg-gray-200">
      <h2 className="text-5xl font-bold text-[#212529] text-center my-10">
        Please Register
      </h2>
      <form onSubmit={handleRegister} className="md:w-3/4 lg:w-2/6 mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg font-medium">Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="input input-bordered text-lg font-medium"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg font-medium">Photo URL</span>
          </label>
          <input
            type="text"
            name="photo"
            placeholder="Enter your photo URL"
            className="input input-bordered text-lg font-medium"
          />
        </div>
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
        <p className="text-center text-red-500 mt-5 text-lg font-medium">
          {error}
        </p>
        <div className="form-control mt-6 ">
          <button className="bg-[#212529] text-white text-lg font-semibold py-3 rounded-xl duration-500">
            Register
          </button>
        </div>
      </form>
      <p className="text-center my-5 text-[#706F6F] font-medium">
        Already have an account?{" "}
        <Link className="font-bold text-[#212529]" to={"/login"}>
          Login
        </Link>
      </p>
    </div>
  );
}
