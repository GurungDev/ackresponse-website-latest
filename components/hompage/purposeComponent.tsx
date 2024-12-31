import Image from "next/image";
import React from "react";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { RiDoubleQuotesL } from "react-icons/ri";

const Portfolio = () => {
  return (
    <div className="w-full m-auto justify-center items-center flex flex-col md:pt-24 pt-20 md:pb-28 py-10 md:py-6 md:mt-10 bg-gradient-to-r to-[#000] from-[#000]">
      <h1 className="secondary-title text-[#fff]  lg:text-[1.5rem]  text-center">Our Purpose</h1>
      {/* <p className="text-center app-layout my-9 text-neutral-600 md:w-[60%] lg:w-[60%] paragraph md:text-xl">
        Building enduring relationships with our clients, fully commit to projects of all types and sizes, and transform them with the latest cutting-edge technologies, unlocking their full potential and driving success.
        
      </p> */}
      <span className="relative inline-block  h-full text-center text-xl  px-4 md:px-2 my-9 text-[#fff] min-[710px]:w-[80%]    lg:w-[60%]  md:text-3xl font-semibold">
        To cultivate enduring client partnerships by delivering innovative solutions that maximize potential.
          <div className="w-full flex justify-center items-center py-5">
          {/* <div className="md:mt-16 mt-10 left-0 bottom-0 min-[1000px]:w-[60%] min-[710px]:w-full w-[80%]  h-[0.2rem] bg-gradient-to-r from-[#A5B4FC] to-[#00FF00]"></div> */}
          </div>
        </span>
        <div className="flex flex-col min-[700px]:flex-col min-[1000px]:flex-row rounded-xl justify-center items-center px-6 lg:px-0 w-[95%] IPadOurPurposeWidth md:portrait:w-[90%]   h-full lg:w-[70%] bg-gradient-to-t to-[#000] from-[#111]">

        <div className="md:w-full  h-full md:h-full flex justify-center items-center mt-4">
        <div className="relative w-full p-3 flex justify-center items-center ">
          <Image
            priority={true}
            src="/image/sg-fndr.png"
            alt="let's connect"
            height={1920}
            width={1920}
            quality={100}
            className="h-64 w-64  min-[700px]:w-36 min-[700px]:h-36 md:h-96 md:w-96  min-[1000px]:w-90 min-[1000px]:h-90 object-cover flex justify-center items-center"
          />
        </div>

        </div>

        <div className=" m-auto w-full h-full lg:w-full text-[#fff]">
          <div className="md:px-3 py-10">
            <h1 className="font-medium">
              <RiDoubleQuotesL size={40} />
            </h1>
            <p className="py-5  text-md md:text-xl font-light">
              We aim to continuously improve, day-in & day-out, to seize
              opportunities ahead with confidence and resilience, ensuring
              competitiveness and efficiency in today&apos;s rapidly evolving business
              landscapes.
              <br />
              <br />
              In our early days of our venture, we really hope that you will help
              us build our business too by working and partnering together.
            </p>
            <p className="font-[600] mt-5  text-2xl">Sagar Gurung</p>
            <small className="text-[15px] font-light">Founder &amp; Managing Director, ackresponse<span className="text-green-400 font-bold">.</span></small>
            <p>
            <a href="https://www.linkedin.com/in/sagar-g-296447151/" target="_blank">
              {" "}
              <BiLogoLinkedinSquare size={30} />
            </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
