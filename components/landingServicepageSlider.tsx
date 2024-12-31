"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

import Landing_Section from "./landingSectionPhoto";
import {
  BsArrowDownShort,
  BsFillMouseFill,
  BsPauseFill,
  BsPlayFill,
} from "react-icons/bs";
import Link from "next/link";

type slider_content = {
  slider_title: string;
  paragraph: string;
  // page: string;
  image: string;
  title: string;
  link: string;
};

type Props = {
  slider: slider_content[];
};
const Slider_landing_page = ({ slider }: Props) => {
  const [autoplayEnabled, setAutoplayEnabled] = useState(true);
  const [swiper, setSwiper] = useState<any>(null);
  const toggleAutoplay = () => {
    if (autoplayEnabled) {
      swiper.autoplay.stop();
    } else {
      swiper.autoplay.start();
    }
    setAutoplayEnabled(!autoplayEnabled);
  };

  return (
    <div className="relative  ">
      <Swiper
        onSwiper={(s) => setSwiper(s)}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: `#prev_slide`,
          nextEl: `#next_slide`,
        }}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            if (index >= 0 && index < slider.length) {
              return `<div class="${className}">${slider[index]?.slider_title}</div>`;
            }
            return "";
          },
        }}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {slider.map((e, index) => {
          return (
            <SwiperSlide key={index} className=" ">
              <Landing_Section
                title={e.title}
                description={e.paragraph}
                image={e.image}
                link={e.link}
                // page={e.page}
                button="Read more"
              />
            </SwiperSlide>
          );
        })}
        <div className="absolute z-[999] hidden min-[1000px]:flex bottom-40 lg:bottom-10 left-3/4   justify-between w-[20vw]  items-start text-white ">
          <button
            onClick={toggleAutoplay}
            className="  hidden md:block  text-[1.5em] border-white border-opacity-50 hover:border-opacity-100 rounded-md duration-300 border-[1px] p-2   text-white  "
          >
            {autoplayEnabled ? <BsPauseFill /> : <BsPlayFill />}
          </button>
          <Link
            href="#intro"
            className="hidden min-[800px]:block group opacity-50 animate-bounce-slow hover:opacity-[100] transition-all text-[1.5em]   text-white  "
          >
            {<BsFillMouseFill className="group" />}
            <BsArrowDownShort className="group-hover:translate-y-2 transform transition duration-300 ease-in-out" />
          </Link>
        </div>
      </Swiper>
    </div>
  );
};

export default Slider_landing_page;
