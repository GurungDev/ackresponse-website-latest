"use client"
import SoftwareDevToUs from '@/components/service/softwareDev/softwareDev'
import "../../../style/background_images.css";
import ConnectCompany from '@/components/company-contact'
import ServiceInsightsSection from '@/components/service/service-insights-section'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col bg-[black]'>
      <div className='flex flex-col //flex-col-reverse h-screen w-full justify-center
      py-9 px-7 
      md:flex md:flex-col //md:flex-col-reverse md:px-10
      md:justify-center
      lg:flex lg:flex-row  lg:px-28     lg:justify-normal
      //lg:justify-center //lg:items-center 
    
      IpadProJustifyCenter
      bg-[url("/servicepage/softwareDev/software_page.jpg")]
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
        md:space-y-0 space-y-6 md:w-[80%] 
        justify-center lg:px-24 ">
          {/* <h1 className="text-white lg:text-6xl">
            <FaCloud/>
          </h1> */}
        <h1
          className="
          text-7xl
          lg:text-8xl
     
          md:text-9xl md:py-10"
        >
            Software
        </h1>
        <h1 className=" 
          w-full
        text-white text-left 
          text-[1.3rem]   
          md:text-xl
          
          lg:max-w-7xl  
          IpadProText
          ">
            Crafting tailored software solutions to drive your business forward.
          </h1>
        </div>
      </div>
      <div className='py-9 md:py-14 lg:py-20 text-white bg-[#111]'>
        <p className='text-center py-10 md:py-0 text-3xl md:text-3xl lg:text-3xl'>Offerings</p>
        <div className='flex flex-col 
            px-2
            md:flex-col 
            md:py-9 md:px-20 space-y-16 md:space-y-8 lg:space-y-0 
            lg:flex-row  lg:py-16 lg:px-36 '>
            <div className="flex justify-center items-center md:py-3  lg:px-10 lg:py-6 border-l-1 border-[#fff] md:border-none">
                {/* <div className='w-1 md:h-[15vh] lg:h-[90%] flex justify-center items-center bg-[#888]'></div> */}
            <div className='flex flex-col pl-4 h-full space-y-4 md:space-y-6 lg:space-y-10 text-center'>
              <div className='md:w-[80%]'>
                  <h1 className="font-bold text-2xl md:text-xl lg:text-2xl">Traditional way, Monolithic</h1>
                  <h2 className='text-xl'>Bespoke</h2>
              </div>
              <div className=" md:w-[80%] text-center">
                  <span className='text-md md:text-lg lg:text-lg'>
                  Delivering robust and reliable software solutions with a focus on traditional development methods, ensuring stability and compatibility with legacy systems.
                  </span>
              </div>
            </div>

            </div>
            <div className="flex justify-center items-center md:py-3  lg:px-10 lg:py-6 border-l-1 border-[#fff] md:border-none">
            {/* <div className='w-1 md:h-[15vh] lg:h-[90%] flex justify-center items-center bg-[#00FF00]'></div> */}
            <div className='flex flex-col pl-4 h-full space-y-4  md:space-y-6 lg:space-y-10'>
              <div className='md:w-[80%] text-center'>
              <h1 className="font-bold text-2xl md:text-xl lg:text-2xl">Cloud-native way, Microservice</h1>
              <h2 className='text-xl'>Bespoke</h2>
              </div>
              <div className="md:w-[80%] text-center">
              <span className='text-md md:text-lg lg:text-lg'>
                  Building scalable, resilient software solutions using cloud-native microservices, optimized for performance and flexibility in modern cloud environments.
                  </span>
              </div>
            </div>

            </div>
            <div>
                
            </div>
        </div>
      </div>
        <SoftwareDevToUs/>
        <ServiceInsightsSection
        title={"Insights and trends"}
      />
      <ConnectCompany />
    </div>
  )
}

export default page
