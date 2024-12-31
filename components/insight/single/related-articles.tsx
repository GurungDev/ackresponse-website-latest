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
    image: "/image/Containerize_and_deploy_applications_on_the_cloud.jpg",
    date: "August 21, 2023",
    title: " Generative AI: driving growth in the rapidly evolving AI market",
    paragraph: "This is a paragraph for the inssight. This is a paragraph.",
  },
  {
    id: "2",
    image: "/image/Automate_your_entire_Software_Development_Life_Cycle_processes.jpg",
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
    <div className="">
      <div className="relative py-8 ">
        <Swiper
          loop={false}
          modules={[Navigation]}
          navigation={{
            prevEl: `#prev_slide`,
            nextEl: `#next_slide`,
          }}
          speed={200}
          spaceBetween={4}
          breakpoints={{
            200: { slidesPerView: 1 },
            400: { slidesPerView: 1.4 },
            600: { slidesPerView: 1.7 },
            900: { slidesPerView: 2.2 },
            1100: { slidesPerView: 3.2 },
            1500: { slidesPerView: 3.4 },
            1900: { slidesPerView: 4 },
          }}
          className="flex items-center justiy-center"
        >
          {data.map((data, i) => (
            <SwiperSlide key={data.id} className="">
              {" "}
              <div className=" max-w-[90%] m-auto relative group trending-container  rounded-[10px] overflow-hidden my-2  bg-white border-[1px] ">
                <div className="w-[100%] h-[100%]  overflow-hidden ">
                  <Image
                    src={data.image}
                    width={400}
                    height={300}
                    alt="blog-card-sm"
                    className="group-hover:scale-[1.1]  w-full  object-cover brightness-10  transition-all duration-300"
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
          id="next_slide"
          type="button"
          className="p-2 absolute right-0 z-50 top-1/2 transform -translate-y-1/2 rounded-full text-white bg-text hover:bg-white border-[1px] border-text duration-300 hover:text-text "
        >
          <RxCaretRight size={32} className=" " />
        </button>
        <button
          id="prev_slide"
          type="button"
          className="p-2 absolute left-0 z-50 top-1/2 transform -translate-y-1/2 rounded-full text-white bg-text hover:bg-white border-[1px] border-text duration-300 hover:text-text "
        >
          <RxCaretLeft size={32} className=" " />
        </button>
      </div>
    </div>
  );
};

export default Related_Articles;
