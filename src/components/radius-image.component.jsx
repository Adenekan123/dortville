import React from "react";
import { Box } from "@mui/material";

const RadiusImage = ({ children }) => {
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
        marginLeft: "auto",
      }}>
      {children}
    </Box>
  );
};

export default RadiusImage;
