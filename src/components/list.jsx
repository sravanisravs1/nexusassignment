import React from "react";

const list = (props) => {
  return (
    <div className="list">
      <h6 className="mb-4 border-b border-solid border-primary py-4  text-lg font-[500]">
        {props.heading}
      </h6>
      <ul className="flex flex-col gap-4">
        {props.lists.map((list, i) => (
          <li className="w-fit" key={i}>
            {list}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default list;
