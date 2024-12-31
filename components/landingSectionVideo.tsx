import React, { useState } from "react";
import { BsPlayFill, BsPauseFill } from "react-icons/bs";

type props = {
  title: string;
  description: string;
  page: string;
};

const Landing_Section = ({ title, description, page }: props) => {
  const [isPlayed, setIsPlayed] = useState(true);
  const toogleButton = () => {
    const video = document.getElementById("video-bg") as HTMLVideoElement;
    if (video) {
      if (!isPlayed) {
        video.play();
      } else if (isPlayed) {
        video.pause();
      }
      setIsPlayed(!isPlayed);
    }
  };

  return (
    <div className=" relative h-[100vh] w-full m-auto overflow-hidden">
      <video
        loop={true}
        autoPlay={true}
        muted
        id="video-bg"
        className="w-full h-full object-cover absolute"
      >
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
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to left, rgba(0,0,0,0.2), rgba(0,0,0,.9))",
        }}
      ></div>

      <div className="absolute w-[90%] py-[7em]  inset-0 m-auto">
        <div className=" pb-2 border-b-[1px]">
          <p className="small text-neutral-100 ">{page}</p>
        </div>
        <div className=" h-full flex items-center text-neutral-100">
          <div className=" ">
            <h1 className="title my-5 tracking-in-contract-bck ">{title}</h1>
            <p className="paragraph  ">{description}</p>
          </div>
        </div>
        <button onClick={toogleButton} className="text-white secondary-title  ">
          {isPlayed ? <BsPauseFill /> : <BsPlayFill />}
        </button>
      </div>
    </div>
  );
};

export default Landing_Section;
