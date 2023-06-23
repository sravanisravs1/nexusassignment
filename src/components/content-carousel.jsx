import Content from "./content";

import Image from "./carousel-image";

import Wrapper from "./wrapper";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const contentAndCarousel = (props) => {
  let [curr, setCurr] = useState(0);
  let [width, setWidth] = useState(0);
  let imageref = useRef();
  let imagesCont = useRef();
  let wrapperRef = useRef();
  let images = props.images;

  let [sizes, setSizes] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr == 0 ? images.length - 1 : curr - 1));

  const next = () =>
    setCurr((curr) => (curr == images.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    setWidth(imagesCont.current.scrollWidth);
    if (window.innerWidth < 1024) {
      imagesCont.current.scrollTo(curr == 0 ? sizes * curr : sizes * curr, 0);
    } else {
      wrapperRef.current.scroll(
        curr == 0 ? sizes * curr : sizes * curr + sizes / 2,
        0
      );
    }
  }, [width, curr]);

  useEffect(() => {
    setSizes(imageref.current.size());
  }, []);

  return (
    <motion.section
      className="relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <Wrapper
        ref={wrapperRef}
        className={`lg:scroller relative transition-transform duration-300  ease-in lg:overflow-x-scroll`}
      >
        <Content
          className="sticky lg:max-w-[35rem]"
          title={props.title}
          tag={props.tag}
          content={props.content}
          btnText={props.btnText}
          color={props.color}
          btn2
          font=""
        ></Content>
        <div className={`carousel-wrapper  relative h-full  `}>
          <div
            ref={imagesCont}
            className={`images-container max-lg:scroller mt-3 flex scroll-smooth transition-transform duration-200  ease-in  max-lg:overflow-x-scroll`}
          >
            {images.map((image, i) => (
              <Image
                key={i}
                ref={imageref}
                image={image.image}
                name={image.name}
                desc={image.desc}
              ></Image>
            ))}
            <button onClick={prev} className="btn-left lg:hidden">
              <BsChevronLeft />
            </button>
            <button onClick={next} className="btn-right lg:hidden">
              <BsChevronRight />
            </button>
          </div>
        </div>
      </Wrapper>
      <button
        onClick={prev}
        className={`btn-left ${curr > 1 ? "" : "hidden"} max-lg:hidden`}
      >
        <BsChevronLeft />
      </button>
      <button onClick={next} className="btn-right max-lg:hidden">
        <BsChevronRight />
      </button>
    </motion.section>
  );
};

export default contentAndCarousel;
