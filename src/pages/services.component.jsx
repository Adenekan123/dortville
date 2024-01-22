import React from "react";

import {
  Container,
  Paper,
  Grid,
  Box,
  Typography,
  ImageList,
  ImageListItem,
} from "@mui/material";

import fruits from "../assets/images/fruits.jpg";
import meat from "../assets/images/meat2.jpg";
import farmconsult from "../assets/images/farmconsult2.jpg";
import training from "../assets/images/farmconsult.jpg";
import supply from "../assets/images/banner-bg2.jpg";
import animal from "../assets/images/animal.jpg";
import poultry from "../assets/images/poultry.jpg";
import rabbitry from "../assets/images/rabbitry.jpg";

import Specialities from "../components/specialities.component";
import LatestPost from "../components/latestPost";
const Services = () => {
  return (
    <>
      <Container
        sx={{
          position: "relative",
          pt: { md: 6, zIndex: -1 },
          pb: 6,
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
              Our Services
            </Typography>
            <Typography
              variant="h6"
              textTransform={"capitalize"}
              sx={{ mt: 2 }}>
              We Produce, Process, Supply and Deliver Agricultural Produce.
            </Typography>
          </Grid>
          <Grid
            item
            md={5}
            sx={{ position: "relative", order: { xs: "-1", md: "1" } }}>
            <ImageList variant="woven" cols={3} gap={8}>
              <ImageListItem>
                <img
                  src={`${training}?w=161&fit=crop&auto=format`}
                  srcSet={`${training}?w=161&fit=crop&auto=format&dpr=2 2x`}
                  alt={"about1"}
                  loading="lazy"
                />
              </ImageListItem>
              <ImageListItem>
                <img
                  src={`${fruits}?w=161&fit=crop&auto=format`}
                  srcSet={`${fruits}?w=161&fit=crop&auto=format&dpr=2 2x`}
                  alt={"about1"}
                  loading="lazy"
                />
              </ImageListItem>
              <ImageListItem>
                <img
                  src={`${poultry}?w=161&fit=crop&auto=format`}
                  srcSet={`${poultry}?w=161&fit=crop&auto=format&dpr=2 2x`}
                  alt={"about1"}
                  loading="lazy"
                />
              </ImageListItem>
              <ImageListItem>
                <img
                  src={`${rabbitry}?w=161&fit=crop&auto=format`}
                  srcSet={`${rabbitry}?w=161&fit=crop&auto=format&dpr=2 2x`}
                  alt={"about1"}
                  loading="lazy"
                />
              </ImageListItem>
              <ImageListItem>
                <img
                  src={`${animal}?w=161&fit=crop&auto=format`}
                  srcSet={`${animal}?w=161&fit=crop&auto=format&dpr=2 2x`}
                  alt={"about1"}
                  loading="lazy"
                />
              </ImageListItem>
            </ImageList>
          </Grid>
        </Grid>
      </Container>

      <Grid
        container
        justifyContent={"space-between"}
        alignItems={"center"}
        sx={{
          px: { xs: 3, md: 12 },
          py: { xs: 3, md: 6 },
          rowGap: { xs: 4, md: 0 },
        }}>
        <Grid
          item
          md={6}
          sx={{
            height: "100%!important",
            pr: { xs: 0, md: 4 },
            order: { xs: "2", md: "0" },
            "& #heading": { textAlign: "cemter" },
          }}>
          <Paper elevation={0} sx={{ textAlign: { xs: "center", md: "left" } }}>
            <Typography
              sx={{
                typography: { xs: "h4", md: "h3" },
                textTransform: "uppercase",
              }}
              color="tertiary"
              id="heading">
              Sales and Supply of Agricultural Produce
            </Typography>
          </Paper>

          <Typography
            variant="body1"
            lineHeight={2}
            sx={{ mt: 3, textAlign: "justify" }}>
            Sales and supply of agricultural produce trusted by our customers.
            We package, sell, supply and deliver quality foods and food items
            produced and processed by Dorfville farms and our trusted partners
            to our customers to satisfy their various needs. We provide a
            platform for like minded partner farms producing quality food items
            to sell their farm produce to our customers profitably. Partner
            farms are able to make use of our robust e-commerce platform to
            access a ready made market of direct consumers.
          </Typography>
        </Grid>

        <Grid item md={6} sx={{ order: { xs: "1", md: "0" } }}>
            <img src={supply} alt="cow" width="100%" height="100%" />
        </Grid>

        <Grid
          item
          md={6}
          sx={{ order: { xs: "3", md: "0" }, pt: { xs: 4, md: 0 } }}>
            <img src={meat} alt="cow" width="100%" height="100%" />
        </Grid>
        <Grid
          item
          md={6}
          sx={{
            height: "100%!important",
            order: { xs: "4", md: "0" },
            pl: { xs: 0, md: 4 },
            "& #heading": { textAlign: "cemter" },
          }}>
          <Paper elevation={0} sx={{ textAlign: { xs: "center", md: "left" } }}>
            <Typography
              sx={{
                typography: { xs: "h4", md: "h3" },
                textTransform: "capitalize",
              }}
              color="tertiary"
              id="heading">
              Supply of Agricultural farm inputs and raw materials
            </Typography>
          </Paper>

          <Typography
            variant="body1"
            lineHeight={2}
            sx={{ mt: 3, textAlign: "justify" }}>
            Agricultural inputs and raw materials are essential in the
            production of goods and services in the agricultural sector. At
            Dorfville we are authorised reseller and services provider of the
            major agricultural input manufacturers. We supply quality farm
            inputs such as seeds, agro-chemicals, medications, Vaccines, and
            farm machineries at affordable costs.
          </Typography>
        </Grid>
        <Grid
          item
          md={6}
          sx={{
            height: "100%!important",
            order: { xs: "6", md: "0" },
            pr: { xs: 0, md: 4 },
            "& #heading": { textAlign: "cemter" },
          }}>
          <Paper elevation={0} sx={{ textAlign: { xs: "center", md: "left" } }}>
            <Typography
              sx={{
                typography: { xs: "h4", md: "h3" },
                textTransform: "capitalize",
              }}
              color="tertiary"
              id="heading">
              Poultry Consultancy and Poultry Equipment
            </Typography>
          </Paper>

          <Typography
            variant="body1"
            lineHeight={2}
            sx={{ mt: 3, textAlign: "justify" }}>
            With the eggs and poultry meat market currently underserved, there
            are increasing demand for eggs and poultry meat. We provide
            consultancy services to help intending poultry farmers with setting
            up new poultry farms, and processing facilities. Our services
            include construction of structures, supply of cages, POL birds,
            feeds and medications.
          </Typography>
        </Grid>
        <Grid
          item
          md={6}
          sx={{ order: { xs: "5", md: "0" }, pt: { xs: 4, md: 0 } }}>
          
            <img src={farmconsult} alt="cow" width="100%" height="100%" />
          
        </Grid>
        <Grid
          item
          md={6}
          sx={{ order: { xs: "7", md: "0" }, pt: { xs: 4, md: 0 } }}>
          
            <img src={training} alt="cow" width="100%" height="100%" />
          
        </Grid>
        <Grid
          item
          md={6}
          sx={{
            height: "100%!important",
            order: { xs: "8", md: "0" },
            pl: { xs: 0, md: 4 },
            "& #heading": { textAlign: "cemter" },
          }}>
          <Paper elevation={0} sx={{ textAlign: { xs: "center", md: "left" } }}>
            <Typography
              sx={{
                typography: { xs: "h4", md: "h3" },
                textTransform: "capitalize",
              }}
              color="tertiary"
              id="heading">
              Agricultural Training and Consultancy Services
            </Typography>
          </Paper>

          <Typography
            variant="body1"
            lineHeight={2}
            sx={{ mt: 3, textAlign: "justify" }}>
            We provide agricultural training and consultancy services for our
            clients to help them with their farms, gardens or landscaping
            projects. We help you bring your farming dreams to reality, by
            providing you hands-on guidance and support all the step of the way.
          </Typography>
        </Grid>
        <Grid
          item
          md={6}
          sx={{
            height: "100%!important",
            order: { xs: "10", md: "0" },
            pr: { xs: 0, md: 4 },
            "& #heading": { textAlign: "cemter" },
          }}>
          <Paper elevation={0} sx={{ textAlign: { xs: "center", md: "left" } }}>
            <Typography
              sx={{ typography: { xs: "h4", md: "h3" } }}
              color="tertiary"
              id="heading">
              Animal Husbandry Management
            </Typography>
          </Paper>

          <Typography
            variant="body1"
            lineHeight={2}
            sx={{ mt: 3, textAlign: "justify" }}>
            We provide consultancy services to help with setting up your
            livestock farm of improved breeds of of cows, sheep, and goats. We
            supply quality breeds of breeding animals to help improve the
            quality of breeds in your farm. We also provide out customers with
            insemination services to cross their flocks for reproduction.
            Additionally, we also raise animals for our clients at a affordable
            cost using our existing facilities.
          </Typography>
        </Grid>
        <Grid
          item
          md={6}
          sx={{ order: { xs: "9", md: "0" }, pt: { xs: 4, md: 0 } }}>
          
            <img src={animal} alt="cow" width="100%" height="100%" />
          
        </Grid>
      </Grid>

      <Specialities />
      <LatestPost />
    </>
  );
};

export default Services;
