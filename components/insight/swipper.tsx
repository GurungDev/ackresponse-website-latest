"use client";
import React, { useEffect, useRef, useState } from "react";
import { Autoplay, Navigation} from "swiper/modules"; 
import {Swiper , SwiperSlide } from "swiper/react";
import { Swiper as SwiperCore } from "swiper";
import Link from "next/link";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import Image from "next/image";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";

// Properly define data array
const data = [
  {
    id: "100",
    title: "Cloud",
    href: "/service/cloud",
    image: "/whatWeDo/cloud-whatwedo.jpg",
  },
  {
    id: "101",
    title: "Software development",
    href: "/service/softwareDevelopment",
    image: "/whatWeDo/software-development.jpg",
  },
  {
    id: "102",
    title: "DevOps & GitOps",
    href: "/service/automation",
    image: "/whatWeDo/devops-whatwedo.jpg",
  },
  {
    id: "103",
    title: "Web Application Development",
    href: "/service/webApp",
    image: "/whatWeDo/web-whatwedo.jpg",
  },
  {
    id: "104",
    title: "Mobile Application Development",
    href: "/service/mobileApp",
    image: "/whatWeDo/mobile-whatwedo.jpg",
  },
  // {
  //   id: "104",
  //   title: "UX/UI",
  //   href: "/service/uxUi",
  //   image: "/whatWeDo/w3.jpg",
  // },
  {
    id: "105",
    title: "Automations",
    href: "/service/automation",
    image: "/whatWeDo/automation.jpg",
  },
  {
    id: "106",
    title: "Consultancy",
    href: "/service/consultancy",
    image: "/whatWeDo/consultancy-whatwedo.jpg",
  },
  {
    id: "107",
    title: "Automations",
    href: "/service/automation",
    image: "/whatWeDo/automation.jpg",
  },
];

export default function Swipper() {
  const [loop, setLoop] = useState(false);
  const [isEnd, setIsEnd] = useState(false);
  const [isStart, setIsStart] = useState(true);
  const swiperRef = useRef<SwiperCore | null>(null);
  useEffect(() => {
    setLoop(data.length > 6);
  }, []);

  return (
    <div className="flex-col">
      <Swiper
        loop={loop}
        navigation={{
          prevEl: `#prev_slide6`,
          nextEl: `#next_slide6`,
        }}
        onSlideChange={(swiper) => {
          setIsEnd(swiper.isEnd);
          setIsStart(swiper.isBeginning);
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        autoplay={{ delay: 3000, disableOnInteraction: false }} // Resume autoplay after interaction
        modules={[Navigation, Autoplay]}
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
            spaceBetween: 10,
          },
          1050: {
            slidesPerView: 2.8,
            spaceBetween: 3,
          },
          1080: {
            slidesPerView: 3.4,
            spaceBetween: 8,
          },
          1130: {
            slidesPerView: 3.4,
            spaceBetween: 8,
          },
          1430: {
            slidesPerView:3.4,
            spaceBetween: 8,
        
          },
          1630: {
            slidesPerView:3.4,
            spaceBetween: 8,
          },
          1800: {
            slidesPerView: 3.4,
            spaceBetween: 8,
            
          },
        }}
      >
        {data.map((slide) => (
          <SwiperSlide key={slide.id} className="h-auto ">
            <Link href={slide.href}>
              <div
                className="group relative portrait:min-h-[40vh] h-[35vh] md:min-h-[35vh] lg:min-h-[60vh] xl:min-h-[45vh] 3xl:min-h-[40vh] 4xl:min-h-[40vh] bg hover:cursor-pointer height_for_ipad overflow-hidden shadow-md flex justify-end flex-col"
                onMouseEnter={() => swiperRef.current?.autoplay.stop()} // Stop autoplay on hover
                onMouseLeave={() => swiperRef.current?.autoplay.start()} // Resume autoplay when hover stops
              >
                <Image
                  priority={true}
                  src={slide.image}
                  width={400}
                  height={300}
                  alt="blog-card-sm"
                  className="absolute inset-0 w-full h-full object-cover brightness-[70%] group-hover:brightness-[60%] transition-all duration-300"
                />
                <div className="text-neutral-100 z-[1] bg-gradient-to-b to-[#131313cf] from-[#1e1e1e00]     pb-10 px-3">
                  <h1 className="secondary-title md:font-medium md:text-2xl  ">
                    {slide.title}
                  </h1>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex bg-[#000] pt-5 md:pb-0 pb-10 md:pt-2 space-x-2">
        <button
          id={`prev_slide6`}
          className={`${
            isStart
              ? "border-neutral-300 text-neutral-300"
              : "border-white text-white"
          } p-2 flex 3xl:h-[7rem] 3xl:w-[7rem] justify-center items-center border-[0.7px] rounded-full duration-300 hover:bg-btn_color backdrop-blur-sm`}
          onClick={() => swiperRef.current?.slidePrev()} // Manually trigger previous slide
        >
          <span className="flex text-black-300 active:text-black hover:text-white text-3xl 3xl:text-[8rem]">
            <RxCaretLeft />
          </span>
        </button>

        <button
          id={`next_slide6`}
          className={`${
            isEnd
              ? "border-neutral-300 text-neutral-300"
              : "border-white text-white"
          } p-2 3xl:h-[7rem] 3xl:w-[7rem] flex justify-center items-center border-[0.7px] rounded-full duration-300 hover:bg-btn_color text-white backdrop-blur-sm`}
          onClick={() => swiperRef.current?.slideNext()} // Manually trigger next slide
        >
          <span className="flex justify-center text-white hover:text-white items-center text-3xl 3xl:text-[8rem]">
            <RxCaretRight />
          </span>
        </button>
      </div>
    </div>
  );
}