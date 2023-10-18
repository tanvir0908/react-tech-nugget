import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function BrandName() {
  const [brandNames, setBrandNames] = useState([]);

  useEffect(() => {
    fetch("/brand.json")
      .then((res) => res.json())
      .then((data) => setBrandNames(data));
  }, []);

  return (
    <div className="my-20 md:mx-20">
      <h2 className="text-5xl font-bold mb-5 text-center">Brands</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {brandNames.map((names) => (
          <div key={names.id} className="p-5 rounded-xl hover:bg-gray-100">
            <img
              className="bg-white w-full rounded-xl h-[23.5rem]"
              src={names.image}
              alt=""
            />
            <Link to={`/products/${names.name.toLowerCase()}`}>
              <h2 className="text-3xl font-semibold text-center my-5">
                {names.name}
              </h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
