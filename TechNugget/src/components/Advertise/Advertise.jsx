import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Asvertise.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Advertise() {
  return (
    <div className="h-[80vh] w-3/4 lg:w-full">
      <Swiper
        spaceBetween={100}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            className="rounded-xl"
            src="https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2023/01/ultra.png?fit=1920%2C960&ssl=1"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="rounded-xl"
            src="https://theaxo.com/wp-content/uploads/2023/02/Pre-order-Collection-Announcement_Visual-e1676529946699.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="rounded-xl"
            src="https://www.androidheadlines.com/wp-content/uploads/2023/01/Samsung-Galaxy-S23-leaked-posters-11.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
