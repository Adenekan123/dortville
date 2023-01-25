import React from "react";
import { Container, Box } from "@mui/material";

const RadiusImageSection = ({ src, direction = "left" }) => {
  return (
    <Container
      maxWidth="false"
      sx={{ height: "100%", padding: "0px !important" }}>
      <Box
        sx={{
          borderTopLeftRadius: direction === "left" ? "40%" : "50px",
          borderTopRightRadius: direction === "right" ? "40%" : "50px",
          borderBottomLeftRadius: "30%",
          borderBottomRightRadius: "30%",
          overflow: "hidden",
          minHeight: "300px",
          height: "100%",
          position: "relative",
        }}>
        <img
          src={src}
          alt={"radius"}
          width="100%"
          height="100%"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </Box>
    </Container>
  );
};

export default RadiusImageSection;
