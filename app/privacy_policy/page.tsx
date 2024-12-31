
import Link from 'next/link'
import styles from './PrivacyPolicy.module.css'

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
      bg-[url("/image/privacy/pp.jpg")] 
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
           Privacy Policy
        </h1>
        <h1 className=" 
          w-full
          lg:w-[70%]
        text-white text-left 
          text-[1.3rem]   
          md:text-xl
          font-light
          lg:max-w-7xl  
          IpadProText
          ">
            Your privacy is important to us – read our policy to learn how we protect your personal information.
          </h1>
        </div>

      </div>
      <div className='flex flex-col 
        px-7 py-10 space-y-2 
        md:px-20 md:py-14 md:space-y-3
        lg:px-48 lg:py-24 lg:space-y-16'>
        <div>
            <h1 className={styles.h1}>
                Privacy Policy
            </h1>
          {/* <h2 className={styles.h2}>
                18th October 2024
            </h2> */}
        <br />
        <p className={styles.p}>
           <strong>ackresponse Ltd.</strong> (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website www.ackresponse.com, specifically when you use our contact form. Please read this policy carefully to understand our views and practices regarding your personal data and how we will treat it.
        </p>
        </div>

        <div>
            <h1 className={styles.h1}>Information We Collect</h1>
           <p className={styles.p}>When you use our contact form, we collect the following information:</p>
            <ul className='marker:text-btn_color list-outside list-disc ml-10 md:ml-16 text-base md:text-xl  font-light space-y-2  '>
                <li>Name (First Name &amp; Last Name): To address you appropriately and to personalize our communication.</li>
                <li>Email Address: To respond to your inquiries and send relevant information.</li>
                <li>Phone Number: To reach you directly if necessary.</li>
                <li>Country: To understand your geographical location and better tailor our services to your region.</li>
                <li>Company Name: To better understand your business and provide tailored consultancy services.</li>
                <li>Message: To address your specific inquiry or request.</li>
            </ul>
        </div>
        <div><br />
            <h1 className={styles.h1}>How We Use Your Information</h1>
           <p className={styles.p}>We use the information we collect in the following ways:</p>
            <ul className='marker:text-btn_color list-outside list-disc ml-10 md:ml-16 text-base md:text-xl   font-light space-y-2 '>
                <li>To Communicate: We may use your contact information to respond to inquiries, send updates, and provide information about our services.</li>
                <li>To Improve Our Services: Feedback and inquiries help us enhance our offerings and customer experience.</li>
                <li>For Marketing Purposes: With your consent, we may occasionally send promotional emails regarding new services or updates.</li>
                <li>To Comply with Legal Obligations: We may use your information to comply with applicable laws and regulations.</li>
            </ul>
        </div>
        <div><br />
            <h1 className={styles.h1}> Data Security</h1>
           <p className={styles.p}>We implement a variety of security measures to maintain the safety of your personal information. However, please be aware that no method of transmission over the internet, or method of electronic storage, is 100% secure. While we strive to protect your personal data, we cannot guarantee its absolute security.</p>
        </div>
        <div>
            <h1 className={styles.h1}>Your Rights</h1>
           <p className={styles.p}>You have the following rights regarding your personal data:</p>
           <ul className='marker:text-btn_color list-outside list-disc ml-10 md:ml-16 text-base md:text-xl   font-light space-y-2 '>
                <li>Access: You can request access to the information we hold about you.</li>
                <li>Correction: You can request that we correct any inaccurate or incomplete information.</li>
                <li>Deletion: You can request that we delete your personal information.</li>
                <li>Objection: You can object to the processing of your personal data in certain circumstances.</li>
                <li>Withdrawal of Consent: If we are processing your personal data based on your consent, you have the right to withdraw that consent at any time.</li>
            </ul>
           <div className={styles.p}>
                <p>To exercise these rights, please contact us at: <span className='underline'><Link href="mailto:enquiry-dpo@ackreponse.com">enquiry-dpo@ackreponse.com</Link></span></p>
                {/* <p className='underline'>enquiry-dpo@ackreponse.com</p> */}
            </div>
        </div>
        <div>
            <h1 className={styles.h1}>Cookies and Tracking Technologies</h1>
           <p className={styles.p}>Currently, we are not using any Cookies at all on our website. Should we decide to use or integrate one in the future then, we will inform with updates about Cookies on this page. However, our website is integrated with Google Analytics to gain a deeper understanding of the website and its performance by tracking metrics such as: views, locations, number of views, new visitors, bounce rate and so on.</p>
           {/* <p>Our website may use cookies and similar tracking technologies to enhance your experience. You can control the use of cookies through your browser settings.</p> */}
        </div>
        <div>
            <h1 className={styles.h1}>Third-Party Links</h1>
           <p className={styles.p}>Our website may contain links to third-party websites. We are not responsible for the privacy practices of these websites, and we encourage you to read their privacy policies.</p>
        </div>
        <div>
            <h1 className={styles.h1}>Changes to This Privacy Policy</h1>
           <p className={styles.p}>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically to stay informed about how we are protecting your information.</p>
        </div>
        <div>
            <h1 className={styles.h1}>Contact Us</h1>
            <p className={styles.p}>If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:</p>
            <h2 className={styles.h2}>ackreponse Ltd.</h2>
            <h2 className={styles.h2}>Quatro House</h2>
            <h2 className={styles.h2}>Lyon Way</h2>
            <h2 className={styles.h2}>Frimley Road</h2>
            <h2 className={styles.h2}>Camberley</h2>
            <h2 className={styles.h2}>GU16 7ER</h2>
            <h2 className={styles.h2}>UK</h2>
            <h2 className={styles.h2}><Link href="mailto:enquiry-dpo@ackreponse.com">enquiry-dpo@ackresponse.com</Link></h2>
            {/* <h2 className={styles.h2}>1234567890</h2> */}
        </div>
      </div>
    </div>
  )
}

export default page
