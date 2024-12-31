"use client";
import Image from "next/image";
import { HashNavigation, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { useEffect, useState } from "react";

type SwiperSlide = {
  image: string;
  title: string;
  description: string;
  bg: string;
};

type Props = {
  slides: SwiperSlide[];
};

export default function ServiceApproach({ slides }: Props) {
  const [loop, setLoop] = useState(false);
  useEffect(() => {
    slides.length <= 6 ? setLoop(false) : setLoop(true);
  }, [slides.length]);
  return (
    <section id="approach" className="pt-14 bg-[#fbfbfd] ">
      <div className="app-layout">
        <div className="p-4  ">
          <h1 className="secondary-title font-medium py-2 pb-5 text-center">
            Our Approach
          </h1>
        </div>
      </div>
      <div className="relative py-8   mx-2">
        <Swiper
          loop={loop}
          navigation={{
            prevEl: `#prev_slide8`,
            nextEl: `#next_slide8`,
          }}
          preventClicks={false}
          preventClicksPropagation={false}
          modules={[Navigation, HashNavigation]}
          speed={200}
          breakpoints={{
            100: {
              slidesPerView: 1,
            },
            380: {
              slidesPerView: 1.2,
              spaceBetween: 8,
            },
            480: {
              slidesPerView: 1.3,
              spaceBetween: 8,
            },
            640: {
              slidesPerView: 1.5,
              spaceBetween: 8,
            },
            750: {
              slidesPerView: 2.2,
              spaceBetween: 16,
            },
            976: {
              slidesPerView: 2.3,
              spaceBetween: 16,
            },
            1050: {
              slidesPerView: 2.8,
              spaceBetween: 20,
            },
            1080: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1130: {
              slidesPerView: 3.4,
              spaceBetween: 20,
              loop: loop,
            },
            1900: {
              slidesPerView: 4.8,
              spaceBetween: 40,
              loop: false,
            },
          }}
        >
          {slides.map((data, index) => (
            <SwiperSlide key={index}>
              <div className="!flex !flex-col group !items-center !justify-center max-w-[400px] bg-red-200 relative min-h-[550px] rounded-md overflow-hidden ">
                <Image
                  src={data.image}
                  alt="Server"
                  width={400}
                  height={400}
                  className="object-cover w-full h-full absolute group-hover:scale-110 duration-300 group-hover:brightness-[70%] "
                />
                <div
                  style={{
                    backgroundImage:
                      "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.4))",
                  }}
                  className="absolute inset-0 o"
                ></div>
                <div className="absolute w-full group h-full flex flex-col justify-end   p-8   ">
                  <div className={`w-[30px] h-[5px] ${data.bg}  `}></div>
                  <h6 className="text-[1.9rem] font-[400] text-white">
                    {data.title}
                  </h6>
                  <p className=" h-[0%] opacity-[0%] group-hover:mt-7 group-hover:mb-3 group-hover:h-[25%] group-hover:opacity-[100%] duration-300 text-white  text-[1rem] min-[1900px]:text-[1.3rem] ">
                    {data.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <button
            id={`next_slide8`}
            className="p-2 absolute right-[25px] z-50 top-1/2 transform -translate-y-1/2 rounded-full bg-white text-text duration-300 hover:bg-gradient-to-r from-indigo-300 to-purple-400 hover:text-white  backdrop-blur-sm"
          >
            <RxCaretRight size={32} className="" />
          </button>
          <button
            id={`prev_slide8`}
            className="p-2 absolute left-[25px] z-50 top-1/2 transform -translate-y-1/2 rounded-full bg-white text-text duration-300 hover:bg-gradient-to-r from-indigo-300 to-purple-400 hover:text-white  backdrop-blur-sm"
          >
            <RxCaretLeft size={32} className="" />
          </button>
        </Swiper>
      </div>
    </section>
  );
}
