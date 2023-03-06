import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { SlideContainer, SlideImage, HeroContent } from "./styles";

import { settings, slidesContent } from "./setup";

import AppointMent from "../appointment.component";

const Banner = () => {
  return (
    <Box
      className="custom-slider"
      sx={{ position: "relative", ":hover .slider-btn": { opacity: 1 } }}>
      {/* <Box
        component="img"
        src={paper}
        sx={{
          position: "absolute",
          left: 0,
          top: "-45px",
          transform: "rotate(180deg)",
          width: "100%",
          zIndex: 1,
        }}
      /> */}
      <Slider {...settings}>
        {slidesContent.map(({ img, heroText, subtitle }, index) => (
          <SlideContainer key={index}>
            <SlideImage imageurl={img} className="slider-img" />
            <HeroContent className="hero-content">
              <Typography
                variant="h1"
                className="animated-text"
                sx={{
                  textTransform: "capitalize",
                  typography: { xs: "h3", md: "h1" },
                  mb: 2,
                }}>
                {heroText}
              </Typography>
              <Typography variant="subtitle1">{subtitle}</Typography>
              <AppointMent />
            </HeroContent>
          </SlideContainer>
        ))}
      </Slider>
    </Box>
  );
};

export default Banner;
