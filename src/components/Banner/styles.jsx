import { styled } from "@mui/system";
import Box from "@mui/material/Box";

import "animate.css/animate.min.css";

//icons
import ArrowRightAltIcon from "@mui/icons-material/East";
import ArrowLeftAltIcon from "@mui/icons-material/West";

// Create a custom style for the slide container
export const SlideContainer = styled(Box)({
  height: "75vh",
  "& .animating-text": {
    animationName: "fadeInDown",
    animationDuration: "1.5s",
    animationFillMode: "both",
  },
  "@media(max-width:767px)": {
    minHeight: "60vh",
  },
});

export const SlideImage = styled(Box)`
  background: rgb(87, 197, 255);
  background: linear-gradient(
      159deg,
      rgba(38, 47, 87, 0.7203256302521008) 0%,
      rgba(1, 9, 32, 0.608) 100%
    ),
    url(${(props) => props.imageurl});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
  &.animate-bg {
    animation: background-slide 8s alternate forwards;
    @keyframes background-slide {
      from {
        background-size: 105% 105%; // set the starting position of the background
      }
      to {
        background-size: 100% 100%; // set the ending position of the background
      }
    }
  }
`;

//Create a custom styled component for the hero content
export const HeroContent = styled(Box)({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  zIndex: 1,
  paddingLeft: "10rem",
  color: "#fff",
  maxWidth: "60%",
  "@media(max-width:750px)": {
    maxWidth: "100%",
    paddingLeft: "16px",
  },
});

const ArrowButton = styled(Box)({
  position: "absolute",
  width: "30px",
  height: "30px",
  top: "50%",
  transform: "translateY(-50%)",
  zIndex: 1,
  color: "#fff",
  backgroundColor: "rgba(7, 196, 7, 0.8)",
  padding: "0.5rem",
  borderRadius: "50%",
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  opacity: 0,
  transition: ".5s ease",
  "&:hover": {
    backgroundColor: "#fff",
    color: "#111",
  },
});

export const PrevArrow = ({ onClick }) => {
  return (
    <ArrowButton className="slider-btn" onClick={onClick} sx={{ left: "1rem" }}>
      <ArrowLeftAltIcon />
    </ArrowButton>
  );
};

export const NextArrow = ({ onClick }) => {
  return (
    <ArrowButton
      className="slider-btn"
      onClick={onClick}
      sx={{ right: "1rem" }}>
      <ArrowRightAltIcon />
    </ArrowButton>
  );
};
