import ConnectCompany from "@/components/company-contact";
import ConnectCloud from "@/components/connect-cloud";
import Card from "@/components/insight/single/card";
import Related_Articles from "@/components/insight/single/related-articles";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { BsArrowRightShort } from "react-icons/bs";

const insightpage = () => {
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
    <div className="relative ">
      <div className="  w-[100%] h-[100vh] absolute z-[-1] overflow-hidden flex justify-center items-center">
        <Image
          src="/insightpage/insights/i1.jpg"
          alt="insight image"
          width={"1350"}
          height={"900"}
          className="inset-0 object-cover w-[100%] h-[100%]"
        ></Image>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,.4))",
          }}
        >
          Article
        </div>
      </div>
      <div className="  w-[100%] m-auto    pt-[30vh]">
        <div className="w-[80%] pb-5 md:w-[90%] flex md:items-start flex-col md:flex-row justify-between m-auto  text-neutral-100">
          <div className="  md:w-[60%]">
            <div className={`flex items-center gap-3`}>
              <div className="bg-red-600 rounded-full w-[10px] h-[10px]"></div>
              <p>Article</p>
            </div>
            <h1 className="text-[2rem] min-[400px]:text-[2.5rem] leading-[2rem] min-[400px]:leading-[2.5rem] md:text-[3.5rem]  md:leading-[4.5rem] lg:text-[4.5rem]  min-[1900px]:text-[5.2rem] my-5  tracking-in-contract-bck ">
              {" "}
              Migrate to the cloud
            </h1>

            <div className="flex my-6 mb-10 gap-10 items-center w-[80%] md:w-[50%]">
              {" "}
              <span className={`w-[65px] h-[2px] bg-white  `}></span>
              <p>Cloud is a centerpiece of new digital experience</p>
            </div>
          </div>

          {/* <div className="text-[1rem] rounded-md shadow-md py-4 px-6 bg-gradient-to-r from-blue-900 via-transparent to-transparent lg:text-[1.2rem] min-[1900px]:text-[1.3rem]  ">
            <p className="    ">
              We can help to migrate to the cloud.{" "}
              <Link
                href="/contact"
                className={`  underline underline-offset-[5px] font-[500]   hover:scale-[1.01]  items-center   duration-100   flex    justify-between     `}
              >
                Let&apos;s connect
              </Link>
            </p>
            <button className="px-3 py-2 group   w-auto  duration-300  bg-white   hover:bg-neutral-200  border-white transform-all   text-text border-[1px] mt-10   rounded-md  ">
              <Link
                href={"/service/cloud"}
                className="flex items-center justify-between"
              >
                <span className="group small">
                  Find our more about our cloud services
                </span>
              </Link>
            </button>
          </div> */}
        </div>
        <div className=" w-[95%]  min-[600px]:w-[90%] m-auto  ">
          <div className=" h-full flex flex-col lg:flex-row    justify-center w-[100%]  ">
            <div className="bg-white rounded py-8 min-[400px]:py-14 lg:px-[3em]  text-text w-[90%]  lg:w-[70%] m-auto">
              <div className="w-[85%] min-[400px]:w-full m-auto">
                {" "}
                <h1 className="text-[1.3rem] min-[400px]:text-[1.875rem] lg:text-[37px]  min-[1900px]:text-[42px] leading-[40px] md:leading-[52px] text-text font-[600]      ">
                  Migrate to leverage cloud and unlock the business potentials
                </h1>
                <p className="mt-2 mb-20 text-text paragraph  ">
                  Legacy applications and infrastructure can be likened to anchors that hinder
                  businesses from fully realizing their digital capabilities.
                  {/* Transitioning to the cloud frequently serves as the initial
                  stride in a more extensive digital transformation expedition. */}
                </p>
                <div className="flex justify-between  items-center my-5">
                  <div className="flex  items-center gap-2">
                    <div className="rounded-full overflow-hidden h-[40px] w-[40px]">
                      <Image
                        src="/servicepage/cloud/offerings/o1.jpg"
                        alt="profile image"
                        width={"250"}
                        height={"200"}
                        className="h-full w-full "
                      />
                    </div>
                    <div className="small grid gap-1 text-[#5f6368]">
                      <p>ACKRESPONSE team</p>
                      <p>Editor</p>
                    </div>
                  </div>
                  <div className="small flex gap-1 text-[#5f6368]">
                    <p>March 12, 2024</p>
                    {/* <p>- 2 min Read</p> */}
                  </div>
                </div>
                <hr />
              </div>

              <div className="mt-[2em]">
                <p className=" paragraph my-5 text-text">
                  In the fast-changing world of technology, the saying &quot;<strong>Out </strong>
                  with the old, <strong>In</strong> with the new&quot; holds the truth. For businesses
                  stuck with outdated legacy infrastructure and applications,
                  moving to the cloud is more than a trend; it&apos;s a must.
                  This shift can bring significant benefits that go beyond just
                  updating.
                  <br />
                  <br />
                  Cloud migration involves the transfer of diverse components
                  within an organisation&apos;s IT infrastructure, encompassing
                  applications, data, and services, from their proprietary data
                  centers to the infrastructure provided by a cloud service
                  provider. This transition presents a multitude of advantages,
                  including enhanced scalability, cost-effectiveness, greater
                  flexibility, and simplified management processes.
                </p>

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
                <p className="paragraph my-5 text-text">
                  Traditional legacy IT infrastructure typically refers to
                  on-premises data centers or private cloud solutions. The
                  migration of IT resources from on-premises environments to the
                  cloud represents a strategic manoeuver embraced by numerous
                  businesses aiming to harness the advantages of cloud
                  computing.
                </p>
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
                    <h1 className="secondary-title  min-[1900px]:text-[42px] leading-[40px] md:leading-[52px] text-text font-[600]      ">
                      Sustainability and environmental impact
                    </h1>
                    <p className=" text-[#5f6368] paragraph min-[1900px]:text-[1.3rem] my-[1.5em]">
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
                <div className="  paragraph my-10 text-text">
                  To sum up, transitioning outdated legacy IT infrastructure and
                  applications to the cloud goes beyond simply modernising;
                  it&apos;s a vital step in safeguarding organisation&apos;s
                  future in an ever more digital landscapes. It constitutes a
                  strategic manoeuvers with the potential to stimulate
                  innovation, reduce expenses, fortify security, and set
                  enterprises up for expansions. Despite the potential obstacles
                  along the path, the benefits far outweigh the endeavors.
                  Embrace cloud technology, and you will be on a promising
                  trajectory towards a future marked by increased{" "}
                  <span className="font-[700] text-text">
                    agility, efficiency,
                  </span>{" "}
                  and
                  <span className="font-[700] text-text"> competitiveness</span>
                  .
                </div>
                <p className=" paragraph my-5 text-text">
                    We are happy to work together to help your business migrate and take full advantages of the cloud for innovative outcomes. Please <strong>contact us</strong>.
                </p>
                {/* <div className="custom-gradient text-neutral-100 rounded-md pl-10 shadow md:pl-20 pr-10 my-[1.5em] py-7">
                  <div className="border-l-[3.5px] border-white pl-10 py-5">
                    <h1 className="secondary-title font-[600] py-2 pb-5  ">
                      We help to deliver
                    </h1>
                    <p className="  paragraph min-[1900px]:text-[1.3rem] ">
                      Cloud is one of our services. We are thriving to help
                      transform your entire business infrastructure and
                      modernise the applications to bring several benefits and
                      generous outcomes.
                    </p>
                    <button>
                      <Link
                        href="/contact"
                        className={` underline underline-offset-[5px]   hover:text-text    items-center  text-[.9rem] lg:text-[1rem] min-[1900px]:text-[1.1rem]  duration-300   flex  w-auto justify-between mt-[2em]   `}
                      >
                        Find out more
                      </Link>
                    </button>
                  </div>
                </div> */}
              </div>
            </div>
            <div className=" w-[90%] lg:w-[30%] mx-auto lg:mt-[50vh] ">
              <div className="px-[3em] lg:px-[2em] bg-[#F4F3F9] rounded lg:py-[1.5em] py-[2em] text-text">
                <h1 className="  text-[1.3rem] md:text-[1.3rem] lg:text-[1.5rem] font-[700]   ">
                  Contact us
                </h1>
                <div className="border-b-[1px] bg-[#F4F3F9] py-3">
                  {/* <h1 className="paragraph font-[600]   ">
                    Jully Rees
                  </h1> */}
                  <p className="small font-[300] py-1 text-[#5f6368]">
                    We can help you cloud migration.
                  </p>
                  <p className="small font-[300] py-1 text-[#5f6368]">
                    info@ackresponse.com
                  </p>
                  {/* <BiLogoLinkedinSquare className="text-[1.5rem] text-blue-600 " /> */}
                </div>
                {/* <div className="border-b-[1px] bg-[#F4F3F9] py-3">
                  <h1 className="paragraph font-[600]   ">
                    Tim Blake
                  </h1>
                  <p className="small font-[300] py-1 text-[#5f6368]">
                    Research Lead - Global Travel Industry
                  </p>
                  <BiLogoLinkedinSquare className="text-[1.5rem] text-blue-600 " />
                </div> */}
              </div>
              {/* <div className="  lg:px-[2em]   lg:py-[1.5em] py-[2em] text-text">
                <h1 className="  text-[1.1rem] md:text-[1.2rem] lg:text-[1.3rem] font-[700] my-5 text-neutral-700 ">
                  MORE ON THIS TOPIC
                </h1>

                <div className="border-b-[1px] gap-3 py-2 flex">
                  <div className="w-[30%] flex justify-center items-center">
                    <Image
                      src="/servicepage/cloud/offerings/o3.jpg"
                      alt="insight image"
                      width="500"
                      height="500"
                      quality={"50"}
                      className="object-cover inset-o"
                    ></Image>
                  </div>
                  <div className="w-[60%]">
                    <small className="small border-b-[2px] border-blue-400 pb-[3px]">
                      Travel Technology
                    </small>
                    <h1 className=" text-[1.1rem] md:text-[1.2rem] lg:text-[1.1rem] leading-[1em] font-[800] mt-3  ">
                      Embark: Travel, Tech and Trust podcast series
                    </h1>
                  </div>
                </div>
                <div className="border-b-[1px] gap-3 py-2 flex">
                  <div className="w-[30%] flex justify-center items-center">
                    <Image
                      src="/servicepage/cloud/offerings/o3.jpg"
                      alt="insight image"
                      width="500"
                      height="500"
                      quality={"50"}
                      className="object-cover inset-o"
                    ></Image>
                  </div>
                  <div className="w-[60%]">
                    <small className="small border-b-[2px] border-blue-400 pb-[3px]">
                      Travel Technology
                    </small>
                    <h1 className=" text-[1.1rem] md:text-[1.2rem] lg:text-[1.1rem] leading-[1em] font-[800] mt-3  ">
                      Embark: Travel, Tech and Trust podcast series
                    </h1>
                  </div>
                </div>
                <div className="border-b-[1px] gap-3 py-2 flex">
                  <div className="w-[30%] flex justify-center items-center">
                    <Image
                      src="/servicepage/cloud/offerings/o3.jpg"
                      alt="insight image"
                      width="500"
                      height="500"
                      quality={"50"}
                      className="object-cover inset-o"
                    ></Image>
                  </div>
                  <div className="w-[60%]">
                    <small className="small border-b-[2px] border-blue-400 pb-[3px]">
                      Travel Technology
                    </small>
                    <h1 className=" text-[1.1rem] md:text-[1.2rem] lg:text-[1.1rem] leading-[1em] font-[800] mt-3  ">
                      Embark: Travel, Tech and Trust podcast series
                    </h1>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-[#F4F3F9] py-10">
        <div className="  m-auto w-[90%]   text-text">
          <h1 className=" secondary-title font-medium py-2 pb-5">
            Related articles
          </h1>
          <Related_Articles />
        </div>
      </div>

      {/* <ConnectCloud
        title="Let's transform and connect with cloud"
        paragraph="It's never too late to transform and shift towards your cloud journey. Wherever or whatever your states are, we are ready to help you connect to the cloud."
        link="/service/cloud"
      /> */}
      <ConnectCompany />
    </div>
  );
};

export default insightpage;
