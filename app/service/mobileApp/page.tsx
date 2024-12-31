"use client"
import MobileToUs from '@/components/service/mobileApp/MobileApp';
import "../../../style/background_images.css";
import React from 'react';
import ServiceInsightsSection from '@/components/service/service-insights-section';
import ConnectCompany from '@/components/company-contact';
import { MdOutlineWebAsset } from "react-icons/md";
import { VscMultipleWindows } from "react-icons/vsc";
import { FaServer } from "react-icons/fa6";
import { BsGearWideConnected } from "react-icons/bs";
import { TbDeviceMobileCog } from "react-icons/tb";

const mobileOfferings = [
  {
    id: '01',
    title: "Custom",
    description: "Tailored mobile applications designed specifically to meet your business needs, ensuring a unique and personalized user experience.",
    bg: "linear-gradient(to right, #CCCCFF, #ffffff)",
    outlineColor: "#FF0000",
    react_icons: <TbDeviceMobileCog />
  },
  {
    id: '02',
    title: "Cross-platform",
    description: "Building apps that work seamlessly across iOS, Android, and other platforms, ensuring a consistent experience for all users.",
    bg: "linear-gradient(to right, #CCFFE6, #ffffff)",
    outlineColor: "#0000FF",
    react_icons: <VscMultipleWindows  />
  },
  {
    id: '03',
    title: "Native",
    description: "Developing feature-rich, high-performance apps specifically for iOS or Android, leveraging the full power of each platform.",
    bg: "linear-gradient(to right,#FFCCFF,#ffffff)",
    outlineColor: "#FF00FF",
    react_icons: <MdOutlineWebAsset/>
  },
  {
    id: '04',
    title: "Backend for mobile",
    description: "Developing robust and scalable backend systems to support app functionalities such as databases, servers, and APIs.",
    bg: "linear-gradient(to right,#CCFFCC,#ffffff)",
    outlineColor: "#00CC66",
    react_icons: <FaServer/>
  },
  {
    id: '05',
    title: "Maintenance & Support",
    description: "Providing ongoing updates, security patches, performance optimizations, and technical support to keep your app running smoothly.",
    bg: "linear-gradient(to right,#ABCAFF,#ffffff)",
    outlineColor: "#CCCC00",
    react_icons: <BsGearWideConnected />
  }
];

const Page = () => {
  return (
    <div className=" w-full h-full mt-16 md:mt-20 bg-black text-white">
      <div  className='flex flex-col //flex-col-reverse h-screen w-full justify-center
      py-9 px-7 
      md:flex md:flex-col //md:flex-col-reverse md:px-10
      md:justify-center
      lg:flex lg:flex-row  lg:px-28     lg:justify-normal
      //lg:justify-center //lg:items-center 
    
      IpadProJustifyCenter
      bg-[url("/image/mobileLandingImage.jpg")]  
      bg-cover
      bg-center
      md:bg-fixed
      lg:bg-fixed 
      lg:bg-[length:200px_100px]"
      lg:bg-no-repeat
      IPadProBackground
      text-white
      '>
        {/* <Image className='h-screen absolute top-0 right-0 bg-cover  bg-fixed object-fill' src="/image/mobileLandingImage.jpg" alt='mobile background img' width={1920} height={1080}/> */}
        <div className='space-y-3   
            md:flex md:flex-col 
            md:justify-center md:mt-0 md:space-y-6 md:mb-0  md:px-20
            md:w-full
            lg:mb-40 //lg:ml-20 lg:w-full 
            IpadProMarginBottomReset '>
        {/* <p className='
              text-2xl
              md:text-5xl
              lg:text-5xl
              flex justify-start items-start
          '>
            <IoIosPhonePortrait />
          </p> */}
          <p className='
              text-5xl
              md:text-8xl
              lg:text-8xl
              
          '>
            Mobile
          </p>
          <p className='
              text-xl
              w-full
              //lg:w-1/2
              IpadProWidth
              md:text-2xl
              lg:text-3xl
              lg:landscape:w-[55%]
          '>
            Building powerful mobile apps designed to engage users and accelerate your business success.
          </p>
        </div>
        {/* <div className=" 
             h-full
             w-full  
             flex justify-center items-center lg:w-[50%] lg:h-[60%]  IpadProLottiePlayer
             ">
               {" "}
               <motion.div
                   initial={{ opacity: 0, x: 200 }}
                   animate={{ opacity: 1, x: 0 }}
                   transition={{ duration: 0.6 }}
                   className="w-full "
               >
                   <Lottie
                       loop
                       animationData={webAppLottie}
                       play
                       className="w-full h-full"
                       
                   />
               </motion.div>
        </div> */}
      </div>

      <div className='flex flex-col justify-center items-center px-3 md:py-12 lg:py-20 space-y-5 lg:space-y-12 md:px-10'>
        <div>
          <h1 className='text-3xl pt-12 md:pt-0 md:text-4xl md:py-3'>Offerings</h1>
        </div>
        <div className='pb-6 md:pb-0 px-3 lg:px-10'>
          <div className='grid gap-9 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
            {mobileOfferings.map((offering) => (
              <div
  key={offering.id}
  className="p-6 rounded-md mb-4 flex flex-col justify-start space-y-3 
    //outline-dashed //outline-[6px] 
    md:h-auto md:w-full
    landscape:md:w-auto landscape:md:h-auto 
    landscape:lg:h-auto landscape:lg:w-auto
    IProLandspaceCard
    "
  // style={{ 
  //         borderLeft: `4px dashed ${offering.outlineColor}`,
  //     borderBottom: `4px dashed ${offering.outlineColor}`,
  //   outlineColor: offering.outlineColor 
    
  //   }}
>

                <div className='flex text-5xl py-2 md:text-5xl justify-center'>{offering.react_icons}</div>
                <div>
                  <h2 className="text-2xl text-center font-bold mb-3"> {offering.title}</h2>
                  <p className="text-md text-center text-gray-300">{offering.description}</p>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>

      <MobileToUs/>
      <ServiceInsightsSection
        title={"Insights and trends"}
      />
      <ConnectCompany />
    </div>
  );
};

export default Page;
