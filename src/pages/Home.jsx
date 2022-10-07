import React from "react";
// import { EffectFade, Mousewheel, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade, Mousewheel, Pagination } from "swiper";
// import {
//   Welcome,
//   Champion,
//   ChampionDetail,
//   Trailer,
//   Credit,
// } from "../components/home-section";

const swiperOptions = {
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 0,
  mousewheel: true,
  pagination: true,
  effect: "fade",
  speed: 1000,
};

const Home = () => {
  return (
    <Swiper>
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
    </Swiper>
  );
};

export default Home;
