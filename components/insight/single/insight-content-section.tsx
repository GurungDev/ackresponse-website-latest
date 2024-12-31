"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function InsightContentSection() {
  const insightData = [
    {
      id: "aside-introduction",
      label: "Introduction",
      name: "introduction",
      path: "#introduction",
      paragraph:
        "Witnessing the seismic shift brought on by the pandemic during my years of collaboration with insurers has been eye-opening. It's like the world suddenly woke up to the importance of protection, with customers more engaged than ever before and willing to share their information to make such interactions more personalized. Mortality, morbidity and the fragility of earnings have become stark realities, fueling a newfound awareness. And guess what? Insurers have pivoted the way they delivered their services, really racing toward the digital frontier with the help of cutting-edge technologies. But here we are, three years down the line, and certain aspects of the customer journey remain all too familiar. Customers still find themselves lost in a labyrinth of paperwork and red tape, while insurers treat their unique situations like just another file in the pile.",
    },
    {
      id: "aside-solutions",
      label: "Solutions",
      name: "solutions",
      path: "#solutions",
      paragraph:
        "Witnessing the seismic shift brought on by the pandemic during my years of collaboration with insurers has been eye-opening. It's like the world suddenly woke up to the importance of protection, with customers more engaged than ever before and willing to share their information to make such interactions more personalized. Mortality, morbidity and the fragility of earnings have become stark realities, fueling a newfound awareness. And guess what? Insurers have pivoted the way they delivered their services, really racing toward the digital frontier with the help of cutting-edge technologies. But here we are, three years down the line, and certain aspects of the customer journey remain all too familiar. Customers still find themselves lost in a labyrinth of paperwork and red tape, while insurers treat their unique situations like just another file in the pile.",
    },
    {
      id: "aside-benefits",
      label: "Benefits",
      name: "benefits",
      path: "#benefits",
      paragraph:
        "Witnessing the seismic shift brought on by the pandemic during my years of collaboration with insurers has been eye-opening. It's like the world suddenly woke up to the importance of protection, with customers more engaged than ever before and willing to share their information to make such interactions more personalized. Mortality, morbidity and the fragility of earnings have become stark realities, fueling a newfound awareness. And guess what? Insurers have pivoted the way they delivered their services, really racing toward the digital frontier with the help of cutting-edge technologies. But here we are, three years down the line, and certain aspects of the customer journey remain all too familiar. Customers still find themselves lost in a labyrinth of paperwork and red tape, while insurers treat their unique situations like just another file in the pile.",
    },
  ];

  const [currentSection, setCurrentSection] = useState<string>();

  const trackCurrentSection = () => {
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
  };

  useEffect(() => {
    trackCurrentSection();
  }, [currentSection]);
  return (
    <>
      {" "}
      <div className="app-layout sticky top-[70px] z-[999]">
        <div className=" p-2 md:p-3 bg-secondary rounded-md flex justify-between h-fit w-full gap-4 overflow-scroll no-scrollbar">
          {insightData.map((link) => (
            <Link
              key={link.id}
              href={link.path}
              className={cn(
                "block py-2 flex-1 hover:bg-white/10 rounded-md transition-all ease-in-out duration-300 px-4",
                {
                  "bg-white/20": currentSection === link.path.replace("#", ""),
                }
              )}
              shallow
            >
              <h5 className="text-white text-base md:text-xl text-center">
                {link.label}
              </h5>
            </Link>
          ))}
        </div>
      </div>
      {insightData.map((e) => {
        return (
          <section
            key={e.id}
            id={e.name}
            className="px-10 my-20 w-full text-[#151f27] grid gap-5"
          >
            <div className="mt-20" id="introduction">
              <h1 className="text-5xl pb-10 font-medium py-2 text-neutral-600">
                {e.label}
              </h1>
              <p>{e.paragraph}</p>
            </div>
          </section>
        );
      })}
    </>
  );
}
