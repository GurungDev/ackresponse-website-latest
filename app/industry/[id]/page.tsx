"use client";
import Swipper_insight from "@/components/hompage/insight slider";
import Contact_Us_Section from "@/components/insight/contact_us";
import Landing_Section from "@/components/landingSectionVideo";
import ReadMore from "@/components/read_more";
import StickyColumnsLayout from "@/components/twoColumnScroll/twoColumnScroll";
import Image from "next/image";
 
type IndustryProgressBar = {
  industry_type: string;
  short_description: string;
  image: string;
  link_insights: string;
};

const industryContent = {
  page_3: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
  when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
  It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
  desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical 
  Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney 
  College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going 
  through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 
  1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book 
  is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", 
  comes from a line in section 1.10.32.
  The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
  There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
  `,
};

const homePageTitle = {
  title_h1: "Industries / Retails",
  title_h2: `Embrace the Art of Shopping: 
    Where Every Purchase Paints a Unique Story.`,
  title_h3: `Feel free to adapt it to suit your branding and messaging needs.`,
  title_h4: `
    It is a long established fact that a reader will be distracted by the readable content of a
     page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less 
     normal distribution of letters, as opposed to using 'Content here, content here', making it look
     page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less 
     normal distribution of letters, as opposed to using 'Content here, content here', making it look
     page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less 
     normal distribution of letters, as opposed to using 'Content here, content here', making it look
     page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less 
     normal distribution of letters, as opposed to using 'Content here, content here', making it look
     page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less 
     normal distribution of letters, as opposed to using 'Content here, content here', making it look
      like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as 
      their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. 
      Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)`,
  about_image: `ary to popular beIt has roots in   The point of using Lorem Ipsum is thatv a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at h the cites of the word in classical literature, discovered the undoubtable source.`,
};

const retail_card = {
  card_1: {
    retail_image: "/assets/images/landing.jpg",
    about_image:
      "ary to popular beIt has roots in   The point of using Lorem Ipsum is thatv a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at h the cites of the word in classical literature, discovered the undoubtable source.",
    link_insights: "#",
  },
  card_2: {
    retail_image: "/assets/images/landing.jpg",
    about_image:
      "ary to popular beIt has roots in   The point of using Lorem Ipsum is thatv a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at h the cites of the word in classical literature, discovered the undoubtable source.",
    link_insights: "#",
  },
  card_3: {
    retail_image: "/assets/images/landing.jpg",
    about_image:
      "ary to popular beIt has roots in   The point of using Lorem Ipsum is thatv a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at h the cites of the word in classical literature, discovered the undoubtable source.",
    link_insights: "#",
  },
  card_4: {
    retail_image: "/assets/images/landing.jpg",
    about_image:
      "ary to popular beIt has roots in   The point of using Lorem Ipsum is thatv a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at h the cites of the word in classical literature, discovered the undoubtable source.",
    link_insights: "#",
  },
};

type CoverFlowData = {
  industry_type: string;
  image: string;
  link_insights: string;
};

const CoverFlowData: CoverFlowData[] = [
  {
    industry_type: "Retail",
    image: "/assets/images/bulb.jpg",
    link_insights: "/industries/retails",
  },
  {
    industry_type: "Media and Marketing",
    image: "/assets/images/landing.jpg",
    link_insights: "/",
  },
  {
    industry_type: "Finance and Banking",
    image: "/assets/images/indus.jpg",
    link_insights: "/",
  },
  {
    industry_type: "Telecom",
    image: "/assets/images/bulb.jpg",
    link_insights: "/",
  },
  {
    industry_type: "Insurance",
    image: "/assets/images/bulb.jpg",
    link_insights: "/",
  },
  {
    industry_type: "Media and Marketing",
    image: "/assets/images/landing.jpg",
    link_insights: "/",
  },
  {
    industry_type: "Transportation and Logistics",
    image: "/assets/images/indus.jpg",
    link_insights: "/",
  },
  {
    industry_type: "Media and Marketing",
    image: "/assets/images/bulb.jpg",
    link_insights: "/",
  },
];

const industryProgressBarData: IndustryProgressBar[] = [
  {
    industry_type: "Retail",
    short_description: "Short Description Over Here",
    image: "/assets/images/bulb.jpg",
    link_insights: "/industries/retails",
  },
  {
    industry_type: "Media and Marketing",
    short_description: "Short Description Over Here",
    image: "/assets/images/landing.jpg",
    link_insights: "/",
  },
  {
    industry_type: "Finance and Banking",
    short_description: "Short Description Over Here",
    image: "/assets/images/indus.jpg",
    link_insights: "/",
  },
  {
    industry_type: "Media and Marketing",
    short_description: "Short Description Over Here",
    image: "/assets/images/bulb.jpg",
    link_insights: "/",
  },
];

const Industry = () => {
  return (
    <div className="  w-full ">
      <Landing_Section
        title=" Pioneering the Future of Retail"
        description="Empowering Your Evolution into a Responsive and Regenerative
            Business"
        page=" Retail"
      />
      <div className="flex flex-col md:flex-row justify-center items-start p-3 my-20 md:p-6 gap-4 md:gap-6 ">
        <div className="text-center md:text-left md:w-2/5">
          <div className="font-bold text-3xl md:text-4xl text-center">
            Retail
          </div>
          <div className="mt-5 md:text-center md:text-[17px] ">
            <ReadMore text={homePageTitle.title_h4} />
          </div>
        </div>
        <div className="h-[60vh]   grid items-center justify-center">
          <Image
            src="/assets/images/retail11.png"
            alt=""
            height={500}
            width={550}
          />
        </div>
      </div>

      <div className="flex-col h-full justify-center items-center p-12">
        <div className="flex items-center mt-2 md:mt-3 transition-all animate-pulse">
          <div className="h-[1px] w-[100px] md:w-[200px] bg-gray-400"></div>
          <p className="text-lg md:text-4xl font-bold p-2 md:p-3 text-center md:text-right">
            Why to choose Our Industries
          </p>
          <div className="flex-1 h-[1px] w-[100px] md:w-[200px] bg-gray-400"></div>
        </div>
        <div className="w-[80%] text-center m-auto my-40 paragraph">
          {" "}
          Opting for a career in the retail industry offers numerous advantages.
          Firstly, it provides a diverse range of job opportunities,
          encompassing sales, customer service, marketing, logistics, and
          management roles. Additionally, the retail sector is a dynamic and
          ever-evolving field, making it ideal for those seeking innovation and
          adaptability in their careers. With opportunities for skill
          development and the chance to engage with a wide array of customers,
          retail can be a fulfilling and financially rewarding choice. Its
          potential for career growth further underscores why many individuals
          choose to pursue a path in the retail industry.
        </div>
        <div className="flex items-center mt-2 md:mt-3 transition-all animate-pulse">
          <div className="h-[1px] w-[100px] md:w-[100px] bg-gray-400"></div>
          <p className="text-lg md:text-4xl font-bold p-2 md:p-3 text-center md:text-right">
            Latest Updates
          </p>
          <div className="flex-1 h-[1px] w-[100px] md:w-[200px] bg-gray-400"></div>
        </div>
        <div className="">
          <StickyColumnsLayout />
        </div>
        <div className="flex flex-row items-center mt-3 transition-all animate-pulse p-3 md:p-6">
          <div className="h-[1px] w-[200px] md:w-[300px] lg:w-[400px] bg-gray-400 mb-3 md:mb-4"></div>
          <p className="text-3xl md:text-4xl font-bold p-3 text-center">
            Read Our Insights on Retails
          </p>
          <div className=" h-[1px] w-full md:w-[300px] lg:w-[400px] bg-gray-400"></div>
        </div>
        <div className="pt-10 ">
          <Swipper_insight />
        </div>
      </div>
      <Contact_Us_Section />
    </div>
  );
};

export default Industry;
