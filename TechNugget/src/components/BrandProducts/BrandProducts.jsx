import { Link, useLoaderData } from "react-router-dom";
import Advertise from "../Advertise/Advertise";
import { useEffect } from "react";

export default function BrandProducts() {
  const products = useLoaderData();

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  //   Normal Case Brand Name
  let name = "Sorry No Products Available";
  if (products.length > 0) {
    name = products[0].brandName;
    let name1 = name[0];
    name1 = name1.toUpperCase();
    const name2 = name.slice(1);
    name = name1 + name2;
  }

  return (
    <div className={`lg:mx-20 mb-20`}>
      <div className="my-20">
        <h2 className="text-6xl font-bold text-center mb-16">
          {products.length ? `${name}` : `${name}`}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {products.map((product) => (
            <div
              key={product._id}
              className="lg:flex items-center mx-auto gap-8 hover:bg-gray-200 p-10 rounded-xl"
            >
              <img className="rounded-xl" src={product.photo} alt="" />
              <div className="text-2xl font-bold">
                <p className="">
                  Product Name:{" "}
                  <span className="text-gray-500">{product.name}</span>
                </p>
                <p>
                  Brand Name: <span className="text-gray-500">{name}</span>
                </p>
                <p>
                  Product Type:{" "}
                  <span className="text-gray-500">{product.type}</span>
                </p>
                <p>
                  Rating:{" "}
                  <span className="text-gray-500">{product.rating}</span>
                </p>
                <p className="mb-4">
                  Price:{" "}
                  <span className="text-gray-500 ">${product.price}</span>
                </p>
                <Link
                  to={`/productDetails/${product._id}`}
                  className="bg-[#212529] text-white px-5 py-2 rounded-lg"
                >
                  Details
                </Link>
                <Link
                  to={`/productUpdate/${product._id}`}
                  className="bg-[#212529] text-white ml-3 px-5 py-2 rounded-lg"
                >
                  Update
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Advertise />
    </div>
  );
}
