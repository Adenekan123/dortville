import React, { useEffect } from "react";

import {
  Container,
  Paper,
  Grid,
  Box,
  Typography,
  ImageList,
  ImageListItem,
} from "@mui/material";

import { useParams } from "react-router-dom";

import fruits from "../assets/images/fruits.jpg";
import training from "../assets/images/farmconsult.jpg";
import animal from "../assets/images/animal.jpg";

import crops from "../assets/images/crops.jpg";
import poultry from "../assets/images/poultry.jpg";
import rabbitry from "../assets/images/rabbitry.jpg";
import husbandry from "../assets/images/husbandry.jpg";

import LatestPost from "../components/latestPost";

const Products = () => {
  const { id } = useParams();

  useEffect(() => {
    if (document.getElementById(id))
      document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  }, [id]);
  return (
    <>
      <Container
        sx={{
          position: "relative",
          pt: { xs: 6, zIndex: -1 },
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
              Our Products
            </Typography>
            <Typography variant="h6" sx={{ mt: 2 }}>
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
              Crop Production
            </Typography>
          </Paper>

          <Typography
            variant="body1"
            lineHeight={2}
            sx={{ mt: 3, textAlign: "justify" }}>
            With over 20 acres of irrigated arable land, we farm and produce all
            varieties of food crops such as Maize, Cowpeas, Cassava, Yam, all
            year round
          </Typography>
        </Grid>

        <Grid item md={6} sx={{ order: { xs: "1", md: "0" } }} id="crops">
          <img src={crops} alt="cow" width="100%" height="100%" />
        </Grid>

        <Grid
          item
          md={6}
          sx={{ order: { xs: "3", md: "0" }, pt: { xs: 4, md: 0 } }}
          id="poultry">
          <img src={poultry} alt="cow" width="100%" height="100%" />
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
              Poultry Faming
            </Typography>
          </Paper>

          <Typography
            variant="body1"
            lineHeight={2}
            sx={{ mt: 3, textAlign: "justify" }}>
            Our poultry farm produces quality eggs and healthy eggs and healthy
            poultry meat to satisfy our customer’s daily and commercial needs
            commercial needs.
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
              Rabbitry Farming
            </Typography>
          </Paper>

          <Typography
            variant="body1"
            lineHeight={2}
            sx={{ mt: 3, textAlign: "justify" }}>
            We breed and supply exotic breeds of rabbit for breeding and meat to
            cater to our customer’s meat needs both for their domestic
            consumption and party needs.
          </Typography>
        </Grid>
        <Grid
          item
          md={6}
          sx={{ order: { xs: "5", md: "0" }, pt: { xs: 4, md: 0 } }}
          id="rabitry">
          <img src={rabbitry} alt="cow" width="100%" height="100%" />
        </Grid>
        <Grid
          item
          md={6}
          sx={{ order: { xs: "7", md: "0" }, pt: { xs: 4, md: 0 } }}
          id="vegetable">
          <img
            src={fruits}
            alt="Fruits and vegetables"
            width="100%"
            height="100%"
          />
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
              Fruit and Vegetable Farming
            </Typography>
          </Paper>

          <Typography
            variant="body1"
            lineHeight={2}
            sx={{ mt: 3, textAlign: "justify" }}>
            At Dorfville farms, we grow, and supply varieties of fresh fruits
            and vegetables harvested at the peak of their freshness and ripeness
            to ensure highest nutrient quality.
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
              Livestock Farming & Animal Husbandry
            </Typography>
          </Paper>

          <Typography
            variant="body1"
            lineHeight={2}
            sx={{ mt: 3, textAlign: "justify" }}>
            We breed and supply exotic breeds of rabbit for breeding and meat to
            cater to our customer’s meat needs both for their domestic
            consumption and party needs.
          </Typography>
        </Grid>
        <Grid
          item
          md={6}
          sx={{ order: { xs: "9", md: "0" }, pt: { xs: 4, md: 0 } }}
          id="rabitry">
          <img src={husbandry} alt="cow" width="100%" height="100%" />
        </Grid>
      </Grid>

      <LatestPost />
    </>
  );
};

export default Products;
