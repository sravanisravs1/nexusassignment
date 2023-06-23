import { motion } from "framer-motion";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import List from "../components/list";

const footer = () => {
  let listItems = [
    {
      heading: "Orders and support",
      lists: [
        "Contact us",
        "FAQs",
        "Shipping",
        "Returns",
        "Order history",
        "Terms and conditions",
      ],
    },
    {
      heading: "Services",
      lists: [
        "Live assistance",
        "Corporate gifts",
        "Facial appointments",
        "Click and Collect",
        "Video consultation",
      ],
    },
    {
      heading: "Sustainability",
      lists: [
        "All Aesop products are vegan, and we do not test our formulations or ingredients on animals. We are Leaping Bunny approved and a Certified B Corporation. Learn more",
      ],
    },
    {
      heading: "About",
      lists: [
        "Our story",
        "Foundation",
        "Careers",
        "Privacy policy",
        "Accessibility",
        "Cookie Policy",
      ],
    },
    
  ];
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="grid gap-16 bg-dark2 p-8 pb-4 text-primary"
    >
      <div className="email list">
        <div className="input-wrapper flex items-center justify-between rounded-sm border border-solid border-primary px-3">
          <input
            type="email"
            className="w-full bg-inherit py-2 outline-none"
            placeholder="Email address"
          />
          <span className="ml-2">
            <AiOutlineArrowRight />
          </span>
        </div>
        <div className="check my-4">
          <input type="checkbox" name="subscribe" id="subscribe" />
          <label htmlFor="subscribe" className="m-2">
            Subscribe to receive communications from Aesop about our products
            and services. By subscribing, you confirm you have read and accept
            our
            <a href="/" className="underline">
              privacy policy
            </a>
          </label>
        </div>
      </div>
      <div></div>
      {listItems.map((item, i) => (
        <List key={i} heading={item.heading} lists={item.lists}></List>
      ))}
    </motion.footer>
  );
};

export default footer;
