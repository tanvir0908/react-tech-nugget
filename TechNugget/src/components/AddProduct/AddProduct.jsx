import Swal from "sweetalert2";

export default function AddProduct() {
  const handleAddProduct = (e) => {
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

    const newProduct = {
      name,
      brandName,
      type,
      price,
      description,
      rating,
      photo,
    };
    console.log(newProduct);

    // send data to the server
    fetch(
      "https://b8a10-brandshop-server-side-tanvir0908.vercel.app/products",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newProduct),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          // Sweet Alert
          Swal.fire("New Product Added Successfully", "", "success");

          //   reset form data
          form.reset();
        }
      });
  };

  return (
    <div className="py-32  rounded-xl bg-gray-200 mb-10 px-5 md:px-0 mx-5 md:mx-20">
      <h2 className="text-4xl md:text-5xl font-bold text-center">
        Add New Product
      </h2>
      <form className="mx-auto mt-10" onSubmit={handleAddProduct}>
        <div className="md:flex gap-10 md:w-2/3 mx-auto">
          <div className="flex flex-col mb-5 md:mb-0 w-full">
            <span className="font-medium mb-1">Name</span>
            <input
              className="px-3 py-2 rounded text-xl"
              type="text"
              name="name"
              placeholder="Enter product name"
            />
          </div>
          <div className="flex flex-col w-full">
            <span className="font-medium mb-1">Brand Name</span>
            <input
              className="px-3 py-2 rounded text-xl"
              type="text"
              name="brandName"
              placeholder="Enter brand name"
            />
          </div>
        </div>
        <div className="md:flex gap-10 my-5 md:w-2/3 mx-auto">
          <div className="flex flex-col mb-5 md:mb-0 w-full">
            <span className="font-medium mb-1">Product Type</span>
            <input
              className="px-3 py-2 rounded text-xl"
              type="text"
              name="type"
              placeholder="Enter product type"
            />
          </div>
          <div className="flex flex-col w-full">
            <span className="font-medium mb-1">Price</span>
            <input
              className="px-3 py-2 rounded text-xl"
              type="text"
              name="price"
              placeholder="Enter product price"
            />
          </div>
        </div>
        <div className="md:flex gap-10 md:w-2/3 mx-auto">
          <div className="flex flex-col mb-5 md:mb-0 w-full">
            <span className="font-medium mb-1">Description</span>
            <input
              className="px-3 py-2 rounded text-xl"
              type="text"
              name="description"
              placeholder="Enter short description"
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
            />
          </div>
        </div>
        <div className="flex-col flex mx-auto md:w-2/3 my-5">
          <span className="font-medium mb-1">Product Photo</span>
          <input
            className="px-3 py-2 rounded text-xl"
            type="text"
            name="photo"
            placeholder="Enter photo URL"
          />
        </div>
        <div className="mx-auto md:w-2/3">
          <input
            className="bg-[#212529] mt-2 cursor-pointer text-white text-lg w-full font-semibold py-3 rounded"
            type="submit"
            value="Add Product"
          />
        </div>
      </form>
    </div>
  );
}
