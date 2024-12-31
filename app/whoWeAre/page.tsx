import ConnectCompany from "@/components/company-contact";
import LandingPage from "@/components/aboutUs/hero";
import ContentSection from "@/components/aboutUs/contentSection";
import Swipper from "@/components/insight/swipper";
import Bio from "@/components/aboutUs/bio";
import ServiceInsightsSection from "@/components/service/service-insights-section";

const WhoWeAre: React.FC = () => {
  return (
    <div className="bg-black text-white pt-1 md:pt-[48px] lg:pt-[45px]">
      <Bio/>
      {/* <div className="w-full py-20 bg-[#fff] min-[1800px]:py-24 ">
        <div className="w-[60%] m-auto pt-32 min-[400px]:pt-0">
          <MdOutlineWavingHand className="  animate-spin1 text-[5em]" />
          <h1 className="text-[1.6rem] w-[85%] min-[400px]:text-[1.875rem]  md:text-[2.25rem]  lg:text-[37px]  min-[1900px]:text-[42px] leading-[40px] md:leading-[52px] text-text font-[600]  mt-5 mb-2 ">
            Thank you for dropping by.
          </h1>
          <p className=" w-[100%] paragraph min-[1900px]:text-[20px] leading-[26px] md:leading-[33px] text-[#5f6368]">
            We kindly and greatly appreciate for your visit to our website and
            hope you have found what you are looking for in terms of our
            services we offer or any information you are after.
          </p>
        </div>
      </div> */}
      {/* <div className="bg-[aliceblue]">
        <div className="py-[7rem] w-[60%] m-auto ">
          <div className="md:w-[50%]">
             <Lottie animationData={abuotusAnimation} />;
          </div>
          <h1 className="secondary-title text-text   ">
            Some short and sweet intro about us.
          </h1>
          <p className=" grid mt-8 md:w-[100%] paragraph min-[1900px]:text-[20px] leading-[26px] md:leading-[1.8em]  text-[#5f6368]">
            We are thriving to deliver quality tech
            services to our clients from various verticals. With about 10+ years of experiences on
            tech, we are ready and fully prepared to face any types of challenges to help our
            clients transform and achieve their goals.
           
          </p>
        </div>
      </div> */}

      {/* <div className="bg-[#fbfbfd]  ">
        <div className="grid grid-cols-1 md:grid-cols-2  min-[13100px]:grid-cols-4  gap-10  py-32 w-[90%] m-auto justify-center items-center paragraph min-[1900px]:text-[19px]  font-[600]">
          <div className="bg-red-100 group flex items-center justify-between  rounded-md text-red-600 uppercase px-6 py-[1em]  ">
            Creative
            <BsRocket className="text-[1.3rem] group-hover:translate-x-[10px] duration-300" />
          </div>
          <div className="bg-green-100 group flex items-center justify-between rounded-md text-green-600 uppercase  px-6 py-[1em]">
            Ready For Challenges
            <RiGhostSmileLine className="text-[1.3rem] group-hover:translate-x-[10px] duration-300" />
          </div>
          <div className="bg-pink-100 group flex items-center justify-between rounded-md text-pink-600 uppercase  px-6 py-[1em]">
            Innovative
            <GoLightBulb className="text-[1.3rem] group-hover:translate-x-[10px] duration-300" />
          </div>
          <div className="bg-purple-100 group flex items-center justify-between  rounded-md text-purple-600 uppercase  px-6 py-[1em]">
            THRIVING
            <AiOutlineFire className="text-[1.3rem] group-hover:translate-x-[10px] duration-300" />
          </div>
        </div>
      </div> */}

      {/* <div className="relative w-[90%] aspect-video my-14 m-auto">
        <video controls id="video-bg1" className="w-full">
          <source
            src="/videos/insightsLanding.mp4"
            width="100%"
            height="100%"
            className=""
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div
          className={`${
            isPlayed ? "hidden" : "flex"
          } h-full   items-center justify-center absolute bg-opacity-50 bg-black inset-0`}
        >
          <button
            onClick={toogleButton}
            className="m-auto absolute top-[40%] left-[40%] z-[1]"
          >
            {isPlayed ? (
              <AiOutlinePauseCircle className=" text-white text-[3.2rem] min-[400px]:text-[5rem] md:text-[8rem] lg:text-[10rem]  " />
            ) : (
              <AiOutlinePlayCircle className="  text-white text-[3.2rem] min-[400px]:text-[5rem] md:text-[8rem] lg:text-[10rem] " />
            )}
          </button>
        </div>
      </div> */}
      {/* <div className="bg-[#fbfbfd]">
        <div className="w-[90%] m-auto py-14">
          <h1 className="secondary-title font-[500] py-2 pb-14 ">
            Find out more about our services and insights
          </h1>
          <div className="flex flex-col gap-10 md:flex-row items-stretch items-center justify-between">
            <div className="  grid grid-cols-1 md:grid-cols-2 gap-10   md:w-[50%]  ">
              <div className=" group px-5 py-9 md:px-8 md:py-6 lg:px-14 lg:py-10 text-blue-600 bg-white rounded-md shadow-2xl">
                <RiCodeBoxLine className="text-[4rem]" />

                <h1 className="paragraph flex mt-3 justify-between items-center">
                  Our Services
                  <BsArrowRightShort className="text-[1.8em]  group-hover:translate-x-[10px]  duration-300 " />
                </h1>
              </div>
              <Link
                href="/insight"
                className=" group px-5 py-9 md:px-8 md:py-6 lg:px-14 lg:py-10 text-green-600 bg-white rounded-md shadow-2xl"
              >
                <MdOutlineArticle className="text-[4rem]" />

                <h1 className="paragraph flex mt-3 justify-between items-center">
                  Our Insights
                  <BsArrowRightShort className="text-[1.8em]  group-hover:translate-x-[10px]  duration-300 " />
                </h1>
              </Link>
            </div>
            <div className=" w-[1px] border-r-[2px] bg-gray-300"></div>
            <button>
              <Link
                href="/contact"
                className={`  px-5 py-2 m-auto  items-center  duration-300  btn  text-text   transform-all flex  w-auto justify-between  bg-accent border-[1px]      rounded-md  `}
              >
                {" "}
                <span className=" small">Let&apos;s connect</span>
                <BsArrowRightShort className="text-[1.5em]    duration-300 " />
              </Link>
            </button>
          </div>
        </div>
      </div> */}
      {/* <LandingPage /> */}
      <ContentSection />
      {/* <Related_Articles /> */}
      <div className="w-full">
        <div className="app-layout pt-8 md:pt-12">
          <div className="p-4  ">
            <h1 className="text-3xl md:text-3xl font-medium py-2 pb-5 text-center">
              Our services
            </h1>
          </div>
        </div>
        <div className="py-8 text-text w-[90%] md:w-[90%] m-auto">
          <Swipper />
        </div>
      </div>
      <ServiceInsightsSection
        title={"Our Articles & Insights"}
      />
      <ConnectCompany />
    </div>
  );
};

export default WhoWeAre;
