import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

type OurProblemsSolutionsColumn = {
  update_Name_left_column: string;
  update_News_Right_column: string;
  news_link: string;
  image: string;
};

const left_right_solution_problem_data: OurProblemsSolutionsColumn[] = [
  {
    update_Name_left_column: "Retail",
    update_News_Right_column: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    news_link: "/",
    image: "/assets/images/indus.jpg", // Provide the correct image path
  },
  {
    update_Name_left_column: "Limited Visibility in Search Engines",
    update_News_Right_column: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`,
    news_link: "/",
    image: "", // You can leave this empty if there's no image
  },

  {
    update_Name_left_column: "Where can I get some?",
    update_News_Right_column: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`,
    news_link: "/",
    image: "/assets/images/bulb.jpg", // Provide the correct image path
  },

  {
    update_Name_left_column: "Where does it come from?",
    update_News_Right_column: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`,
    news_link: "/",
    image: "", // You can leave this empty if there's no image
  },
];

const StickyColumnsLayout: React.FC = () => {
  const [selectedProblemIndex, setSelectedProblemIndex] = useState<
    number | null
  >(null);

  const handleProblemClick = (index: number) => {
    setSelectedProblemIndex(index);
    // You can use a ref to scroll to the selected content
    if (typeof window !== "undefined") {
      const contentElement = document.getElementById(`update-${index}`);
      if (contentElement) {
        contentElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="flex flex-col md:flex-row p-7 ">
      <div className=" w-full md:w-1/3 md:h-[100%] p-3 md:p-5 sticky123 top-10 left_u sticky md:top-20 bg-accent border rounded-[7px]">
        {/* Left Column with problem names */}
        <div className="h-full secondary-title  text-text justify-center">
          Updates
        </div>
        <ul className="list-none leading-10  paragraph mt-4">
          {left_right_solution_problem_data.map((data, index) => (
            <li
              key={index}
              className={`md:py-2  ${
                index === selectedProblemIndex
                  ? "text-white bg-secondary bg-opacity-70 rounded px-3"
                  : ""
              }`}
              onClick={() => handleProblemClick(index)}
              style={{ cursor: "pointer" }}
            >
              {data.update_Name_left_column}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full md:w-2/3">
        {/* Right Column with solution descriptions */}
        <div className="p-4 overflow-y-auto text-xl scrollbar-hide">
          {/* Add a fixed height and enable scrolling */}
          <h2 className="text-4xl font-semibold text-black p-4">Release</h2>
          {left_right_solution_problem_data.map((data, index) => (
            <div
              key={index}
              id={`update-${index}`}
              className={`mb-4 py-20 ${
                index === selectedProblemIndex
                  ? "text-black bg-slate-900 bg-opacity-[12%] p-2"
                  : ""
              } justify-center transition duration-300 items-center`}
            >
              {data.image && (
                <Image
                  src={data.image}
                  alt=""
                  height={200}
                  width={400}
                  className="flex justify-center items-center p-4 object-cover w-full h-[370px]"
                />
              )}
              <p className="paragraph p-4 text-justify">
                {data.update_News_Right_column}
              </p>
              <div className="flex justify-center items-center">
                <button className="flex justify-center items-center gap-2 text-text bg-accent py-2  px-5 hover:px-10 duration-300  border-1 border-accent rounded-md shadow">
                  <Link href={data.news_link}>Read More</Link>
                  <BsFillArrowRightCircleFill />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StickyColumnsLayout;
