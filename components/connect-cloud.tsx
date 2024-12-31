import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

type Props = {
  title: string;
  paragraph: string;
  link: string;
};
const ConnectCloud = ({ title, paragraph, link }: Props) => {
  return (
    <section
      id="contact"
      className=" group   border-y-[1px]     grid  md:grid-cols-2   overflow-hidden"
    >
      <div className=" overflow-hidden h-full max-h-[350px] w-full flex   items-center justify-center">
        <Image
          src="/servicepage/cloud/offerings/o5.jpg"
          alt="let's connect image"
          width={1000}
          height={700}
          className="obect-cover group-hover:scale-[1.1] duration-300 inset-0 w-full"
        ></Image>
      </div>
      <div className=" py-10 flex justify-center items-center">
        {" "}
        <div className="   text-text  w-[80%] m-auto">
          <h1 className="text-[1.4rem]  md:text-[2rem]  lg:text-[27px]  min-[1900px]:text-[35px] leading-[30px] md:leading-[42px] text-text font-[500]      ">
            {title}
          </h1>
          <p className="my-10 paragraph  text-[#5f6368] min-[1900px]:text-[1.3rem] my-[1.5em]">
            {paragraph}
          </p>
          <button>
            <Link
              href="/contact"
              className={`  px-5 py-2 m-auto  items-center  duration-300  btn-1     transform-all flex  w-auto justify-between text-text border-[1px] border-text     rounded-md  `}
            >
              {" "}
              <span className=" small">
                Contact us, we&apos;re happy to help!
              </span>
              <BsArrowRightShort className="text-[1.5em]    duration-300 " />
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ConnectCloud;
