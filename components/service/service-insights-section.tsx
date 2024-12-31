"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

type Props = {
  title: string;
};
export default function ServiceInsightsSection({ title }: Props) {
  const data = [
    {
      id: "i1",
      title: "Hybrid cloud",
      image: "/insightpage/insights/hybrid-cloud.jpg",
      bg: "bg-blue-400",
      url: "/insight/hybrid_cloud",
      boxHeight: "h-[410px] group-hover:h-[200px]",
      content: "h-[500px]",
      paragraph:
        "A game changer for businesses concerned about data security and sensitive workloads. The hybrid cloud model, which combines both public and private cloud infrastructure, offers a compelling solution.",
    },
    {
      id: "i2",
      title: "Unleashing New Possibilities",
      image: "/insightpage/insights/5g-drone-app.jpg",
      bg: "bg-red-400",
      url: "/insight/5g-drone-apps",
      boxHeight: " h-[350px] group-hover:h-[200px]",
      content: "h-[420px] ",
      paragraph:
        "The rapid evolution of 5G technology, combined with advancements in drone capabilities, is ushering in a new era of possibilities, particularly for innovators and entrepreneurs eager to explore cutting-edge applications.",
    },
    {
      id: "i3",
      image: "/insightpage/insights/cid.jpg",
      title:
        "Importance of DevOps, GitOps & automations for SDLC",
      bg: "bg-pink-400",
      url: "/insight/importance_of_devOps_gitOps_and_CICD",
      boxHeight: "h-[410px] group-hover:h-[200px]",
      content: "h-[500px]",
      paragraph: "In today's fast-paced technological landscape, businesses and organizations are constantly looking for ways to innovate, deliver faster, and remain competitive.",
    },
    {
      id: "i4",
      image: "/insightpage/insights/openinfra-summit-1.jpg",
      title: "Supercharging, empowering and shaping an infrastructure history: Report on the first OpenInfra Asia 2024 Summit",
      bg: "bg-yellow-400",
      url: "/insight/openInfra_asia_2024_summit",
      boxHeight: "h-[410px] group-hover:h-[200px]",
      content: "h-[500px]",
      paragraph: "The first-ever OpenInfra Asia 2024 Summit, held from September 3-4 in Suwon, South Korea, marked a significant milestone in the open-source community.",
    },
    {
      id: "i5",
      image: "/insightpage/rise_of_container/container.jpg",
      title: "What is Container?",
      bg: "bg-purple-400",
      url: "/insight/rise_of_containers",
      boxHeight: "h-[350px] group-hover:h-[200px]",
      content: "h-[420px]",
      paragraph: "Containers have emerged as a game-changing technology that revolutionizes how applications are packaged, deployed, and managed.",
    },
    {
      id: "i6",
      image: "/insightpage/insights/k8s-1.jpg",
      title: "What is Kubernetes (K8s)?",
      bg: "bg-green-400",
      url: "/insight/kubernetes",
      boxHeight: "h-[410px] group-hover:h-[200px]",
      content: "h-[500px]",
      paragraph: "Transforming Application Deployment for Enterprises and Organizations. In the modern digital landscape, businesses and organizations face increasing pressure to develop, deploy, and manage applications quickly, efficiently, and at scale.",
    },
    // {
    //   id: "i6",
    //   image: "/insightpage/insights/i6.jpg",
    //   title: "What is Serverless Computing?",
    //   bg: "bg-cyan-400",
    //   url: "/insight/migrateYourOldLegacyInfrastructureAndApplicationsToTheCloud",
    //   boxHeight: "h-[350px] group-hover:h-[190px]",
    //   content: "h-[420px]",
    //   paragraph: " Hybrid cloud safeguards sensitive data by enabling businesses to store it in a private, secure environment while leveraging public cloud benefits for less critical workloads.",
    // },
    {
      id: "i7",
      image: "/insightpage/hai/high-availability.jpg",
      title: "Importance of High Availability infrastructure",
      bg: "bg-purple-500",
      url: "/insight/importance_of_high_availability_infrastructure",
      boxHeight: "h-[410px] group-hover:h-[200px]",
      content: "h-[500px]",
      paragraph: "High Availability ensures that systems and applications remain operational even during unexpected failures, maintaining service continuity.",
    },
    {
      id: "i8",
      image: "/insightpage/insights/cloudnative.jpg",
      title: "Cloud-native Application Development",
      bg: "bg-red-400",
      url: "/insight/cloud_native_application_development",
      boxHeight: "h-[350px] group-hover:h-[190px]",
      content: "h-[420px]",
      paragraph: "Cloud-native application development is a modern approach to building, deploying, and managing applications designed to take full advantage of the cloud computing model.",
    },
    {
      id: "i9",
      image: "/insightpage/insights/empwr-yng-entrprnrs.jpg",
      title: "Empowering Young Entrepreneurs with Cutting-Edge IT Solutions",
      bg: "bg-blue-600",
      url: "/insight/empowering_young_entrepreneurs",
      boxHeight: "h-[410px] group-hover:h-[200px]",
      content: "h-[500px]",
      paragraph: "In today's rapidly evolving technological landscape, the key to success often lies in innovation. As an IT consultancy firm, we are committed not only to providing IT services but also to fueling the entrepreneurial spirit in young minds eager to turn their visionary ideas into reality.",
    },
    {
      id: "i10",
      image: "/insightpage/insights/leverageCloud.jpg",
      title: "Cloud is a centerpiece of new digital experience",
      bg: "bg-orange-400",
      url: "/insight/migrateLeverageCloud",
      boxHeight: "h-[350px] group-hover:h-[190px]",
      content: "h-[420px]",
      paragraph: 'In the fast-changing world of technology, the saying "Out with the old, In with the new" holds the truth.',
    },
    {
      id: "i11",
      image: "/insightpage/insights/pwr-public-private-cloud.jpg",
      title: "The Power of Public and Private Cloud for Long-Term Success",
      bg: "bg-blue-400",
      url: "/insight/modernize_your_business",
      boxHeight: "h-[410px] group-hover:h-[200px]",
      content: "h-[500px]",
      paragraph: "In today's fast-paced digital era, many businesses in Nepal are yet to unlock the full potential of cloud technology. By modernizing both applications and infrastructure, organizations can transform their operations, reduce costs, and position themselves for future growth.",
    },
    {
      id: "i12",
      image: "/insightpage/insights/pblic-privt.jpg",
      title: "Balanced approach that includes both private and public cloud solutions",
      bg: "bg-sky-400",
      url: "/insight/cloud_repatriation",
      boxHeight: "h-[350px] group-hover:h-[190px]",
      content: "h-[420px]",
      paragraph: "The adoption of public cloud services has been a key component in this digital evolution, enabling companies to deploy containerized applications with greater ease and flexibility.",
    },
  ];


  const ref = useRef<HTMLDivElement>(null);
  const [sliceNumber, setNumber] = useState(data.length); //Activate this line of code when there is less content and want to display all.
  // const [sliceNumber, setNumber] = useState(8); //Activate this line of code when there is more content and to limit.

  return (
    <section ref={ref} id="insights" className="bg-black text-white py-10 md:py-12 lg:py-20 md:px-4 lg:px-10 ">
      <div className="p-4 lg:pb-10">
        <h1 className="text-2xl md:text-4xl font-medium py-2 pb-5 text-center">
          {title}
        </h1>
      </div>
      <div className="w-full flex justify-center items-center md:px-2 px-4">

      {/* <Masonry columns={
        { xs: 1, sm: 2, md: 3, lg: 4 }
      } spacing={
        { xs: 3, sm: 3, md: 3, lg: 4 }
      }>

        {data.slice(0, sliceNumber).map((e, key) => (
          <Link
            href={e.url}
            key={key}
            className={`${e.content} bg-black py-3 overflow-hidden group`}
          >
            <Image
              priority={true}
              src={e.image}
              alt="Banner"
              width={1020}
              height={1080}
              className={`${e.boxHeight} duration-300 object-cover w-full  rounded-md transition-all ease-in-out`}
            />
            <div className="bg-black w-full py-3 duration-500 ease-in-out px-4">
              <div className={`w-[15px] h-[5px] ${e.bg}`} />
              <h1 className="text-[1.2rem] font-[400] text-white py-2">{e.title}</h1>
            </div>
            <p className="text-[0.95rem] font-light text-white px-4">
              {e.paragraph}
            </p>
          </Link>

        ))}
         </Masonry> */}
      </div>
      {/* <button
        onClick={() => {
          sliceNumber == data.length ? setNumber(8) : setNumber(data.length);
          sliceNumber == data.length
            ? ref.current?.scrollIntoView({ behavior: "smooth" })
            : null;
        }}
        className={`  px-5 py-2 m-auto  group items-center  duration-300 bg-btn_color hover:px-6 transform-all flex  w-auto justify-between  text-text border-[1px] border-text mt-10   rounded-md  `}
      >
        <span className="group small">
          {sliceNumber == data.length ? "Load less" : "Load more"}
        </span>
        <BsArrowRightShort className="text-[1.5em]    duration-300 " />
      </button> */}
    </section>
  );
}
