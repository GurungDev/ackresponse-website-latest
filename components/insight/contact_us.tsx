"use client";

import { useState } from "react";

import Input from "@/components/input";
// import emailjs from "@emailjs/browser";
import { Switch } from "@headlessui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { z } from "zod";

const schema = z.object({
  name: z.string().nonempty({ message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  company: z.string().nonempty({ message: "Company is required" }),
  position: z.string().nonempty({ message: "Position is required" }),
});

export type ContactFormValues = z.infer<typeof schema>;

const Contact_Us_Section = () => {
  const [consent, setEnabled] = useState(false);
  const {
    register,
    control,
    formState: { errors },
    watch,
    handleSubmit,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      position: "",
    },
  });
  const onSubmit: SubmitHandler<ContactFormValues> = async (data) => {
    try {
      // const response = await PostData({ data: data, consent });
      const formTemplate = {
        name: data.name,
        email: data.email,
        company: data.company,
        job: data.position,
      };
      // const response = await emailjs.send(
      //   process.env.EMAILSERVICE || " ",
      //   process.env.TEMPLATEKEY1 || " ",
      //   formTemplate,
      //   process.env.NEXT_PUBLIC_EMAILJS_KEY
      // );
      // if (!response) {
      //   throw new Error("Oops something went wrong. Try again !!");
      // }
      toast.success("success");
    } catch (error) {
      const errorMessage = (error as Error).message;
      toast.error(errorMessage || "Oops something went wrong. Try again !!");
    }
  };

  return (
    <section
      id="contact"
      className=" bg-white    bg   py-10  w-full flex items-center justify-center"
    >
      <div className="relative w-full inset-0 px-10 md:px-0 slide-top   text-text">
        <div className="md:w-[90%] m-auto">
          <h1 className="secondary-title lg:text-[3rem] my-1  ">
            Stay Connected
          </h1>
          <p className="paragraph mt-7  ">
            Subscribe if you want to stay up-to-date on technologies to remain
            ahead of today&apos;s technological era which is defining today and
            shaping tomorrow.
          </p>
          <form className="my-7" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1   lg:grid-cols-2 gap-5">
              <div>
                <Input
                  id="name"
                  type="text"
                  placeholder="Name"
                  register={register}
                  error={errors.name?.message}
                />
              </div>
              <div>
                <Input
                  id="email"
                  type="email"
                  placeholder="Email"
                  register={register}
                  error={errors.email?.message}
                />
              </div>
              <div>
                <Input
                  id="company"
                  type="text"
                  placeholder="Company"
                  register={register}
                  error={errors.company?.message}
                />
              </div>
              <div>
                <Input
                  id="position"
                  type="text"
                  placeholder="Job Title"
                  register={register}
                  error={errors.position?.message}
                />
              </div>
            </div>
            <div className="mt-10  ">
              <div className="flex items-center gap-5">
                <Switch
                  checked={consent}
                  onChange={setEnabled}
                  className={`${consent ? "bg-accent" : "bg-text"}
                    relative inline-flex h-[18px] w-[34px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                >
                  <span className="sr-only">Use setting</span>
                  <span
                    aria-hidden="true"
                    className={`${consent ? "translate-x-4" : "translate-x-0"}
                      pointer-events-none inline-block h-[14px] w-[14px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                  />
                </Switch>
                <p className="paragraph">
                  I am happy to receive emails about technologies and process my
                  data for marketing purposes.
                </p>
              </div>
              <button
                type={consent ? "submit" : "button"}
                disabled={!consent}
                className={`${
                  consent ? "btn bg-accent border-accent" : ""
                }  px-5 rounded border-2  py-1 mt-5`}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact_Us_Section;
