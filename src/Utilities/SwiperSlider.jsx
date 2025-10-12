import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import { X } from "lucide-react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const SwiperSlider = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

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
          <SwiperSlide
            key={i}
            className="rounded-xl overflow-hidden shadow-md cursor-pointer"
            onClick={() => setSelectedImage(src)}
          >
            <img
              src={src}
              alt={`slide-${i}`}
              className="w-full h-[220px] sm:h-[250px] md:h-[280px] lg:h-[300px] object-cover transition-transform duration-300 hover:scale-105"
            />
          </SwiperSlide>
        ))}
      </Swiper>

     
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative flex justify-center items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-3 right-3 bg-white/90 hover:bg-white text-black p-2 rounded-full shadow-md transition"
            >
              <X size={22} />
            </button>
            <img
              src={selectedImage}
              alt="enlarged"
              className="max-w-[90%] max-h-[90%] object-contain rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default SwiperSlider;
