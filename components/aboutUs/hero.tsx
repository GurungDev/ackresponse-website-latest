"use client";
import animation_aboutus from "@/animation/about_us1.json";
import { motion } from "framer-motion";
import Lottie from 'react-lottie-player'

const LandingPage = () => {
  return (
    <div className="h-full  mt-[5.5rem] m-auto py-8 md:py-12">
      {" "}
      <div className="flex flex-col-reverse justify-center items-center py-10 md:px-8 lg:px-0 px-0
      md:flex md:flex-row 
       ">
      <div className=" 
                flex flex-col
                md:flex md:flex-row
                md:w-[60%] md:py-12
                lg:w-[45%]  ">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="app-layout"
          >
            <h1 className="md:text-8xl text-5xl pt-7 md:pt-0 font-[700] text-center md:text-left w-full">Hi,</h1>
            <p className="text-center md:text-left  text-white w-full px-8 md:px-0 text-lg min-[1000px]:text-[1.3rem] min-[1900px]:text-[1.6rem] my-[1.5em]">
              We really do appreciate a lot for visiting our website, hope you
              have found whatever you are looking for.
            </p>
          </motion.div>
        </div>
        <div className=" 
             lg:flex
             h-full
             md:w-[50%]
             lg:w-[40%]

             ">
          {" "}
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
             className="w-full"
          >
            <Lottie className="w-full h-full" play loop animationData={animation_aboutus}/>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
