import React from "react";
import { Paper, Box } from "@mui/material";

const GlassBg = ({ children, src }) => {
  return (
    <Paper
      elevation={0}
      sx={{
        p: { xs: 2, md: 3 },
        minHeight: { xs: "auto", md: "40vh" },
        backgroundImage: `url(${src})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}>
      <Box
        sx={{
          height: { xs: "auto", md: "40vh" },
          backgroundImage:
            "linear-gradient(to right,rgba(0, 0, 255, 0.176),rgba(255,255,255,.05),rgba(113, 113, 255, 0.176))",
          backdropFilter: "blur(5px)",
          boxShadow: "0px 20px 25px rgba(0,0,0,5%)",
          border: "1px solid #8881a0",
          borderRadius: "20px",
          p: 3,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        {children}
      </Box>
    </Paper>
  );
};

export default GlassBg;
