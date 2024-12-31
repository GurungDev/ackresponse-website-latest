import Image from "next/image";
import React from "react";
import { FaLinkedin } from "react-icons/fa6";

interface TeamCardProps {
  name: string;
  position: string;
  profile: string;
  images: string[]; // Array of image URLs
}

const TeamCard: React.FC<TeamCardProps> = ({ name, position,profile, images }) => {
  return (
    <div className=" ">
      <Image
        src={profile}
        alt="Team member"
        width={1200}
        height={500}
        quality={100}
        className="h-[300px] w-[300px]  rounded-md "
      />

      <div className="flex flex-col">
        <div className="flex justify-between items-center w-full">
          <h4 className="font-bold paragraph">{name}</h4>
          <div className="flex  gap-2">
            {images.map((src, index) => (
              <Image
                key={index}
                src={src}
                alt={`Icon ${index}`}
                width={30}
                height={30}
                quality={100}
                className="w-[20px] "
              />
            ))}
          </div>
        </div>
        <p className="py-1 text-neutral-600 paragraph">{position}</p>
        <FaLinkedin size={25} className="text-neutral-700" />
      </div>
    </div>
  );
};

const ContentSection = () => {
  return (
    <div>
      <div className=" bg-gradient-to-r from-[#111] to-[#111]  py-20">
      <div className="grid app-layout my-14 
            items-center 
            gap-10 
            md:gap-20 
            lg:gap-40  lg:grid-cols-2">
          <h3 className=" text-3xl md:text-3xl md:font-[500] lg:text-4xl lg:font-[400]">
            Though small in size, we&apos;re relentless in our pursuit to empower
            businesses and organizations with innovative technology, unlocking
            their full potential and paving the way for extraordinary success.
          </h3>
          <p className="text-lg md:text-2xl md:font-light lg:text-[1.2rem] lg:leading-7 ">
            Drawing on a decade of experience in technology across various
            fields and fueled by a strong entrepreneurial spirit, we&apos;ve formed
            our company to share our expertise, tackle challenges of all sizes,
            and ensure our research and innovations stay at the forefront of
            emerging trends. This approach allows us to meet our client&apos;s needs
            with exceptional value and service.
          </p>
        </div>
      </div>
      {/* <div className="py-24 app-layout">
        <h2 className="pb-8 flex font-bold md:text-5xl">Team</h2>
        <div className="flex space-x-3">
          <TeamCard
            name="Sagar Gurung"
            position="Founder & CEO"
            images={["/image/uk.png", "/image/nepal.png"]}
            profile="/sg.png"
          />
          <TeamCard
            name="Nishan Gurung"
            position="Project Manager / Engineer"
            images={["/image/nepal.png"]}
             profile="/sg.png"
          />
        </div>
      </div> */}
    </div>
  );
};

export default ContentSection;
