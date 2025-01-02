"use client";

import "../style/homePagelanding.css"
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// import "swiper/css/effect-fade"; --> this css module seems to have a bug



import { Autoplay, Pagination, EffectFade, Navigation } from "swiper/modules";

import Landing_Section from "./landingSectionPhoto";
import {
  BsArrowDownShort,
  BsFillMouseFill,
  BsPauseFill,
  BsPlayFill,
} from "react-icons/bs";
import Link from "next/link";

const Slider_landing_page = () => {
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
    const sliderContent = [
      {
        slider_title: "Balanced Approach",
        paragraph:
          "83% or 8 out of 10 CIOs are on a mission to repatriate their workloads from Public to Private Cloud. Hybrid or multi-cloud could be a better solutions for enterprises.",
        link: "/insight/cloud_repatriation",
        image: "/insightpage/insights/public-to-private.jpg",
        title: "Balanced approach that includes both private and public cloud solutions.",
      },
      {
        slider_title: "OpenInfra Asia 2024",
        paragraph:
          "The first-ever OpenInfra Asia 2024 Summit, held from September 3-4 in Suwon, South Korea, marked a significant milestone in the open-source community.",
        image: "/insightpage/insights/openinfra-summit-1.jpg",
        title: "The first OpenInfra Asia 2024 Summit - Higher demand and rising shift, OpenStack.",
        link: "/insight/openInfra_asia_2024_summit",
      },
      // {
      //   slider_title: "Empowering Young Entrepreneurs",
      //   paragraph:
      //     "In today's rapidly evolving technological landscape, the key to success often lies in innovation.",
      //   image: "/insightpage/insights/empwr-yng-entrprnrs.jpg",
      //   title: "Igniting Innovation: Empowering Young Entrepreneurs with Cutting-Edge IT Solutions",
      //   link: "/insight/empowering_young_entrepreneurs",
      // },
      {
        slider_title: "5G & Drone",
        paragraph: "The rapid evolution of 5G technology, combined with advancements in drone capabilities, is ushering in a new era of possibilities, particularly for innovators and entrepreneurs.",
        link: "/insight/5g-drone-apps",
        image:
          "/insightpage/insights/5g-drone-app.jpg",
        title: "Unleashing New Possibilities: 5G & Drones as Catalysts for Innovations.",
      },
      // {
      //   slider_title: "Containerization",
      //   paragraph: "Containerization benefits businesses by enhancing scalability, portability, and efficiency in application development and deployment.",
      //   link: "/insight/containerization",
      //   image: "/image/Containerize_and_deploy_applications_on_the_cloud.jpg",
      //   title: "Containerize and deploy applications on the cloud",
      // },
    ];
  return (
    <div className="relative">
      <Swiper
        onSwiper={(s) => setSwiper(s)}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        // effect={"fade"}
        navigation={{
          prevEl: `#prev_slide`,
          nextEl: `#next_slide`,
        }}
     
        
        
        modules={[Autoplay, EffectFade, Pagination, Navigation]}
      >
        {sliderContent.map((e, index) => {
          return (
            <SwiperSlide key={e.title} className=" ">
              <Landing_Section
                title={e.title}
                description={e.paragraph}
                image={e.image}
                button="Learn more"
                link={e.link}
              />
            </SwiperSlide>
          );
        })}
        <div className="absolute z-[999]   bottom-40 lg:bottom-10 left-3/4  flex justify-between w-[20vw]  items-start text-opacity-[.8] text-neutral-200 ">
          <button
            onClick={toggleAutoplay}
            className="  hidden md:block  text-[1.5em]  border-white border-opacity-50 hover:border-opacity-100 rounded-md duration-300 border-[1px] p-2 text-white  "
          >
            {autoplayEnabled ? <BsPauseFill /> : <BsPlayFill />}
          </button>
          <Link
            href="#bottom-home-section"
            className="hidden md:block group opacity-50 animate-bounce-slow hover:opacity-[100]  transition-all text-[1.5em]  text-white "
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
