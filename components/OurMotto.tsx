import Link from 'next/link'
import React from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const OurMoto = () => {
  return (
    <div className='w-full h-full flex justify-center items-center'>
      <div className='md:flex py-20 md:py-32 md:space-x-10 md:space-y-0 space-y-7'>
        <div className='md:w-[10vw] text-neutral-400'>
            OUR MOTTO
        </div>
        <div className='md:w-[55vw] space-y-10 md:space-y-16'>
            <p className='text-2xl md:text-4xl text-[#fff]'>
              To create a better place and thrive as a vibrant society, city, or country, entrepreneurship is essential. That&apos;s why we&apos;re here to ignite, inspire, and encourage entrepreneurship, helping you start your own business or startup. 
            </p>
            {/* <div className="flex">
              <Link
                className="flex flex-col justify-between items-start w-full group" // Use 'group' for hover effect
                href=""
              >
                <span className="text-[0.82rem] md:text-[1.4rem] font-[700]">
                  Let&apos;s Connect To Make Things Happen
                </span>
                <div className='bg-gradient-to-r from-[#A5B4FC] to-[#00FF00] w-full h-[0.2rem] group-hover:h-[0.5rem] transition-all duration-300 ease-in-out'></div>
              </Link>
            </div> */}
            <div className="flex">
              <Link
                className="flex flex-row justify-between items-center w-full"
                href="/contact"
              >
                <div className="relative group">
                  <span className="text-[#b9b8b8] hover:text-white inline-block text-[1.1rem] md:text-[1.4rem] font-[700] z-10 relative">
                    Let&apos;s Connect To Make Things Happen
                  </span>
                  <div
                    className="absolute left-0 bottom-0 h-[0.2rem] bg-gradient-to-r from-[#A5B4FC] to-[#00FF00] 
                              transition-all duration-300 ease-in-out group-hover:h-[0.5rem] w-full z-0"
                  ></div>
                </div>
              </Link>
            </div>





        </div>
      </div>
    </div>
  )
}

export default OurMoto
