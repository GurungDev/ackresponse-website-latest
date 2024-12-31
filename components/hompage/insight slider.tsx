"use client";
import React, { useRef, useState } from "react";
import { Virtual, Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import Link from "next/link";

const data = [
  {
    id: "1",
    url: "/insight/migrateYourOldLegacyInfrastructureAndApplicationsToTheCloud",
    title: "Migrate old legacy IT infrastructure to the cloud",
    image: "/insightpage/insights/i1.jpg",
  },
  {
    id: "2",
    url: "/insight/hybridCloud",
    title: "What is Hybrid Cloud?",
    image: "/insightpage/insights/i9.jpg",
  },
  {
    id: "3",
    url: "/insight/cicd",
    image: "/insightpage/insights/cid.jpg",
    title:
      "Automate SDLC (Software Development Life Cycle) - CI/CD",
  },
  {
    id: "4",
    url: "/insight/migrateYourOldLegacyInfrastructureAndApplicationsToTheCloud",
    image: "/insightpage/insights/leverageCloud.jpg",
    title: "Application modernisation with the help of cloud",
  },
  {
    id: "5",
    url: "/insight/containerization",
    image: "/insightpage/insights/container.jpg",
    title: "What is Container?",
  },
  {
    id: "6",
    url: "/insight/containerization",
    image: "/insightpage/insights/i2.jpg",
    title: "Containerise and deploy application on the cloud",
  },
  {
    id: "7",
    url: "/insight/k8s",
    image: "/insightpage/insights/k8s.jpg",
    title: "What is Kubernetes (K8s)?",
  },
  {
    id: "8",
    url: "/insight/migrateYourOldLegacyInfrastructureAndApplicationsToTheCloud",
    image: "/insightpage/insights/i6.jpg",
    title: "What is Serverless Computing?",
  },
  {
    id: "9",
    url: "/insight/impHaInfra",
    image: "/insightpage/insights/i7.jpg",
    title: "Importance of High Availability infrastructure",
  },
  {
    id: "10",
    url: "/insight/migrateYourOldLegacyInfrastructureAndApplicationsToTheCloud",
    image: "/insightpage/insights/i8.jpg",
    title: "What is cloud native application development?  ",
  },
];

export default function Swipper_insight() {
  return (
    <>
      <Swiper
        modules={[Virtual, Navigation]}
        loop={true}
        slidesPerView={4}
        spaceBetween={10}
        speed={100}
        navigation={{
          prevEl: `#prev_slide9`,
          nextEl: `#next_slide9`,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1.3,
          },
          768: {
            slidesPerView: 3,
          },
          1300: {
            slidesPerView: 3.5,
          },
          1900: {
            slidesPerView: 5,
          },
        }}
      >
        {data.map((data) => (
          <SwiperSlide key={data.id}>
            <Link
              href={data.url}
              id={data.id}
              className="relative bg-zinc-200 w-[100%] height_for_ipad  h-[420px]  duration-300 rounded shadow  flex justify-end flex-col"
            >
              <Image
                src={data.image}
                alt="insight photo"
                height={500}
                width={500}
                className="absolute object-cover inset-0 h-full "
              ></Image>
              <div
                style={{
                  backgroundImage: ` linear-gradient(to bottom,  rgba(0,0, 0, .2), rgba(0, 0, 0, .4))`,
                }}
                className="object-cover inset-0 absolute"
              ></div>
              <div className=" absolute text-neutral-100 my-5 object-cover px-5 ">
                <h1 className="  text-[.9rem] min-[400px]:text-[1rem] md:text-[1.1rem] lg:text-[1.2rem] min-[1900px]:text-[1.4rem] font-medium">
                  {" "}
                  {data.title}
                </h1>
              </div>
            </Link>
          </SwiperSlide>
        ))}
        <button
          id={`next_slide9`}
          className="p-2 absolute right-[25px] z-50 top-1/2 transform -translate-y-1/2 rounded-full bg-white text-text duration-300 hover:bg-gradient-to-r from-indigo-300 to-purple-400 hover:text-white  backdrop-blur-sm"
        >
          <RxCaretRight size={32} className="" />
        </button>
        <button
          id={`prev_slide9`}
          className="p-2 absolute left-[25px] z-50 top-1/2 transform -translate-y-1/2 rounded-full bg-white text-text duration-300 hover:bg-gradient-to-r from-indigo-300 to-purple-400 hover:text-white  backdrop-blur-sm"
        >
          <RxCaretLeft size={32} className="" />
        </button>
      </Swiper>
    </>
  );
}