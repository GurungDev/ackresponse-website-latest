"use client";

import Image from "next/image";
import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const data = [
  {
    id: "1",
    image: "/image/insightCover.jpg",
    date: "August 21, 2023",
    title: " Generative AI: driving growth in the rapidly evolving AI market",
    paragraph: "This is a paragraph for the inssight. This is a paragraph.",
  },
  {
    id: "2",
    image: "/image/insightCover.jpg",
    date: "August 21, 2023",
    title: " Generative AI: driving growth in the rapidly evolving AI market",
    paragraph: "This is a paragraph for the inssight. This is a paragraph.",
  },
  {
    id: "3",
    image: "/image/insightCover.jpg",
    date: "August 21, 2023",
    title: " Generative AI: driving growth in the rapidly evolving AI market",
    paragraph: "This is a paragraph for the inssight. This is a paragraph.",
  },
  {
    id: "4",
    image: "/image/insightCover.jpg",
    date: "August 21, 2023",
    title: " Generative AI: driving growth in the rapidly evolving AI market",
    paragraph: "This is a paragraph for the inssight. This is a paragraph.",
  },
  {
    id: "5",
    image: "/image/insightCover.jpg",
    date: "August 21, 2023",
    title: " Generative AI: driving growth in the rapidly evolving AI market",
    paragraph: "This is a paragraph for the inssight. This is a paragraph.",
  },
  {
    id: "6",
    image: "/image/insightCover.jpg",
    date: "August 21, 2023",
    title: " Generative AI: driving growth in the rapidly evolving AI market",
    paragraph: "This is a paragraph for the inssight. This is a paragraph.",
  },
];

const Related_Articles = () => {
  return (
    <div className="relative py-8 w-[90%] m-auto">
      <Swiper
        loop={true}
        modules={[Navigation]}
        navigation={{
          prevEl: `#prev_slide222`,
          nextEl: `#next_slide222`,
        }}
        speed={200}
        spaceBetween={20}
        breakpoints={{
          200: { slidesPerView: 1 },
          400: { slidesPerView: 1 },
          600: { slidesPerView: 1.3 },
          900: { slidesPerView: 2 },
        }}
        className="flex items-center justiy-center"
      >
        {data.map((data, i) => (
          <SwiperSlide key={data.id} className=" ] ">
            {" "}
            <div className=" shadow-md hover:shadow-xl  m-auto relative group   rounded-[10px] overflow-hidden my-2  bg-white border-[1px] ">
              <div className="w-[100%] h-[40vh]  overflow-hidden ">
                <Image
                  src={data.image}
                  width={400}
                  height={300}
                  alt="blog-card-sm"
                  className="group-hover:scale-[1.1]  w-full  object-cover brightness-50  transition-all duration-300"
                />
              </div>
              <div className=" px-10 py-5 z-[1] text-text">
                <div>
                  <small className="small">August 21, 2023</small>
                  <h1 className="text-[1rem] lg:text-[1.4rem] font-[600] my-2 leading-[1.6rem] ">
                    {data.title}
                  </h1>
                </div>
                <div className="mb-5 mt-4">
                  <p className=" text-[#5f6368] text-[.9rem] lg:text-[1rem] leading-[1.4rem] ">
                    {data.paragraph}
                  </p>
                </div>
                <button
                  className={`  h-[40px] px-1   group items-center  duration-500   transform-all flex  w-auto justify-between  text-text border-[1px] border-text mt-10   rounded-md  `}
                >
                  <span className="group-hover:w-[80px]  group-hover:text-text  w-[0px] text-transparent duration-500 group-hover:duration-150 small font-[200]">
                    Learn More
                  </span>
                  <BsArrowRightShort className="text-[1.5em]    duration-300 " />
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        id="next_slide222"
        type="button"
        className="p-2 absolute right-0 z-50 top-1/2 transform -translate-y-1/2 rounded-full text-white bg-text hover:bg-white border-[1px] border-text duration-300 hover:text-text "
      >
        <RxCaretRight size={32} className=" " />
      </button>
      <button
        id="prev_slide222"
        type="button"
        className="p-2 absolute left-0 z-50 top-1/2 transform -translate-y-1/2 rounded-full text-white bg-text hover:bg-white border-[1px] border-text duration-300 hover:text-text "
      >
        <RxCaretLeft size={32} className=" " />
      </button>
    </div>
  );
};

export default Related_Articles;
