
"use client"
import "../../../style/background_images.css";
import "../../../style/globals.css";

// import ServiceBenefits from "@/components/service/service-benefits";

import ServiceSolutions from "@/components/service/service-solutions";
// import News_slider from "@/components/hompage/news slider";
// import Slider_landing_page from "@/components/landingServicepageSlider";
// import ServiceApproach from "@/components/service/service-approach";
import ServiceInsightsSection from "@/components/service/service-insights-section";
// import ConnectCloud from "@/components/connect-cloud";
import ConnectCompany from "@/components/company-contact";

// import Link from "next/link";
// import Image from "next/image";
import { useAnimation,motion, useScroll, useTransform } from "framer-motion";
// import { useInView } from 'react-intersection-observer';
import { useEffect, useRef, useState } from "react";

import animation_cloud from '@/animation/Cloud.json';
// import animation_cloud2 from '@/animation/cloud2.json'
// import animation_cloud3 from '@/animation/cloud3.json'
import Lottie from 'react-lottie-player';
// import { FaCloud } from "react-icons/fa";
// import { IoCloudOutline } from "react-icons/io5";
import CloudTypes from "@/components/service/cloud/CloudTypes";

export default function Cloud() {

  const controls = useAnimation();

 
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"]
  });

  // Adjust these values for desired smoothness and vertical movement
  const yTransform = useTransform(scrollYProgress, [0, 1], [500, -10]);


  return (
    <div className="">
      {/* <Slider_landing_page
        slider={[
          {
            slider_title: "Hybrid",
            paragraph:
              "Hybrid cloud safeguards sensitive data by enabling businesses to store it in a private, secure environment while leveraging public cloud benefits for less critical workloads.",
            // page: "Service / Cloud",
            link: "/insight/hybridCloud",
            image: "/insightpage/insights/hybrid-cloud.jpg",
            title: "Why hybrid cloud?",
          },
          {
            slider_title: "Migrate",
            paragraph:
              "Legacy systems can be likened to anchors that hinder businesses from fully realizing their digital capabilities. Transitioning to the cloud frequently serves as the initial stride in a more extensive digital transformation expedition.",
            link: "/insight/migrateYourOldLegacyInfrastructureAndApplicationsToTheCloud",
            // page: "Service / Cloud",
            image: "/insightpage/insights/i1.jpg",
            title:
              "Migrate your old legacy infrastructure and application to the cloud",
          },
          {
            slider_title: "Cloud",
            paragraph: "This is a line for a paragraph",
            // page: "Service / Cloud",
            image:
              "/image/Automate_your_entire_Software_Development_Life_Cycle_processes.jpg",
            title: "Think Cloud From Get-Go",
            link: "/insight/cloudGetGo",
          },
          {
            slider_title: "Containerize",
            paragraph: "This is a line for a paragraph",
            // page: "Service / Cloud",
            link: "/insight/containerization",
            image:
              "/image/Containerize_and_deploy_applications_on_the_cloud.jpg",
            title: "Containerize and deploy applications on the cloud",
          },
        ]}
      /> */}
      {/* <News_slider
        slides={[
          {
            id: 1,

            title:
              "Automate your entire Software Development Life Cycle processes ",
          },
          {
            id: 2,

            title: "Containerize and deploy applications on the cloud",
          },
          {
            id: 3,

            title: "Leverage cloud to maximize the business values",
          },

          {
            id: 4,

            title:
              "Migrate your old legacy infrastructure and application to the cloud",
          },
        ]}
        buttonDiv={" "}
        button={
          " small text-white border-[1px] border-secondary    bg-secondary  hover:text-text hover:bg-white rounded-[2px] shadow  py-2 px-5   duration-300"
        }
        background={"  px-20 lg:px-40 text-text   items-center  lg:pl-[15em]"}
        backgroundColor={"bg-white border-b-[2px]"}
        side_button={
          "border-black text-text hover:bg-secondary hover:border-white hover:text-white"
        }
      /> */}

      {/* <div id="intro" className=" px-10 py-[7rem]">
        <h1 className="text-[1.6rem] min-[400px]:text-[1.875rem]  md:text-[2.25rem]  lg:text-[37px]  min-[1900px]:text-[42px] leading-[40px] md:leading-[52px] text-text font-[500] text-center lg:max-w-5xl mx-auto">
          We help to deliver end-to-end cloud solutions taking from strategical
          planning, design, execution to ongoing optimization.
        </h1>
      </div> */}

      <div id="intro" className=" h-full  w-full flex flex-col justify-center items-center">
      <div className='flex flex-col //flex-col-reverse h-screen w-full justify-center
        py-9 px-7 
        md:flex md:flex-col //md:flex-col-reverse md:px-10
        md:justify-center
        lg:flex lg:flex-row  lg:px-28     lg:justify-normal
        //lg:justify-center //lg:items-center 
      
        IpadProJustifyCenter
        bg-[url("/servicepage/cloud/cloudLandingPage.jpg")] 
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
          {/* <h1 className="text-white lg:text-6xl">
            <FaCloud/>
          </h1> */}
        <h1
          className="
          text-8xl
          lg:text-8xl
     
          md:text-9xl md:py-10"
        >
            Cloud
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
         Seize the power of cloud - private, public, or hybrid - to modernize your applications and infrastructure, boosting control, competitiveness, and efficiency in today&apos;s fast-paced business world.
          </h1>
        </div>
        {/* <div className=" 
             h-full
             w-full  
             flex justify-center items-center  lg:w-[50%]  IpadProLottiePlayer
             ">
               {" "}
               <motion.div
                   initial={{ opacity: 0, x: 200 }}
                   animate={{ opacity: 1, x: 0 }}
                   transition={{ duration: 0.6 }}
                   className="w-full h-full md:w-[50%]  lg:w-full"
               >
                   <Lottie
                       loop
                       animationData={animation_cloud2}
                       play
                       className="w-full h-full"
                       
                   />
               </motion.div>
        </div> */}
      </div>
      </div>
     <CloudTypes/>
      <ServiceSolutions
        title={"Offerings"}
        slides={[
          {
            image: "/servicepage/cloud/offerings/cloud-migration.jpg",
            title: "Cloud Migration",
            bg: "bg-red-400",
            description:
              "Simplify your cloud journey with our seamless cloud migration service, tailored for future growth.",
          },
          {
            image: "/servicepage/cloud/offerings/cloud-native.jpg",
            title: "Cloud-native application development",
            bg: "bg-purple-400",
            description:
              "Build scalable, resilient apps with our cloud-native development service designed for the modern digital landscape.",
          },
          {
            image: "/servicepage/cloud/offerings/application-modernisation.jpg",
            title: "Application modernisation",
            bg: "bg-blue-400",
            description:
              "Transform your legacy systems with our application modernization service for enhanced performance and agility.",
          },
          {
            image: "/servicepage/cloud/offerings/hybrid-cloud.jpg",
            title: "Hybrid Cloud",
            bg: "bg-yellow-400",
            description:
              "Unlock flexibility and scalability with our hybrid cloud solutions, seamlessly integrating public and private cloud infrastructure.",
          },
          {
            image: "/servicepage/cloud/offerings/o1.jpg",
            title: "Cloud security",
            bg: "bg-green-400",
            description:
              "Secure your cloud environment with our comprehensive cloud security solutions, protecting your data and infrastructure from evolving threats.",
          },
          {
            image: "/servicepage/cloud/offerings/cloud-migration.jpg",
            title: "Cloud Migration",
            bg: "bg-red-400",
            description:
              "Simplify your cloud journey with our seamless cloud migration service, tailored for future growth.",
          },
          {
            image: "/servicepage/cloud/offerings/application-modernisation.jpg",
            title: "Application modernisation",
            bg: "bg-blue-400",
            description:
              "Transform your legacy systems with our application modernization service for enhanced performance and agility.",
          },
          {
            image: "/servicepage/cloud/offerings/cloud-native.jpg",
            title: "Cloud-native application development",
            bg: "bg-purple-400",
            description:
              "Build scalable, resilient apps with our cloud-native development service designed for the modern digital landscape.",
          },
          {
            image: "/servicepage/cloud/offerings/hybrid-cloud.jpg",
            title: "Hybrid Cloud",
            bg: "bg-yellow-400",
            description:
              "Unlock flexibility and scalability with our hybrid cloud solutions, seamlessly integrating public and private cloud infrastructure.",
          },
          {
            image: "/servicepage/cloud/offerings/o1.jpg",
            title: "Cloud security",
            bg: "bg-green-400",
            description:
              "Secure your cloud environment with our comprehensive cloud security solutions, protecting your data and infrastructure from evolving threats.",
          },
        ]}
      />

      <div id="intro" className="w-full flex flex-col justify-center items-center px-10 py-20 md:py-[10rem] space-y-4 md:space-y-7">
        {/* <div className="text-black flex justify-center items-center text-3xl md:t ext-4xl"><FaCloud/></div> */}
        <h1 className="text-[1.3rem] min-[400px]:text-[1.875rem]  md:text-[2.25rem]  lg:text-[37px]  min-[1900px]:text-[42px] leading-[40px] md:leading-[52px] text-text font-[500] text-center lg:max-w-5xl mx-auto">
          We help to deliver end-to-end cloud solutions taking from strategical
          planning, design, execution to ongoing optimization.
        </h1>
      </div>


      <div ref={ref} className="w-full h-full flex justify-between items-center overflow-hidden cloud_page_gradient py-7 lg:py-16 lg:px-12">
        <div className="flex w-full h-full justify-around items-center">

          <div className="
            h-full   w-full 
            flex flex-col py-10 px-6 space-y-4
            min-[700px]:px-5  
            md:flex 
            md:flex-col  
            md:justify-center md:items-center
            lg:py-11 md:pl-6
            lg:px-2  md:space-y-2 lg:ml-20 iPadProMarginLeftNone
            lg:w-[50%]
            " >
            <div className="text-white text-2xl md:pb-3 w-full  text-left">
              BENEFITS
            </div>
            <div className="space-y-2 md:space-y-3 text-white ">
              <div className="text-xl pb-6
          
                 ">
                <p className="min-[700px]:text-3xl md:text-[1.rem]">
                  Embracing the cloud empowers businesses and organizations with unparalleled benefits, driving efficiency, innovation, and growth.
                </p>
              </div>
              <div className="md:text-lg ">

              <h2 className="
                  text-left  text-white font-[300] 
                  text-[1rem] leading-[40px]
                  min-[400px]:text-[1.2rem] 
                  min-[700px]:text-[1.5rem] 
                  md:leading-[52px]
                  min-[1900px]:text-[32px] lg:max-w-5xl lg:text-[1.2rem]">
                <span className="relative inline-block">
                New business opportunities and growth
                  <div className="absolute left-0 bottom-0 w-full h-[0.1rem] bg-white"></div>
                </span>
              </h2>
            </div>
            <div className="md:text-lg ">    
                  <h2 className="
                  text-left  text-white font-[300] 
                  text-[1rem] leading-[40px]
                  min-[400px]:text-[1.2rem] 
                  min-[700px]:text-[1.5rem] 
                  md:leading-[52px]
                  min-[1900px]:text-[32px] lg:max-w-5xl lg:text-[1.2rem]">
    
                <span className="relative inline-block">
                Highly available & reliable infrastructure to run applications
                  
                  <div className="absolute left-0 bottom-0 w-full h-[0.1rem] bg-white"></div>
                </span>
              </h2>
            </div>
            <div className="md:text-lg ">
                <h2 className="
                  text-left  text-white font-[300] 
                  text-[1rem] leading-[40px]
                  min-[400px]:text-[1.2rem] 
                  min-[700px]:text-[1.5rem] 
                  md:leading-[52px]
                  min-[1900px]:text-[32px] lg:max-w-5xl lg:text-[1.2rem]">
                <span className="relative inline-block">
                  Cost optimisation and saving costs
                  <div className="absolute left-0 bottom-0 w-full h-[0.1rem] bg-white"></div>
                </span>
            </h2>
            </div>
            <div className="md:text-lg ">
                <h2 className="
                  text-left  text-white font-[300] 
                  text-[1rem]  leading-[40px]
                  min-[400px]:text-[1.2rem] 
                  min-[700px]:text-[1.5rem] 
                  md:leading-[52px]
                  min-[1900px]:text-[32px] lg:max-w-5xl lg:text-[1.2rem]">
                <span className="relative inline-block">
                Innovative technology to unlock numerous potentials
                  <div className="absolute left-0 bottom-0 w-full h-[0.1rem] bg-white"></div>
                </span>
            </h2>
            </div>
            <div className="md:text-lg ">
                <h2 className="
                  text-left  text-white font-[300] 
                  text-[1rem]  leading-[40px]
                  min-[400px]:text-[1.2rem] 
                  min-[700px]:text-[1.5rem] 
                  md:leading-[52px]
                  min-[1900px]:text-[32px] lg:max-w-5xl lg:text-[1.2rem]">
                <span className="relative inline-block">
                  Bird&apos;s-eye view logging and monitoring to make life easier
                  <div className="absolute left-0 bottom-0 w-full h-[0.1rem] bg-white"></div>
                </span>
            </h2>
            </div>
            <div className="md:text-lg ">
                 <h2 className="
                  text-left  text-white font-[300] 
                  text-[1rem]  leading-[40px]
                  min-[400px]:text-[1.2rem] 
                  min-[700px]:text-[1.5rem] 
                  md:leading-[52px]
                  min-[1900px]:text-[32px] lg:max-w-5xl lg:text-[1.2rem]">
                <span className="relative inline-block">
                Better platform to initiate, nurture and cultivate ideas
                  <div className="absolute left-0 bottom-0 w-full h-[0.1rem] bg-white"></div>
                </span>
            </h2>
            </div>
            </div>
          </div>
          <div className="hidden
                  w-[60%] 
                  min-[700px]:hidden 
                  min-[1000px]:flex  
                  min-[1100px]:w-[40%] min-[1100px]:order-2
                  min-[1900px]:w-[40%] order-1  landing-radius
                    lg:w-[50%]
                  ">
                    {" "}
                    <motion.div
                        initial={{ opacity: 0, x: 200 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className=" p-9"
                    >
                        <Lottie
                            loop
                            animationData={animation_cloud}
                            play
                            className="h-full w-full md:h-[30rem] md:w-[35rem] lg:h-[35rem]  "
                            
                        />
                    </motion.div>
                </div>
        </div>
      </div>

 
      {/* <ServiceBenefits
        title="Transforming to the cloud bring enormous amount of benefits to organisations and businessess."
        benefits={[
          "New business opportunities and growth",
          "Highly available and reliable infrastructure to run applications",
          "Cost optimisation and saving costs",
          "Innovative technology to unlock numerous potentials",
          "Bird's-eye view logging and monitoring to make life easier ",
          " Better platform to initiate, nurture and cultivate ideas",
        ]}
      /> */}

      {/* <InsightAdvertise
        image="/banner.jpg"
        title="Server Management"
        description="Unlock flexibility and scalability with our hybrid cloud solutions, seamlessly integrating public and private cloud infrastructure."
      /> */}

      {/* <ServiceApproach
        slides={[
          {
            image: "/servicepage/cloud/approach/a1.jpg",
            title: "Consulting and gathering",
            bg: "bg-red-400",
            description:
              "Unlock flexibility and scalability with our hybrid cloud solutions, seamlessly integrating public and private cloud infrastructure.",
          },
          {
            image: "/servicepage/cloud/approach/a2.jpg",
            title: "Analysis and design    ",
            bg: "bg-blue-400",
            description:
              "Unlock flexibility and scalability with our hybrid cloud solutions, seamlessly integrating public and private cloud infrastructure.",
          },
          {
            image: "/servicepage/cloud/approach/a3.jpg",
            title: "Implementation and testing   ",
            bg: "bg-purple-400",
            description:
              "Unlock flexibility and scalability with our hybrid cloud solutions, seamlessly integrating public and private cloud infrastructure.",
          },
          {
            image: "/servicepage/cloud/approach/a4.jpg",
            title: "Operations and maintenance",
            bg: "bg-pink-400",
            description:
              "Unlock flexibility and scalability with our hybrid cloud solutions, seamlessly integrating public and private cloud infrastructure.",
          },
          {
            image: "/servicepage/cloud/approach/a5.jpg",
            title: "Optimisations",
            bg: "bg-purple-400",
            description:
              "Unlock flexibility and scalability with our hybrid cloud solutions, seamlessly integrating public and private cloud infrastructure.",
          },
        ]}
      /> */}

      <ServiceInsightsSection title={"Insights and trends"} />
      {/* <div className="relative">
        <News_slider
          buttonDiv={" "}
          button={
            " small border-[1px] border-white  shadow-md  bg-white shadow-md  hover:text-white text-text btn-1      py-2 px-5   duration-300"
          }
          backgroundColor={"bg-secondary"}
          background={" px-20 lg:px-40 text-white   items-center  lg:pl-[15em]"}
          side_button={
            "border-white text-white  hover:bg-white hover:text-text"
          }
          slides={[
            {
              id: 1,

              title:
                "Automate your entire Software Development Life Cycle processes ",
            },
            {
              id: 2,

              title: "Containerize and deploy applications on the cloud",
            },
            {
              id: 3,

              title: "Leverage cloud to maximize the business values",
            },

            {
              id: 4,

              title:
                "Migrate your old legacy infrastructure and application to the cloud",
            },
          ]}
        />
      </div> */}
      {/* <ConnectCloud
        title="Let's transform and connect with cloud"
        paragraph="It's never too late to transform and shift towards your cloud journey. Wherever or whatever your states are, we are ready to help you connect to the cloud."
        link=""
      /> */}
      <ConnectCompany />
    </div>
  );
}
