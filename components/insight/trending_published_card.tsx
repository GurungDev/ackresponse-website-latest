import React from "react";

const Trending_published_card = () => {
  const bg = "/image/insightCover.jpg";

  return (
    <div
      style={{
        backgroundImage: ` linear-gradient(  rgba(0,0, 0, 0.2), rgba(0, 0, 0, .81)), url(${bg})`,
      }}
      className="bg-zinc-200 bg min-h-[300px] hover:scale-105 duration-300 rounded shadow  flex justify-end flex-col"
    >
      <div className="text-neutral-100 my-5 w-[90%] m-auto grid  ">
        <div className=" ">
          <small className="small  ">August 21, 2023</small>
          <h1 className=" paragraph">
            {" "}
            Generative AI: driving growth in the rapidly evolving AI market
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Trending_published_card;
