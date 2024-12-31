const More_Content = () => {
  const trending_bg_1 = "/image/insightCover.jpg";
  return (
    <div className=" trending-container shadow-md rounded-[5px] overflow-hidden  hover:shadow-xl">
      <div className="overflow-hidden  ">
        <div
          style={{
            backgroundImage: ` linear-gradient( rgba(0,0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${trending_bg_1})`,
          }}
          className="  trending-hidden h-[30vh]   bg-cover bg-center "
        ></div>
      </div>

      <div className=" px-10 py-4">
        <div>
          <small className="small text-[#151f27]">August 21, 2023</small>
          <h1 className="paragraph my-2 text-[#151f27]">
            Generative AI: driving growth in the rapidly evolving AI market
          </h1>
        </div>

        <button className="small  bg-neutral-200 hover:bg-neutral-300 duration-200 px-8 py-3 shadow rounded mt-2 text-[#151f27]">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default More_Content;
