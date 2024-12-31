import Image from "next/image";
import React from "react";

type Props = {
  image: string;
  title: string;
  description: string;
};

const InsightAdvertise = ({ image, title, description }: Props) => {
  return (
    <div className=" my-24 mb-44    w-[97vw] h-[75vh]">
      <div className="relative m-auto   lg:m-0 w-[95%] lg:w-[80%] h-[100%]">
        <Image
          src={image}
          alt="Banner"
          width={1920}
          height={1080}
          className="h-[98%] absolute object-cover w-full py-4  "
        />
        <div className="absolute  rounded-md  bg-white md:2-[60%] lg:h-[70%] w-[80%] -bottom-[10%]  right-[0%] lg:-right-[20%] ">
          <div className="object-cover   relative  w-[80%] m-auto h-full  ">
            <div className="title mt-7 md:mt-10 lg:mt-20 text-text">
              <div className="bg-text w-[55px] h-[10px] mb-5 md:mb-8 lg:mb-10"></div>
              <h1> {title}</h1>
            </div>
            <p className="my-6 md:my-10 lg:my-14 text-text">{description}</p>
            <div
              className={
                "w-[120px] mt-5  rounded shadow-md bg-gradient-to-r text-white hover:text-text from-indigo-300 to-purple-400 p-[2px]"
              }
            >
              <button
                className={
                  "btn w-full h-full px-3 py-3 small custom-gradient paragraph"
                }
              >
                Find out more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsightAdvertise;
