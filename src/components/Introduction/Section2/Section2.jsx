import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

const Section2 = () => {
  return (
    <div className="">
      <div className="flex items-center gap-2">
        <div className="h-1 w-[70px] bg-[#40b2b5]"></div>
        <h3 className="text-[44px] font-normal">Recent Projects</h3>
      </div>
      <div className="h-32">
        <Swiper slidesPerView={3} spaceBetween={30} className="mySwiper">
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Section2;
