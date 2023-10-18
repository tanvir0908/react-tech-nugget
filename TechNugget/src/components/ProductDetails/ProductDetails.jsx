import { useLoaderData } from "react-router-dom";

export default function ProductDetails() {
  const productDetails = useLoaderData();

  const brandName = productDetails.brandName;
  let name1 = brandName[0];
  name1 = name1.toUpperCase();
  let name2 = brandName.slice(1);
  let name = name1 + name2;

  return (
    <div className="mb-20 mx-20">
      <h2 className="text-5xl font-bold text-center mb-10">Product Details</h2>
      <div className="bg-gray-200 p-10 text-2xl font-bold text-center rounded-xl">
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
      </div>
    </div>
  );
}
