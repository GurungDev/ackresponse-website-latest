
import DevOpsToUs from "@/components/service/devOps/DevOpsToUs";
import "../../../style/background_images.css";
import ServiceBenefits from "@/components/service/service-benefits";
import ServiceSolutions from "@/components/service/service-solutions-small";
import ServiceInsightsSection from "@/components/service/service-insights-section";
import ConnectCompany from "@/components/company-contact";
import AutomationTechStack from "@/components/service/devOps/AutomationTechStack";


export default function Cicd() {
  return (
    <div className="">
      {/* <Slider_landing_page
        slider={[
          {
            link: "/insight/migrateYourOldLegacyInfrastructureAndApplicationsToTheCloud",
            slider_title: "Cloud",
            paragraph: "This is a line for a paragraph",
            // page: "Service/ CICD Automation",
            image:
              "/image/Automate_your_entire_Software_Development_Life_Cycle_processes.jpg",
            title: "Think Cloud From Get-Go",
          },
          {
            link: "/insight/migrateYourOldLegacyInfrastructureAndApplicationsToTheCloud",
            slider_title: "Containerize",
            paragraph: "This is a line for a paragraph",
            // page: "Service/ CICD Automation",
            image:
              "/image/Containerize_and_deploy_applications_on_the_cloud.jpg",
            title: "Containerize and deploy applications on the cloud",
          },
          {
            link: "/insight/migrateYourOldLegacyInfrastructureAndApplicationsToTheCloud",
            slider_title: "Leverage",
            paragraph: "This is a line for a paragraph",
            // page: "Service/ CICD Automation",
            image: "/image/Leverage_cloud_to_maximize_the_business_values.jpg",
            title: "Leverage cloud to maximize the business values",
          },

          {
            link: "/insight/migrateYourOldLegacyInfrastructureAndApplicationsToTheCloud",
            slider_title: "Migrate",
            paragraph: "This is a line for a paragraph",
            // page: "Service/ CICD Automation",
            image:
              "/image/Migrate your_old_legacy_infrastructure_and_application_to_the_cloud.jpg",
            title:
              "Migrate your old legacy infrastructure and application to the cloud",
          },
        ]}
      /> */}
      {/* <News_slider
        slides={[
          {
            id: 1,

            title:
              "Automate your entire Software Development Life Cycle processes ",
          },
          {
            id: 2,

            title: "Containerize and deploy applications on the cloud",
          },
          {
            id: 3,

            title: "Leverage cloud to maximize the business values",
          },

          {
            id: 4,

            title:
              "Migrate your old legacy infrastructure and application to the cloud",
          },
        ]}
        buttonDiv={" "}
        button={
          " small  border-[1px] border-secondary    bg-accent   text-text hover:bg-white rounded-[2px] shadow  py-2 px-5   duration-300"
        }
        background={"  px-20 lg:px-40 text-text   items-center   lg:pl-[15em]"}
        backgroundColor={"bg-white border-b-[2px]"}
        side_button={
          "border-black text-text hover:bg-secondary hover:border-white hover:text-white"
        }
      /> */}

    <div className=" w-full h-full mt-16 md:mt-20">
        <div className="flex flex-col h-screen w-full justify-center
          py-9 px-7 
          md:flex md:flex-col md:px-10
          md:justify-center
          lg:flex lg:flex-col  lg:px-20     
          IpadProJustifyCenter
          bg-[url('/servicepage/devOps/devops_page.jpg')] 
          bg-cover
          bg-center
          md:bg-fixed
          lg:bg-fixed 
            
          lg:bg-no-repeat
          IPadProBackground
          text-white
        ">
        <div className='space-y-3 
            
            md:flex md:flex-col 
            md:justify-center md:mt-0 md:space-y-6 md:mb-0  md:px-20
            md:w-full
            lg:mb-32 lg:px-24
             //lg:ml-20 lg:w-full 
            IpadProMarginBottomReset '>
          <p className='
              text-5xl
              md:text-5xl
              lg:text-6xl
              w-1/2
              
          '>
           DevOps Practices - GitOps - Automations
          </p>
          <p className='
              text-xl
              w-full
        
              IpadProWidth
              md:text-2xl
              lg:text-2xl
              lg:landscape:w-[75%]
          '>
            Whether it&apos;s a full-scale implementation or specific components, we can help automate the Software Development Lifecycle (SDLC) for seamless application integration and deployment.
          </p>
        </div>
        </div>
         <div className="">
         <ServiceSolutions
        title={"Offerings"}
        slides={[
                {
                  image: "/servicepage/devOps/cicdjenkins.jpg",
                  title: "CI/CD with Jenkins",
                  bg: "bg-yellow-400",
                  description: "Streamline your development with our Jenkins CI/CD and DevOps services for faster, reliable delivery.",
                },
                {
                  image: "/servicepage/devOps/gitopsargocd.jpg",
                  title: "GitOps with ArgoCD",
                  bg: "bg-purple-400",
                  description: "Streamline app and infrastructure delivery with our ArgoCD GitOps service for seamless automation.",
                },
                {
                  image: "/servicepage/devOps/cicdgithubaction.jpg",
                  title: "CI/CD with GitHub Actions",
                  bg: "bg-green-400",
                  description: "Optimize your pipeline with our CI/CD DevOps service using GitHub Actions for fast, automated deployments.",
                },
                {
                  image: "/servicepage/devOps/cicdgitlabci.jpg",
                  title: "CI/CD with GitLab CI",
                  bg: "bg-purple-400",
                  description: "Enhance your workflow with our CI/CD service using GitLab CI for quick, automated deployments.",
                },
                {
                  image: "/servicepage/devOps/cicdcloudbuild.jpg",
                  title: "CI/CD with Google Cloud Build",
                  bg: "bg-red-400",
                  description: "Accelerate your deployments with our CI/CD service using Google Cloud Build for seamless automation and efficiency.",
                },
                {
                  image: "/servicepage/devOps/gitopsfluxcd.jpg",
                  title: "GitOps with FluxCD",
                  bg: "bg-blue-400",
                  description: "Enhance your workflow with our FluxCD GitOps service for effortless deployments and simplified infrastructure management.",
                },
                {
                  image: "/servicepage/devOps/cicdjenkins.jpg",
                  title: "CI/CD with Jenkins",
                  bg: "bg-yellow-400",
                  description: "Streamline your development with our Jenkins CI/CD and DevOps services for faster, reliable delivery.",
                },
                {
                  image: "/servicepage/devOps/gitopsargocd.jpg",
                  title: "GitOps with ArgoCD",
                  bg: "bg-purple-400",
                  description: "Streamline app and infrastructure delivery with our ArgoCD GitOps service for seamless automation.",
                },
                {
                  image: "/servicepage/devOps/cicdgithubaction.jpg",
                  title: "CI/CD with GitHub Actions",
                  bg: "bg-green-400",
                  description: "Optimize your pipeline with our CI/CD DevOps service using GitHub Actions for fast, automated deployments.",
                },
                {
                  image: "/servicepage/devOps/cicdgitlabci.jpg",
                  title: "CI/CD with GitLab CI",
                  bg: "bg-purple-400",
                  description: "Enhance your workflow with our CI/CD service using GitLab CI for quick, automated deployments.",
                },
                {
                  image: "/servicepage/devOps/cicdcloudbuild.jpg",
                  title: "CI/CD with Google Cloud Build",
                  bg: "bg-red-400",
                  description: "Accelerate your deployments with our CI/CD service using Google Cloud Build for seamless automation and efficiency.",
                },
                {
                  image: "/servicepage/devOps/gitopsfluxcd.jpg",
                  title: "GitOps with FluxCD",
                  bg: "bg-blue-400",
                  description: "Enance your workflow with our FluxCD GitOps service for effortless deployments and simplified infrastructure management.",
                },
                {
                  image: "/servicepage/devOps/cicdjenkins.jpg",
                  title: "CI/CD with Jenkins",
                  bg: "bg-yellow-400",
                  description: "Streamline your development with our Jenkins CI/CD and DevOps services for faster, reliable delivery.",
                },
                {
                  image: "/servicepage/devOps/gitopsargocd.jpg",
                  title: "GitOps with ArgoCD",
                  bg: "bg-purple-400",
                  description: "Streamline app and infrastructure delivery with our ArgoCD GitOps service for seamless automation.",
                },
                {
                  image: "/servicepage/devOps/cicdgithubaction.jpg",
                  title: "CI/CD with GitHub Actions",
                  bg: "bg-green-400",
                  description: "Optimize your pipeline with our CI/CD DevOps service using GitHub Actions for fast, automated deployments.",
                },
                {
                  image: "/servicepage/devOps/cicdgitlabci.jpg",
                  title: "CI/CD with GitLab CI",
                  bg: "bg-purple-400",
                  description: "Enhance your workflow with our CI/CD service using GitLab CI for quick, automated deployments.",
                },
                {
                  image: "/servicepage/devOps/cicdcloudbuild.jpg",
                  title: "CI/CD with Google Cloud Build",
                  bg: "bg-red-400",
                  description: "Accelerate your deployments with our CI/CD service using Google Cloud Build for seamless automation and efficiency.",
                },
                {
                  image: "/servicepage/devOps/gitopsfluxcd.jpg",
                  title: "GitOps with FluxCD",
                  bg: "bg-blue-400",
                  description: "Enhance your workflow with our FluxCD GitOps service for effortless deployments and simplified infrastructure management.",
                },
              ]}
            />
        </div> 
        <AutomationTechStack/>
       
  
      </div>

          

      <ServiceBenefits
        classNames="paragraph"
        title="DevOps practices & automations brings significant benefits to businesses by accelerating time to market, fostering collaboration among teams, and improving overall code quality. It enhances efficieny by automating repetitive tasks, ensures consistent and reliable deployments, and provides a rapid feedback loop for early issue detection."
        benefits={[
          "Accelerates time to market for software features and updates.",
          "Fosters Collaboration among development, testing and opereations teams.",
          "Improves overall code quality through automated testing and analysis.",
          "Increases efficiency by streamlining workflows and reducing manual effort.",
          "Ensures consistent and reliable deployments across various environments.",
          "Provides a rapid feedback loop for early issue detection and resolution.",
          "Supports scalable deployment and enhances flexibility in software development.",
          
        ]}
      />

<DevOpsToUs/>

      <ServiceInsightsSection title={"Insights and trends"} />
      {/* <div className="relative">
        <News_slider
          buttonDiv={" "}
          button={
            " small border-[1px] border-white  shadow-md  bg-white shadow-md   text-text btn-1     py-2 px-5   duration-300"
          }
          backgroundColor={"bg-secondary"}
          background={
            " px-20 lg:px-40 text-white   items-center   lg:pl-[15em]"
          }
          side_button={
            "border-white text-white  hover:bg-white hover:text-text"
          }
          slides={[
            {
              id: 1,

              title:
                "Automate your entire Software Development Life Cycle processes ",
            },
            {
              id: 2,

              title: "Containerize and deploy applications on the cloud",
            },
            {
              id: 3,

              title: "Leverage cloud to maximize the business values",
            },

            {
              id: 4,

              title:
                "Migrate your old legacy infrastructure and application to the cloud",
            },
          ]}
        />
      </div> */}
      {/* <ConnectCloud
        title="Ready to automate an entire Software Development Lifecycle (SDLC)?"
        paragraph="CICD is the way to go for faster development and deployment."
        link=""
      /> */}
      <ConnectCompany />
    </div>
  );
}
