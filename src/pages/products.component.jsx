import React from "react";

import Header from "../components/common/header.component";
import GlassBg from "../components/glassBg.component";
import AppointMent from "../components/appointment.component";
import RadiusImageSection from "../components/radius-image-section.component";

import VerifiedIcon from "@mui/icons-material/Verified";

import farmProduce from "../assets/images/banner-bg2.jpg";
import husbandry from "../assets/images/husbandry.jpg";

import { Grid, Stack, Typography, Paper, Box, Chip } from "@mui/material";

const Products = () => {
  return (
    <>
      <Header />
      <Paper
        elevation={0}
        sx={{
          pt: { xs: 11, md: 17 },
          pb: { xs: 5, md: 10 },
          px: { xs: 3, md: 12 },
          backgroundColor: "#FAFAFA",
        }}>
        <GlassBg src={farmProduce}>
          <Paper
            elevation={0}
            sx={{
              maxWidth: { xs: "100%", md: "80%" },
              mx: "auto",
              backgroundColor: "transparent",
            }}>
            <Typography
              sx={{ typography: { xs: "h4", md: "h2" } }}
              color="primary">
              Sales and Supply of Agricultural farm produce.
            </Typography>
          </Paper>
        </GlassBg>
        <Typography sx={{ mt: 4, textAlign: "justify" }}>
          sheep, and cows as live animals, processed meat and dairy products for
          healthy consumption. We supply and deliver livestock of different
          breeds and sizes to meet our customers’ demands for everyday domestic
          consumption, festivities, and party needs. Our livestock are well
          nurtured, and grass fed with quality grass and legume species
          cultivated on an irrigated land to ensure nutrient dense meat of the
          highest quality
        </Typography>
      </Paper>

      <Paper elevation={0} sx={{ py: 10, px: { xs: 3, md: 12 } }}>
        <Grid container rowSpacing={4} sx={{ justifyContent: "space-between" }}>
          <Grid item md={6}>
            <Typography variant="h3">
              Thousands of people trust our agricultural products
            </Typography>
            <Typography variant="body1" color="grey" sx={{ mt: 2 }}>
              Join the amazing farming that we provide for you and just for your
            </Typography>
            <Box
              sx={{
                bgcolor: "secondary.main",
                p: 3,
                mt: 5,
                borderRadius: "22px",
              }}>
              <Stack direction="row">
                <Box sx={{ mr: 4 }}>
                  <Typography color="primary" variant="h6" marginBottom={1}>
                    20,000+ Acers
                  </Typography>
                  <Typography variant="subtitle" color="#eee">
                    Acres of land
                  </Typography>
                </Box>
                <Box>
                  <Typography color="primary" variant="h6" marginBottom={1}>
                    10,000+ Farmers
                  </Typography>
                  <Typography variant="subtitle" color="#eee">
                    Acres of land
                  </Typography>
                </Box>
                <VerifiedIcon
                  color="primary"
                  sx={{
                    ml: "auto",
                    fontSize: "80px",
                    textShadow: "0px 20px 25px rgba(0,0,0,0.8)",
                  }}
                />
              </Stack>
            </Box>
            <AppointMent />
          </Grid>
          <Grid
            item
            md={4}
            sx={{ position: "relative", order: { xs: -1, md: "initial" } }}>
            <RadiusImageSection src={husbandry} direction="right" />
            <Paper
              elevation={0}
              sx={{
                position: "absolute",
                top: "50%",
                left: { xs: "50%", md: "-60px" },
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
                label="Join Us"
              />
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default Products;
