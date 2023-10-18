import { useLoaderData } from "react-router-dom";
import Advertise from "../Advertise/Advertise";

export default function BrandProducts() {
  const products = useLoaderData();

  //   Normal Case Brand Name
  let name = "Sorry No Products Available";
  if (products.length > 0) {
    name = products[0].brandName;
    let name1 = name[0];
    name1 = name1.toUpperCase();
    const name2 = name.slice(1);
    name = name1 + name2;
  }

  console.log(name);

  return (
    <div className={`my-20 mx-20`}>
      <Advertise />
      <h2 className="text-6xl font-bold text-center mb-16">
        {products.length ? `${name}` : `${name}`}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {products.map((product) => (
          <div key={product._id} className="flex items-center mx-auto gap-5">
            <img src={product.photo} alt="" />
            <div className="text-2xl font-semibold">
              <p className="">
                Product Name:{" "}
                <span className="text-gray-500">{product.name}</span>
              </p>
              <p>
                Brand Name:{" "}
                <span className="text-gray-500">{product.brandName}</span>
              </p>
              <p>
                Price: <span className="text-gray-500">${product.price}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
