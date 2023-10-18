import { useLoaderData } from "react-router-dom";

export default function UpdateProduct() {
  const product = useLoaderData();
  const handleUpdateProduct = (e) => {
    e.preventDefault();

    const form = e.target;
    const userBrandName = form.brandName.value;

    const name = form.name.value;
    const brandName = userBrandName.toLowerCase();
    const type = form.type.value;
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;
    const photo = form.photo.value;

    const updateProduct = {
      name,
      brandName,
      type,
      price,
      description,
      rating,
      photo,
    };
    console.log(updateProduct);

    fetch(`http://localhost:5000/productUpdate/${product._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateProduct),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="py-32  rounded-xl bg-gray-200 mb-10 mx-20">
      <h2 className="text-5xl font-bold text-center">Update Product</h2>
      <form className="mx-auto mt-10" onSubmit={handleUpdateProduct}>
        <div className="flex gap-10 w-2/3 mx-auto">
          <div className="flex flex-col w-full">
            <span className="font-medium mb-1">Name</span>
            <input
              className="px-3 py-2 rounded text-xl"
              type="text"
              name="name"
              placeholder="Enter product name"
              defaultValue={product.name}
            />
          </div>
          <div className="flex flex-col w-full">
            <span className="font-medium mb-1">Brand Name</span>
            <input
              className="px-3 py-2 rounded text-xl"
              type="text"
              name="brandName"
              placeholder="Enter brand name"
              defaultValue={product.brandName}
            />
          </div>
        </div>
        <div className="flex gap-10 my-5 w-2/3 mx-auto">
          <div className="flex flex-col w-full">
            <span className="font-medium mb-1">Product Type</span>
            <input
              className="px-3 py-2 rounded text-xl"
              type="text"
              name="type"
              placeholder="Enter product type"
              defaultValue={product.type}
            />
          </div>
          <div className="flex flex-col w-full">
            <span className="font-medium mb-1">Price</span>
            <input
              className="px-3 py-2 rounded text-xl"
              type="text"
              name="price"
              placeholder="Enter product price"
              defaultValue={product.price}
            />
          </div>
        </div>
        <div className="flex gap-10 w-2/3 mx-auto">
          <div className="flex flex-col w-full">
            <span className="font-medium mb-1">Description</span>
            <input
              className="px-3 py-2 rounded text-xl"
              type="text"
              name="description"
              placeholder="Enter short description"
              defaultValue={product.description}
            />
          </div>
          <div className="flex flex-col w-full">
            <span className="font-medium mb-1">Rating</span>
            <input
              className="px-3 py-2 rounded text-xl"
              type="number"
              max={5}
              min={1}
              name="rating"
              placeholder="Enter product rating"
              defaultValue={product.rating}
            />
          </div>
        </div>
        <div className="flex-col flex mx-auto w-2/3 my-5">
          <span className="font-medium mb-1">Product Photo</span>
          <input
            className="px-3 py-2 rounded text-xl"
            type="text"
            name="photo"
            placeholder="Enter photo URL"
            defaultValue={product.photo}
          />
        </div>
        <div className="mx-auto w-2/3">
          <input
            className="bg-[#212529] mt-2 cursor-pointer text-white text-lg w-full font-semibold py-3 rounded"
            type="submit"
            value="Update"
          />
        </div>
      </form>
    </div>
  );
}
