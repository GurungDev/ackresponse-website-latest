
"use client"
import React, { useEffect, useState } from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Navigation} from "swiper/modules";
import Image from 'next/image';
import { RxCaretLeft, RxCaretRight } from 'react-icons/rx';

import Link from 'next/link';

const data = [
    {
      id: "1",
      title: "01: INITIAL ASSESSMENT",
      description: "Conduct a consultation & audit to evaluate the client’s systems, processes, & DevOps readiness.",
      image: "/servicepage/devOps/devops-requirement-gathering.jpg",
    },
    {
      id: "2",
      title: "02: DEFINE GOALS & KPIS",
      description: "Set measurable DevOps goals and KPIs to track success & align with client objectives.",
      image: "/servicepage/devOps/devops-goals-kpis.jpg",
    },
    {
      id: "3",
      title: "03: ROADMAP & STRATEGIES DEVELOPMENT",
      description: "Create a phased DevOps strategy aligned with client priorities, tools, & workflow.",
      image: "/servicepage/devOps/devops-roadmaps.jpg",
    },
    {
      id: "4",
      title: "04: IaC & Tooling Selection",
      description: "Select and implement Infrastructure as Code (IaC) tools and automation workflows .",
      image: "/servicepage/devOps/devops-iac-tooling.jpg",
    },
    {
      id: "5",
      title: "05: CI/CD Pipeline Design & Implementation",
      description: "Design and implement a CI/CD pipeline to automate code integration, testing, and deployment.",
      image: "/servicepage/devOps/devops-design-implementation.jpg",
    },
    {
      id: "6",
      title: "06: Security Integration (DevSecOps)",
      description: "Automate security in the DevOps pipeline for continuous monitoring and early issue detection.",
      image: "/servicepage/devOps/devops-security.jpg",
    },
    {
      id: "7",
      title: "07: Monitoring, Logging & Feedback Loops",
      description: "Implement monitoring, logging, and feedback loops for real-time visibility and quick incident recovery.",
      image: "/servicepage/devOps/devops-mon-log-feed.jpg",
    },
    {
      id: "8",
      title: "08: Ongoing Support",
      description: "Offer continuous DevOps and CI/CD support, improving automation and scaling as the client grows.",
      image: "/servicepage/devOps/devops-support.jpg",
    },
    {
        id: "9",
        title: "01: INITIAL ASSESSMENT",
        description: "Conduct a consultation & audit to evaluate the client’s systems, processes, & DevOps readiness.",
        image: "/servicepage/devOps/devops-requirement-gathering.jpg",
      },
      {
        id: "10",
        title: "02: DEFINE GOALS & KPIS",
        description: "Set measurable DevOps goals and KPIs to track success & align with client objectives.",
        image: "/servicepage/devOps/devops-goals-kpis.jpg",
      },
      {
        id: "11",
        title: "03: ROADMAP DEVELOPMENT",
        description: "Create a phased DevOps strategy aligned with client priorities, tools, & workflow.",
        image: "/servicepage/devOps/devops-roadmaps.jpg",
      },
      {
        id: "12",
        title: "04: IaC & Tooling Selection",
        description: "Select and implement Infrastructure as Code (IaC) tools and automation workflows .",
        image: "/servicepage/devOps/devops-iac-tooling.jpg",
      },
      {
        id: "13",
        title: "05: CI/CD Pipeline Design & Implementation",
        description: "Design and implement a CI/CD pipeline to automate code integration, testing, and deployment.",
        image: "/servicepage/devOps/devops-design-implementation.jpg",
      },
      {
        id: "14",
        title: "06: Security Integration (DevSecOps)",
        description: "Automate security in the DevOps pipeline for continuous monitoring and early issue detection.",
        image: "/servicepage/devOps/devops-security.jpg",
      },
      {
        id: "15",
        title: "07: Monitoring, Logging & Feedback Loops",
        description: "Implement monitoring, logging, and feedback loops for real-time visibility and quick incident recovery.",
        image: "/servicepage/devOps/devops-mon-log-feed.jpg",
      },
      {
        id: "16",
        title: "08: Ongoing Support",
        description: "Offer continuous DevOps and CI/CD support, improving automation and scaling as the client grows.",
        image: "/servicepage/devOps/devops-support.jpg",
      },
  ];



