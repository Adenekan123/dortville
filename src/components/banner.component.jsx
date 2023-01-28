import React from "react";
import { Container, Box, Grid, Typography } from "@mui/material";
import RadiusImage from "./radius-image.component";
import bannerImage from "../assets/images/husbandry.jpg";
import bannerVideo from "../assets/images/bgVid.mp4";

import AppointMent from "./appointment.component";

import verified from "../assets/images/verified.png";

const Banner = () => {
  return (
    <Container
      sx={{
        position: "relative",
        pt: { xs: 15, md: 20 },
        pb: 10,
        backgroundColor: "#FAFAFA",
      }}
      maxWidth="false">
      <Box
        sx={{
          width: "270px",
          height: "270px",
          borderRadius: "50%",
          backgroundImage:
            "linear-gradient(to right,rgba(168, 253, 99, 0.089),#b5fab51f)",
          position: "absolute",
          top: "-90px",
          left: "-50px",
          backdropFilter: "blur(10px)",
        }}></Box>

      <Grid
        container
        justifyContent={"space-between"}
        alignItems="center"
        sx={{ position: "relative", zIndex: 1, px: { md: 8 } }}>
        <Grid item md={6}>
          <Typography
            sx={{ typography: { xs: "h2", md: "h1" } }}
            textTransform={"capitalize"}>
            We are Dortville agricultuce
          </Typography>
          <Typography variant="h6" textTransform={"capitalize"} sx={{ mt: 2 }}>
            We produce,process,supply and deliver Agricultural Produce.
          </Typography>

          <AppointMent />
        </Grid>
        <Grid
          item
          md={5}
          sx={{ position: "relative", display: { xs: "none", md: "block" } }}>
          <Box sx={{ position: "absolute", bottom: "50px", left: "80px" }}>
            <img src={verified} alt="verified-icon" height={"120px"} />
          </Box>
          <RadiusImage>
            <video
              src={bannerVideo}
              poster={bannerImage}
              loop
              autoPlay
              muted
              alt={"radius"}
              width="100%"
              height="100%"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </RadiusImage>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;
