import { motion } from "framer-motion";
import React, { useImperativeHandle, useRef } from "react";

const wrapper = React.forwardRef((props, ref) => {
  let WrapperRef = useRef();
  let giveSize = () => WrapperRef.current.clientWidth;
  useImperativeHandle(ref, () => {
    return {
      size: giveSize,
      scroll(x, y) {
        WrapperRef.current.scrollTo(x, y);
      },
    };
  });
  return (
    <motion.div
      layout="true"
      ref={WrapperRef}
      className={`wrapper flex scroll-smooth  px-[3rem] py-[5rem] transition-transform  duration-300 ease-in max-lg:mx-auto  max-lg:grid max-lg:grid-cols-1 max-lg:justify-center  max-sm:px-2 ${
        props.className ? props.className : ""
      }`}
    >
      {props.children}
    </motion.div>
  );
});

export default wrapper;
