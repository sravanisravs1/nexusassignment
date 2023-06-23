import React from "react";
import ContentAndstaticImage from "../components/content-staticimage";
import postpoo from "../assets/postpoo.avif";

const Discover = () => {
  let details = {
    tag: "The Athenaeum",
    title: "Lessons from the lab",
    content: `In this instalment of our ‘Under the Microscope’ series: a focus on anti-oxidant-rich skin care and its benefits to city-dwellers.`,
    btnText: "Read more",
    color: "[#333]",
  };
  return (
    <>
      <ContentAndstaticImage
        image={postpoo}
        tag={details["tag"]}
        order="21"
        title={details["title"]}
        content={details["content"]}
        btnText={details["btnText"]}
        color={details["color"]}
      ></ContentAndstaticImage>
    </>
  );
};

export default Discover;
