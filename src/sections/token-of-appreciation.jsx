import React from "react";
import ContentAndstaticImage from "../components/content-staticimage";
import women from "../assets/women.jpg";

const tokenOfAppreciation = () => {
  let { title, tag, content, color, btnText } = {
    tag: "Tokens of appreciation",
    title: "Corporate gifts",
    content: `Find a variety of gift-giving options, ideal for honouring treasured colleagues and clients. Trained consultants will be pleased to guide your selections and assist with delivery. `,
    btnText: "Learn more about this",
    color: "[#333]",
  };
  return (
    <ContentAndstaticImage
      image={women}
      order="12"
      tag={tag}
      title={title}
      content={content}
      btnText={btnText}
      color={color}
    ></ContentAndstaticImage>
  );
};

export default tokenOfAppreciation;
