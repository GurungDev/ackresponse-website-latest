"use client";
import Image from "next/image";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface AutoSliderProps {
  content: string[];
}

export default function AutoSlider({ content }: AutoSliderProps) {
  return (
    <div className="relative">
      <Swiper
        slidesPerView={3}
        spaceBetween={3}
        centeredSlides={false}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        speed={2000}
        navigation={{
          prevEl: `#prev_slide`,
          nextEl: `#next_slide`,
        }}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        {content.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="h-[40vh]  ">
              <Image
                src={item}
                alt={`Slide ${index + 1}`}
                height={500}
                width={1000}
                className="h-full object-cover inset-0"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        id="next_slide"
        type="button"
        className="p-2 absolute right-0 z-50 top-1/2 transform -translate-y-1/2 rounded-full bg-white/20 backdrop-blur-sm"
      >
        <RxCaretRight size={32} className="text-white" />
      </button>
      <button
        id="prev_slide"
        type="button"
        className="p-2 absolute left-0 z-50 top-1/2 transform -translate-y-1/2 rounded-full bg-white/20 backdrop-blur-sm"
      >
        <RxCaretLeft size={32} className="text-white" />
      </button>
    </div>
  );
}
