import React from "react";
import { Box } from "@mui/material";

const GlassBg = ({ children, src }) => {
  return (
    <Box
      sx={{
        p: 10,
        position: "relative",
        left: 0,
        top: 0,
        height: "300px",
        background: `url(${src})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        "&::before": {
          content: '""',
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "#1615156d",
        },
      }}>
      {children}
    </Box>
  );
};

export default GlassBg;
