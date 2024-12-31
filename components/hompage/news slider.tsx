"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Navigation } from "swiper/modules";

import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
type SwiperSlide = {
  id: number;

  title: string;
};

type Props = {
  button: string;
  background: string;
  buttonDiv: string;
  backgroundColor: string;
  side_button: string;
  slides: SwiperSlide[];
};

const News_slider = ({
  button,
  background,
  buttonDiv,
  side_button,
  backgroundColor,
  slides,
}: Props) => {
  return (
    <div className={`${backgroundColor}`}>
      <div className={`relative max-w-[1400px] m-auto `}>
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          navigation={{
            prevEl: `#prev_slide3`,
            nextEl: `#next_slide3`,
          }}
          speed={300}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          {slides.map((e, index) => {
            return (
              <SwiperSlide key={e.id}>
                <div
                  className={`${background} flex-col  flex items-center md:flex-row gap-2 md:gap-10 py-4 h-full  `}
                >
                  <span className="secondary-title  h-full  font-bold">
                    NEWS
                  </span>
                  <div className="paragraph w-full min-h-[140px] md:min-h-[50px]   h-full flex items-center justify-between">
                    <div className="text-[1rem] lg:text-[1.2rem]">
                      {e.title}
                    </div>
                    <div className={`${buttonDiv}`}>
                      {" "}
                      <button className={`${button}`}>Read More</button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <button
          id="next_slide3"
          type="button"
          className={`${side_button} p-[.3em] mr-4 absolute  duration-300 right-0 z-50 top-1/2 transform -translate-y-1/2 rounded-full border-[1px]     backdrop-blur-sm`}
        >
          <RxCaretRight size={32} className="  " />
        </button>
        <button
          id="prev_slide3"
          type="button"
          className={`${side_button} p-[.3em]  ml-4 duration-300 absolute left-0 z-50 top-1/2 transform -translate-y-1/2 rounded-full   border-[1px]   backdrop-blur-sm`}
        >
          <RxCaretLeft size={32} className="  " />
        </button>
      </div>
    </div>
  );
};

export default News_slider;
