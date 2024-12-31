// "use client";
// import React, { useEffect, useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import {  Navigation} from "swiper/modules";
// import Image from 'next/image';
// import { RxCaretLeft, RxCaretRight } from 'react-icons/rx';

// const data = [
//   {
//     id: "1",
//     title: "REQUIREMENTS GATHERING",
//     description: "Understanding your vision through detailed requirements gathering to ensure a tailored solution.",
//     image: "/insightpage/webPage/requirements.jpg",
//   },
//   {
//     id: "2",
//     title: "DESIGN",
//     description: "Crafting intuitive and engaging designs that bring your vision to life.",
//     image: "/insightpage/webPage/design.jpg",
//   },
//   {
//     id: "3",
//     title: "DEVELOPMENT",
//     description: "Building robust, scalable solutions that turn your ideas into reality.",
//     image: "/insightpage/webPage/development.jpg",
//   },
//   {
//     id: "4",
//     title: "TESTING",
//     description: "Ensuring flawless functionality through rigorous testing and quality assurance.",
//     image: "/insightpage/webPage/testing.jpg",
//   },
//   {
//     id: "5",
//     title: "DEPLOYMENT",
//     description: "Seamlessly launching your solution for optimal performance and scalability.",
//     image: "/insightpage/webPage/deployment.jpg",
//   },
//   {
//     id: "6",
//     title: "ONGOING SUPPORT",
//     description: "Providing continuous updates, security, and support to keep your solution running smoothly.",
//     image: "/insightpage/webPage/maintainace.jpg",
//   },
//   {
//     id: "7",
//     title: "REQUIREMENTS GATHERING",
//     description: "Understanding your vision through detailed requirements gathering to ensure a tailored solution.",
//     image: "/insightpage/webPage/requirements.jpg",
//   },
//   {
//     id: "8",
//     title: "DESIGN",
//     description: "Crafting intuitive and engaging designs that bring your vision to life.",
//     image: "/insightpage/webPage/design.jpg",
//   },
//   {
//     id: "9",
//     title: "DEVELOPMENT",
//     description: "Building robust, scalable solutions that turn your ideas into reality.",
//     image: "/insightpage/webPage/development.jpg",
//   },
//   {
//     id: "10",
//     title: "TESTING",
//     description: "Ensuring flawless functionality through rigorous testing and quality assurance.",
//     image: "/insightpage/webPage/testing.jpg",
//   },
//   {
//     id: "11",
//     title: "DEPLOYMENT",
//     description: "Seamlessly launching your solution for optimal performance and scalability.",
//     image: "/insightpage/webPage/deployment.jpg",
//   },
//   {
//     id: "12",
//     title: "ONGOINGO SUPPORT",
//     description: "Providing continuous updates, security, and support to keep your solution running smoothly.",
//     image: "/insightpage/webPage/maintainace.jpg",
//   },
// ];

// export default function WebPageSliderWebToUs() {
//     const [loop, setLoop] = useState(false);

//     useEffect(() => {
//       setLoop(data.length > 6);
//     }, []);
//     const [isEnd, setIsEnd] = useState(false);
//     const [isStart, setIsStart] = useState(true);
//     return (
//       <div className="w-[50vw]">
//         <Swiper
//            className='h-[60vh]'
//           loop={loop}
//           navigation={{
//             prevEl: `#prev_slide6`,
//             nextEl: `#next_slide6`,
//           }}
//           onSlideChange={(swiper) => {
//             setIsEnd(swiper.isEnd);
//             setIsStart(swiper.isBeginning);
//           }}
//           modules={[Navigation]}
//           speed={200}
//           breakpoints={{
//             100: {
//               slidesPerView: 1,
//             },
//             380: {
//               slidesPerView: 1.2,
//               spaceBetween: 8,
//             },
//             480: {
//               slidesPerView: 1.3,
//               spaceBetween: 8,
//             },
//             640: {
//               slidesPerView: 1.5,
//               spaceBetween: 8,
//             },
//             750: {
//               slidesPerView: 2.2,
//               spaceBetween: 16,
//             },
//             976: {
//               slidesPerView: 2.3,
//               spaceBetween: 10,
//             },
//             1050: {
//               slidesPerView: 2.8,
//               spaceBetween: 3,
//             },
//             1080: {
//               slidesPerView: 2.3,
//               spaceBetween: 8,
//             },
//             1130: {
//               slidesPerView: 2.3,
//               spaceBetween: 8,
//             },
//             1430: {
//               slidesPerView:2.4,
//               spaceBetween: 8,
          
//             },
//             1630: {
//               slidesPerView:2.4,
//               spaceBetween: 8,
//             },
//             1800: {
//               slidesPerView: 3.4,
//               spaceBetween: 8,
              
//             },
//           }}
//         >
//           {data.map((slide) => (
//             <SwiperSlide key={slide.id} className=" lg:space-y-4 bg-white rounded-lg">
//                 <div className="flex flex-col justify-center items-center lg:py-8 lg:px-4">
//                     <Image className='rounded-full h-60 w-60 flex justify-center items-center'
                    
//                     src={slide.image} alt={slide.title}  height={600} width={600}/>
//                   <div className="py-4 flex flex-col space-y-2">
//                     <h1 className="text-xl">
//                       {slide.title}
//                     </h1>
//                     <h1 className="">
//                       {slide.description}
//                     </h1>
//                   </div>
//                 </div>
             
//             </SwiperSlide>
//           ))}
  
  
//         </Swiper>
//         <div className="flex  pt-2 space-x-2">
//         <button
//                   id={`prev_slide6`}
//                   className={`${
//                     isStart
//                       ? "border-neutral-300  text-neutral-300"
//                       : "border-text text-white"
//                   } p-2 flex 3xl:h-[7rem] 3xl:w-[7rem] justify-center items-center   border-[1px] rounded-full duration-300 hover:bg-btn_color bg-black bg-opacity-10 backdrop-blur-sm`}
//                 > 
//                 <span 
//                   className="flex  text-black-300 active:text-black hover:text-white text-3xl 3xl:text-[8rem]"> 
//                 <RxCaretLeft />
//                 </span>
                 
//                 </button>
//                 <button
//                   id={`next_slide6`}
//                   className={`${
//                     isEnd
//                       ? "border-neutral-300  text-neutral-300"
//                       : "border-text text-text"
//                   } p-2  3xl:h-[7rem] 3xl:w-[7rem] flex justify-center items-center border-[1px] rounded-full duration-300 hover:bg-btn_color text-white backdrop-blur-sm`}
//                 >
//                   <span 
//                     className="flex justify-center text-black hover:text-white items-center text-3xl 3xl:text-[8rem]"> 
//                     <RxCaretRight />
//                   </span> 
//                 </button>
   
//           </div>
//       </div>
//     );
//   }
  