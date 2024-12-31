import Image from "next/image";
import { BsArrowRightShort } from "react-icons/bs";

type Props = {
  description: string;
  image: string;
};

export default function ServiceIntroduction({ description, image }: Props) {
  return (
    <section id="introduction" className="  py-24">
      <div className="app-layout">
        <div className="p-4 grid grid-cols-1 gap-20 md:grid-cols-2">
          <div className="">
            <h1 className="secondary-title font-medium py-2 pb-10 text-text">
              Introduction
            </h1>
            <p className="text-justify">{description}</p>
            <div className={"w-[170px] mt-10  "}>
              <button
                className={
                  "flex items-center justify-center group border-[1px] border-secondary w-full h-full px-1 lg:px-2 py-2 small  paragraph "
                }
              >
                Download brochure
                <BsArrowRightShort
                  size={28}
                  className="group-hover:translate-x-[7px] font-normal duration-300"
                />
              </button>
            </div>
          </div>
          <div className="rounded-md h-[350px]   overflow-hidden">
            <Image
              src={image}
              alt="Banner"
              width={1920}
              height={1080}
              className=" object-cover "
            />
          </div>
        </div>
      </div>

      {/* <div className="p-4">
        <div className="md:flex gap-6 items-center">
          <div>
            <h4 className="text-2xl font-medium text-neutral-600">
              Title of another section
            </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos facilis qui, aperiam ipsum quis cum sed earum fuga,
              recusandae consectetur nulla maiores quas quasi eligendi vitae
              doloremque laboriosam impedit nihil? Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Facilis aut ipsam tempora, minus
              nisi blanditiis fugit dicta maiores laborum veritatis
              exercitationem itaque ex! Saepe ratione sapiente sed omnis rem
              suscipit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Vitae, ea voluptates? Aut animi voluptates ipsa nulla iste nobis
              ullam cumque, itaque quod accusamus optio reprehenderit sed hic
              debitis labore numquam.
            </p>
          </div>
          <Image
            src="/banner.jpg"
            alt="Banner"
            width={1920}
            height={1080}
            className="h-96 object-cover py-4 w-[1200px] block"
          />
        </div>
      </div> */}
    </section>
  );
}
