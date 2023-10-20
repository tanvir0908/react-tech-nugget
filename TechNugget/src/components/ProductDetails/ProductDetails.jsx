import { useContext, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

export default function ProductDetails() {
  const { user } = useContext(AuthContext);
  // Load data from database
  const productDetails = useLoaderData();
  // Page start at top
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  // Add to cart functionality
  const handleCartData = () => {
    const email = user.email;
    const name = productDetails.name;
    const brandName = productDetails.brandName;
    const type = productDetails.type;
    const price = productDetails.price;
    const description = productDetails.description;
    const rating = productDetails.rating;
    const photo = productDetails.photo;

    const newCart = {
      email,
      name,
      brandName,
      type,
      price,
      description,
      rating,
      photo,
    };

    // Send cart data into server
    fetch("https://b8a10-brandshop-server-side-tanvir0908.vercel.app/cart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCart),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          // Sweet Alert
          Swal.fire("Product added to cart successfully", "", "success");
        }
      });
  };

  const brandName = productDetails.brandName;
  let name1 = brandName[0];
  name1 = name1.toUpperCase();
  let name2 = brandName.slice(1);
  let name = name1 + name2;

  return (
    <div className="mb-20 pt-16 pb-10 rounded-xl mx-5 md:mx-20 bg-gray-200">
      <h2 className="text-5xl font-bold text-center mb-10">Product Details</h2>
      <div className=" p-10 text-2xl font-bold text-center ">
        <img className="rounded-xl mx-auto" src={productDetails.photo} alt="" />
        <p className="mt-5">
          Product Name:
          <span className="ml-2 text-gray-500">{productDetails.name}</span>
        </p>
        <p className="my-2">
          Brand Name: <span className="ml-1 text-gray-500">{name}</span>
        </p>
        <p>
          Type:
          <span className="ml-1 text-gray-500">{productDetails.type}</span>
        </p>
        <p className="my-2">
          Price:
          <span className="ml-1 text-gray-500">{productDetails.price}</span>
        </p>
        <p>
          Description:
          <span className="ml-1 text-gray-500">
            {productDetails.description}
          </span>
        </p>
        <p className="mt-2">
          Rating:
          <span className="ml-1 text-gray-500"> {productDetails.rating}</span>
        </p>
        <button
          onClick={handleCartData}
          className="bg-[#212529] text-white px-5 py-2 rounded-lg mt-3"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}
