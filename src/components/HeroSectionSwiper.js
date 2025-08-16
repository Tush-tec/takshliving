"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

const HeroSectionSwiper = ({ items }) => {
  return (
    <div className="w-full relative container mx-auto">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        effect="fade"
        modules={[Autoplay, EffectFade]}
        className="rounded-lg shadow-lg"
      >
        {items?.map((item, index) => (
          <SwiperSlide key={index} className="relative">
            <div className="relative w-full h-[600px]">
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/60 rounded-lg"></div>
              <div className="absolute bottom-16 left-8 text-white">
                <h1 className="text-4xl font-bold drop-shadow-md animate-fade-in">
                  {item.title}
                </h1>
                <p className="text-3xl mt-2 drop-shadow-sm animate-fade-in delay-200">
                  {item.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSectionSwiper;
