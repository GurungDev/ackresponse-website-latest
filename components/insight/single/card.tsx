import React from "react";

type Items = {
  color: string;
  number: number;
  title: string;
  paragraph: string;
};

const Card = ({ color, title, paragraph, number }: Items) => {
  return (
    <div className={`${color} p-4`}>
      <h1 className="text-[1.1rem] md:text-[1.2rem] lg:text-[1.4rem] font-[600]">
        {number}.
      </h1>
      <h1 className="my-4 text-[1.651rem] md:text-[1.1rem] lg:text-[1.3rem] font-[600]">
        {title}
      </h1>
      <p className="paragraph text-white">{paragraph}</p>
    </div>
  );
};

export default Card;
