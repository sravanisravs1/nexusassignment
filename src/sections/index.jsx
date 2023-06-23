import Nav from "./nav";

import React from "react";
import Hero from "./hero";
import Domestic from "./domestic-section";
import SkinCare from "./skin-care";
import TokenOfAppreciation from "./token-of-appreciation";
import Locator from "./store-locator";
import Footer from "./footer";
import Discover from "./lessons";
const index = () => {
  return (
    <>
      <Hero></Hero>
      <SkinCare></SkinCare>
      <Discover></Discover>
      <Domestic></Domestic>
      <TokenOfAppreciation></TokenOfAppreciation>
      <Locator></Locator>
      <Footer></Footer>
    </>
  );
};

export default index;
