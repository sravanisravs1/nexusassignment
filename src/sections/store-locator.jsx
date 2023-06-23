import React, { useEffect, useRef, useState } from "react";

import ContentAndstaticImage from "../components/content-staticimage";
import room from "../assets/room.jpg";
import { motion } from "framer-motion";
import Content from "../components/content";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Wrapper from "../components/wrapper";

import image0 from "../assets/storelocators/Aesop_Harbour_City_II_Hero_Bleed_Desktop_2880x1620px.webp";
import image1 from "../assets/storelocators/Aesop-HK-Gough-Street-Hero-Desktop-2880x1620px.jpg";
import image2 from "../assets/storelocators/Aesop-HK-Hollywood-Road-Hero-Desktop-2880x1620.jpg";

const locator = () => {
  let { title, tag, content, color, btnText, image, order } = {
    tag: "",
    title: "Store locator ",
    content: `Our consultants are available to host you in-store and provide tailored guidance on gift purchases. `,
    btnText: "Find a nearby store",
    color: "[#333]",
    image: room,
    order: "21",
  };

  let [curr, setCurr] = useState(0);
  let [width, setWidth] = useState(0);
  let imageref = useRef();
  let imagesCont = useRef();
  let [sizes, setSizes] = useState(0);
  let images = [
    {
      src: image0,
    },
    {
      src: image1,
    },
    {
      src: image2,
    },
  ];
  const prev = () =>
    setCurr((curr) => (curr == 0 ? images.length - 1 : curr - 1));

  const next = () =>
    setCurr((curr) => (curr == images.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    setWidth(imagesCont.current.scrollWidth);

    imagesCont.current.scrollTo(sizes * curr, 0);
  }, [width, curr]);

  useEffect(() => {
    setSizes(imageref.current.clientWidth);
  }, []);

  return (
    <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
      <Wrapper className="relative h-auto   justify-between gap-[3.5rem] !px-0  max-md:gap-8 ">
        <div
          ref={imagesCont}
          className={`scroller simage-wrapper flex h-[80%] overflow-x-scroll scroll-smooth  max-sm:w-full  ${
            order[0] == "1" ? "order-1" : "order-2"
          } `}
        >
          <img
            ref={imageref}
            src={images[0].src}
            className={`h-full w-full flex-shrink-0 object-cover max-sm:aspect-square max-sm:h-auto`}
            alt=""
          />
          <img
            src={images[1].src}
            className={`h-full w-full flex-shrink-0 object-cover max-sm:aspect-square max-sm:h-auto`}
            alt=""
          />
          <img
            src={images[2].src}
            className={`h-full w-full flex-shrink-0 object-cover max-sm:aspect-square max-sm:h-auto`}
            alt=""
          />
          <button onClick={prev} className="btn-left">
            <BsChevronLeft />
          </button>
          <button onClick={next} className="btn-right">
            <BsChevronRight />
          </button>
        </div>

        <Content
          className={`${
            order[1] == "2" ? "order-2" : "order-1"
          } max-md:py-4 lg:max-w-[35rem]`}
          title={title}
          tag={tag}
          content={content}
          btnText={btnText}
          color={color}
          btn
        ></Content>
      </Wrapper>
    </motion.section>
  );
};

export default locator;
