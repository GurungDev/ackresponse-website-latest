import Image from 'next/image'
import React from 'react'
import { FaServer } from "react-icons/fa";
import { SiKubernetes } from "react-icons/si";
import { SiOpenstack } from "react-icons/si";
import { SiGooglecloud } from "react-icons/si";


const CloudTypes = () => {
  return (
    <div className="bg-black text-white flex flex-col lg:flex-row  
        px-5 py-7 space-y-16
        md:px-10 md:py-14 md:space-y-20
        lg:px-20 lg:py-36 lg:space-y-0 lg:space-x-10 ">
          <div className="flex flex-col lg:w-[50%]">
            <h2 className='
                text-md
                
                font-semibold
                pb-8
                text-neutral-400
                lg:text-center
                '>PUBLIC</h2>
            <div className="flex lg:justify-center">
            <SiGooglecloud className='
                   w-[50px] h-[50px]
                   md:w-[53px] md:h-[53px]' />
            {/* <Image 
                className='
                w-[180px] h-[100px]
                md:w-[200px] md:h-[115px]'
                src="/servicepage/cloud/gcp-logo.png" alt="" height={300} width={300} /> */}
            </div>
       
            <h1 className='
                text-xl
                md:text-2xl
                font-semibold
                py-8    pb-2 lg:text-center 
            '>Google Cloud</h1>
            <p className='text-md lg:text-center'>
              We’re currently focused on Google Cloud managed services, ready to help any verticals accelerate cloud transformation and harness its power to boost performance and drive success.
            </p>
          </div>
          <div className="flex flex-col lg:w-[60%]">
            <h2 className='
                text-md
             
                font-semibold
                pb-8 lg:text-center
                text-neutral-400
                '>PRIVATE</h2>
            <div className="flex space-x-10 justify-start lg:justify-center items-center">
            <SiOpenstack className='
                   w-[50px] h-[50px]
                   md:w-[53px] md:h-[53px]' />
            {/* <Image 
                   className='
                   w-[120px] h-[70px]
                   md:w-[110px] md:h-[73px]'
                src="/servicepage/cloud/openstacklogo.png" alt="" height={300} width={300} /> */}
              
            <SiKubernetes className='
                   w-[50px] h-[50px]
                   md:w-[53px] md:h-[53px]' />
            {/* <Image 
                   className='
                   w-[50px] h-[50px]
                   md:w-[53px] md:h-[53px]'
                src="/servicepage/cloud/k8slogo.svg" alt="" height={300} width={300} /> */}
            </div>
                <h1 className='
                text-xl
                md:text-2xl
                font-semibold
                      py-8    pb-2 lg:text-center
            '>OpenStack, Kubernetes</h1>
            <p className='text-md lg:text-center'>
              We specialize in High Availability (HA) OpenStack &amp; Kubernetes cluster, the most widely deployed and powerful open-source cloud platform for private cloud infrastructure. 
            </p>
          </div>
          <div className="flex flex-col lg:w-[60%]">
            <h2 className='
                text-md
                
                font-semibold
                pb-8
              text-neutral-400 lg:text-center
                '>HYBRID</h2>
              <div className="flex space-x-3 justify-start lg:justify-center items-center">
              <SiGooglecloud className='
                   w-[50px] h-[50px]
                   md:w-[53px] md:h-[53px]' />
            {/* <Image 
                className='
                w-[180px] h-[100px]
                md:w-[200px] md:h-[115px]'
                src="/servicepage/cloud/gcp-logo.png" alt="" height={300} width={300} /> */}
            <span className='flex justify-center items-center'>+</span>
            <FaServer className='
                w-[50px] h-[50px]
                md:w-[50px] md:h-[50px]' />
            {/* <Image 
                className='
                w-[50px] h-[50px]
                md:w-[60px] md:h-[60px] bg-white'
                src="/servicepage/cloud/onPrem.png" alt="" height={300} width={300} /> */}
            </div>
                <h1 className='
                text-xl
                md:text-2xl
                font-semibold
                      py-8    pb-2 lg:text-center
            '>Public &amp; Private combined</h1>
             <p className='text-md lg:text-center'>
              Unlock the full potential of your business with our hybrid cloud service, blending the flexibility of public cloud with the control of private infrastructure for a seamless, secure, and scalable solution.
            </p>
          </div>
      </div>
  )
}

export default CloudTypes