//images
import bg1 from "../../assets/images/bg1.jpg";
import bg2 from "../../assets/images/bg2.jpg";
import bg3 from "../../assets/images/bg3.jpg";

import meat from "../../assets/images/meat3.jpg";
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
    heroText: "Sales & Supply of Agricultural Produce",
    subtitle:
      'At Dorfville Farms, we sell, supply and deliver fresh agricultural produce from the farm straight to our customers.',
  },
  {
    img: meat,
    heroText: "Supply of Agricultural Inputs & Raw Materials",
    subtitle:
      "Agricultural inputs and raw materials are essential in the production of goods and services in the agricultural sector. We resell quality agricultural inputs and raw materials from credible manufacturers and distributor partners.",
  },
  {
    img: poultry,
    heroText: "Poultry Consultancy & Poultry Equipment",
    subtitle:
      "With our team of seasoned and experienced poultry professionals, we provide consultancy services to both existing and intending poultry farmers to help them achieve success in the poultry farming ventures.",
  },
  {
    img: training,
    heroText: "Agricultural Training & Consultancy Services",
    subtitle:
      "We provide knowledge transfer and competence building training services in agricultural production to our clients.",
  },
  {
    img: husbandry,
    heroText: "Animal Husbandry Management",
    subtitle:
      "We provide consultancy services to help with setting up your livestock farm with improved breeds of of cows, sheep, and goats.",
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
