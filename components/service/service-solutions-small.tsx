"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { Swiper as SwiperCore } from "swiper";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type SwiperSlide = {
  image: string;
  title: string;
  description: string;
  bg: string;
};

type Props = {
  slides: SwiperSlide[];
  title: string;
};

export default function ServiceSolutions({ slides, title }: Props) {
  const [loop, setLoop] = useState(false);
  const [isEnd, setIsEnd] = useState(false);
  const [isStart, setIsStart] = useState(true);
  const swiperRef = useRef<SwiperCore | null>(null);

  useEffect(() => {
    slides.length <= 6 ? setLoop(false) : setLoop(true);
  }, [slides.length]);

  return (
    <section id="solutions" className="pt-14 bg-black text-white ">
      <div className="app-layout">
        <div className="p-4  ">
          <h1 className="secondary-title font-medium py-2 pb-5 text-center">
            {title}
          </h1>
        </div>
      </div>
      <div className="relative py-8   mx-2">
      <Swiper
  loop={loop}
  navigation={{
    prevEl: `#prev_slide5`,
    nextEl: `#next_slide5`,
  }}
  onSlideChange={(swiper) => {
    setIsEnd(swiper.isEnd);
    setIsStart(swiper.isBeginning);
  }}
  onSwiper={(swiper) => (swiperRef.current = swiper)}
  autoplay={{ delay: 3000, disableOnInteraction: false }} // Resume autoplay after interaction
  modules={[Navigation, Autoplay]}
  speed={200}
  breakpoints={{
    100: {
      slidesPerView: 1,
    },
    380: {
      slidesPerView: 1.2,
      spaceBetween: 8,
    },
    480: {
      slidesPerView: 1.3,
      spaceBetween: 5,
    },
    640: {
      slidesPerView: 1.5,
      spaceBetween: 8,
    },
    750: {
      slidesPerView: 2.2,
      spaceBetween: 5,
    },
    768: {
      slidesPerView: 2.1,
      spaceBetween: 5,
    },
    976: {
      slidesPerView: 3.1,
      spaceBetween: 5,
    },
    1024: {
      slidesPerView: 3.3,
      spaceBetween: 3,
    },
    1050: {
      slidesPerView: 2.8,
      spaceBetween: 6,
    },
    
    1080: {
      slidesPerView: 3,
      spaceBetween: 2,
    },
    1130: {
      slidesPerView: 3.2,
      spaceBetween: 2,
 
    },
    1430: {
      slidesPerView: 3.3,
      spaceBetween: 6,
    },
    1630: {
      slidesPerView: 3.3,
      spaceBetween: 6,
  
    },
    1800: {
      slidesPerView: 3.3,
      spaceBetween: 8,
      
    },
    2000: {
      slidesPerView: 3.7,
      spaceBetween: 8,
      
    },
    2500: {
      slidesPerView: 3.8,
      spaceBetween: 1,
      
    },
    3000: {
      slidesPerView: 4,
      spaceBetween: 1,
      
    },
    3500: {
      slidesPerView: 4.3,
      spaceBetween: 1,
      
    },
  }}
>

{slides.map((data, i) => (
            <SwiperSlide key={i} className="z-[49]">
              <div className="!flex !flex-col group !items-center !justify-center w-full h-[35vh]  md:min-h-[35vh] portrait:lg:min-h-[35vh]  relative lg:min-h-[45vh] rounded-xl overflow-hidden "
                onMouseEnter={() => swiperRef.current?.autoplay.stop()} // Stop autoplay on hover
                onMouseLeave={() => swiperRef.current?.autoplay.start()} // Resume autoplay when hover stops
              >

                <Image
                  priority={true}
                  src={data.image}
                  alt="Server"
                  width={400}
                  height={400}
                  className="object-cover w-full h-full absolute group-hover:scale-110 duration-300 group-hover:brightness-[70%] "
                />
                <div className="absolute w-full  h-full flex flex-col space-y-1 justify-end ">
                <div className="bg-gradient-to-b to-black from-[#1e1e1e00]   pb-12 px-6">
                  <div className={`w-[30px] h-[5px] ${data.bg}  `}></div>
                
                  <h6 className="md:font-bold text-[1.2] md:text-[1.4] lg:text-[1.4rem] min-[1900px]:text-[1.9rem] font-[600] text-white">
                    {data.title}
                  </h6>
                  <p className="  mb-3 h-[25%] duration-300 text-white text-[.8rem] md:text-[.9rem] lg:text-[1rem] min-[1900px]:text-[1.3rem] ">
                    {data.description}
                  </p>
                  </div>
           
                </div>
                {/* <div className="absolute w-full group h-full flex flex-col justify-end   p-8   ">
                  <div className={`w-[30px] h-[5px] ${data.bg}  `}></div>
                  <h6 className="md:font-bold text-[1.2] md:text-[1.4] lg:text-[1.7rem] min-[1900px]:text-[1.9rem] font-[400] text-white">
                    {data.title}
                  </h6>
                  <p className="h-[0%] opacity-[0%] group-hover:mt-7 group-hover:mb-3 group-hover:h-[25%] group-hover:opacity-[100%] duration-300 text-white text-[.8rem] md:text-[.9rem] lg:text-[1rem] min-[1900px]:text-[1.3rem] ">
                    {data.description}
                  </p>
                </div> */}
              </div>
            </SwiperSlide>
          ))}
          {/* <div className="hidden md:flex">
          <button
            id={`next_slide5`}
            className="p-2 absolute right-[25px] z-50 top-1/2 transform -translate-y-1/2 rounded-full bg-white text-text duration-300 hover:bg-btn_color  hover:text-white  backdrop-blur-sm"
            onClick={() => swiperRef.current?.slideNext()} 
          >
            <RxCaretRight size={32} className="" />
          </button>
          <button
            id={`prev_slide5`}
            className="p-2 absolute left-[25px] z-50 top-1/2 transform -translate-y-1/2 rounded-full bg-white text-text duration-300 hover:bg-btn_color hover:text-white  backdrop-blur-sm"
            onClick={() => swiperRef.current?.slidePrev()} 
          >
            <RxCaretLeft size={32} className="" />
          </button>
          </div> */}

        </Swiper>
        <div className="flex mt-3 space-x-1">
        <button
            id={`prev_slide5`}
            className="p-2 rounded-full border-white border-[1px] text-white duration-300 hover:bg-btn_color hover:text-white  backdrop-blur-sm"
            onClick={() => swiperRef.current?.slidePrev()} 
          >
            <RxCaretLeft size={32} className="" />
          </button>
        <button
            id={`next_slide5`}
            className="p-2  rounded-full border-white border-[1px] text-white duration-300 hover:bg-btn_color  hover:text-white  backdrop-blur-sm"
            onClick={() => swiperRef.current?.slideNext()} 
          >
            <RxCaretRight size={32} className="" />
          </button>

        </div>
      </div>
    </section>
  );
}
