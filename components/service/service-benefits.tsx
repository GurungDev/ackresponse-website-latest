"use client"
import { cn } from "@/lib/utils";
import Image from "next/image";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

type Props = {
  title: String;
  benefits: String[];
  classNames?: string
};

import {motion} from 'framer-motion';
import Devops from '@/animation/automationBlue.json'
import Lottie from "react-lottie-player";

export default function ServiceBenefits({ title, benefits, classNames }: Props) {
  return (
    <section id="benefits" className="bg-[#111] text-white px-6 pb-14 md:px-4 md:pt-14 md:pb-28  flex flex-row justify-center">

      <div className="  sm:w-full md:w-full md:px-12 lg:w-1/2">
        <h1 className="secondary-title text-center font-bold lg:text-[1.5rem] pt-20 md:pt-10  md:mb-10 ">
          BENEFITS
        </h1>
        {/* <RiDoubleQuotesL size={50} /> */}
        <h1 className={cn(`text-md md:text-xl  font-light  py-5 pb-10 text-center`)}>
          {title}
        </h1>
        <div className="flex flex-row">
          <div className=" w-full">
            <ul className="min-[1900px]:text-[1.3rem] py-4 space-y-6 text-center">
            {benefits.map((i, index) => (
              <li
                className="inline-block border-b-2 border-[#444] pb-4 font-light"
                // style={{
                //   borderImage: "linear-gradient(to right, #A5B4FC, #00FF00) 1"
                // }}
                key={index}
              >
                {i}
              </li>
            ))}
            </ul>
          </div>
     
      </div>



      </div>
      {/* <div className="hidden 
             min-[700px]:hidden 
             min-[1000px]:flex  
             h-full
             w-[30%]
               md:mt-36
              md:justify-start
              md:items-start
               
             ">
               <motion.div
                   initial={{ opacity: 0, x: 200 }}
                   animate={{ opacity: 1, x: 0 }}
                   transition={{ duration: 0.6 }}
                   className="w-full"
               >
                   <Lottie
                       loop
                       animationData={Devops}
                       play
                       className="w-full h-full"
                       
                   />
               </motion.div>
       </div> */}

    </section>
  );
}
