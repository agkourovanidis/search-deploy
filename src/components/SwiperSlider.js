import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

import "./SwiperSlider.css";

import SwiperCore, { Pagination, Navigation } from "swiper/core";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

// const imagess = [
//   "https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/111/111_julia-hotel_188235.jpeg?preset=b",
//   "https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/111/111_julia-hotel_188255.jpeg?preset=b",
//   "https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/111/111_julia-hotel_188236.jpeg?preset=b",
//   "https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/111/111_julia-hotel_188233.jpeg?preset=b",
//   "https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/111/111_julia-hotel_188254.jpeg?preset=b",
//   "https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/111/111_julia-hotel_105748.jpeg?preset=b",
//   "https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/pictureshd/111/33621.jpeg?preset=b",
//   "https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/111/111_julia-hotel_188253.jpeg?preset=b",
//   "https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/111/111_julia-hotel_188241.jpeg?preset=b",
//   "https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/111/111_julia-hotel_188251.jpeg?preset=b",
//   "https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/111/111_julia-hotel_188234.jpeg?preset=b",
//   "https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/111/111_julia-hotel_188222.jpeg?preset=b",
//   "https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/111/111_julia-hotel_188240.jpeg?preset=b",
//   "https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/111/111_julia-hotel_188248.jpeg?preset=b",
//   "https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/111/111_julia-hotel_188246.jpeg?preset=b",
//   "https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/pictureshd/111/33627.jpeg?preset=b",
//   "https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/111/111_julia-hotel_105745.jpeg?preset=b",
//   "https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/pictureshd/111/33633.jpeg?preset=b",
// ];

export default function SwiperSlider(props) {

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={1}
        // centeredSlides={true}
        grabCursor={true}
        loop={true}
        // pagination={{
        //   // clickable: true,
        //   "dynamicBullets": true
        // }}

        navigation={true}

        // style={{
        //   '--swiper-navigation-color': '#fff',
        //   '--swiper-pagination-color': '#fff',

        //   '--swiper-navigation-size': '25px',
        //   // '--swiper-pagination-size': '25px',

        //   // '--navigation-visibility-hiddeen': 'visible',
        // }}

        // navigation={
        //   true,
        //   {
        //     nextEl: ".swiper-button-next",
        //     prevEl: ".swiper-button-prev",
        //   }
        // }
        
        className="mySwiper"
      >
        {/* {imagess.map((imag, index) => ( */}
        {props.slides.map((imag, index)=>(
          <SwiperSlide key={index}>
            <img src={imag} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
