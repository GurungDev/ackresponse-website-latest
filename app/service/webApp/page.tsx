
import "../../../style/background_images.css";
import React from 'react';
import ServiceInsightsSection from '@/components/service/service-insights-section';
import ConnectCompany from '@/components/company-contact';
import { MdOutlineWeb } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineWebAsset } from "react-icons/md";
import { TbApi } from "react-icons/tb";
import { BsGearWideConnected } from "react-icons/bs";
import WebToUs from '@/components/service/webApp/WebToUs';

const webOfferings = [
  {
    id: '01',
    title: "Custom website",
    description: "Tailored websites built from scratch to meet specific business needs, offering unique design and functionality.",
    bg: "linear-gradient(to right, #CCCCFF, #ffffff)",
    react_icons: <MdOutlineWeb />
  },
  {
    id: '02',
    title: "eCommerce",
    description: "Transform your business with our tailor-made eCommerce solutions, designed to drive sales and enhance customer experience.",
    bg: "linear-gradient(to right, #CCFFE6, #ffffff)",
    react_icons: <FaShoppingCart  />
  },
  {
    id: '03',
    title: "Web application",
    description: "Empowering your business with dynamic web application development and innovative SaaS solutions to drive growth and efficiency.",
    bg: "linear-gradient(to right,#FFCCFF,#ffffff)",
    react_icons: <MdOutlineWebAsset/>
  },
  {
    id: '04',
    title: "API",
    description: "Seamlessly integrating and developing APIs to enhance your website's functionality with third-party services like payment systems, social media, and cloud solutions.",
    bg: "linear-gradient(to right,#CCFFCC,#ffffff)",
    react_icons: <TbApi/>
  },
  {
    id: '05',
    title: "Maintenance & Support",
    description: "Keep your website running flawlessly with our ongoing & affordable maintenance, security updates, and responsive support services.",
    bg: "linear-gradient(to right,#ABCAFF,#ffffff)",
    react_icons: <BsGearWideConnected />
  }
];


const Page = () => {
  return (
    <div className=" bg-black text-white w-full h-full mt-16 md:mt-20 md:space-y-12 ">
      <div  className='flex flex-col //flex-col-reverse h-screen w-full justify-center
      py-9 px-7 
      md:flex md:flex-col //md:flex-col-reverse md:px-10
      md:justify-center
      lg:flex lg:flex-row  lg:px-28     lg:justify-normal
      //lg:justify-center //lg:items-center 
    
      IpadProJustifyCenter
      bg-[url("/image/webLandingPage.jpg")]  
      bg-cover
      bg-center
      md:bg-fixed
      lg:bg-fixed 
      lg:bg-[length:200px_100px]"
      lg:bg-no-repeat
      IPadProBackground
      text-white
      '
      
      >
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
            Web
          </p>
          <p className='
              text-xl
              w-full
        
              IpadProWidth
              md:text-2xl
              lg:text-3xl
              lg:landscape:w-[55%]
          '>
            Crafting innovative, custom web solutions to elevate your business online.
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
      
      <div className='flex flex-col justify-center items-center px-3 space-y-5
        md:py-12 md:px-10
        lg:space-y-12 
        '>
        <div>
          <h1 className='text-3xl md:text-4xl pt-16 md:pt-0 md:py-8 '>Offerings</h1>
        </div>
        <div className='py-10 px-3 lg:px-10'>
          <div className='grid gap-9 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
            {webOfferings.map((offering) => (
              <div
                  key={offering.id}
                  className="p-6 rounded-md mb-4 flex flex-col justify-start space-y-3
                    md:h-auto md:w-full
                    landscape:md:w-auto landscape:md:h-auto 
                    landscape:lg:h-auto landscape:lg:w-auto
                    IProLandspaceCard
                    
                    
                    
                    "
                    // style={{
                    //   backgroundColor : offering.bg
                    //   border-b-2 border-l-2
                    // }}

                >

                <div className='flex text-5xl py-3 md:text-5xl justify-center'>{offering.react_icons}</div>
                <div>
                  <h2 className="text-2xl text-center font-bold mb-3"> {offering.title}</h2>
                  <p className="text-md text-center">{offering.description}</p>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
      
      <WebToUs/>

      <ServiceInsightsSection
        title={"Insights and trends"}
      />
      <ConnectCompany />
    </div>
  );
};

export default Page;
