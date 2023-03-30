import React from "react";

import { Box } from "@mui/material";
import { Link } from "react-router-dom";

// import { LocationOn, CalendarMonth, TimeToLeave } from "@mui/icons-material";

const AppointMent = () => {
  return (
    <Box
      component={"span"}
      sx={{
        px: 3,
        py: 3,
        mt: 5,
        backgroundColor: "#00b100",
        boxShadow: "0px 20px 25px rgba(0,0,0,8%)",
        backdropFilter: " blur(5px)",
        border: "1px solid green",
        fontSize: "18px",
        color: "#fff",
        display: "inline-block",
        borderRadius: "5px",
      }}>
      <Link
        style={{
          color: "inherit",
          textDecoration: "none",
          display: "inline-block",
        }}
        to="/farmvisit">
        Book a Farm Visit
      </Link>
    </Box>
  );
};

export default AppointMent;
