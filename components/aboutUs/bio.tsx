import Image from "next/image";
import React from "react";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { RiDoubleQuotesL } from "react-icons/ri";

const Bio = () => {
  return (
    <div className="w-full m-auto justify-center items-center flex flex-col md:pt-24 pt-20 md:pb-28 py-10 md:py-6 md:mt-10 bg-gradient-to-r to-[#000] from-[#000]">
      {/* <h1 className="secondary-title text-[#fff]  lg:text-[1.5rem]  text-center">About Us</h1> */}
      {/* <p className="text-center app-layout my-9 text-neutral-600 md:w-[60%] lg:w-[60%] paragraph md:text-xl">
        Building enduring relationships with our clients, fully commit to projects of all types and sizes, and transform them with the latest cutting-edge technologies, unlocking their full potential and driving success.
        
      </p> */}
      <span className="relative inline-block  h-full text-center text-xl  px-4 md:px-2 my-16 text-[#fff] min-[710px]:w-[80%]    lg:w-[60%]  md:text-4xl font-semibold">
        We really do appreciate a lot for visiting our website, hope you have found whatever you are looking for.
          <div className="w-full flex justify-center items-center py-5">
          {/* <div className="md:mt-16 mt-10 left-0 bottom-0 min-[1000px]:w-[60%] min-[710px]:w-full w-[80%]  h-[0.2rem] bg-gradient-to-r from-[#A5B4FC] to-[#00FF00]"></div> */}
          </div>
        </span>
        <div className="flex flex-col min-[700px]:flex-col min-[1000px]:flex-row rounded-xl justify-center items-center px-6 lg:px-0 w-[95%] IPadOurPurposeWidth md:portrait:w-[90%]   h-full lg:w-[70%] bg-gradient-to-t to-[#000] from-[#111]">

        <div className="md:w-full  h-full md:h-full flex justify-center items-center mt-4">
        <div className="relative w-full flex justify-center items-center ">
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
            <p className="py-5 text-md md:text-md font-light">
                Hi, I&apos;m Sagar, Founder &amp; Managing Director of ackresponse Ltd. I just couldn&apos;t thank you enough for showing your interest in our company and the services we offer.
            </p>
            <p className="text-md md:text-md font-light">
              Briefly about myself, I&apos;m originally from Nepal, born in Hong Kong, and have been living in the UK for the past 18 years. Having spent almost half of my life here, I feel truly fortunate for the quality of education, professional growth, and exposure to high-tech industries the UK has offered me. I am deeply grateful to everyone for shaping me into who I am today. 
              
            </p>
            <br />
            <p>
              With a burning entrepreneurial spirit, I&apos;ve taken the leap into the world of business to contribute to the economy, help people secure a livelihood, and ultimately bring loved ones closer. I truly hope you&apos;ll support us in our mission to create a more sustainable, eco-friendly future and make the world a better place.
            </p>
            <br />
            <p>We&apos;re open for business and excited to collaborate with you to drive your business to new heights and successes.</p>
            
            
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

export default Bio;
