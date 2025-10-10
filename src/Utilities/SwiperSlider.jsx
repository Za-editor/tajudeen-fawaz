import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const SwiperSlider = () => {
  const slides = [
    "https://picsum.photos/id/1018/400/300",
    "https://picsum.photos/id/1025/400/300",
    "https://picsum.photos/id/1035/400/300",
    "https://picsum.photos/id/1041/400/300",
    "https://picsum.photos/id/1052/400/300",
    "https://picsum.photos/id/1060/400/300",
    "https://picsum.photos/id/1074/400/300",
    "https://picsum.photos/id/1084/400/300",
  ];

  return (
    <div className="w-full flex justify-center items-center py-10">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{ clickable: true }}
        modules={[FreeMode, Pagination]}
        className="w-[90%] max-w-[1000px] mySwiper"
      >
        {slides.map((src, i) => (
          <SwiperSlide
            key={i}
            className="rounded-xl overflow-hidden shadow-md"
          >
            <img
              src={src}
              alt={`slide-${i}`}
              className=" h-[300px] w-[400px] object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperSlider;
