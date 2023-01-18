import React from "react";
import { Box } from "@mui/material";

const RadiusImage = ({ src }) => {
  return (
    <Box
      sx={{
        borderTopLeftRadius: "40%",
        borderTopRightRadius: "40%",
        borderBottomLeftRadius: "50%",
        borderBottomRightRadius: "50px",
        overflow: "hidden",
        height: "120%",
        width: "90%",
        margin: "0 auto",
      }}>
      <img
        src={src}
        alt={"radius"}
        width="100%"
        height="100%"
        style={{ objectFit: "cover" }}
      />
    </Box>
  );
};

export default RadiusImage;
