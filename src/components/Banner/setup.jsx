//images
import bg1 from "../../assets/images/bg1.jpg";
import bg2 from "../../assets/images/bg2.jpg";
import bg3 from "../../assets/images/bg3.jpg";

import { PrevArrow, NextArrow } from "./styles";

// Define the image URLs
export const imageUrls = [bg1, bg2, bg3];

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
