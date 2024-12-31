import AboutCompany from "@/components/article/AboutCompany";
import ConnectCompany from "@/components/company-contact";
import ConnectCloud from "@/components/connect-cloud";
import Card from "@/components/insight/single/card";
import Related_Articles from "@/components/insight/single/related-articles";
import Swipper from "@/components/insight/swipper";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { BsArrowRightShort } from "react-icons/bs";

const insightpageEmpoweringYoungEntrepreneurs = () => {

    return (
      <div className="relative bg-[#111] text-white">
      <div className="  w-[100%] m-auto  py-8 ">
        <div className=" md:w-[95%] w-full  min-[900px]:w-full md:mt-28 mt-7  ">
          <div className=" h-full flex flex-col lg:flex-row  md:-14   w-full md:px-10   ">
          <div className="rounded py-8 
        min-[400px]:py-14 
        lg:px-[3em] w-[90%] lg:w-[60%] 
        m-auto  mt-2
        iPadProArticlePadding
        ">
              <div className="w-full m-auto">
              <br/>
                    <div className={`flex items-center gap-3  md:mb-16 mb-10`}>
                      <div className="bg-red-600 rounded-full w-[10px] h-[10px]"></div>
                      <p>Article</p>
                    </div>
                    <div className="pb-10 md:pb-8">
                    <h1 className="text-[1.3rem]  min-[400px]:text-[1.9rem] lg:text-[50px] font-bold  min-[1900px]:text-[50px]  lg:leading-[52px] text-white">
                      Igniting Innovation: Empowering Young Entrepreneurs with Cutting-Edge IT Solutions
                      </h1>
                    </div>
  
  
                    <div className="flex justify-between my-7">
                    <div className="flex  items-center gap-2">
                      <div className="rounded-full overflow-hidden h-[45px] w-[45px]">
                        <Image
                          src="/image/ackresponse-insight.png"
                          alt="profile image"
                          width={"250"}
                          height={"200"}
                          className="h-full w-full "
                        />
                      </div>
                      <div className="md:text-sm text-[0.9rem] grid text-gray-300 md:leading-[18px]">
                        <p className="md:text-lg md:font-medium">Team, ackresponse</p>
                        <p>Article Group</p>
                        <p>Editor, ackresponse</p>
                  
                      </div>
                    </div>
                    <div className="text-[0.8rem] md:text-[0.9rem]  flex flex-col justify-end md:mt-8 gap-1 text-gray-300">
                      <p>October 17, 2024</p>
                      <p className="flex justify-end items-end">4 min Read</p>
                    </div>
                  </div>
                    <div className="flex justify-center items-center w-full">
                      <hr className="py-3 w-[95%] "/>
                    </div>
                  </div>
  
                  <div className="">
                    <p className="md:text-lg text-start font-light  tracking-wide text-white">
                    In today&apos;s rapidly evolving technological landscape, the key to success often lies in innovation. As an IT consultancy firm, we are committed not only to providing IT services but also to fueling the entrepreneurial spirit in young minds eager to turn their visionary ideas into reality.
                    </p>
                      <div className="my-10 ">
                        <div className="md:space-y-3">
                          <h1 className="text-2xl font-bold leading-[40px] md:leading-[52px] text-white">
                          Our Supportive &amp; Thoughtful Approach to Business
                          </h1><br />
                          <p className="md:text-lg text-start font-light  tracking-wide text-white">
                          At ackresponse, our business strategy is built around a unique approach. We aim to inspire and empower young entrepreneurs to develop groundbreaking startup ideas, particularly those that leverage the transformative potential of 5G technology. By fostering innovation, we position ourselves as a pivotal partner ready to step in and provide the IT expertise necessary to bring these ideas to life.
                          </p>
                        </div>
                      </div>
          
                    <div>
                      <h2 className="text-2xl font-semibold">
                      The Power of 5G: A Gateway to Endless Possibilities
                      </h2>
                      <div className="my-10 text-white space-y-4">
                        <p className="md:text-lg text-start font-light  tracking-wide text-white">
                          5G technology represents a revolution in connectivity, offering unprecedented speed, low latency, and the ability to connect a vast number of devices simultaneously. This opens up a world of possibilities for innovative applications, particularly in areas like IoT, smart cities, autonomous vehicles, AR/VR/XR, smart factories, remote surgery, smart agriculture and beyond. Imagine, for instance, the development of applications that utilize 5G to enhance drone capabilities in remote or challenging environments. With 5G infrastructure set up in rural areas, such as the base of Mount Everest, mountaineers could benefit from critical services like high-speed internet and drone delivery of essential supplies, including oxygen, food, and medical equipment.
                        </p>
                        <p className="md:text-lg text-start font-light  tracking-wide text-white">
                        Beyond that, 5G can empower remote surgery, allowing doctors to perform life-saving procedures from miles away with precision and speed. Autonomous vehicles can communicate with each other and with smart infrastructure to navigate safely and efficiently. In smart cities, 5G can connect sensors and devices to optimize traffic flow, reduce energy consumption, and improve public safety. Smart factories can leverage 5G for real-time monitoring, predictive maintenance, and automation, boosting productivity and reducing downtime. The opportunities for startups in these spaces are vast and largely untapped, making 5G a gateway to endless possibilities.
                        </p>

                      </div>
                    </div>
  
                    <div>
                      <h2 className="text-2xl font-semibold ">
                        Beyond 5G: Embracing All Forms of Innovation
                      </h2>
                      <div className="my-10 text-white space-y-4">
                          <p className="md:text-lg text-start font-light  tracking-wide text-white">
                          While we see immense potential in 5G, we are equally enthusiastic about innovative ideas outside this sphere. Whether it&apos;s developing cutting-edge applications, automating CI/CD pipelines, implementing GitOps, or designing and deploying cloud infrastructure - be it private, public, hybrid, or multi-cloud - we are here to help bring any visionary startup idea to fruition.
                          </p>
                      </div>
                    </div>
                  
                    <div>
                      <h2 className="text-2xl font-semibold">
                        Partnering for Success
                      </h2>
                      <div className="my-10 text-white space-y-4 text-justify">
                           <p className="md:text-lg text-start font-light  tracking-wide text-white">
                           For young entrepreneurs with a vision, partnering with ackresponse means gaining access to our expertise in application development, cloud infrastructure, and automation. We offer a full suite of IT services designed to turn innovative ideas into successful startups. Our goal is to help entrepreneurs achieve their dreams by providing the technical foundation they need to thrive.
                          </p>
                           <p className="md:text-lg text-start font-light  tracking-wide text-white">
                           Whether you&apos;re envisioning a groundbreaking application that leverages 5G technology or have a novel idea in another area, we are ready to support you every step of the way. Together, we can ignite the spark of innovation and create the next wave of successful startups.
                          </p>
                      </div>
                    </div>
                      <AboutCompany/>
                  </div>
              </div>
              
         
              <div className=" w-full flex justify-center items-center flex-col 
            md:w-[90%]  md:top-[1rem] md:mb-56 md:h-full
            lg:mr-24 lg:w-[25%] lg:mt-[50vh] md:sticky
            iPadProRelatedArticle
            ">
                <h1 className="  text-[1.3rem] md:text-[1.3rem] lg:text-[2rem]">
                  Related articles
                </h1>
                <div className=" md:space-y-2 space-y-4 w-full px-4     lg:py-[1.5em]  py-[2em] text-text">

<div>
<Link href="/insight/modernize_your_business">
<div className="md:space-y-2 border-0 bg-[#F4F3F9]  py-6  lg:px-[1.7rem] lg:py-[1.9rem] rounded-lg hover:bg-newGradient hover:text-white group hover:bg-opacity-50 w-full h-full">
  <div className="md:space-y-2 px-3">
    <h1 className="md:text-xl font-bold text-neutral-700 group-hover:text-white">
    Modernize Your Business: The Power of Public and Private Cloud for Long-Term Success
    </h1>
    <p className="text-sm py-2">Oct 17, 2024</p>
    <div className="group">
      <div
        className={`p-2 md:w-[2rem] md:h-[2.5rem] group-hover:md:w-[8rem] ease-in-out items-center text-black group-hover:duration-300 group-hover:transform flex justify-between group-hover:transition-[width]`}
      >
        <span className="small hidden group-hover:block group-hover:text-white group-hover:duration-700 group-hover:transform group-hover:transition-all">
          Learn More
        </span>
        <BsArrowRightShort className="text-[1rem] duration-300 group-hover:text-white" />
      </div>
    </div>
  </div>
</div>
</Link>
</div>
<div>

<Link href="/insight/cloud_repatriation">
<div className="md:space-y-2 border-0 bg-[#F4F3F9]  py-6  lg:px-[1.7rem] lg:py-[1.9rem] rounded-lg hover:bg-newGradient hover:text-white group hover:bg-opacity-50 w-full h-full">
  <div className="md:space-y-2 px-3">
    <h1 className="md:text-xl font-bold text-neutral-700 group-hover:text-white">
        Balanced approach that includes both private and public cloud solutions.
    </h1>
    <p className="text-sm py-2">Oct 17, 2024</p>
    <div className="group">
      <div
        className={`p-2 md:w-[2rem] md:h-[2.5rem] group-hover:md:w-[8rem] ease-in-out items-center text-black group-hover:duration-300 group-hover:transform flex justify-between group-hover:transition-[width]`}
      >
        <span className="small hidden group-hover:block group-hover:text-white group-hover:duration-700 group-hover:transform group-hover:transition-all">
          Learn More
        </span>
        <BsArrowRightShort className="text-[1rem] duration-300 group-hover:text-white" />
      </div>
    </div>
  </div>
</div>
</Link>

</div>
<div>

<Link href="/insight/5g-drone-apps">
<div className="md:space-y-2 border-0 bg-[#F4F3F9]  py-6  lg:px-[1.7rem] lg:py-[1.9rem] rounded-lg hover:bg-newGradient hover:text-white group hover:bg-opacity-50 w-full h-full">
  <div className="md:space-y-2 px-3">
    <h1 className="md:text-xl font-bold text-neutral-700 group-hover:text-white">
    Unleashing New Possibilities: 5G and Drones as Catalysts for Innovation and Entrepreneurship
    </h1>
    <p className="text-sm py-2">Oct 17, 2024</p>
    <div className="group">
      <div
        className={`p-2 md:w-[2rem] md:h-[2.5rem] group-hover:md:w-[8rem] ease-in-out items-center text-black group-hover:duration-300 group-hover:transform flex justify-between group-hover:transition-[width]`}
      >
        <span className="small hidden group-hover:block group-hover:text-white group-hover:duration-700 group-hover:transform group-hover:transition-all">
          Learn More
        </span>
        <BsArrowRightShort className="text-[1rem] duration-300 group-hover:text-white" />
      </div>
    </div>
  </div>
</div>
</Link>

</div>
<div>

<Link href="/insight/migrateLeverageCloud">
<div className="md:space-y-2 border-0 bg-[#F4F3F9]  py-6  lg:px-[1.7rem] lg:py-[1.9rem] rounded-lg hover:bg-newGradient hover:text-white group hover:bg-opacity-50 w-full h-full">
<div className="md:space-y-2 px-3">
<h1 className="md:text-xl font-bold text-neutral-700 group-hover:text-white">
Migrate to the cloud: Cloud is a centerpiece of new digital experience
</h1>
<p className="text-sm py-2">Oct 17, 2024</p>
<div className="group">
<div
className={`p-2 md:w-[2rem] md:h-[2.5rem] group-hover:md:w-[8rem] ease-in-out items-center text-black group-hover:duration-300 group-hover:transform flex justify-between group-hover:transition-[width]`}
>
<span className="small hidden group-hover:block group-hover:text-white group-hover:duration-700 group-hover:transform group-hover:transition-all">
Learn More
</span>
<BsArrowRightShort className="text-[1rem] duration-300 group-hover:text-white" />
</div>
</div>
</div>
</div>
</Link>

</div>



</div>
            
            </div>
            </div>
          </div>
        </div>
        {/* <div className=" bg-[#F4F3F9] py-10">
          <div className="  m-auto w-[90%]   text-white">
            <h1 className=" secondary-title font-medium py-2 pb-5">
              Related articles
            </h1>
            <Related_Articles />
          </div>
        </div> */}
  
  <div className="w-full bg-black">
        <div className="app-layout">
          <div className="p-4  ">
            <h1 className="secondary-title font-medium py-10 md:py-10 pb-5 text-center">
              Our services
            </h1>
          </div>
        </div>
        <div className="py-8 w-[90%] md:w-[90%] m-auto">
          <Swipper />
        </div>
      </div>
      <ConnectCompany />
    </div>
    );
  };
  

export default insightpageEmpoweringYoungEntrepreneurs;
