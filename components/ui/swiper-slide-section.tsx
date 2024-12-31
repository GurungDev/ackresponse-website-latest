"use client";

import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { BsArrowLeft, BsArrowRight } from "react-icons/bs";


interface ISwiperSlideSectionProps {
  children: React.JSX.Element[];
  breakpoints?: Record<number, { slidesPerView: number }>;
  name: string;
}

export default function SwiperSlideSection({
  children,
  breakpoints,
  name,
}: ISwiperSlideSectionProps) {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={3}
      modules={[Autoplay, Navigation]}
      navigation={{
        prevEl: `#prev-${name}`,
        nextEl: `#next-${name}`,
      }}
      autoplay={{
        delay: 2000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      }}
      breakpoints={breakpoints}
      className="relative"
    >
      <div className="w-full m-auto flex items-center gap-10 justify-center my-5 ">
        <button
          className="text-[1.8rem] text-text rounded-full m-5 p-2 border-2 border-text active:scale-90 hover:scale-100"
          id={`prev-${name}`}
        >
          <BsArrowLeft />
        </button>
        <button
          className="text-[1.8rem] text-text rounded-full m-5 p-2 border-2 border-text active:scale-90 hover:scale-100"
          id={`next-${name}`}
        >
          <BsArrowRight />
        </button>
      </div>
      {children.map((child, index) => (
        <SwiperSlide key={index}>{child}</SwiperSlide>
      ))}
    </Swiper>
  );
}
