"use client";
import { useEffect, useState } from "react";

import Link from "next/link";

import { nav_data } from "@/data/nav-data";

import { BiLogoLinkedinSquare } from "react-icons/bi";
import { FaBars } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { PiCaretDownBold } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";
// import { FaFacebookSquare } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

export default function Navbar() {
  const [isHover, setIsHover] = useState(false);
  const [hoveringWhich, setHoveringWhich] = useState<number[] | undefined>();
  const [clicked, setClicked] = useState(false);
  const [scrollingDown, setScrollingDown] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [activeCollapsible, setActiveCollapsible] = useState<number | null>(
    null
  );
  const [serviceHover, setServiceHover] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      let lastScrollTop = 0;
  
      // Function to handle scroll events
      const handleScroll = () => {
        const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
        // Determine if scrolling down or up and set visibility accordingly
        if (currentScrollTop > lastScrollTop) {
          setIsVisible(false); // Hide on scrolling down
        } else {
          setIsVisible(true); // Show on scrolling up
        }
  
        // Update the last scroll position
        lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
      };
  
      // Add the scroll event listener
      window.addEventListener("scroll", handleScroll);
  
      // Cleanup function
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []); // Only run once when the component mounts

  // Old code:
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentScrollTop =
  //       window.pageYOffset || document.documentElement.scrollTop;

  //     // Determine if scrolling up or down
  //     if (currentScrollTop > lastScrollTop) {
  //       setScrollingDown(true);
  //     } else {
  //       setScrollingDown(false);
  //     }

  //     // Set visibility based on scroll direction
  //     if (scrollingDown) {
  //       setIsVisible(false);
  //     } else {
  //       setIsVisible(true);
  //     }

  //     setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
  //   };

  //   // Attach the scroll event listener
  //   window.addEventListener("scroll", handleScroll);

  //   // Cleanup the event listener on component unmount
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [lastScrollTop, scrollingDown]);

  return (
    <div
      className={`fixed top-0 left-0 w-full  bg-[#000] transition-transform duration-300 ease-in-out     z-[993]
       ${isVisible ? "translate-y-0" : "-translate-y-full"}
    `}
    >
      <div className="w-full  bg-gradient-to-r to-[#000000] from-[#000000] px-6 lg:px-20 md:px-12 text-white h-8 flex justify-between items-center">
        <div className="flex flex-row text-[0.6rem] md:text-xs space-x-2 md:space-x-10 text-gray-300">
          <Link href="mailto:info@ackresponse.com">info@ackresponse.com</Link>
          {/* <div>(+977 9876546374) (+44 7588574657)</div> */}
        </div>
        <div className="flex flex-row text-sm space-x-3 md:space-x-5 items-center">
          <div className="hover:translate-y-[-3px] duration-300">
            <a
              href="https://www.linkedin.com/company/ackresponse"
              target="_blank"
            >
              {" "}
              <BiLogoLinkedinSquare size={20} />
            </a>
          </div>
          <div className="hover:translate-y-[-3px] duration-300">
            <a href="https://www.instagram.com/ackresponse/" target="_blank">
              {" "}
              <BsInstagram size={18} />
            </a>
          </div>
          <div className="hover:translate-y-[-3px] duration-300">
            <a href="https://x.com/ackresponse" target="_blank">
              {" "}
              <FaSquareXTwitter size={18} />
            </a>
          </div>
        </div>
      </div>
      <div className=" lg:hidden  p-2 text-text flex justify-between items-center m-auto w-[90%]">
        <Link href={"/"}>
          <div className="w-[220px]    relative ">
            {/* <Image
              src={"/logo.png"}
              alt="image"
              width={110}
              height={200}
              className=" "
            /> */}
            {/* <h1 className="  md:text-[2.4rem]  lg:text-[45px] font-bold min-[1900px]:text-[51px] leading-[30px] md:leading-[42px] text-text font-[500]      ">
              <span className="font-bold text-[#0bae0b]">ACK</span>RESPONSE
              <span className="font-[500] text-[#0bae0b]">.</span>
            </h1> */}

            <div className="flex justify-start items-center //space-x-1 text-[25px] md:text-[25px] lg:text-[30px] min-[1900px]:text-[40px] leading-[30px] md:leading-[42px] //text-transparent text-white //bg-clip-text font-[500]">
              {/* <Image className="h-8 w-8 md:h-9 md:w-9 " src="/image/ackresponse-logo-final.png" alt="logo" height={50} width={50}/> */}
              <span className="font-semibold">ackresponse</span>
              <span className="text-green-400 font-bold">.</span>

              <div className="text-[0.4rem] px-[1.2px]  text-black flex flex-row  absolute mt-[1.9rem]  w-full">
                {/* <div className="h-[18px] w-[1px] bg-neutral-400"></div> */}
                {/* <p className="font-light">IT CONSULTANCY SERVICES</p>
                 */}
              </div>
            </div>
          </div>
        </Link>
        <div>
          <button onClick={toggleDrawer}>
            <FaBars className="text-[1.5rem]  text-white" />
          </button>
          <div
            // open={isOpen}
            // onClose={toggleDrawer}
            // direction="right"
            className={`drawer ${isOpen ? "visible" : ""}  w-[70vw]`}
            // size={300}
            style={{
              backgroundColor: "black",
            }}
          >
            <div className=" h-[100vh] text-white py-2 px-2">
              <div className="  w-full h-[50x] p-4 flex flex-end justify-end">
                <button onClick={toggleDrawer} className=" ">
                  <RxCross2 className="text-[1.5rem] " />
                </button>
              </div>
              <div className="w-[90%] grid gap-4 mt-8 m-auto text-[1.4rem] font-bold  ">
                {nav_data.map((e, index) => {
                  if (e.hasSubMenu) {
                    return (
                      <div key={e.id} className="">
                        <button
                          onClick={() => setServiceHover(!serviceHover)}
                          className="w-full text-left hover:text-[1.5rem] py-2 px-4 hover:bg-white hover:text-green-400  duration-300   cursor-pointer  "
                        >
                          {" "}
                          {e?.title}
                        </button>
                        <div
                          className={
                            serviceHover
                              ? `h-[50vh]transition-all hover:text-[1.5rem] py-3 px-4 hover:text-green-400`
                              : `h-[0vh] z-[-999] hidden`
                          }

                          // open={activeCollapsible === index}
                          // onOpening={() => setActiveCollapsible(index)}
                          // onClosing={() => setActiveCollapsible(null)}
                        >
                          <div className="border-y-2  my-3 overflow-scroll bg-zinc-100   py-2 max-w-md  w-full   flex flex-col gap-2 justify-center">
                            {e.subMenu?.map((subItem) => (
                              <Link
                                href={subItem.url}
                                onClick={() => {
                                  toggleDrawer(); // Close the drawer
                                  setActiveCollapsible(null); // Close the collapsible
                                }}
                                className="text-text font-normal text-base  group py-3 px-4  hover:bg-white hover:text-green-400   block  "
                                key={subItem.id}
                              >
                                {subItem.title}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  } else {
                    return (
                      <Link
                        href={e.url}
                        onClick={toggleDrawer}
                        className=" hover:text-[1.5rem] py-2 px-4 hover:bg-white hover:text-green-400  duration-300   cursor-pointer  "
                        key={e.id}
                      >
                        {e.title}
                      </Link>
                    );
                  }
                })}
              </div>
              <div className="w-full px-6 text-white h-16 pt-8 flex justify-start items-center">
                <div className="flex flex-row text-sm space-x-5 md:space-x-5 items-center">
                  <div className="hover:translate-y-[-3px] duration-300">
                    <a
                      href="https://www.linkedin.com/company/ackresponse"
                      target="_blank"
                    >
                      {" "}
                      <BiLogoLinkedinSquare size={30} />
                    </a>
                  </div>
                  <div className="hover:translate-y-[-3px] duration-300">
                    <a
                      href="https://www.instagram.com/ackresponse/"
                      target="_blank"
                    >
                      {" "}
                      <BsInstagram size={25} />
                    </a>
                  </div>
                  <div className="hover:translate-y-[-3px] duration-300">
                    <a href="https://x.com/ackresponse" target="_blank">
                      {" "}
                      <FaSquareXTwitter size={26} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex w-[90%] py-[.8rem]   text-white  m-auto   items-center justify-between">
        <Link href={"/"}>
          <div className="w-auto     relative ">
            <div className="flex flex-col justify-start items-center space-x-1 text-[20px] md:text-[25px] lg:text-[28px] min-[1900px]:text-[40px] leading-[30px] md:leading-[42px] text-transparent bg-clip-text text-white font-[500]">
              <div className="flex">
                {/* <Image className="md:h-11 md:w-30 " src="/image/ackresponse-logo-final.png" alt="logo" height={200} width={200}/> */}
                <span className="font-semibold">ackresponse</span>
                <span className="text-green-400 font-bold">.</span>
              </div>

              <div className="text-[0.5rem]  text-black flex flex-row  absolute mt-[1.3rem]  w-full">
                {/* <div className="h-[18px] w-[1px] bg-neutral-400"></div> */}
                {/* <p className="font-light">IT CONSULTANCY SERVICES</p> */}
              </div>
            </div>
          </div>
        </Link>
        <div className="flex  justify-between items-center gap-6 lg:gap-8">
          {nav_data.map((item, i) => (
            <div
              className="group flex justify-between items-center "
              key={item.id}
            >
              <div className="group transition-all    duration-300 ease-in-out cursor-pointer flex items-center gap-0">
                {item?.url ? (
                  <Link
                    href={item.url}
                    onMouseLeave={() => {
                      setTimeout(() => {
                        setClicked(false);
                      }, 300);
                      setHoveringWhich(undefined);
                    }}
                    onClick={() => {
                      setClicked(false);

                      setIsHover(false);
                      setHoveringWhich(undefined);
                    }}
                    className="expanding-line  font-[700] py-1  block"
                  >
                    {item?.title}
                  </Link>
                ) : (
                  <span className="expanding-line hover:font-[600] font-[600]  py-1 px-1">
                    {item?.title}
                  </span>
                )}
                {item?.hasSubMenu ? (
                  <PiCaretDownBold className="group-hover:rotate-180 transition-all ease-in-out duration-300" />
                ) : null}
              </div>

              {item?.hasSubMenu ? (
                <div
                  className={`${
                    clicked ? "group-hover:h-[0vh]" : "group-hover:h-[59vh]"
                  } absolute flex top-[85px]  left-0 bg-[#000]  h-0 w-full transition-all ease-in-out duration-500 overflow-hidden shadow-2xl shadow-black/20`}
                >
                  <div className="flex gap-2  w-[70vw] mx-auto justify-between overflow-hidden">
                    <div className="max-w-md w-full flex  flex-col gap-2 justify-center">
                      {item.subMenu?.map((subItem, j) => (
                        <Link
                          href={subItem.url}
                          className=" block animate_container"
                          key={subItem.id}
                          id="link"
                        >
                          <div
                            className={`
                              cursor-pointer max-w-md w-full flex font-light hover:text-green-400 hover:font-semibold  items-center justify-between py-2 text-[1.1rem] hover:text-[1.2rem] px-6 transition-all duration-300  peer`}
                            onMouseEnter={() => {
                              setIsHover(true);
                              setHoveringWhich([i, j]);
                            }}
                            onClick={() => {
                              setClicked(true);
                              setTimeout(() => {
                                setClicked(false);
                              }, 500);
                              setIsHover(false);
                              // setClicked(true);
                              setHoveringWhich(undefined);
                            }}
                            style={{
                              borderBottom:
                                isHover &&
                                hoveringWhich?.[0] === i &&
                                hoveringWhich?.[1] === j
                                  ? "10px"
                                  : "initial",

                              borderColor:
                                isHover &&
                                hoveringWhich?.[0] === i &&
                                hoveringWhich?.[1] === j
                                  ? "black"
                                  : "initial",
                            }}
                          >
                            {subItem?.title}
                          </div>
                        </Link>
                      ))}
                    </div>

                    {hoveringWhich ? (
                      <div
                        className={`
                                          rounded-xl px-3 text-white  py-20 font-[300] h-[70%] w-[60%] my-auto flex flex-col justify-between  macbook16inch 
                                            ${
                                              nav_data[hoveringWhich[0]]
                                                ?.subMenu?.[hoveringWhich[1]]
                                                ?.bg
                                            }
                                        `}
                        style={{
                          background: `${
                            nav_data[hoveringWhich[0]]?.subMenu?.[
                              hoveringWhich[1]
                            ]?.bg
                          }`,
                        }}
                      >
                        {/* <h1 className="text-[.8rem] lg:text-[1.2rem] min-[1900px]:text-[1.7rem] font-[600]">
                                    {nav_data[hoveringWhich[0]]?.subMenu?.[hoveringWhich[1]]?.header}
     
                                  </h1> */}
                        <p className="mt-0 mb-4 text-[#4ade80]">
                          {
                            nav_data[hoveringWhich[0]]?.subMenu?.[
                              hoveringWhich[1]
                            ]?.description
                          }
                        </p>
                        <Link
                          href={
                            nav_data[hoveringWhich[0]]?.subMenu?.[
                              hoveringWhich[1]
                            ]?.url || ""
                          }
                        >
                          <button
                            onClick={() => {
                              setClicked(true);
                              setTimeout(() => {
                                setClicked(false);
                              }, 300);
                            }}
                            className="text-black w-1/8 small hover:text-text rounded bg-[#4ade80] px-3 py-3"
                          >
                            Find out more
                          </button>
                        </Link>
                      </div>
                    ) : (
                      <div
                        className={`text-white md:ml-3 rounded-xl px-5 py-5 h-[70%] w-[60%] my-auto bg-gradient-to-r from-[#000] to-[#111] `}
                      >
                        <h1 className="text-[.8rem] lg:text-[1.3rem] min-[1900px]:text-[1.7rem] font-[600] text-[#4ade80]">
                          {item?.img_title}
                        </h1>
                        <br />
                        {/* <p className="mt-10 mb-16 font-[300] text-[#4ade80]">
                                    {item?.img_desc}
                                  </p> */}
                        <Link href={item?.img_url || ""}>
                          <button
                            onClick={() => {
                              setClicked(true);
                              setTimeout(() => {
                                setClicked(false);
                              }, 300);
                            }}
                            className="text-black w-auto small hover:text-text rounded bg-[#4ade80] btn px-3 py-3"
                          >
                            Let&apos;s Connect
                          </button>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </div>

        <div
          className="
          items-center gap-1
          text-gray-400
          sm:flex  
          lg:flex
          lg:portrait:hidden
          md_screen_hidden_landscape {

        "
        >
          <div className="group transition-all">
            <Link
              href="/service/cloud"
              className="expanding-line tracking-tighter text-[.8rem]  font-[500]  py-1 px-1"
            >
              Cloud
            </Link>
          </div>
          <div className="group transition-all">
            <Link
              href="/service/automation"
              className="expanding-line tracking-tighter text-[.8rem]  font-[500]  py-1 px-1"
            >
              DevOps/Automations
            </Link>
          </div>
          <div className="group transition-all">
            <Link
              href="/service/cloud"
              className="expanding-line tracking-tighter text-[.8rem]  font-[500]  py-1 px-1"
            >
              OpenStack
            </Link>
          </div>
          <div className="group transition-all">
            <Link
              href="/service/mobileApp"
              className="expanding-line tracking-tighter text-[.8rem]  font-[500]  py-1 px-1"
            >
              Mobile
            </Link>
          </div>
          {/* <div className="group transition-all">
            <span className="expanding-line tracking-tighter text-[.8rem]  font-[500]  py-1 px-1">
              Mobile
            </span>
          </div> */}
        </div>
      </div>
    </div>
  );
}
