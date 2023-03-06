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
              sx={{ typography: { xs: "h4", md: "h3" } }}
              color="tertiary"
              id="heading">
              Sales and supply of agricultural produce
            </Typography>
          </Paper>

          <Typography
            variant="body1"
            lineHeight={2}
            sx={{ mt: 3, textAlign: "justify" }}>
            Sales and supply of agricultural produce trusted by all customers;
            "Sellers to consumers" include small-scale farmers, food retailers
            (farm stores), convenience store operators who sell goods sold at
            retail outlets only in or near their premises, grocery/distributor
            merchants serving primarily those areas where the seller's product
            is available as fresh meat products for sale.
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
              sx={{ typography: { xs: "h4", md: "h3" } }}
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
            production of goods and services in the agricultural sector. The two
            terms are often used interchangeably but they have different
            meanings. Agricultural inputs are materials used in the production
            of crops and livestock, while raw materials are unprocessed
            materials used in the production of finished goods.
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
              sx={{ typography: { xs: "h4", md: "h3" } }}
              color="tertiary"
              id="heading">
              Poultry Consultancy and Poultry Equipment
            </Typography>
          </Paper>

          <Typography
            variant="body1"
            lineHeight={2}
            sx={{ mt: 3, textAlign: "justify" }}>
            Poultry Consultancy and Poultry Equipment, we educate customers
            about what kinds of fresh eggs they should buy. The Chicken &
            Dungarees Egg Bowl - Eggs in the shell are easy to eat by themselves
            or with gravy! This egg bowl features our standard-sized chicken
            dumplings made from tender juicy yolk that's served as a side dish.
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
              sx={{ typography: { xs: "h4", md: "h3" } }}
              color="tertiary"
              id="heading">
              Agricultural Training and Consultancy Services
            </Typography>
          </Paper>

          <Typography
            variant="body1"
            lineHeight={2}
            sx={{ mt: 3, textAlign: "justify" }}>
            gricultural Training and Consultancy Services for our clients to
            help them with their farms, gardens or landscaping projects. A guide
            that gives some ideas about the different areas of agriculture as
            well how they should be treated by your farm management team when
            buying a home-based system from us.
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
            Animal Husbandry Management, we produce fresh meat from our garden
            every month. We're in the business to help you provide that quality
            farm-fresh product at affordable prices for everyone's enjoyment."
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
