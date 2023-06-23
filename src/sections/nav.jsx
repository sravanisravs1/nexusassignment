import React, { useEffect, useState } from "react";
import { FiSearch, FiHeart } from "react-icons/fi";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { AiOutlineArrowRight } from "react-icons/ai";

import logo from "../assets/logo.svg";
import { AnimatePresence, motion } from "framer-motion";
const nav = (props) => {
  let [show, setShow] = useState(false);

  useEffect(() => {}, [show]);

  function togglehandler() {
    setShow((prev) => !prev);
  }
  let variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
    transition: {
      staggerChildren: 0.5,
      duration: 2,
    },
  };
  return (
    <AnimatePresence>
      <nav
        initial="hidden"
        animate="visible"
        variants={variants}
        className={`flex justify-between font-[500] max-sm:bg-none ${
          show && "!bg-primary !text-dark"
        } max-sm:text-primary sm:bg-primary ${
          props.className && props.className
        }`}
      >
        <ul className="my-[1.85rem] mx-[2.2rem] flex items-center gap-6  text-[0.9rem] max-lg:hidden ">
          <li>Skin Care</li>
          <li>Body & Hand</li>
          <li>Hair</li>
          <li>Fragrance</li>
          <li>Home</li>
          <li>Kits &Travel</li>
          <li>Gifts</li>
          <li>Read</li>
          <li>Stores</li>
          <li>Facial Apointmnets</li>
          <li>
            <span>
              <FiSearch />
            </span>
          </li>
        </ul>
        <ul className="my-[1.85rem] mx-[2.2rem] flex items-center gap-6  text-[0.9rem] max-sm:hidden lg:hidden ">
          <li>Shop</li>
          <li>Read</li>
          <li>Store</li>
          <li>
            <span>
              <FiSearch />
            </span>
          </li>
        </ul>
        <ul className="my-[1.85rem] mx-[2.2rem] flex items-center gap-6  text-[0.9rem] sm:hidden ">
          <li className="h-[1.5rem] flex-shrink-0">
            <img src={logo} className="h-full  " alt="" />
          </li>
        </ul>
        <ul className="my-[1.85rem] mx-[2rem] flex flex-wrap gap-4 text-sm max-sm:hidden">
          <li>Login</li>
          <li>Cabinet</li>
          <li>Cart</li>
        </ul>
        <ul className="my-[1.85rem] mx-[2rem] flex flex-wrap items-center gap-8 text-base sm:hidden">
          <li>
            <FiSearch></FiSearch>
          </li>
          <li>
            <FiHeart></FiHeart>
          </li>
          <li className="cart-link">Cart</li>
          <li onClick={togglehandler}>
            <HiOutlineMenuAlt4></HiOutlineMenuAlt4>
          </li>
        </ul>
        {show && (
          <motion.ul
            layout
            variants={variants}
            className="mobile absolute top-16  w-full sm:hidden"
          >
            <li className="">
              Skin care
              <span>
                <AiOutlineArrowRight />
              </span>
            </li>
            <li className="">
              Body & Hand
              <span>
                <AiOutlineArrowRight />
              </span>
            </li>
            <li className="">
              Hair
              <span>
                <AiOutlineArrowRight />
              </span>
            </li>
            <li className="">
              Fragrance
              <span>
                <AiOutlineArrowRight />
              </span>
            </li>
            <li className="">
              Home
              <span>
                <AiOutlineArrowRight />
              </span>
            </li>
            <li className="">
              Kits & Travel
              <span>
                <AiOutlineArrowRight />
              </span>
            </li>
            <li className="">
              Gifts
              <span>
                <AiOutlineArrowRight />
              </span>
            </li>
          </motion.ul>
        )}
      </nav>
    </AnimatePresence>
  );
};

export default nav;
