import React from "react";
import { FaCircleNotch } from "react-icons/fa";

const Loading = () => {
  return (
    <div className=" h-screen w-full flex justify-center items-center ">
      <div className="flex space-x-5">
      <div className="text-6xl animate-pulse">
        ACKRESPONSE
      </div>
      <div className="text-6xl animate-bounce">
        <div className="animate-spin text-btn_color">
        <FaCircleNotch />
        </div>
  
      </div>
      </div>

    </div>
  );
};

export default Loading;
