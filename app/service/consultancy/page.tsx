"use client"

import "../../../style/background_images.css";
import "../../../style/globals.css";


import ConnectCompany from "@/components/company-contact";
import ServiceInsightsSection from "@/components/service/service-insights-section";

import Link from "next/link";
import { useRef } from "react";

import Swipper from "@/components/insight/swipper";
import { BsArrowRightShort } from "react-icons/bs";

export default function Consultancy() {


 
  const ref = useRef(null);

  return (
    <div className="bg-black">
     
      <div id="intro" className=" h-full  w-full flex flex-col justify-center items-center">
      <div className='flex flex-col //flex-col-reverse h-screen w-full justify-center
        py-9 px-7 
        md:flex md:flex-col //md:flex-col-reverse md:px-10
        md:justify-center
        lg:flex lg:flex-row  lg:px-28     lg:justify-normal
        //lg:justify-center //lg:items-center 
      
        IpadProJustifyCenter
        bg-[url("/servicepage/consultancy/consultancy.jpg")] 
        bg-cover
        bg-center
        md:bg-fixed
        lg:bg-fixed 
        lg:bg-[length:200px_100px]"
        lg:bg-no-repeat
        IPadProBackground
        text-white
        '>

        <div className="flex flex-col 
          md:space-y-0 space-y-6 md:w-[80%] justify-center 
          lg:px-16
          ">

        <h1
          className="
          text-5xl
          lg:text-8xl
     
          md:text-8xl md:py-10"
        >
            Consultancy
        </h1>
        <h1 className=" 
          w-full
        text-white text-left 
          text-[1.3rem]   
          md:text-xl
          
          lg:max-w-7xl  
          IpadProText
          lg:w-[80%]
          ">
        Maximize your business potential with our expert IT consultancy, providing tailored strategies to optimize your technology and drive success.
          </h1>
        </div>

      </div>
      </div>

        <div className="pt-28 pb-2 md:px-10 lg:px-36 px-10  justify-center items-center flex flex-col space-y-12 ">
            <div className="flex justify-center items-center">
                <p className="text-2xl md:text-4xl text-center font-light  tracking-wide text-white  lg:landscape:w-[75%]">
                Any tech related consultancy services you are after, please do reach out to us. Together, we can supercharge and deliver the best solutions possible to achieve the final goal of the projects.
                </p>
            </div>
            <div className="flex flex-col space-y-20 justify-center items-center text-white">
            <h1 className="text-2xl md:text-3xl font-semibold">
                We are happy to help.
            </h1>
            <Link href="/contact" className="flex justify-start items-center ">
                    <button className="p-5 group hover:border-none hover:bg-[#fff] bg-[#33f081] duration-300 hover:px-6 transform-all text-black  rounded-md flex items-center justify-between">
                      <span className="group text-base">Connect with us</span>
                      <BsArrowRightShort className="text-[1.5em] group-hover:translate-x-[10px] duration-300" />
                    </button>
                    </Link>

            </div>
        </div>


        <div className="w-full text-white pt-24">
        <div className="app-layout py-6">
          <div className="p-4  ">
          <h1 className="text-3xl md:text-3xl font-medium md:py-2 pb-5 text-center">
              Our services
            </h1>
          </div>
        </div>
        <div className=" mb-10 md:mb-0  md:py-8 w-[90%] md:w-[90%] m-auto">
          <Swipper />
        </div>
      </div>
      <ServiceInsightsSection title={"Insights and trends"} />
      
      <ConnectCompany />
    </div>
  );
}
