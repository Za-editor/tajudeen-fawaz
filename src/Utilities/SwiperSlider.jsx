import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const SwiperSlider = ({images}) => {


  return (
    <div className="w-full flex justify-center items-center py-10">
      <Swiper
        spaceBetween={20}
        freeMode={true}
        pagination={{ clickable: true }}
        modules={[FreeMode, Pagination]}
        className="w-[90%] max-w-[1000px] mySwiper"
        breakpoints={{
          0: {
            slidesPerView: 1, 
          },
          640: {
            slidesPerView: 2, 
          },
          1024: {
            slidesPerView: 3, 
          },
        }}
      >
        {images.map((src, i) => (
          <SwiperSlide key={i} className="rounded-xl overflow-hidden shadow-md">
            <img
              src={src}
              alt={`slide-${i}`}
              className="w-full h-[220px] sm:h-[250px] md:h-[280px] lg:h-[300px] object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperSlider;
