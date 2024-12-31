import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import SubForm from "./subscribe-form";
import Link from "next/link";

const ConnectCompany = () => {
  return (
    <div
      className="
        w-full py-20 md:px-[20vw] overflow-hidden bg-white
        relative
        flex flex-col md:flex-row justify-center items-center
      "
    >
      <div
        className="
          
          md:py-10 h-full w-full flex justify-center items-center
        "
      >
        <div className="text-text px-5 text-center md:text-left">
          <h1 className="font-bold md:text-[2.4rem] text-3xl lg:text-[45px] min-[1900px]:text-[51px] leading-[30px] md:leading-[42px]">
            ackresponse<span className="text-green-400 font-bold">.</span>
          </h1>
          <p className="text-[#5f6368] my-10  min-[1900px]:text-[1.3rem] text-lg md:text-lg">
            Empowering businesses and organizations with cutting-edge technology and a visionary approach to growth. Let&apos;s collaborate to drive your success to new heights.
          </p>
        </div>
      </div>
      
      <div className="flex justify-center items-center w-[40vw] md:w-auto md:ml-10">
        <button className="shrink-0">
          <Link
            href="/contact"
            className={`
               items-center duration-300 btn hover:text-text transform-all flex justify-between bg-[#33f081] text-black border-[1px] rounded-md 
               m-auto group w-auto px-3 md:py-4 py-2
            `}
          >
            <span className="group text-sm md:text-md font-normal">
              Contact Us
            </span>
            <BsArrowRightShort className="text-[1em] md:text-xl group-hover:translate-x-[10px] duration-300" />
          </Link>
        </button>
      </div>
    </div>
  );
};

export default ConnectCompany;

