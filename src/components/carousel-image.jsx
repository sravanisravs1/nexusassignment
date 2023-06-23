import React, { useEffect, useImperativeHandle, useRef } from "react";
const Image = React.forwardRef((props, ref) => {
  let width = useRef();

  let giveSize = () => width.current.clientWidth;

  useImperativeHandle(ref, () => {
    return {
      size: giveSize,
    };
  });

  return (
    <div
      ref={width}
      className={`carousel  flex-shrink-0 text-center ${
        props.className ? props.className : ""
      }`}
    >
      <img
        src={props.image}
        className=" aspect-square h-[80%] max-h-[25rem] object-contain"
        alt=""
      />
      <a href="" className="hover:underline">
        {props.name}
      </a>
      <p className="mt-3">{props.desc}</p>
    </div>
  );
});

export default Image;
