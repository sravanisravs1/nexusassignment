import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const content = (props) => {
  let { color, className, tag, content, title, btn, btnText, font } = props;

  return (
    <div
      className={`hero-content flex flex-shrink-0 flex-col gap-[0.9rem] max-lg:px-24 max-md:py-4 max-md:px-8 lg:px-20 text-${
        color ? color : "primary"
      } max-lg:max-w-[100%] lg:max-w-[30rem] ${className && className}`}
    >
      {tag && <span className="font-[500]">{tag}</span>}
      <h1
        className={`text-[1.8rem] ${
          color != "primary" && "font-unna text-4xl"
        }`}
      >
        {title}
      </h1>
      <p className={`leading-[1.8rem] ${font == "bold" && "font-[500]"}`}>
        {content}
      </p>

      <div
        className={`${btn ? "btn" : "btn2"}  ${
          color == "primary"
            ? "border-primary hover:border-dark hover:bg-primary hover:text-dark"
            : "border-dark hover:border-primary hover:bg-dark hover:text-primary"
        }`}
      >
        <a href="/">{btnText}</a>
        <AiOutlineArrowRight />
      </div>
    </div>
  );
};

export default content;
