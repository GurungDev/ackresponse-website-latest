import ServiceInsightsSection from "@/components/service/service-insights-section";
import Swipper from "@/components/insight/swipper";
import "../../style/insight_animation.css";
import "../../style/text_animation.css";

import ConnectCompany from "@/components/company-contact";
import TopInsight from "@/components/insight/TopInsight";


const InsightHome = () => {


  return (
    <div className="bg-black">
    <TopInsight/>

      {/* <ServiceSolutions
        title={"Latest trends and releases"}
        slides={[
          {
            image: "/servicepage/cloud/offerings/o2.jpg",
            title: "Cloud Migration",
            bg: "bg-red-400",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quod, tenetur aut ipsa ea sit laboriosam sint optio amet delectus eligendi distinctio tempore ratione isteat quas  ",
          },
          {
            image: "/servicepage/cloud/offerings/o3.jpg",
            title: "Cloud application modernisation",
            bg: "bg-blue-400",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quod, tenetur aut ipsa ea sit laboriosam sint optio amet delectus eligendi distinctio tempore ratione isteat quas  ",
          },
          {
            image: "/servicepage/cloud/offerings/o4.jpg",
            title: "Cloud-native application development",
            bg: "bg-purple-400",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quod, tenetur aut ipsa ea sit laboriosam sint optio amet delectus eligendi distinctio tempore ratione isteat quas  ",
          },
          {
            image: "/servicepage/cloud/offerings/o1.jpg",
            title: " Cloud security",
            bg: "bg-red-400",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quod, tenetur aut ipsa ea sit laboriosam sint optio amet delectus eligendi distinctio tempore ratione isteat quas  ",
          },
          {
            image: "/servicepage/cloud/offerings/o5.jpg",
            title: "Cloud consulting",
            bg: "bg-purple-400",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quod, tenetur aut ipsa ea sit laboriosam sint optio amet delectus eligendi distinctio tempore ratione isteat quas  ",
          },
          {
            image: "/servicepage/cloud/offerings/o6.jpg",
            title: "Cloud operations",
            bg: "bg-blue-400",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quod, tenetur aut ipsa ea sit laboriosam sint optio amet delectus eligendi distinctio tempore ratione isteat quas  ",
          },
          {
            image: "/servicepage/cloud/offerings/o7.jpg",
            title: "DevOps",
            bg: "bg-red-400",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quod, tenetur aut ipsa ea sit laboriosam sint optio amet delectus eligendi distinctio tempore ratione isteat quas  ",
          },
          {
            image: "/servicepage/cloud/offerings/o1.jpg",
            title: "DevSecOps",
            bg: "bg-blue-400",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quod, tenetur aut ipsa ea sit laboriosam sint optio amet delectus eligendi distinctio tempore ratione isteat quas  ",
          },
        ]}
      /> */}

      <ServiceInsightsSection
        title={"Explore more articles and insights"}
      />

        <div className="w-full text-white">
        <div className="app-layout py-6">
          <div className="p-4  ">
          <h1 className="text-3xl md:text-3xl font-medium md:py-2 pb-5 text-center">
              Our services
            </h1>
          </div>
        </div>
        <div className=" mb-10 md:mb-0  md:py-8 w-[90%] md:w-[90%] m-auto">
          <Swipper />
        </div>
      </div>

      {/* <ConnectCloud
        title="Ready to automate an entire Software Development Lifecycle (SDLC)?"
        paragraph="CICD is the way to go for faster development and deployment."
        link=""
      /> */}
      <ConnectCompany />
    </div>
  );
};

export default InsightHome;
