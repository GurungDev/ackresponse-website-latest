import AboutCompany from "@/components/article/AboutCompany";
import ConnectCompany from "@/components/company-contact";
import Card from "@/components/insight/single/card";
import Swipper from "@/components/insight/swipper";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

const migrateLeverageCloud = () => {
    const cardList = [
        {
          color: "",
          number: 1,
          title: "Highly scalable",
          paragraph:
            "Whether confronted with rapid expansion or fluctuations in demand, cloud resources can be promptly adjusted to align with your requirements. This agility guarantees unwavering performance and user contentment.",
        },
        {
          color: "",
          number: 2,
          title: "Cost effective",
          paragraph:
            "Embracing cloud's pay-as-you-go approach enables precise resource allocation in alignment with actual demand, obviates the necessity for substantial initial expenditures on hardware and maintenance.",
        },
    
        {
          color: "",
          number: 3,
          title: "Agility & swiftness",
          paragraph:
            "Cloud sparks on unparalleled agility and speed allowing enterprises to create, assess, and launch applications at a much faster pace, enabling them to promptly adapt to market shifts and meet customer requirements.",
        },
        {
          color: "",
          number: 4,
          title: "Improved security & compliance",
          paragraph:
            "Substantial investments in security and frequently exceeding the security measures helps businesses to bolster security and compliance through the implementation of robust encryption, access controls, and disaster recovery capabilities.",
        },
        {
          color: "",
          number: 5,
          title: "Worldwide Growth & Easy Access",
          paragraph:
            "The cloud eliminates geographical limitations, granting businesses access to global markets and facilitating remote access to applications and data. Such a degree of accessibility holds immense value in today's interconnected global landscape.",
        },
        {
          color: "",
          number: 6,
          title: "Simplified maintenance & updates",
          paragraph:
            "Ongoing maintenance and updates are managed by cloud providers, affording IT team the opportunity to concentrate on strategic endeavors without having to worry about downtime and disturbances. ",
        },
      ];
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
                    <h1 className="text-[1.3rem]  min-[400px]:text-[1.9rem] lg:text-[50px] font-bold  min-[1900px]:text-[50px]  md:leading-[52px]">
                    Migrate to the cloud: Cloud is a centerpiece of new digital experience
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
                    <hr className="w-[95%] "/>
                  </div>
                </div>

                <div className="">
                  {/* <p className="md:text-lg text-justify font-light  tracking-wide text-white">
                  Legacy applications and infrastructure can be likened to anchors that hinder
                  businesses from fully realizing their digital capabilities.
                  </p> */}

                  <div>
                    <div className="my-10 space-y-4 text-start">
                         <p className="md:text-lg font-light  tracking-wide">
                         In the fast-changing world of technology, the saying &quot;<strong>Out </strong>
                        with the old, <strong>In</strong> with the new&quot; holds the truth. For businesses
                        stuck with outdated legacy infrastructure and applications,
                        moving to the cloud is more than a trend; it&apos;s a must.
                        This shift can bring significant benefits that go beyond just
                        updating.
                        </p>
                         <p className="md:text-lg font-light  tracking-wide">
                         Cloud migration involves the transfer of diverse components
                        within an organisation&apos;s IT infrastructure, encompassing
                        applications, data, and services, from their proprietary data
                        centers to the infrastructure provided by a cloud service
                        provider. This transition presents a multitude of advantages,
                        including enhanced scalability, cost-effectiveness, greater
                        flexibility, and simplified management processes.
                        </p>                   
                    </div>
                  </div>

                  <div className="grid  min-[1250px]:grid-cols-3  gap-4 my-10 justify-between">
                  {cardList.slice(0, 3).map((i, key) => {
                    return (
                      <Card
                        key={key}
                        color={i.color}
                        title={i.title}
                        paragraph={i.paragraph}
                        number={i.number}
                      />
                    );
                  })}
                </div>

      
                  <div>
                      <div className="  md:text-xl text-start my-10 space-y-4">
                        <p className="md:text-lg font-light  tracking-wide">
                        Traditional legacy IT infrastructure typically refers to
                  on-premises data centers or private cloud solutions. The
                  migration of IT resources from on-premises environments to the
                  cloud represents a strategic manoeuver embraced by numerous
                  businesses aiming to harness the advantages of cloud
                  computing.                      
                        </p>

                    </div>
                  </div>

                  <div className="grid min-[1200px]:grid-cols-3 my-10 gap-4 justify-between">
                  {cardList.slice(3, 6).map((i, key) => {
                    return (
                      <Card
                        key={key}
                        color={i.color}
                        title={i.title}
                        paragraph={i.paragraph}
                        number={i.number}
                      />
                    );
                  })}
                </div>
                  <div className="item my-20">
                  <div className=" w-full h-[70px]">
                    <div
                      id="bottom-right"
                      className="  w-[20%] h-full border-l-[6px] border-t-[6px] border-purple-400"
                    ></div>
                  </div>

                  <div className="   px-10 md:px-20">
                    <h1 className="secondary-title  min-[1900px]:text-[42px] leading-[40px] md:leading-[52px] text-white font-[600]      ">
                      Sustainability and environmental impact
                    </h1>
                    <p className=" text-gray-300 paragraph min-[1900px]:text-[1.3rem] my-[1.5em]">
                      The cloud is not only good for businesses but also the
                      &quot;environment&quot;. Through optimised resource
                      utilisation and enhanced energy efficiency, cloud
                      providers contribute to the reduction of carbon
                      footprints. Transitioning to the cloud can be a stride
                      towards a more environmentally sustainable future.
                    </p>
                  </div>
                  <div className=" w-full h-[70px]">
                    <div
                      id="bottom-right"
                      className="float-right w-[20%] h-full border-r-[6px] border-b-[6px] border-purple-400"
                    ></div>
                  </div>
                </div>

                  <div>
                      <div className="  md:text-xl text-start my-10 space-y-4">
                         <p className="md:text-lg font-light  tracking-wide">
                         To sum up, transitioning outdated legacy IT infrastructure and
                        applications to the cloud goes beyond simply modernising;
                        it&apos;s a vital step in safeguarding organisation&apos;s
                        future in an ever more digital landscapes. It constitutes a
                        strategic manoeuvers with the potential to stimulate
                        innovation, reduce expenses, fortify security, and set
                        enterprises up for expansions. Despite the potential obstacles
                        along the path, the benefits far outweigh the endeavors.
                        Embrace cloud technology, and you will be on a promising
                        trajectory towards a future marked by increased <strong>agility, efficiency,</strong> and  <strong>competitiveness</strong>.
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
                <Link href="/insight/empowering_young_entrepreneurs">
                <div className="md:space-y-2 border-0 bg-[#F4F3F9]  py-6  lg:px-[1.7rem] lg:py-[1.9rem] rounded-lg hover:bg-newGradient hover:text-white group hover:bg-opacity-50 w-full h-full">
                  <div className="md:space-y-2 px-3">
                    <h1 className="md:text-xl font-bold text-neutral-700 group-hover:text-white">
                      Igniting Innovation: Empowering Young Entrepreneurs with Cutting-Edge IT Solutions
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
      

     
              </div>
            
            </div>
          </div>
        </div>
      </div>


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

export default migrateLeverageCloud;
