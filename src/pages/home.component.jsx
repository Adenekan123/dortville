import React from "react";
import Zoom from "react-reveal";

import Banner from "../components/Banner/";
import { Paper, Grid, Typography, Chip, Box } from "@mui/material";

import RadiusImageSection from "../components/radius-image-section.component";

import ourStoryImage from "../assets/images/husbandry.jpg";

import Specialities from "../components/specialities.component";
import LatestPost from "../components/latestPost";

const Home = () => {
  return (
    <>
      <Banner />
      <Zoom bottom cascade>
        <Grid
          container
          columnSpacing={12}
          rowSpacing={3}
          justifyContent="space-between"
          sx={{ px: { xs: 3, md: 12 }, py: { xs: 3, md: 6 } }}>
          <Grid item md={4} sx={{ minHeight: { xs: "400px" } }}>
            <Box
              sx={{
                position: "relative",
                height: "100%",
              }}>
              <RadiusImageSection src={ourStoryImage} />

              <Paper
                elevation={0}
                sx={{
                  position: "absolute",
                  top: "60%",
                  right: { xs: "20%", md: "-50px" },
                  transform: "translateY(-60%)",
                  backgroundColor: "transparent",
                }}>
                <Chip
                  sx={{
                    backgroundColor: "#e0e0e07f",
                    color: "#fff",
                    backdropFilter: "blur(5px)",
                    fontSize: "1rem",
                    fontWeight: "bold",
                    px: 4,
                    py: 4,
                    boxShadow: "0px 15px 25px rgba(0,0,0,10%) ",
                  }}
                  label="Since 2014"
                />
              </Paper>
            </Box>
          </Grid>
          <Grid
            item
            md={8}
            sx={{
              height: "100%!important",
              "& #heading": { textAlign: "cemter" },
            }}>
            <Paper
              elevation={0}
              sx={{ textAlign: { xs: "center", md: "left" } }}>
              <Typography
                sx={{ typography: { xs: "h4" } }}
                color="tertiary"
                id="heading">
                Our Story
              </Typography>
            </Paper>

            <Typography
              variant="body1"
              lineHeight={2}
              sx={{ mt: 1, textAlign: "justify" }}>
              Dorfville Agricultural Production Limited is a 360° agricultural
              production and services company that focuses on the production,
              processing, supply, and delivery of Agricultural produce. We run
              25 acres integrated farm located in Ibadan, an animal feed
              processing plant and an ultramodern butchery and grocery Farm
              Shop.
            </Typography>

            <Paper
              elevation={0}
              sx={{ mt: 5, textAlign: { xs: "center", md: "left" } }}>
              <Typography
                sx={{ typography: { xs: "h4" } }}
                color="tertiary"
                id="heading">
                Our Philosophy
              </Typography>
            </Paper>
            <Typography
              variant="body1"
              lineHeight={2}
              sx={{ mt: 1, textAlign: "justify" }}>
              At Dorfville Farms, we have adopted a Farm2Fork strategy that
              ensures we produce high quality and healthy agricultural foods and
              produce straight to our customers kitchens with little to no
              impact on our environment. We have adopted a zero-waste practice
              by continuously implementing a sustainable food production system
              to ensure that we make use of renewable energy in all our farm
              operations as much as possible and ensuring that all wastes
              generated at the farm are recycled and reused on the farm.
            </Typography>
          </Grid>
        </Grid>
      </Zoom>

      <Specialities />
      <LatestPost />

      {/* <Paper
        elevation={0}
        sx={{
          py: { xs: 0, md: 3 },
          px: { xs: 0, md: 12 },
          position: "relative",
        }}>
        <GlassBg src={best}></GlassBg>
      </Paper> */}
    </>
  );
};

export default Home;
