import Image from 'next/image'
import React from 'react'
import { TbBrandTerraform } from "react-icons/tb";
import { TbBrandAnsible } from "react-icons/tb";
import { FaPython } from "react-icons/fa6";
import { SiGnubash } from "react-icons/si";

const AutomationTechStack = () => {
  return (
    <div>
        <div className='flex flex-col justify-center items-center space-y-6 
            md:space-y-9 lg:space-y-6 py-20 md:py-0 md:pt-20 md:pb-8'>
            <div>
                <h1 className='text-xl md:text-4xl font-semibold'>Additional tools for automations</h1>
            </div>
            <div className='w-[90%] md:w-[80%] lg:w-[60%]'>
                <h2 className='text-lg md:text-xl text-center'>We specialise on Terraform, Ansible, Python and Bash scripting for automations to fully aggregate DevOps practices, GitOps and CICD mechanisms.</h2>
            </div>
            <div className='grid grid-cols-2 grid-rows-2 gap-20 py-5
                md:flex md:flex-row md:flex-wrap md:justify-center md:items-center md:gap-0 md:px-10
                lg:px-20'>
                <div className='md:w-40 md:h-40 lg:w-48 lg:h-48 flex flex-col justify-center items-center '>
                {/* <Image src="/servicepage/devOps/terraform1.png" alt='' height={70} width={70}/> */}
                    <TbBrandTerraform className='
                   w-[80px] h-[80px]
                   md:w-[85px] md:h-[85px]' />
                </div>
                <div className='md:w-40 md:h-40 lg:w-48 lg:h-48 flex flex-col justify-center items-center '>
               {/* <Image src="/servicepage/devOps/ansible.png" alt='' height={70} width={70}/> */}
                    <TbBrandAnsible className='
                   w-[80px] h-[80px]
                   md:w-[85px] md:h-[85px]' />
                </div>
                <div className='md:w-40 md:h-40 lg:w-48 lg:h-48 flex flex-col justify-center items-center '>
               {/* <Image src="/servicepage/devOps/python.png" alt='' height={70} width={70}/> */}
                    <FaPython className='
                   w-[80px] h-[80px]
                   md:w-[85px] md:h-[85px]' />
                </div>
                <div className='md:w-40 md:h-40 lg:w-48 lg:h-48 flex flex-col justify-center items-center '>
               {/* <Image src="/servicepage/devOps/bash.png" alt='' height={70} width={70}/> */}
                    <SiGnubash className='
                   w-[80px] h-[80px]
                   md:w-[85px] md:h-[85px]' />
                </div>
        
            </div>
        </div>
    </div>
  )
}

export default AutomationTechStack