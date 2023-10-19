import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

export default function Cart() {
  const cartData = useLoaderData();
  const [currentCart, setCurrentCart] = useState(cartData);

  const handleRemoveCart = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to remove this product from your cart",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#212529",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirm",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/carts/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const remaining = currentCart.filter(
                (product) => product._id != id
              );
              setCurrentCart(remaining);
            }
          });
        Swal.fire("Product is removed from your cart", "", "success");
      }
    });

    // fetch(`http://localhost:5000/carts/${id}`, {
    //   method: "DELETE",
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     if (data.deletedCount > 0) {
    //       const remaining = currentCart.filter((product) => product._id != id);
    //       setCurrentCart(remaining);
    //     }
    //   });
  };

  return (
    <div className="mx-20 my-10">
      <h2 className="text-center text-5xl font-bold">Cart Details</h2>
      <div className="grid grid-cols-1 mx-20 mt-10 md:grid-cols-2 gap-10">
        {currentCart.map((product) => (
          <div
            key={product._id}
            className="lg:flex items-center gap-8 hover:bg-gray-200 p-10 rounded-xl"
          >
            <img className="rounded-xl" src={product.photo} alt="" />
            <div className="text-2xl font-bold">
              <p className="">
                Product Name:{" "}
                <span className="text-gray-500">{product.name}</span>
              </p>
              <p className="my-2">
                Brand Name:{" "}
                <span className="text-gray-500">
                  {product.brandName[0].toUpperCase() +
                    product.brandName.slice(1)}
                </span>
              </p>
              <p>
                Price: <span className="text-gray-500 ">${product.price}</span>
              </p>
              <button
                onClick={() => handleRemoveCart(product._id)}
                to={`/productDetails/${product._id}`}
                className="bg-[#212529] text-white px-5 mt-3 py-2 rounded-lg"
              >
                Remove from cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
