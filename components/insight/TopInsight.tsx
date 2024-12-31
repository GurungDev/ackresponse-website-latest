"use client"

import React from 'react'
import { BsArrowRightShort } from 'react-icons/bs'
import {useRouter} from "next/navigation";
import Link from 'next/link';
import Image from 'next/image';

const TopInsight = () => {
    const router = useRouter();
  return (
    <div className="pt-16 md:pt-36 lg:pt-24">
          <div className="  w-[90%] md:w-[90%] m-auto text-white ">
            <div className="pt-10 lg:pt-20 pb-10 md:pb-16 flex flex-col">
            <h1 className="title font-[200] py-2    ">Insights</h1>
              <p className="text-xl md:text-lg py-5">
                Covering latest innovative and informative insights of various
                verticals to stay ahead of the curve.
              </p>

            </div>

            <div className="grid bg-black lg:grid-cols-5 gap-3 items-star iPadProflexColumn">
              <div  onClick={
                ()=>{
                  router.push("/insight/migrateLeverageCloud")
                }
              } className="relative cursor-pointer  shadow hover:shadow-xl w-full lg:col-span-3  h-[63vh] overflow-hidden">
                <Image
                  priority={true}
                  src="/insightpage/insights/leverageCloud.jpg"
                  alt="insight image"
                  width={500}
                  height={500}
                  className=" inset-0 h-full w-full object-cover"
                ></Image>

                <div
                  className="  inset-0 absolute"
                  style={{
                    backgroundImage: ` linear-gradient(to bottom, rgba(0,0, 0, 0.2), rgba(0, 0, 0, 0.3)) `,
                  }}
                ></div>
                <div className="absolute inset-0 text-neutral-100 flex justify-end flex-col  ">
                  <div className=" flex flex-col md:flex-row justify-between md:items-end space-y-2   px-5 pb-10 pt-3 bg-black bg-opacity-20">
                    {" "}
                    <div className="md:w-[70%] space-y-2">
                      <h1 className="secondary-title font-semibold">
                        Leverage cloud to maximize the business values
                      </h1>
                      <p className="paragraph">
                        Provisioning entire or some of the IT resources on the
                        cloud couldn&apos;t be better choice than being left
                        behind with old legacy convoluted infrastructure
                      </p>
                    </div>
                    <Link
                      href="/insight/migrateLeverageCloud"
                      className="btn w-28  md:w-auto flex justify-center items-center  hover:text-text rounded border-[1px] border-white py-2 text-sm  px-1 min-[400px]:px-3 hover:bg-white duration-300"
                    >
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
              <div className="text-white md:px-5 w-full lg:col-span-2  ">
              <Link   href="/insight/modernize_your_business" className="paragraph border-gray-600 border-b-[1px] group py-4 px-6 rounded-sm flex flex-col justify-between hover:bg-newGradient hover:text-white hover:transition-all transition-all duration-300 ease-in-out">
                  <h1 className="w-full">
                    <div className="w-full font-semibold text-lg">
                    Modernize Your Business: The Power of Public and Private Cloud for Long-Term Success
                    </div>
                  </h1>
                  <p className="flex flex-col justify-start text-sm py-2">Oct 17, 2024</p>
                  <div className="">
                    <div
                      className="md:w-[2rem] md:h-[2.5rem] group-hover:md:w-[8rem] ease-in-out items-center text-white flex justify-between transition-all duration-300"
                    >
                      <span className="small hidden group-hover:block group-hover:text-white transition-all duration-300 ease-in-out delay-300">
                      Read More
                      </span>
                      <BsArrowRightShort className="text-[1.5rem] group-hover:text-white transition-all duration-300" />
                    </div>
                  </div>
                </Link>

                <Link href="/insight/openInfra_asia_2024_summit" className="paragraph border-gray-600 border-b-[1px] group py-4  px-6 rounded-sm flex flex-col justify-between hover:bg-newGradient hover:text-white hover:transition-all transition-all duration-300 ease-in-out">
                  <h1 className="w-full">
                  <div className="w-full font-semibold text-lg">
                  Supercharging, empowering and shaping an infrastructure history: Report on the first OpenInfra Asia 2024 Summit
                    </div>
                  </h1>
                  <p className="flex flex-col justify-start text-sm py-2">Oct 17, 2024</p>
                  <div className="">
                    <div
                      className="md:w-[2rem] md:h-[2.5rem] group-hover:md:w-[8rem] ease-in-out items-center text-white flex justify-between transition-all duration-300"
                    >
                      <span className="small hidden group-hover:block group-hover:text-white transition-all duration-300 ease-in-out delay-300">
                      Read More
                      </span>
                      <BsArrowRightShort className="text-[1.5rem] group-hover:text-white transition-all duration-300" />
                    </div>
                  </div>
                </Link>
                <Link   href="/insight/empowering_young_entrepreneurs" className="paragraph border-gray-600 border-b-[1px] group py-4 px-6 rounded-sm flex flex-col justify-between hover:bg-newGradient hover:text-white hover:transition-all transition-all duration-300 ease-in-out">
                  <h1 className="w-full">
                    <div className="w-full font-semibold text-lg">
                    Igniting Innovation: Empowering Young Entrepreneurs with Cutting-Edge IT Solutions
                    </div>
                  </h1>
                  <p className="flex flex-col justify-start text-sm py-2">Oct 17, 2024</p>
                  <div className="">
                    <div
                      className="md:w-[2rem] md:h-[2.5rem] group-hover:md:w-[8rem] ease-in-out items-center text-white flex justify-between transition-all duration-300"
                    >
                      <span className="small hidden group-hover:block group-hover:text-white transition-all duration-300 ease-in-out delay-300">
                      Read More
                      </span>
                      <BsArrowRightShort className="text-[1.5rem] group-hover:text-white transition-all duration-300" />
                    </div>
                  </div>
                </Link>
         
              </div>
            </div>

          </div>
        </div>
  )
}

export default TopInsight;
