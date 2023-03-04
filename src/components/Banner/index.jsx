import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { SlideContainer, SlideImage, HeroContent } from "./styles";

import { imageUrls, settings } from "./setup";

import paper from "../../assets/images/paper.png";

import { Button } from "@mui/material";

const Banner = () => {
  return (
    <Box className="custom-slider" sx={{ position: "relative" }}>
      <Box
        component="img"
        src={paper}
        sx={{
          position: "absolute",
          left: 0,
          top: "-53px",
          transform: "rotate(180deg)",
          width: "100%",
          zIndex: 1,
        }}
      />
      <Slider {...settings}>
        {imageUrls.map((imageUrl, index) => (
          <SlideContainer key={index}>
            <SlideImage imageurl={imageUrl} className="slider-img" />
            <HeroContent className="hero-content">
              <Typography
                variant="h1"
                className="animated-text"
                sx={{ textTransform: "capitalize" }}>
                we are dorfville
              </Typography>
              <Typography variant="subtitle1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                officiis quasi
              </Typography>
              <Button variant="contained" sx={{ mt: 5 }}>
                Join Us
              </Button>
            </HeroContent>
          </SlideContainer>
        ))}
      </Slider>
    </Box>
  );
};

export default Banner;
