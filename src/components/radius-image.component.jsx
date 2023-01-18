import React from "react";
import { Box } from "@mui/material";

const RadiusImage = ({ src }) => {
  return (
    <Box
      sx={{
        borderTopLeftRadius: "30%",
        borderTopRightRadius: "30%",
        borderBottomLeftRadius: "50%",
        borderBottomRightRadius: "50px",
        overflow: "hidden",
        height: "500px",
        width: "80%",
        margin: "0 auto",
      }}>
      <img
        src={src}
        alt={"radius"}
        width="100%"
        height="100%"
        style={{ objectFit: "cover", objectPosition: "center" }}
      />
    </Box>
  );
};

export default RadiusImage;
