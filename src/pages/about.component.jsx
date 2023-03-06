import React from "react";
import { Container, Paper, Grid, Box, Typography } from "@mui/material";

import AppointMent from "../components/appointment.component";
import Specialities from "../components/specialities.component";
import LatestPost from "../components/latestPost";

import about from "../assets/images/banner-bg4.jpg";
import about2 from "../assets/images/about2.jpg";
import about4 from "../assets/images/about4.jpg";
import joinUsImage from "../assets/images/husbandry.jpg";

const About = () => {
  return (
    <>
      <Container
        sx={{
          position: "relative",
          zIndex: -1,
          py: { xs: 10, md: 6 },
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
          rowSpacing={4}
          sx={{ position: "relative", zIndex: 1, px: { md: 8 } }}>
          <Grid item md={6}>
            <Typography
              sx={{ typography: { xs: "h3", md: "h1" } }}
              textTransform={"capitalize"}>
              About DorfVille
            </Typography>
            <Typography
              variant="h6"
              textTransform={"capitalize"}
              sx={{ mt: 2 }}>
              We produce, process, supply and deliver Agricultural Produce.
            </Typography>

            <AppointMent />
          </Grid>
          <Grid
            item
            md={5}
            sx={{ position: "relative", order: { xs: "-1", md: "1" } }}>
            <Grid container spacing={1}>
              <Box
                component="img"
                src={about}
                alt="about 1"
                sx={{
                  display: "inline-block",
                  width: "100%",
                  borderRadius: "5px",
                  objectFit: "cover",
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Container>

      <Grid
        container
        columnSpacing={12}
        rowSpacing={3}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{
          px: { xs: 3, md: 12 },
          py: { xs: 3, md: 5 },
          textAlign: "justify",
          backgroundColor: "#020350",
          color: "#FFFF",
        }}>
        <Grid item md={6}>
          <Box
            component="img"
            src={joinUsImage}
            alt="Cow face"
            sx={{ width: "100%" }}
          />
        </Grid>
        <Grid item md={6}>
          <Typography
            sx={{ typography: { xs: "h4", md: "h3" } }}
            color="tertiary"
            id="heading">
            Our Farm Story
          </Typography>

          <Typography variant="body1" lineHeight={2} sx={{ mt: 3 }}>
            Dorfville Agricultural Production Limited is a 360° agricultural
            production and services company that focuses on the production,
            processing, supply, and delivery of Agricultural produce. We run 25
            acres integrated farm located in Ibadan, an animal feed processing
            plant and an ultramodern butchery and grocery Farm Shop.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        columnSpacing={12}
        rowSpacing={3}
        justifyContent={"space-between"}
        alignItems={"center"}
        sx={{ px: { xs: 3, md: 12 }, py: { xs: 3, md: 6 } }}>
        <Grid
          item
          md={6}
          sx={{
            height: "100%!important",
            "& #heading": { textAlign: "cemter" },
          }}>
          <Paper elevation={0} sx={{ textAlign: { xs: "center", md: "left" } }}>
            <Typography
              sx={{ typography: { xs: "h4", md: "h3" } }}
              color="tertiary"
              id="heading">
              Our Philosophy
            </Typography>
          </Paper>

          <Typography
            variant="body1"
            lineHeight={2}
            sx={{ mt: 3, textAlign: "justify" }}>
            At Dorfville Farms, we have adopted a Farm2Fork strategy that
            ensures we produce high quality and healthy agricultural foods and
            produce straight to our customers kitchens with little to no impact
            on our environment. We have adopted a zero-waste practice by
            continuously implementing a sustainable food production system to
            ensure that we make use of renewable energy in all our farm
            operations as much as possible and ensuring that all wastes
            generated at the farm are recycled and reused on the farm.
          </Typography>
        </Grid>
        <Grid item md={6} sx={{ order: { xs: "-1", md: "1" } }}>
          <img src={about4} alt="cow" width="100%" height="100%" />
        </Grid>
      </Grid>

      <Paper
        elevation={0}
        sx={{ py: 6, px: { xs: 3, md: 12 }, backgroundColor: "#FAFAFA" }}>
        <Container sx={{ textAlign: "center", mb: 8 }} maxWidth="lg">
          <Typography sx={{ mb: 1, typography: { xs: "h4", md: "h3" } }}>
            The Farm
          </Typography>
          <Typography
            variant="body1"
            color="grey"
            sx={{ mb: 1, lineHeight: "2" }}>
            Dorfville Farms is an integrated farm specializing in Crop
            Production, raising Livestock, Poultry, Rabbitry, Fruit and
            Vegetable Farming that supply fresh farm produce to our Ultramodern
            Butchery and farm shop to satisfy our customers’ needs
          </Typography>
        </Container>

        <Box>
          <img
            src={about2}
            alt="imag1"
            width="100%"
            height="500px"
            style={{ borderRadius: "20px", objectFit: "cover" }}
          />
        </Box>
      </Paper>

      <Specialities />

      {/* <Paper elevation={0} sx={{ py: 10, px: { xs: 3, md: 12 } }}>
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
      </Paper> */}

      <LatestPost />
    </>
  );
};

export default About;
