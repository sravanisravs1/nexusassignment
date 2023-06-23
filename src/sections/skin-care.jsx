import React from "react";
import ContentAndCarousel from "../components/content-carousel";
import bottle from "../assets/bottle.png";

import image0 from '../assets/skincare/Aesop_Kits_Parsley_Seed_Anti-Oxidant_Skin_Care_Kit_Web_Medium_1238x752px.webp';
import image1 from '../assets/skincare/Aesop_Skin_Parsley_Seed_Anti-Oxidant_Eye_Cream_10mL_Web_Medium_704x374px.webp';
import image2 from '../assets/skincare/Aesop-Skin-Parsley-Seed-Facial-Cleansing-Oil-200mL-medium.webp';
import image3 from '../assets/skincare/Aesop-SkinParsley-Seed-Facial-Cleanser-100mL-medium.webp';
import image4 from '../assets/skincare/Aesop-Skin-Parsley-Seed-Anti-Oxidant-Facial-Hydrating-Cream-60mL-medium.webp';
import image5 from '../assets/skincare/Aesop-Skin-Parsley-Seed-Anti-Oxidant-Hydrator-60mL-medium.webp';
import image6 from '../assets/skincare/Aesop_Skin_Damascan_Rose_Facial_Treatment_25mL_Web_Large_684x668px.webp';

const skinCare= ()=> {



  let details = {
    tag: "Parsley Seed Skin Care",
    title: "Fortification of the highest order",
    content: `Our Parsley Seed Skin Care range provides potent doses of anti-oxidant rich ingredients in formulations suited to all skin types. They are especially recommended for those in urban environments, to fortify the skin against the damaging effects of free radicals.
    `,
    btnText: "Explore the range",
    color: "[#333]",
  };
  let images = [
    {
      id: 1,
      image: image0,
      name: "Parsley Seed Anti-Oxidant Skin Care Kit",
      desc: "A trio of Parsley Seed staples",
    },
    
    {
      id: 2,
      image: image1,
      name: "Parsley Seed Anti-Oxidant Eye Cream",
      desc: "Nourishes delicate skin around eyes",
    },
    {
      id: 3,
      image: image2,
      name: "Parsley Seed Facial Cleansing Oil ",
      desc: "Gently liberates skin of grime and makeup ",
    },
    {
      id: 4,
      image: image3,
      name: "Parsley Seed Facial Cleanser",
      desc: "For those in polluted urban environments",
    },
    {
      id: 5,
      image: image4,
      name: "Parsley Seed Anti-Oxidant Facial Hydrating Cream",
      desc: "A potent, nourishing cream",
    },
    {
      id: 6,
      image: image5,
      name: "Parsley Seed Anti-Oxidant Hydrator",
      desc: "Light, rapidly absorbed fortification",
    },
    {
      id: 7,
      image: image6,
      name: "Parsley Seed Anti-Oxidant Facial Treatment",
      desc: "Fortifies, revives and intensly hydrates",
    },
  ];

  return (
    <ContentAndCarousel
      key={details["image"]}
      images={images}
      tag={details["tag"]}
      btnText={details["btnText"]}
      btn2
      color={details["color"]}
      content={details["content"]}
      title={details["title"]}
    ></ContentAndCarousel>
  );
};

export default skinCare;
