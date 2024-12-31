
"use client";

import contactUs from '@/animation/contactUs.json';
import ConnectCompany from "@/components/company-contact";
import Swipper from "@/components/insight/swipper";
import ServiceInsightsSection from "@/components/service/service-insights-section";
import Input from "@/components/ui/input";
import { countries } from "@/data/countries";
import { Listbox as HUIListbox, Switch, Transition } from "@headlessui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from 'framer-motion';
import Link from "next/link";
import { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { IoIosArrowDown } from "react-icons/io";
import "react-international-phone/style.css";
import Lottie from "react-lottie-player";
import { z } from "zod";

const schema = z.object({
  first_name: z.string().nonempty({ message: "First name is required" }),
  last_name: z.string().nonempty({ message: "Last name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z
    .string()
    .regex(
      /(\+\d{1,3}\s?)?((\(\d{3}\)\s?)|(\d{3})(\s|-?))(\d{3}(\s|-?))(\d{4})(\s?(([E|e]xt[:|.|]?)|x|X)(\s?\d+))?/g,
      "Invalid Phone Number"
    )
    .nonempty({ message: "Invalid phone number" }),
    country: z.string().nonempty({message: "Please select your country."}),
    company: z.string().nonempty({ message: "Company is required" }),
    message: z.string().nonempty({ message: "Message is required" }) 
  // budget: z
  //   .string()
  //   .nonempty({ message: "Budget is required" })
  //   .refine((value) => !isNaN(parseFloat(value)), {
  //     message: "Budget must be a numeric value",
  //   }),

  // job: z.string().nonempty({ message: "Job Role is required" }),
});

export type ContactFormValues = z.infer<typeof schema>;

export default function FormPage() {
  const [isListboxOpen, setIsListboxOpen] = useState(false);
  const [country, setCountry] = useState(countries[0]);
  const [consent, setConsent] = useState(false);
  // const [subscribe, setEnabled] = useState(false);

  const { register, formState: { errors } } = useForm<ContactFormValues>({
    resolver: zodResolver(schema)
  });


  const [formValues, setFormValues] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [isEmailInvalid, setIsEmailInvalid] = useState(false); 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;
    if (target && target.id && target.value !== undefined) {
      const { id, value } = target;
      setFormValues(prev => ({ ...prev, [id]: value }));
    } else {
      console.warn("Unexpected event target:", e.target);
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    if (formValues.phone.length < 10) {
      toast.error("Phone number must be at least 10 digits long. Please try again.");
      return;
    }
  
    try {
      const formTemplate = {
        ...formValues,
        country: country.text,
        consent: consent
          ? "I am happy to receive emails about technologies and process my data for marketing purposes. You may wish to unsubscribe with us at any time. Should you require more information about how we treat and take care of your data with confidentiality, please review our Privacy Policy (https://www.ackresponse.com/privacy_policy)."
          : "I do not want to receive emails at all.",
      };
  
      const verifyResponse = await fetch('api/verifyEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: formTemplate.email }),
      });
  
      if (!verifyResponse.ok) {
        const verifyData = await verifyResponse.json();
        toast.error(verifyData.error || "Invalid email address! Please check your email and try again!");
        setIsEmailInvalid(true);
        return; 
      }
  
      const response = await fetch('api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          senderEmail: formTemplate.email,
          firstName: formTemplate.first_name,
          lastName: formTemplate.last_name,
          message: formTemplate.message,
          phone: formTemplate.phone,
          company: formTemplate.company,
          country: formTemplate.country,
          consent: formTemplate.consent,
        }),
      });
  
      if (!response.ok) {
        const statusCode = response.status;
        if (statusCode === 500) {
          toast.error("Server error! Please try again.");
        } else {
          toast.error("Something went wrong. Please try again!");
        }
        return; 
      }
  
      const data = await response.json();
  
      // Successful submission
      toast.success("Message sent successfully. Thank you for your message.");
  
      // Reset form values
      setConsent(false);
      setFormValues({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
  
      // Reset country and captcha state
      setCountry(countries[0]);
  
    } catch (error) {
      // Handle error appropriately
      if (error instanceof Error) {
        toast.error("Something went wrong. Please try again!");
      } else {
        toast.error("An unexpected error occurred. Please try again!");
      }
    }
  };
  


  return (
    <div className=" m-auto">
      <div className=" mt-[5.5rem]  ">
        <div className="w-full">
          <div className="flex flex-col-reverse md:flex md:flex-row py-10 md:py-10 justify-center items-center">
            <div className=" 
                flex flex-col 
                min-[700px]:w-[60%] min-[700px]:py-12 
                min-[1000px]:w-[45%]   md:flex ">
              <p className="md:text-6xl text-3xl font-[700] text-center md:text-left w-full">
              Drop us a message.
              </p>
              <p className="text-center md:text-left  text-[#5f6368] w-full px-8 md:px-0 paragraph min-[1000px]:text-[1.3rem] min-[1900px]:text-[1.6rem] my-[1.5em]">
              Should you have any queries, please do not hesitate to send us a
              message. We would love to hear from you and help to connect to the
              right people.
            </p>
            </div>

            <div className=" 
             
     
                  min-[1000px]:flex  
                  h-full
                  md:w-[30%]
          
                    
                  ">
                    {" "}
                    <motion.div
                        initial={{ opacity: 0, x: 200 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="w-full"
                    >
                        <Lottie
                          loop
                          animationData={contactUs}
                          play
                          className="w-full h-full"
                        />
                      
                    </motion.div>
             </div>
          </div>
          <div className="relative bg-gradient-to-r from-[#000] to-[#000]   pt-40 py-20">
            <div className=" custom-shape-divider-bottom-1724906550 ">
              <svg
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
              >
                <path
                  d="M1200 0L0 0 892.25 114.72 1200 0z"
                  className="shape-fill"
                ></path>
              </svg>
            </div>
            <form onSubmit={handleSubmit} className=" h-full bg-zinc-100 md:mx-16 mx-5 md:py-20 md:px-16 py-5 px-4 rounded-3xl ">

              <div className="space-y-7  md:grid md:grid-cols-2  md:gap-x-3 md:gap-y-5 md:space-y-0 md:px-0 rounded-xl">
                <Input
                  id="first_name"
                  type="text"
                  value={formValues.first_name}
                  onChange={(value) => setFormValues(prev => ({ ...prev, first_name: value }))}
                  placeholder="First Name *"
                  error={errors.first_name?.message}
                  required={true}
  
                />
                <Input
                  id="last_name"
                  type="text"
                  value={formValues.last_name}
                  onChange={(value) => setFormValues(prev => ({ ...prev, last_name: value }))}
                  placeholder="Last Name *"
                  error={errors.last_name?.message}
                  required={true}
  
                />
                {/* <Input
                id="last_name"
                type="text"
                placeholder="Last Name"
                register={register}
                error={errors.last_name?.message}
              /> */}
                <Input
                  id="email"
                  type="email"
                  value={formValues.email}
                  onChange={(value) => setFormValues(prev => ({ ...prev, email: value }))}
                  placeholder="Email Address *"
                  className={`font-[400] ${isEmailInvalid ? 'border-red-500' : ''}`}
                  error={errors.email?.message}
                  required={true}
                  
                />

               


                <Input
                  id="phone"
                  type="text"
                  value={formValues.phone}
                  onChange={(value) => setFormValues(prev => ({ ...prev, phone: value }))}
                  placeholder="Phone Number"
                  error={formValues.phone.length > 0 && formValues.phone.length < 10 ? "Phone number must be at least 10 digits long. Please try again." : undefined}
                />
                {/* <Input
                id="budget"
                type="text"
                placeholder="Enter project budget in GBP (£)"
                register={register}
                className="font-[400]"
                error={errors.budget?.message}
              /> */}
                            <HUIListbox value={country} onChange={setCountry} as="div">
                <div className="relative ">
                  <HUIListbox.Button
                    className="relative w-full cursor-default font-normal rounded-2xl text-md bg-white border-2 py-6 text-zinc-500 pl-3 pr-10 text-left focus:outline-none focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300"
                    onClick={() => setIsListboxOpen(!isListboxOpen)} // Toggle the open/close state
                  >
                    <span className="block truncate">{country.text}</span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                      <IoIosArrowDown
                        className={`text-[1.2rem] transform transition-transform duration-500 ${
                          isListboxOpen ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </span>
                  </HUIListbox.Button>
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <HUIListbox.Options className="absolute z-[5] mt-1 md:max-h-56 md:w-[97.5%] w-full overflow-auto rounded-md bg-white text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {countries.map((item, id) => (
                        <HUIListbox.Option
                          key={id}
                        
                          className={({ active, selected }) =>
                            `relative cursor-default select-none py-2 pl-10 pr-4 ${
                              active
                                ? "bg-[#292563] text-white"
                                : "bg-white text-gray-900"
                            } ${selected ? "bg-[#292563]" : "font-normal"}`
                          }
                          value={item}
                        >
                          <span className="block truncate">{item.text}</span>
                        </HUIListbox.Option>
                      ))}
                    </HUIListbox.Options>
                  </Transition>
                </div>
              </HUIListbox>
                <Input
                id="company"
                type="text"
                value={formValues.company}
                onChange={(value) => setFormValues(prev => ({ ...prev, company: value }))}
                placeholder="Company Name *"
                  error={errors.company?.message}
                  required={true}
  
                />
                {/* <Input
                id="job"
                type="text"
                placeholder="Job role"
                register={register}
                error={errors.job?.message}
              /> */}


              </div>



              <br />

              <div className=" ">
                <textarea
                  id="message"
                  value={formValues.message}
                  onChange={handleChange}
                  placeholder="How can we help you today?"
                  className="px-5 py-10  w-full text-md  rounded-md border-[2px]  border-tertiary  text-black placeholder:text-black/60"
                  rows={10}
                  cols={50}
                  required
                ></textarea>
              </div>
              {/* <div className="flex items-center gap-2 my-5">
              <Switch
                checked={subscribe}
                onChange={setEnabled}
                className={`${subscribe ? "bg-accent" : "bg-text"}
                    relative inline-flex h-[18px] w-[34px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
              >
                <span className="sr-only">Use setting</span>
                <span
                  aria-hidden="true"
                  className={`${subscribe ? "translate-x-4" : "translate-x-0"}
                      pointer-events-none inline-block h-[14px] w-[14px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                />
              </Switch>
              <p className="text-sm text-[#5f6368]">
                I am happy to receive emails about technologies and process my
                data for marketing purposes.
              </p>
            </div> */}
              {/* <button
              type={subscribe ? "submit" : "button"}
              disabled={!subscribe}
              className={`${
                subscribe ? "btn bg-accent border-accent" : ""
              }  px-5 rounded border-2  py-1`}
            >
              Submit
            </button> */}

              <div className="flex  items-center gap-5 ">
                <Switch
                  checked={consent}
                   onChange={setConsent} 
                  className={`${consent ? "bg-green-500" : "bg-text"}
                   relative inline-flex h-[18px] w-[34px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                >
                  <span className="sr-only">Use setting</span>
                  <span
                    aria-hidden="true"
                    className={`${consent ? "translate-x-4" : "translate-x-0"}
                      pointer-events-none inline-block h-[14px] w-[14px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                  />
                </Switch>
                <div className="flex">
                <p className="text-sm  leading-6   my-4 md:text-sm font-light">
                  I am happy to receive emails about technologies and process my
                  data for marketing purposes. You may wish to unsubscribe with
                  us at any time. Should you require more information about how
                  we treat and take care of your data with confidentiality,
                  please review our <Link className="underline" href="/privacy_policy">privacy policy.</Link>
                </p>

             
                </div>
  
              </div>
              {
                <div className="mt-3">
                  <button
                    type="submit"
                    className={` ${!consent ? 'cursor-not-allowed' : ''} btn text-black hover:text-text hover:font-semibold text-md md:text-lg bg-[#33f081] px-10 mt-3 rounded-3xl py-3`}
                    disabled={!consent}
                  >
                    Submit
                  </button>

                </div>
              }
            </form>
          </div>
        </div>
        <div>
          <div className="w-full">
            <div className="google-map-code w-full">
            <iframe width="500"
                height="500"
                className="w-full"
                aria-hidden="false" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2493.7172282886936!2d-0.75005012318937!3d51.31632652464356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4875d533afe0a42b%3A0x8748a3d0547f1c44!2sQUATRO%20HOUSE%2C%203%20Lyon%20Way%2C%20Frimley%2C%20Camberley%20GU16%207ER!5e0!3m2!1sen!2suk!4v1728995481095!5m2!1sen!2suk" loading="lazy"></iframe>
              {/* <iframe
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=St.%20Paul's%20Cathedral+(ackresponse)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                width="600"
                height="650"
                className="w-full border-[2px] shadow-md"
                aria-hidden="false"
              /> */}
            </div>
          </div>
          <div className="text-text py-20 md:pl-20  app-layout">
            <h1 className="title text-2xl "> Our location</h1>
            <div className=" text-text mt-7 lg:mt-16  flex space-x-4 md:space-x-14">
              <div>
                <h1 className="secondary-title font-[600]  mb-4 3xl:text-4xl ">
                  UK
                </h1>
                <p className="text-lg font-semibold"> ackresponse Ltd.</p>
                <p className="text-lg 3xl:text-2xl mt-1 lg:mt-0">Quatro House</p>
                <p className="text-lg 3xl:text-2xl mt-1 lg:mt-0">Lyon Way</p>
                <p className="text-lg 3xl:text-2xl mt-1 lg:mt-0">Frimley Road</p>
                <p className="text-lg 3xl:text-2xl mt-1 lg:mt-0">Camberley</p>
                <p className="text-lg 3xl:text-2xl mt-1 lg:mt-0">GU16 7ER</p>
              </div>
              {/* <div className="border-l-[2px] pl-6 md:pl-12">
              <h1 className="secondary-title font-[600]  mb-4 3xl:text-4xl">
                  Nepal
                </h1>

                <p className="3xl:text-3xl"> ackresponse Ltd. </p>
                <p className="text-sm 3xl:text-2xl mt-1 lg:mt-0">Lalitpur</p>
                <p className="text-sm 3xl:text-2xl mt-1 lg:mt-0">Kathmandu</p>
                <p className="text-sm 3xl:text-2xl mt-1 lg:mt-0">Bagmati</p>
                <p className="text-sm 3xl:text-2xl mt-1 lg:mt-0">Nepal</p>
              </div> */}
            </div>
         
            {/* <div className="text-[#5f6368] group mt-3 small">
              <div className="flex gap-2 items-center duration-300 group-hover:translate-x-[10px]">
                {" "}
                <MdOutlineMail />
                <p className="py-2 text-text  ">Email </p>
              </div>
              <p>ackresponse@gmail.com</p>
            </div>
            <div className="text-[#5f6368] group mt-3 small">
              <div className="flex gap-2 items-center duration-300 group-hover:translate-x-[10px]">
                {" "}
                <FaPhone />
                <p className="py-2 text-text  ">Phone Number </p>
              </div>

              <p>9806725376</p>
            </div> */}
          </div>
          {/* <div className="grid gap-5 lg:w-[70%] m-auto">
            <div className=" group    px-14  py-10 text-blue-600 bg-blue-100 rounded-md shadow">
              <RiCodeBoxLine className="text-[4rem]" />
              <h1 className="paragraph flex mt-3 justify-between items-center">
                Our Services
                <BsArrowRightShort className="text-[1.8em]  group-hover:translate-x-[10px]  duration-300 " />
              </h1>
            </div>
            <Link
              href="/insight"
              className=" group   px-14 py-10 text-green-600  bg-green-100 rounded-md shadow"
            >
              <MdOutlineArticle className="text-[4rem]" />
              <h1 className="paragraph flex mt-3 justify-between items-center">
                Our Insights
                <BsArrowRightShort className="text-[1.8em]  group-hover:translate-x-[10px]  duration-300 " />
              </h1>
            </Link>
          </div> */}
        </div>
      </div>
      {/* <div className="grid grid-cols-1 my-5 lg:grid-cols-2">
        <div className="  text-text  py-6  ">
          <h1 className="text-3xl font-[500] "> Headquater</h1>
          <div className=" text-[#5f6368] mt-3">
            <p className="">ackresponse</p>
            <p className=" ">London, UK</p>
          </div>
        </div>
        <div className="  text-text  py-6    ">
          <h1 className="text-3xl   font-[500] "> Join us</h1>
          <div className=" text-[#5f6368] mt-3">
            <p className=" ">Find out more about career at XYZ company.</p>
          </div>
        </div>
      </div> */}
        <div className="w-full bg-[#000] text-white">
          <div className="app-layout py-6">
            <div className="p-4  ">
            <h1 className="text-3xl md:text-3xl font-medium md:py-2 pb-5 text-center">
                Our services
              </h1>
            </div>
          </div>
          <div className=" md:py-8 text-text w-[90%] md:w-[90%] m-auto">
            <Swipper />
          </div>
      </div>
      <ServiceInsightsSection
        title={"Our Articles & Insights"}
      />
         <ConnectCompany />
    </div>
  );
}
