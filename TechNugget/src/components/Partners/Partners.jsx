export default function Partners() {
  return (
    <div className="md:mx-20 mx-5 my-20 pt-10 pb-12 bg-gray-200 rounded-xl ">
      <h2 className="text-5xl font-bold text-center">Our Partners</h2>
      <div className="flex flex-col md:flex-row gap-10 justify-evenly mt-10">
        <div className="">
          <img
            className="w-[8rem] rounded-xl mx-auto"
            src="https://cdn4.iconfinder.com/data/icons/social-media-2146/512/31_social-512.png"
            alt=""
          />
          <h2 className="text-3xl font-semibold mt-3 text-center">Amazon</h2>
        </div>
        <div>
          <img
            className="w-[8rem] rounded-xl mx-auto"
            src="https://cdn-icons-png.flaticon.com/512/888/888848.png"
            alt=""
          />
          <h2 className="text-3xl font-semibold mt-3 text-center">eBay</h2>
        </div>
        <div>
          <img
            className="w-[8rem] rounded-xl mx-auto"
            src="https://cdn.icon-icons.com/icons2/2699/PNG/512/walmart_logo_icon_170230.png"
            alt=""
          />
          <h2 className="text-3xl font-semibold mt-3 text-center">Walmart</h2>
        </div>
        <div>
          <img
            className="w-[11rem] rounded-xl mx-auto"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Best_Buy_Logo.svg/1280px-Best_Buy_Logo.svg.png"
            alt=""
          />
          <h2 className="text-3xl font-semibold mt-3 text-center">Best Buy</h2>
        </div>
        <div className="">
          <img
            className="w-[8rem] rounded-xl mx-auto"
            src="https://iconape.com/wp-content/png_logo_vector/wish-logo.png"
            alt=""
          />
          <h2 className="text-3xl font-semibold mt-3 text-center">Wish</h2>
        </div>
      </div>
    </div>
  );
}
