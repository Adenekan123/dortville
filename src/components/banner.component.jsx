import React from "react";
import { Container, Paper, Box, Grid, Typography, Button } from "@mui/material";
import RadiusImage from "./radius-image.component";
import bannerImage from "../assets/images/banner-bg.jpg";

import verified from "../assets/images/icons8-verified-badge-96.png.crdownload";

const Banner = () => {
  return (
    <Container sx={{ pt: 20 }} maxWidth="xl">
      <Paper elevation={0}>
        <Grid container justifyContent={"space-between"}>
          <Grid item md={6}>
            <Typography variant="h1" textTransform={"capitalize"}>
              We are Dortville agricultuce production
            </Typography>
            <Typography variant="h6" textTransform={"capitalize"}>
              We produce,process,supply and deliver Agricultural Produce.
            </Typography>
            <Box sx={{ mt: 5 }}>
              <Button
                color="secondary"
                variant="contained"
                size="large"
                sx={{ mr: 2 }}>
                Learn More
              </Button>
              <Button color="warning" variant="contained" size="large">
                Contact Us
              </Button>
            </Box>
          </Grid>
          <Grid item md={4} sx={{ position: "relative" }}>
            <Box sx={{ position: "absolute", bottom: "-60px", left: "-30px" }}>
              <img src={verified} alt="verified-icon" height={"150px"} />
            </Box>
            <RadiusImage src={bannerImage} />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Banner;
