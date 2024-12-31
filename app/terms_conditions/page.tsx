
import Link from 'next/link'
import styles from './TermsConditions.module.css'

import React from 'react'

const page = () => {
  return (
    <div id="privacy_policy" className=" h-full  w-full flex flex-col justify-center items-center">
      <div className='flex flex-col //flex-col-reverse h-screen w-full justify-center
      py-9 px-7 
      md:flex md:flex-col //md:flex-col-reverse md:px-10
      md:justify-center
      lg:flex lg:flex-row      lg:justify-normal
      //lg:justify-center //lg:items-center 
    
      IpadProJustifyCenter
      bg-[url("/image/terms_conditions/tandc.jpg")] 
      bg-cover
      bg-center
      md:bg-fixed
      lg:bg-fixed 
      lg:bg-center
      lg:bg-[length:200px_100px]"
      lg:bg-no-repeat
      IPadProBackground
      text-white

      '>

        <div className="flex flex-col md:space-y-0 space-y-6 md:w-[80%] lg:ml-28 justify-center ">
        <h1
          className="
          text-7xl
          lg:text-8xl

          md:text-9xl md:py-10"
        >
           T&amp;Cs
        </h1>
        {/* <h1 className=" 
          w-full
          lg:w-[70%]
        text-white text-left 
          text-[1.3rem]   
          md:text-xl
          font-light
          lg:max-w-7xl  
          IpadProText
          ">
            T&amp;Cs
        </h1> */}
        </div>

      </div>
      <div className='flex flex-col 
        px-7 py-10 space-y-2 
        md:px-20 md:py-14 md:space-y-3
        lg:px-48 lg:py-24 lg:space-y-16'>
        <div>
            <h1 className={styles.h1}>
                Website Terms &amp; Conditions
            </h1>
          {/* <h2 className={styles.h2}>
                18th October 2024
            </h2> */}
        <br />
        {/* <p className={styles.p}>
            These website terms and conditions outline the guidelines for uploading content to our site, connecting with other users, linking to our site, or engaging with it in any form of interaction.
        </p> */}
        <p className={styles.p}>
            The website, https://www.ackresponse.com/, is operated by ackresponse Limited, a company registered in England and Wales with company number 16020350. Our registered office is located at Quatro House, Lyon Way, Frimley Road, Camberley, GU16 7ER, UK.
        </p>
        <p className={styles.p}>
            If you do not want to comply and agree to our terms and conditions, you must not access and use our website.
        </p>
        </div>

        <div>
            <h1 className={styles.h1}>Rules &amp; Agreement</h1>
           <p className={styles.p}>By accessing and using our website, you agree to be bound by the following terms and conditions:</p>
            <ul className='marker:text-btn_color list-outside list-disc ml-10 md:ml-16 text-base md:text-2xl  font-light space-y-2  '>
                <li>Compliance with all applicable local, national, and international laws and regulations is required.</li>
                <li>Reproduction, copying, transmission, or resale of any content or materials from our website is strictly prohibited.</li>
                <li>Insulting, bullying, intimidating, or harassing others, as well as sending or uploading irrelevant or inappropriate materials and links, is not permitted.</li>
                <li>The transmission of harmful viruses, malicious scripts, or unauthorized hacking attempts on our website is strictly prohibited.</li>
                <li>Any breach of these terms will result in appropriate legal action, which may include warnings, further legal proceedings, and the disclosure of such breaches as required by law.</li>
            </ul>
        </div>
        <br />
      </div>
    </div>
  )
}

export default page
