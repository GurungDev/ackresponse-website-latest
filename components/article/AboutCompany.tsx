

import Link from 'next/link'
import React from 'react'

const AboutCompany = () => {
  return (
         <div>
            <h2 className="text-2xl font-bold">About ackresponse</h2>
                <div className="  md:text-xl text-start my-5 space-y-4">
                    <p className="md:text-lg tracking-tight">
                    <strong>ackreponse</strong> is a UK-based tech solution &amp; consultancy company, dedicated to empowering businesses across all sectors with innovative, cutting-edge technologies. With over a decade of tech expertise, we are passionate about sharing our knowledge to help you build and implement solutions that unlock your business potential and drive successes.
                </p>
                    <p className="md:text-lg text-justify tracking-wide font-semibold">
                    Want to find out more about how we can help, please contact:
                </p>
                <Link href="mailto:enquiry@ackresponse.com" className='text-base md:text-lg text-blue-500'>
                    enquiry@ackresponse.com
                </Link>
                    <ul className='text-lg'>
                        <li>Sagar Gurung, UK</li>
                        <Link href="mailto:sagar.gurung@ackresponse.com" className='text-base md:text-lg text-blue-500'>sagar.gurung@ackresponse.com</Link>
                    </ul>
            </div>
        </div>
  )
}

export default AboutCompany
