"use client";

import Link from "next/link";
import { Fragment } from "react";

import {
  BiLogoLinkedinSquare
} from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";


const Footer = () => {
  const data = [
    {
      title: "Services",

      values: [
        {
          id: "Cloud",
          title: "Cloud",
          link: "/service/cloud",
        },
        // {
        //   id: "Cyber Security",
        //   title: "Cyber Security",
        //   link: "/service/cyber",
        // },
        // {
        //   id: "Cloud Migration",
        //   title: "Cloud Migration",
        //   link: "/service/applicationModernization",
        // },
        {
          id: "DevOpsAutomation",
          title: "DevOps & Automation",
          link: "/service/automation",
        },
        {
          id: "WebApplicationDevelopment",
          title: "Web Application Development",
          link: "/service/webApp",
        },
        {
          id: "MobileApplicationDevelopment",
          title: "Mobile Application Development",
          link: "/service/mobileApp",
        },
        // {
        //   id: "UX / UI",
        //   title: "UX / UI",
        //   link: "/service/uxUi",
        // },
        {
          id: "Software Development ",
          title: "Software Development ",
          link: "/service/softwareDevelopment ",
        },
        {
          id: " Consultancy",
          title: "Consultancy",
          link: "/service/consultancy",
        },
        // {
        //   id: " It_outsourcing",
        //   title: "IT Outsourcing",
        //   link: "/service/consultancy",
        // },
      ],
    },
    // {
    //   title: "Industries",
    //   values: [
    //     {
    //       id: "retails",
    //       title: "Retail",
    //       link: "/industry/retails",
    //     },
    //     {
    //       id: "finance-and-banking",
    //       title: "Finance and Banking",
    //       link: "/industry/finance-and-banking",
    //     },
    //     {
    //       id: "media-and-marketing",
    //       title: "Media and Marketing",
    //       link: "/industry/media-and-marketing",
    //     },
    //     {
    //       id: "insurance",
    //       title: "Insurance",
    //       link: "/industry/insurance",
    //     },
    //     {
    //       id: "health-care",
    //       title: "Health Care",
    //       link: "/industry/health-care",
    //     },
    //     {
    //       id: "telecom",
    //       title: "Telecom",
    //       link: "/industry/telecom",
    //     },
    //     {
    //       id: "transportation-and-logistics",
    //       title: "Transportation and Logistics",
    //       link: "/industry/transportation-and-logistics",
    //     },
    //     {
    //       id: "travel-and-hospitalityy",
    //       title: "Travel and Hospitality",
    //       link: "/industry/travel-and-hospitality",
    //     },
    //     {
    //       id: "education",
    //       title: "Education",
    //       link: "/industry/education",
    //     },
    //   ],
    // },
    {
      title: "Insights",
      values: [
        {
          id: "1",
          title: "The Repatriation of Workloads",
          link: "/insight/cloud_repatriation",
        },
        {
          id: "2",
          title: "Unleashing New Possibilities",
          link: "/insight/5g-drone-apps",
        },
        {
          id: "3",
          title: "Igniting Innovation",
          link: "/insight/empowering_young_entrepreneurs",
        },
        {
          id: "4",
          title: "Modernize Your Business",
          link: "/insight/modernize_your_business",
        },
        {
          id: "5",
          title: "More Articles",
          link: "/insight",
        },

      ],
    },
    {
      title: "More Information",
      values: [
        {
          id: "contact",
          title: "Contact Us",
          link: "/contact",
        },
        {
          id: "whoWeAre",
          title: "About Us",
          link: "/whoWeAre",
        },
        {
          id: "privacyPolicy",
          title: "Privacy Policy",
          link: "/privacy_policy",
        },
        {
          id: "termsConditions",
          title: "Terms & Conditions",
          link: "/terms_conditions",
        },
      ],
    },
  ];
  return (
    <Fragment>
      <div className="bg-[#000] text-neutral-100 grid">
        <div className="w-[100%]   lg:w-[95%] m-auto  grid md:grid-cols-1 lg:grid-cols-6 gap-10">
          <div className="  lg:col-span-2 py-6 h-[100%] w-[100%]">
            <div className="  w-[90%]  h-[100%]  m-auto   flex flex-col justify-between    py-5">
              {/* <h1 className="title">LOGO</h1> */}
              {/* <p className="my-10">Ava&Frey Solutions</p> */}
              <p className="mb-5 font-semibold
                min-[700px]:text-md
                ">
                We solemnly take care of our clients and their projects to help
                them deliver the best technological solutions for
                better outcomes, efficiencies &amp; growth.
              </p>
              <div className="text-[#fff] font-[300] group mt-3 small">
      
              </div>
              {/* <div className="text-[#fff] font-[300] group mt-3 small">
                <div className="flex gap-2 font-[300] items-center duration-300 group-hover:translate-x-[10px]">
                  {" "}
                  <FaPhone />
                  <p className="py-2 ">Phone Number </p>
                </div>

                <p className="font-[300]">9806725376</p>
              </div> */}
              <div className="flex flex-col ">
                <Link href="mailto:info@ackresponse.com">info@ackresponse.com</Link>
                <div className="flex flex-row mt-5 items-center gap-5">
                {/* <Link
                  href="https://www.facebook.com"
                  className="hover:translate-y-[-5px] duration-300"
                >
                  {" "}
                  <BiLogoFacebook />
                </Link> */}

                <a className="hover:translate-y-[-5px] duration-300" href="https://x.com/ackresponse" target="_blank">
                {" "}
                  <FaSquareXTwitter size={18} />

                </a>
                <a className="hover:translate-y-[-5px] duration-300" href="https://www.instagram.com/ackresponse/" target="_blank">
                  {" "}
                  <BsInstagram size={18} />
                </a>
                <a className="hover:translate-y-[-5px] duration-300" href="https://www.linkedin.com/company/ackresponse" target="_blank">
                  {" "}
                  <BiLogoLinkedinSquare size={23} />
                </a>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[90%] lg:w-[100%] py-10 grid gap-20 lg:col-span-4  m-auto">
            {" "}
            <div className="grid grid-cols-2 gap-y-5 md:grid-cols-3  items-start   ">
              {data.map((e, index) => (
                <div key={e.title} className=" ">
                  <div className="m-auto ">
                    <h1 className=" text-[1rem] md:text-[1.2rem] font-bold">{e.title}</h1>{" "}
                    <div className="grid gap-1 mt-5">
                      {e?.values.map((value) => (
                      <Link
                      href={value?.link}
                      key={value?.id}
                      id={value?.id}
                      className="text-[.9rem] font-light hover:text-green-400"
                    >
                      <span className="expanding-line2">
                        {value?.title}
                      </span>
                    </Link>
                    
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-[.8rem] leading-[1rem] font-[300]">
              &#169; 2024 ackresponse<span className="text-green-400 font-bold">.</span> All rights reserved. Registered in England &amp; Wales 16020350.
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
