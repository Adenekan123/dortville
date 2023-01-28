import React from "react";

import BlogCard from "../components/blogCard.component";
import {
  Container,
  Paper,
  Grid,
  Box,
  Typography,
  Button,
  ImageList,
  ImageListItem,
} from "@mui/material";

import fruits from "../assets/images/fruits.jpg";
import meat from "../assets/images/meat2.jpg";
import farmconsult from "../assets/images/farmconsult2.jpg";
import training from "../assets/images/farmconsult.jpg";
import supply from "../assets/images/banner-bg2.jpg";
import animal from "../assets/images/animal.jpg";
import joinUsImage from "../assets/images/banner-bg4.jpg";
import crops from "../assets/images/crops.jpg";
import poultry from "../assets/images/poultry.jpg";
import husbandry from "../assets/images/husbandry.jpg";
import rabbitry from "../assets/images/rabbitry.jpg";

import { ChevronRight } from "@mui/icons-material";

const Services = () => {
  return (
    <>
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
              We produce,process,supply and deliver Agricultural Produce.
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
        sx={{ p: { xs: 3, md: 12 }, rowGap: { xs: 4, md: 0 } }}>
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

      <Paper
        elevation={0}
        sx={{ py: 10, px: { xs: 3, md: 12 }, backgroundColor: "#FAFAFA" }}>
        <Container sx={{ textAlign: "center", mb: 8 }} maxWidth="md">
          <Typography sx={{ mb: 1, typography: { xs: "h4", md: "h3" } }}>
            Our featured products
          </Typography>
          <Typography variant="body1" color="grey" sx={{ lineHeight: 2 }}>
            We make use of renewable energy in all our farm operations as much
            as possible and ensuring that all wastes generated at the farm are
            recycled and reused on the farm.
          </Typography>
        </Container>

        <Grid container spacing={2} justifyContent="center">
          <Grid item md={3}>
            <Paper
              elevation={0}
              sx={{
                pt: 5,
                px: 4,
                textAlign: "center",
                boxShadow: "0px 20px 25px rgba(0,0,0,4%)",
                borderRadius: "30px",
                minHeight: "300px",
              }}>
              <Box>
                <img
                  src={crops}
                  alt="imag1"
                  width="80px"
                  height="80px"
                  style={{ borderRadius: "20px", objectFit: "cover" }}
                />
              </Box>
              <Box>
                <Typography variant="h6" sx={{ my: 2 }}>
                  Crop Production
                </Typography>
                <Typography variant="body2" color="grey" sx={{ lineHeight: 2 }}>
                  With over 20 acres of irrigated arable land, we farm and
                  produce all varieties of food crops such as Maize, Cowpeas,
                  Cassava, Yam, all year round
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item md={3}>
            <Paper
              elevation={0}
              sx={{
                pt: 5,
                px: 4,
                textAlign: "center",
                boxShadow: "0px 20px 25px rgba(0,0,0,4%)",
                borderRadius: "30px",
                minHeight: "300px",
              }}>
              <Box>
                <img
                  src={husbandry}
                  alt="imag1"
                  width="80px"
                  height="80px"
                  style={{ borderRadius: "20px", objectFit: "cover" }}
                />
              </Box>
              <Box>
                <Typography variant="h6" sx={{ my: 2 }}>
                  Livestock Farming and Animal Husbandry
                </Typography>
                <Typography variant="body2" color="grey" sx={{ lineHeight: 2 }}>
                  At Dorfville Farms, we breed quality varieties of goat, sheep,
                  and cows as live animals, processed and dairy products.
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item md={3}>
            <Paper
              elevation={0}
              sx={{
                pt: 5,
                px: 4,
                textAlign: "center",
                boxShadow: "0px 20px 25px rgba(0,0,0,4%)",
                borderRadius: "30px",
                minHeight: "300px",
              }}>
              <Box>
                <img
                  src={poultry}
                  alt="imag1"
                  width="80px"
                  height="80px"
                  style={{ borderRadius: "20px", objectFit: "cover" }}
                />
              </Box>
              <Box>
                <Typography variant="h6" sx={{ my: 2 }}>
                  Poultry Faming
                </Typography>
                <Typography variant="body2" color="grey" sx={{ lineHeight: 2 }}>
                  Our poultry farm produces quality eggs and healthy eggs and
                  healthy poultry meat to satisfy our customer’s daily and
                  commercial needs commercial needs.
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item md={3}>
            <Paper
              elevation={0}
              sx={{
                pt: 5,
                px: 4,
                textAlign: "center",
                boxShadow: "0px 20px 25px rgba(0,0,0,4%)",
                borderRadius: "30px",
                minHeight: "300px",
              }}>
              <Box>
                <img
                  src={rabbitry}
                  alt="imag1"
                  width="80px"
                  height="80px"
                  style={{ borderRadius: "20px", objectFit: "cover" }}
                />
              </Box>
              <Box>
                <Typography variant="h6" sx={{ my: 2 }}>
                  Rabbitry Farming
                </Typography>
                <Typography variant="body2" color="grey" sx={{ lineHeight: 2 }}>
                  We breed and supply exotic breeds of rabbit for breeding and
                  meat to cater to our customer’s meat needs both for their
                  domestic consumption and party needs.
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item md={6}>
            <Paper
              elevation={0}
              sx={{
                pt: 5,
                px: 4,
                pb: 4,
                textAlign: "center",
                boxShadow: "0px 20px 25px rgba(0,0,0,4%)",
                borderRadius: "30px",
                minHeight: "300px",
              }}>
              <Box>
                <img
                  src={crops}
                  alt="imag1"
                  width="80px"
                  height="80px"
                  style={{ borderRadius: "20px", objectFit: "cover" }}
                />
              </Box>
              <Box>
                <Typography variant="h6" sx={{ my: 2 }}>
                  Fruit and Vegetable Farming
                </Typography>
                <Typography
                  variant="body2"
                  color="grey"
                  sx={{ lineHeight: 2, mb: 2 }}>
                  At Dorfville farms, we grow, and supply varieties of fresh
                  fruits and vegetables harvested at the peak of their freshness
                  and ripeness to ensure highest nutrient quality.
                </Typography>
                <Typography variant="body2" color="grey" sx={{ lineHeight: 2 }}>
                  Our fruit and vegetables farms spans over 3 acres producing
                  nutrient dense vegetables such as quality tomatoes, chilli
                  pepper, Capsicum, Cucumber Watermelons, Cabbage, Lettuce,
                  Green beans, spring onions, Peas, Spinach, Mint leaves, that
                  are harvested twice a week to ensure constant supply of fresh
                  produce to our esteemed customers.
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Paper>

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

      <Paper
        elevation={0}
        sx={{ py: { xs: 3, md: 10 }, px: { xs: 3, md: 12 } }}>
        <Typography
          sx={{
            typography: { xs: "h4", md: "h3" },
            textAlign: "center",
            mb: 5,
          }}>
          Latest Blog Posts
        </Typography>
        <Grid container spacing={3}>
          <Grid item md={3}>
            <BlogCard src={joinUsImage}>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </BlogCard>
          </Grid>
          <Grid item md={3}>
            <BlogCard src={poultry}>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </BlogCard>
          </Grid>
          <Grid item md={3}>
            <BlogCard src={husbandry}>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </BlogCard>
          </Grid>
          <Grid item md={3}>
            <BlogCard src={rabbitry}>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </BlogCard>
          </Grid>
        </Grid>
        <Box sx={{ textAlign: "center", mt: 8 }}>
          <Button color="secondary" variant="text" endIcon={<ChevronRight />}>
            View all posts
          </Button>
        </Box>
      </Paper>
    </>
  );
};

export default Services;
