//images
import bg1 from "../../assets/images/bg1.jpg";
import bg2 from "../../assets/images/bg2.jpg";
import bg3 from "../../assets/images/bg3.jpg";

import meat from "../../assets/images/meat2.jpg";
import training from "../../assets/images/farmconsult.jpg";
import supply from "../../assets/images/banner-bg2.jpg";

import poultry from "../../assets/images/poultry.jpg";
import husbandry from "../../assets/images/husbandry.jpg";

import { PrevArrow, NextArrow } from "./styles";

// Define the image URLs
export const imageUrls = [bg1, bg2, bg3];
export const slidesContent = [
  {
    img: supply,
    heroText: "Sales and supply of agricultural produce",
    subtitle:
      'Sales and supply of agricultural produce trusted by all customers; "Sellers to consumers" include small-scale farmers, food retailers (farm stores),',
  },
  {
    img: meat,
    heroText: "Supply of Agricultural farm inputs and raw materials",
    subtitle:
      "Agricultural inputs and raw materials are essential in the production of goods and services in the agricultural sector. The two terms are often used interchangeably but they have different meanings.",
  },
  {
    img: poultry,
    heroText: "Poultry Consultancy and Poultry Equipment",
    subtitle:
      "Poultry Consultancy and Poultry Equipment, we educate customers about what kinds of fresh eggs they should buy.",
  },
  {
    img: training,
    heroText: "Agricultural Training and Consultancy Services",
    subtitle:
      "Agricultural Training and Consultancy Services for our clients to help them with their farms, gardens or landscaping projects.",
  },
  {
    img: husbandry,
    heroText: "Animal Husbandry Management",
    subtitle:
      "Animal Husbandry Management, we produce fresh meat from our garden every month.",
  },
];

export const settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 8000,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
  className: "custom-slider",
  fade: true,
  beforeChange: (current, next) =>
    setTimeout(() => {
      //animate bg
      document
        .querySelector(`[data-index="${current}"] .slider-img`)
        .classList.remove("animate-bg");

      document
        .querySelector(`[data-index="${next}"] .slider-img`)
        .classList.add("animate-bg");

      //animate text
      document
        .querySelector(`[data-index="${current}"] .animated-text`)
        .classList.remove("animating-text");

      document
        .querySelector(`[data-index="${next}"] .animated-text`)
        .classList.add("animating-text");
    }, 0),
};
