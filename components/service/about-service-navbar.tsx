"use client";
import { useEffect, useState } from "react";

import Link from "next/link";

import { cn } from "@/lib/utils";

import { service_navbar_data } from "@/data/service-navbar-data";
import { BsArrowRightShort } from "react-icons/bs";

export default function AboutServiceNavbar() {
  const [currentSection, setCurrentSection] = useState<string>();

  const trackCurrentSection = () => {
    if (typeof window !== "undefined") {
      const sections = document.querySelectorAll("section");
      const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      };

      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
          }
        });
      }, options);

      sections.forEach((section) => {
        observer.observe(section);
      });
    }
  };
  const handleLinkClick = (event: React.MouseEvent, targetId: string) => {
    event.preventDefault();

    const viewportHeight = window.innerHeight;
    const offset = viewportHeight * 0.1; // Adjust the multiplier as needed

    // Get the position of the target section
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      const targetTop = targetSection.getBoundingClientRect().top;

      // Scroll to the target position with the calculated offset
      window.scrollTo({
        top: window.scrollY + targetTop - offset,
        behavior: "smooth", // You can change this to "auto" for instant scrolling
      });
    }
  };
  useEffect(() => {
    trackCurrentSection();
  }, [currentSection]);

  return (
    <div
      id="intro"
      className="hidden md:block min-[1900px]:hidden   w-[100%] m-auto bg-secondary sticky md:top-[68px] lg:top-[65px] z-[989]"
    >
      <div className=" w-[90%] m-auto flex justify-between flex-stretch items-center">
        <div className=" flex justify-between     overflow-scroll no-scrollbar">
          {service_navbar_data.map((link) => (
            <Link
              key={link.id}
              href={link.path}
              onClick={(event) =>
                handleLinkClick(event, link.path.replace("#", ""))
              }
              className={cn(
                "block py-[.8em] px-3 font-[200] flex-1 hover:bg-secondary/10 text-white  transition-all ease-in-out duration-300 ",
                {
                  "bg-white text-text font-[400]":
                    currentSection === link.path.replace("#", ""),
                }
              )}
              shallow
            >
              <h5 className=" text-[.9rem]  text-center">{link.label}</h5>
            </Link>
          ))}
        </div>

        <Link
          href="/contact"
          className="  group font-[600] text-[1.1rem] text-white py-2 px-3 flex items-center"
        >
          <span>Get in touch</span>
          <BsArrowRightShort
            size={28}
            className="group-hover:translate-x-[3px] font-normal duration-300"
          />
        </Link>
      </div>
    </div>
  );
}
