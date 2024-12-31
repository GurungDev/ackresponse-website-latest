
import ConnectCompany from "@/components/company-contact";
// import News_slider from "@/components/hompage/news slider";
import Swipper from "@/components/insight/swipper";
import Slider_landing_page from "@/components/landinghomepageslider";
import Link from "next/link";
import { BsArrowRightShort } from "react-icons/bs";
import {
  MdOutlineAppSettingsAlt,
} from "react-icons/md";
import { SiJfrogpipelines } from "react-icons/si";
import { FaLaptopCode } from "react-icons/fa";
import { FaCloud } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdOutlineDevices } from "react-icons/md";
import Portfolio from "@/components/hompage/purposeComponent";
import OurMoto from "@/components/OurMotto";
import HomepageInsight from "@/components/hompage/HomepageInsight";
import ServiceInsightsSection from "@/components/service/service-insights-section";
// import { DialogBox } from "@/components/hompage/DialogBox";


  export default function Home() {

    const service_list = [

      {
        id: "Cloud",
        icon: () => {
          return (
            <FaCloud className="group-hover:transform group-hover:translate-y-[-6px] group-hover:text-sky-500 text-4xl duration-200" />

          );
        },
        title: "Cloud",
        link: "/service/cloud",
      },
      // {
      //   id: "Hybrid Cloud",
      //   icon: () => {
      //     return (
      //       <MdOutlineSettingsApplications className="group-hover:-translate-y-[6px] group-hover:text-btn_color text-[1.4rem] duration-200" />
      //     );
      //   },
      //   title: "Hybrid Cloud",
      //   link: "/service/hybridCloud",
      // },
      {
        id: "DevOps & Automations",
        icon: () => {
          return (
            <SiJfrogpipelines  className="group-hover:-translate-y-[6px] group-hover:text-btn_color text-4xl duration-200" />
          );
        },
        title: "DevOps/Automations",
        // subTitile: "(CI/CD, GitOps, Scripting) - Test2",
        link: "/service/automation",
      },
      {
        id: "Web",
        icon: () => {
          return (
            <FaLaptopCode className="group-hover:-translate-y-[6px] group-hover:text-pink-600 text-4xl duration-200" />
          );
        },
        title: "Web",
        link: "/service/webApp",
      },
      {
        id: "Mobile",
        icon: () => {
          return (
            <MdOutlineAppSettingsAlt className="group-hover:-translate-y-[6px] group-hover:text-yellow-400 text-4xl duration-200" />
          );
        },
        title: "Mobile",
        link: "/service/mobileApp",
      },
      // {
      //   id: "UIUX",
      //   icon: () => {
      //     return (
      //       <MdDraw className="group-hover:-translate-y-[6px] group-hover:text-neutral-700 text-[1.4rem] duration-200" />
      //     );
      //   },
      //   title: "UX / UI",
      //   link: "/service/uiux",
      // },
      // {
      //   id: "DevOps",
      //   icon: () => {
      //     return (
      //       <MdOutlineDesignServices className="group-hover:-translate-y-[6px] group-hover:text-btn_color  text-[1.4rem] duration-200" />
      //     );
      //   },
      //   title: "DevOps",
      //   link: "/service/automation",
      // },
      {
        id: "Software",
        icon: () => {
          return (
            <MdOutlineDevices className="group-hover:-translate-y-[6px] group-hover:text-blue-500  text-4xl duration-200" />
          );
        },
        title: "Software",
        link: "/service/softwareDevelopment ",
      },
      {
        id: "Consultancy",
        icon: () => {
          return (
            <FaPeopleGroup className="group-hover:-translate-y-[6px] group-hover:text-purple-500  text-4xl duration-200" />
          );
        },
        title: "Consultancy",
        link: "/service/consultancy",
      },
      // {
      //   id: "it_outsourcing",
      //   icon: () => {
      //     return (
      //       <IoEarth className="group-hover:-translate-y-[6px] group-hover:text-green-700  text-[1.4rem] duration-200" />
      //     );
      //   },
      //   title: "IT Outsourcing",
      //   link: "/service/consultancy",
      // },
    ];

    return (
      <div className="min-h-[100vh] relative bg-black ">
          {/* <DialogBox/> */}
          <Slider_landing_page />
        
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
            " small text-white border-[1px] border-secondary bg-secondary  hover:text-text hover:bg-white rounded-[2px] shadow  py-2 px-5   duration-300"
          }
          background={"  px-20 lg:px-40 text-text   items-center   lg:pl-[15em]"}
          backgroundColor={"bg-white"}
          side_button={
            "border-black text-text hover:bg-secondary hover:border-white hover:text-white"
          }
        /> */}

        <div
          id="bottom-home-section"
          className="bg-[#000] text-white md:py-24 py-20 pb-28 lg:py-32  "> 
          <div  className=" 
              space-y-12
              lg:space-y-0
              pt-7
              md:pt-0
              px-5
              md:flex md:flex-col 
              md:justify-center md:items-center
              md:px-[18vw] 
              lg:landscape:space-x-12
              lg:flex lg:flex-row
              lg:portrait:flex-col
              ">

              <div className=" 
                h-full 
                
                text-left 
                space-y-9
                lg:space-x-0
                iPadProWidthOnHomePage 
                lg:space-y-7
                
                ">
                <p className="
                  md:h-[40%] 
                  text-4xl
                  md:text-6xl
                  lg:h-[40%]
                  text-center
                  md:text-start
                  xl:text-[4.3rem] 
                  xl:leading-[4.5rem] h-full">
                <strong><span className="text-white">IT Solutions</span></strong> at a fraction of the cost.
                </p>
                <p className="
                    min-[800px]:w-full
                    md:w-full
                    text-md
                    text-center
                    iPadProWidthOnHomePageParagraph
                    md:text-lg md:text-left md:justify-center  md:leading-6">
                      As a dedicated IT consultancy, we&apos;re here to support industries with their technology needs and are open for business. Whether it&apos;s a comprehensive project, specific components, or ad-hoc tasks, we&apos;re ready to take on the challenge. We deliver our services with meticulous attention, integrity, and professionalism, and we look forward to partnering with you.
                </p>
              </div>

                <div className=" h-full w-full   flex justify-center items-center ">
                  <div className="h-full w-full  flex justify-center items-center lg:portrait:justify-start    ">
                  <Link 
                    className="
                      lg:portrait:flex lg:portrait:justify-center 
                      lg:portrait:items-center
                      h-full 2xl:h-[350px]
                      w-full
                      lg:w-[250px]
                      flex justify-center md:justify-start lg:justify-center items-center
                      pt-8 md:pt-0 lg:pt-0 lg:portrait:pt-8
                    
                    " 
                    href="/contact">
                    <button className=" 
                        flex flex-row 
                        lg:flex lg:flex-col lg:w-full h-full px-3 py-3  justify-center items-center  border-green-300 rounded-md
                        duration-300 text-black btn hover:text-black transform-all 
                        md:px-[2vw] md:py-[2vh]  2xl:py-3 hover:bg-btn_color bg-[#33f081]
                        lg:portrait:flex-row lg:portrait:space-x-2
                        lg:landscape:py-[6vh] lg:landscape:space-y-11

                        
                  ">

                      <span className="text-sm md:text-lg md:font-bold">Get in touch</span>
                      <div className="hidden portrait:lg:hidden lg:flex text-sm">
                        <span>
                        We&apos;d love to hear from you about your requirements, so we can help transform your business and unlock its full potential for success tomorrow, today.
                        </span>

                      </div>
                      <div className="text-xl md:text-2xl 2xl:text-3xl flex justify-center items-center">
                        <BsArrowRightShort />
                      </div>
                      
                    </button>
                  </Link>
                  </div>
                </div>

      </div>


        </div>

        <div className="w-full m-auto flex items-center gap-10 py-20 md:py-36 lg:py-40 bg-white">
            <div className="grid grid-cols-2 grid-rows-2  md:px-0 md:gap-6 md:flex md:flex-row md:flex-wrap gap-3 lg:gap-24  justify-start items-center md:justify-center  w-full">
              {" "}
              {service_list.map((i) => {
                return (
                  <Link
                  key={i.id}
                  href={i.link}
                  className="group flex flex-col items-center gap-3 text-text  duration-300 "
                >
                  {i?.icon()}
                  <div className="font-[500]  flex flex-col justify-center items-center text-[.9rem] h-[40px] lg:text-[1rem] min-[2000px]:text-[1.4rem]">
                    <p>{i.title}</p>
                    {/* <p className="font-light text-sm">{i?.subTitile}</p> */}
                  </div>
                  
                </Link>
                
                );
              })}
            </div>
        </div>
          

        <div className="w-full bg-[#000]">
          <div className=" pt-20 text-text w-[90%] md:w-[90%] m-auto">
            <div className="  md:w-[80%] w-full">
              <small className="secondary-title lg:text-[1.5rem]  text-neutral-500">
                WHAT WE DO
              </small>
              <h1 className="text-2xl md:text-3xl  my-5 mt-[3rem] text-white">
                <strong>ACKRESPONSE</strong> helps any verticals transform their business with technology.
              </h1>
              <p className=" text-md md:text-lg mb-8  text-[#fff]">
                We thrive to work closely with our clients, cater their
                requirements thoroughly, successfully drive their business with
                digital technology, combined with experienced knowledge and
                expertise.
              </p>
            </div>
            <Swipper />
            <OurMoto/>
          </div>
        </div>
        {/* <div className="relative">
          {" "}
          <div
            style={{
              backgroundImage: ` linear-gradient( rgba(0,0, 0, 0.4), rgba(0, 0, 0, 0.5)), url(/image/max-focus.jpg)`,
            }}
            className="bg-fixed trending-hidden     bg-cover bg-center "
          >
            <div className="z-[10] py-40 text-center text-neutral-100 ">
              <div className="w-[90%] min-[400px]:w-[70%] md:w-[60%] m-auto animation-container text-white text-center space-y-5 ">
              <h1 className="text-[1.7rem] md:text-[2rem] lg:text-[2.5rem] mb-20">
                Maximise and focus on your core competencies, we will do the rest for your infrastructure, application modernisation, security and many others
                </h1>
              <Link href="/contact">
                  <button className="btn hover:px-[3em] hover:text-text rounded border-[1px] border-white py-2 px-10 hover:bg-white duration-300">
                    Let&apos;s talk
                  </button>
                </Link>
          
        
              </div>
            </div>
          </div>
        </div> */}

        <HomepageInsight/>

        <div className="w-full bg-white">
          
          {/* <div className="   border-2  ">
            <News_slider
              buttonDiv={" "}
              button={
                "  small border-[1px] border-white bg-white shadow-md  hover:text-white text-text btn-1    py-2 px-5   duration-300"
              }
              background={
                " px-20 lg:px-40 text-white   items-center   lg:pl-[15em]"
              }
              backgroundColor={"bg-secondary"}
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
          <Portfolio/>
          <ServiceInsightsSection
        title={"Our Articles & Insights"}
      />
          <ConnectCompany />
        </div>
      </div>
    );
  }
