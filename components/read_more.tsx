// components/ReadMore.tsx
import React, { useState } from "react";

const ReadMore: React.FC<{ text: string }> = ({ text }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="paragraph text-justify">
      {isExpanded ? text : text.slice(0, 1000)}{" "}
      {/* Display the first 100 characters or the full text */}
      <p className="flex justify-center">
        <button
          onClick={toggleText}
          className="btn hover:px-20 mt-10 bg-accent rounded border-2 border-accent py-2 px-10 hover:bg-white duration-300"
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      </p>
    </div>
  );
};

export default ReadMore;
