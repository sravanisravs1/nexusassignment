import React from "react";
import Content from "../components/content";
import Img1 from "../assets/img1.webp";

import ContentAndCarousel from "../components/content-carousel";

import image0 from "../assets/Domestic/Aesop_Home_Aganice_Aromatique_Candle_Web_Large_1102x962px.webp";
import image1 from "../assets/Domestic/Aesop_Home_Bronze_Incense_Holder_Web_Large_1150x481px.webp";
import image2 from "../assets/Domestic/Aesop_Home_Callippus_Aromatique_Candle_Web_Large_1102x962px.webp";
import image3 from "../assets/Domestic/Aesop_Home_Cythera_Aromatique_Room_Spray_100mL_Web_Large_835x962px.webp";
import image4 from "../assets/Domestic/Aesop_Home_Kagerou_Aromatique_Incense_Web_Large_1584x1384px.webp";
import image5 from "../assets/Domestic/Aesop_Home_Murasaki_Aromatique_Incense_Web_Large_1584x1384px.webp";
import image6 from "../assets/Domestic/Aesop_Home_Ptolemy_Aromatique_Candle_Web_Large_1102x962px.webp";
import image7 from "../assets/Domestic/Aesop_Home_Room_Spray_Olous_100mL_large.webp";
import image8 from "../assets/Domestic/Aesop_Home_Sarashina_Aromatique_Incense_Web_Large_1584x1384px.webp";
import image9 from "../assets/Domestic/Aesop-Home-Room-Spray-Istros-100mL-large.webp";
import image10 from "../assets/Domestic/Aesop-Other-Aesop-Book-1-Large-835x962px.webp";
const Domestic = () => {
  let details = {
    tag: "For the home",
    title: "Domestic pleasures",
    content:
      "Our range of aromatic formulations for the home are practical and pleasing in equal measure",
    btnText: "See all Home",
    color: "[#333]",
  };

  let images = [
    {
      id: 1,
      image: image0,
      name: "Murasaki Aromatique Incense",
      desc: "For those who favour aromas of warm spice",
    },
    {
      id: 2,
      image: image1,
      name: "Kagerou Aromatique Incense",
      desc: "For those particularly partial to Vetiver",
    },
    {
      id: 3,
      image: image2,
      name: "Sarashina Aromatique Incense",
      desc: "For those particularly partial to Sandalwood",
    },
    {
      id: 4,
      image: image3,
      name: "Bronze Incense Holder",
      desc: "Suited to any interior",
    },
    {
      id: 5,
      image: image4,
      name: "Aganice Aromatique Candle",
      desc: "Cardamom, Mimosa, Tobacco",
    },
    {
      id: 6,
      image: image5,
      name: "Callippus Aromatique Candle",
      desc: "A marriage of deep greens and earthy spices",
    },
    {
      id: 7,
      image: image6,
      name: "Ptolemy Aromatique Candle",
      desc: "A sensuous blend of leather, smoke and wood",
    },
    {
      id: 8,
      image: image7,
      name: "Istros Aromatique Room Spray",
      desc: "Imbue spaces with evocative scent",
    },
    {
      id: 9,
      image: image8,
      name: "Cythera Aromatique Room Spray",
      desc: "Veil of Geranium, warmth of Myrrh",
    },
    {
      id: 10,
      image: image9,
      name: "Olous Aromatique Room Spray",
      desc: "Refreshes the home",
    },
    {
      id: 11,
      image: image10,
      name: "Aesop: the book",
      desc: "For design aficionados; curious readers; aesthetes",
    },
  ];
  return (
    <ContentAndCarousel
      tag={details["tag"]}
      btnText={details["btnText"]}
      key={details["id"]}
      btn2
      color={details["color"]}
      content={details["content"]}
      title={details["title"]}
      images={images}
    ></ContentAndCarousel>
  );
};

export default Domestic;