const DevOpsToUs = () => {
    const [loop, setLoop] = useState(false);

    useEffect(() => {
      setLoop(data.length > 6);
    }, []);
    const [isEnd, setIsEnd] = useState(false);
    const [isStart, setIsStart] = useState(true);

  return (
   <div className='bg-black'>
     <div className='bg-black
    px-5 py-16
    space-y-16
    md:space-y-0 md:space-x-16 lg:space-x-0
    md:flex md:flex-row md:justify-end
    lg:flex lg:flex-row 
    md:py-20 lg:py-14
    md:px-0 lg:mx-16
    lg:rounded-2xl
    iPadWebToUsMarginLeftRight
    iPadProWebToUsMarginLeftRight
    iPadProWebToUsPaddingLeft
    ' >
        <div className='
        flex flex-col justify-between
        md:h-auto md:w-1/2
        space-y-5
        md:space-y-0
        lg:w-[50vw] text-white lg:ml-28 
        IpadProWebAppSliderLeftContent
        iPadProWebToPaddingLeft
        lg:h-[500px] '>
            <div className='flex flex-col'>
                {/* <p>tech</p> */}
                <p className='text-xl'>ackresponse<span className="text-green-400 font-bold">.</span></p>
            </div>

            <div className='flex flex-col space-y-3 md:space-y-0'>
                <p className='text-3xl lg:text-4xl lg:py-6 font-semibold'>How we go about?</p>
                <p className='lg:text-lg lg:w-[80%]'>From initial assessment to goal definition, roadmap creation, IaC and tooling selection, CI/CD pipeline implementation, security integration, and ongoing monitoring and support, we deliver streamlined DevOps, GitOps &amp; automation solutions tailored to your business needs every step of the way.</p>
            </div>

            <Link href="/contact">
            <div className='lg:pt-16 '>
                <button className='flex group space-x-2 w-auto rounded-lg justify-start items-center bg-[#33f081] hover:bg-[#fff] text-black
                transition-all duration-300 delay-100 ease-in-out
                py-2 px-4
                lg:py-4 lg:px-5 lg:hover:px-9 
                '>
                    <p>DevOps To Us</p><p className='group-hover:translate-x-4 transition-all duration-300 delay-200 ease-in-out'><FaArrowRight /></p> 
                </button>
            </div>
            </Link>


            <div className="hidden md:flex md:justify-end px-2  pt-2 space-x-2">
            <button
                  id={`prev_slide6`}
                  className={`${
                    isStart
                      ? " text-neutral-600"
                      : " text-white"
                      } p-2 flex 3xl:h-[7rem] 3xl:w-[7rem] group justify-center items-center  bg-none hover:border-transparent border-white border-[1.5px] rounded-full duration-300 hover:bg-btn_color   backdrop-blur-sm`}
                > 
                <span 
                  className="flex   active:text-black group-hover:text-black text-3xl 3xl:text-[8rem]"> 
                <RxCaretLeft />
                </span>
                 
                </button>
                <button
                  id={`next_slide6`}
                  className={`${
                    isEnd
                      ? " text-neutral-300"
                      : " text-white"
                  } p-2 flex 3xl:h-[7rem] 3xl:w-[7rem] group justify-center items-center  bg-none hover:border-transparent border-white border-[1.5px] rounded-full duration-300 hover:bg-btn_color   backdrop-blur-sm`}
                >
                  <span 
                    className="flex   active:text-black group-hover:text-black text-3xl 3xl:text-[8rem]"> 
                    <RxCaretRight />
                  </span> 
                </button>
            </div>


        </div>
        <div className='relative md:flex md:justify-end   md:items-end'>
        <div className=" lg:w-[50vw] md:w-[37vw] w-full bottom-0 ">
        <Swiper
          className='
            sliderHeight
            md:h-[23.5rem]
            lg:h-[500px] flex flex-row justify-end 
            iPadWebToUsSliderHeight
            iPadProWebToUsSliderHeight
            md:p-2
            ' 
          loop={loop}
          navigation={{
            prevEl: `#prev_slide6`,
            nextEl: `#next_slide6`,
          }}
          onSlideChange={(swiper) => {
            setIsEnd(swiper.isEnd);
            setIsStart(swiper.isBeginning);
          }}
          modules={[Navigation]}
          speed={200}
          breakpoints={{
            100: {
              slidesPerView: 1,
            },
            380: {
              slidesPerView: 1,
              spaceBetween: 8,
            },
            480: {
              slidesPerView: 1,
              spaceBetween: 8,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 8,
            },
            750: {
              slidesPerView: 1.1,
              spaceBetween: 5,
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
              slidesPerView: 2.3,
              spaceBetween: 8,
            },
            1130: {
              slidesPerView: 2.3,
              spaceBetween: 10,
            },
            1430: {
              slidesPerView:2.4,
              spaceBetween: 25,
          
            },
            1630: {
              slidesPerView:2.4,
              spaceBetween: 25,
            },
            1800: {
              slidesPerView: 3.4,
              spaceBetween: 8,
              
            }
          }}
        >
          {data.map((slide) => (
            <SwiperSlide key={slide.id} className=" lg:space-y-4 bg-white rounded-lg shadowforslider">
                <div className="flex flex-col justify-center items-center 
                py-4 px-2 md:px-4
                lg:py-8 lg:px-7
                
                lg:h-[500px] 
                iPadProWebToUsPaddingLeftRight
                
                ">
                  <div className='
                    flex justify-center items-center
                    md:max-h-52
                    lg:h-64 w-full
                  '>
                  <Image className='rounded-full flex justify-center items-center
                    object-center
                    h-44 w-44 
                    md:h-44 md:w-44 
                    lg:h-52 lg:w-52
                    iPadSliderImageSize 
                    IPadProImageSliderProtrait
                    shadowforslider
                    '
                    priority={true}
                    src={slide.image} alt={slide.title}  height={500} width={500}/>
                  </div>

                  <div className="
                  flex flex-col space-y-1
                  px-4 md:px-0
                  md:h-48
                  lg:h-52 
                  pt-6
                  md:pt-10
                  lg:pt-6 
                  lg:space-y-5
                  iPadWebToUsSiderSpacing
                  iPadProWebToUsSliderContent
                  IpadSliderContent
                  ">
                    <h1 className="text-sm font-bold text-center">
                      {slide.title}
                    </h1>
                    <h1 className="lead text-center">
                      {slide.description}
                    </h1>
                  </div>
                </div>
             
            </SwiperSlide>
          ))}
  
  
        </Swiper>

        </div>
        <div className="flex justify-start md:hidden  px-2  pt-2 space-x-2">
        <button
                  id={`prev_slide6`}
                  className={`${
                    isStart
                      ? " text-neutral-600"
                      : " text-white"
                      } p-2 flex 3xl:h-[7rem] 3xl:w-[7rem] group justify-center items-center  bg-none hover:border-transparent border-white border-[1.5px] rounded-full duration-300 hover:bg-btn_color   backdrop-blur-sm`}
                > 
                <span 
                  className="flex   active:text-black group-hover:text-black text-3xl 3xl:text-[8rem]"> 
                <RxCaretLeft />
                </span>
                 
                </button>
                <button
                  id={`next_slide6`}
                  className={`${
                    isEnd
                      ? " text-neutral-300"
                      : " text-white"
                  } p-2 flex 3xl:h-[7rem] 3xl:w-[7rem] group justify-center items-center  bg-none hover:border-transparent border-white border-[1.5px] rounded-full duration-300 hover:bg-btn_color   backdrop-blur-sm`}
                >
                  <span 
                    className="flex   active:text-black group-hover:text-black text-3xl 3xl:text-[8rem]"> 
                    <RxCaretRight />
                  </span> 
                </button>
            </div>
        </div>
    </div>
   </div>
  )
}

export default DevOpsToUs