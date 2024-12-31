import React from "react";
import { FaCircleNotch } from "react-icons/fa";

const Loading = () => {
  return (
    <div className=" h-screen w-full flex flex-col justify-center items-center bg-black ">
      <div className="flex justify-center items-center  animate-pulse space-x-5">
      <div className="text-xl text-white">
        <strong>ack</strong>response
      </div>
      <div className="text-xl animate-bounce">
        <div className="animation_sping  text-green-500">
        <FaCircleNotch />
        </div>
  
      </div>
      </div>
      <div className="text-sm animate-pulse text-white">
        <p>Empowering businesses with innovative tech solutions.</p>
      </div>

    </div>
  );
};

export default Loading;
