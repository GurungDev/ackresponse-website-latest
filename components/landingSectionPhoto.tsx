

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

type props = {
  title: string;
  description: string;
  page?: string;
  image: string;
  button?: string;
  link: string;
};

const Landing_Section = ({
  title,
  description,
  page,
  image,
  link,
  button,
}: props) => {
  const insightCover = image;

  return (
    <div className="relative h-[100vh] min-h-[600px] w-full m-auto   overflow-hidden">
      <Image
        priority={true}
        src={insightCover}
        alt="insightCover"
        width={1920}
        height={1080}
        className="  w-full h-full absolute kenburns-top-right  z-[-1] object-cover object-center animate-parallax brightness-50"
      />

      <div className=" w-[90%] py-[7em]  h-full   m-auto">
        {page ? (
          <div className=" ">
            <h1 className="small min-[400px]:tracking-[.2rem] text-neutral-100 underline  underline-offset-8 ">
              {page}
            </h1>
          </div>
        ) : null}
        <div className=" h-full flex items-center mt-[2em] text-neutral-100">
          <div className="w-[95%] md:w-[80%] space-y-20 md:space-y-0">
            <h1 className="text-3xl md:text-3xl lg:text-6xl   md:my-5 font-normal  w-full IpadWebLandingPageText text-center md:text-start md:leading-0 leading-[2.5rem]">{title}</h1>
            {/* <p className="paragraph  font-[500]">{description}</p> */}
            <p className="hidden md:flex text-[1.1rem]  font-[500]">{description}</p>
            {button ? (
            <Link href={link} className="w-auto flex justify-center items-center md:justify-start ">
            <button className="px-5 py-2 group hover:bg-white duration-300 bg-transparent  hover:px-6 transform-all text-white hover:text-black border-[1px] mt-10 rounded-md flex items-center justify-between">
              <span className="group text-sm">{button}</span>
              <BsArrowRightShort className="text-[1.5em] group-hover:translate-x-[10px] duration-300" />
            </button>
            </Link>

            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing_Section;
