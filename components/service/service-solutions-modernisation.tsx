"use client";
import Image from "next/image";

import { useEffect, useState } from "react";
import { BsClock } from "react-icons/bs";
import { FaServer } from "react-icons/fa6";
type SwiperSlide = {
  image: string;
  title: string;
  description: string;
};

type Props = {
  slides: SwiperSlide[];
  title: string;
};

export default function ServiceSolutions({ slides, title }: Props) {
  const [loop, setLoop] = useState(false);
  useEffect(() => {
    slides.length <= 6 ? setLoop(false) : setLoop(true);
  }, [slides.length]);
  return (
    // <section id="solutions" className="bg-[#fbfbfd] py-7">
    //   <div className="w-[90%] m-auto py-4  ">
    //     <h1 className="secondary-title font-medium py-2 pb-5 ">{title}</h1>
    //   </div>

    //   <div className="pt-8 grid grid-cols-1 min-h-[800px] md:grid-cols-2 min-[1800px]:gap-x-40 m-auto w-[90%] justify-between  gap-x-20 gap-y-10">
    //     {slides.map((e, index) => {
    //       return (
    //         <div
    //           key={index}
    //           className=" relative w-full hover:shadow-lg duration-300   lg:h-[45vh] lg:min-h-[350px]  p-5 flex items-center rounded-md shadow-md bg-white   w-full"
    //         >
    //           <div className="lg:absolute w-full h-full lg:-translate-x-[10%] items-center justify-center flex flex-col  lg:flex-row group gap-10 ">
    //             <div className="  overflow-hidden shadow-lg rounded w-full lg:w-[32%] lg:min-w-[160px] h-[60%]  flex   items-center justify-center">
    //               <Image
    //                 src={e.image}
    //                 alt="Offerings photo"
    //                 width={1000}
    //                 height={1000}
    //                 className="obect-cover h-full  group-hover:scale-[1.1] duration-300   "
    //               ></Image>
    //             </div>
    //             <div className="w-[90%] lg:w-[65%]  text-text    m-auto">
    //               <h1 className="text-[1.4rem] md:text-[1.8rem] my-2 lg:text-[27px]  min-[1900px]:text-[35px] leading-[30px] md:leading-[42px] text-text font-[600]      ">
    //                 {e.title}
    //               </h1>
    //               <p className=" text-[.8rem] md:text-[.9rem]  lg:text-[1rem] font-[300] min-[1900px]:text-[1.3rem]  ">
    //                 {e.description}
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       );
    //     })}
    //   </div>
    // </section>
    <section id="solutions" className="bg-[#fbfbfd] py-10">
      <div className="app-layout grid   md:grid-cols-2 gap-y-40 gap-x-20 items-start justify-between">
        {slides.map((data, index) => {
          return (
            <div key={index} className="group gap-5 grid px-5">
              <div className="group-hover:translate-y-[-10px] duration-300">
                <FaServer size={100}/> 
              </div>
              <h4 className="secondary-title">{data.title}</h4>
              <p className="paragraph">{data.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
