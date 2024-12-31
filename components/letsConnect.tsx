import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

const LetsConnect = () => {
  return (
    <div className="w-full  relative py-20 ">
      <div className="   ">
        <Image
          src="/servicepage/cybersecurity/letsConnect.jpg"
          alt="let's connect"
          layout="fill"
          quality={100}
          className="h-full w-full object-cover absolute -z-[10]  "
        />
      </div>
      <div
        className="object-cover  inset-0 absolute -z-[2]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,.3), rgba(0,0,0,0))",
        }}
      ></div>
      <div className="w-[90%] m-auto text-white">
        <div className="w-[60%]">
          <h1 className="secondary-title font-medium py-2    ">
            We are readily available ...
          </h1>
          <p className="paragraph py-10">
            Focus on your core competencies to grow your business to another
            next level. To support that, we are fully prepared with number of
            years of technical expertise to look after your IT infrastructure
            and applications.
          </p>
          <Link href="/contact" id="link">
            {" "}
            <button
              className={`  px-5 py-2   group items-center  duration-300  btn hover:text-text hover:px-6 transform-all flex  w-auto justify-between  text-white border-[1px] border-white    rounded-md  `}
            >
              <span className="group small">Let&apos;s connect</span>
              <BsArrowRightShort className="text-[1.5em]    duration-300 " />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LetsConnect;
