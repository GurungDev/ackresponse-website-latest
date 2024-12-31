'use client'

import working from "@/animation/working.json";
import Lottie from "react-lottie-player";
import { useRouter } from "next/navigation";

export default function GlobalError( ) {
  const {push} = useRouter()
  return (
     
    <div className="my-[10vh]">
      <div className="flex layout flex-col justify-center items-center">
      
        <div className="w-[400px]">
             <Lottie animationData={working} />;
          </div>
     
        <div className="text-text text-justify m-auto">
          <h1 className="secondary-title mb-3 text-center  ">
            Page under development.
          </h1>
          <p className="text-center paragraph ">
            {" "}
            We&apos;re diligently working on enhancing this page for a better experience. Stay tuned!
          </p>
        </div>
        <div>
          {" "}
          <button
            onClick={() => {
              push("/");
            }}
            className="flex shadow-md items-center gap-2 rounded-md mt-3 small font-semibold text-white bg-text btn border-2  border-text hover:text-text py-2 px-10 "
          >
            Home
          </button>
        </div>
      </div>
    </div>
 
  );
};

 