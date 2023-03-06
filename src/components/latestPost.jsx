import React from "react";
import { NavLink } from "react-router-dom";

import { Paper, Typography, Grid, Box, Button } from "@mui/material";
import BlogCard from "./blogCard.component";

import poultry from "../assets/images/poultry.jpg";
import husbandry from "../assets/images/husbandry.jpg";
import rabbitry from "../assets/images/rabbitry.jpg";
import joinUsImage from "../assets/images/banner-bg4.jpg";

import { ChevronRight } from "@mui/icons-material";

const LatestPost = () => {
  return (
    <Paper
      elevation={0}
      sx={{
        py: { xs: 3, md: 6 },
        px: { xs: 3, md: 12 },
        backgroundColor: "#FAFAFA",
      }}>
      <Typography
        sx={{
          textAlign: "center",
          mb: 5,
          typography: { xs: "h4", md: "h3" },
        }}>
        Our Farm Blog
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
        <Button
          component={NavLink}
          to="/blog"
          color="secondary"
          variant="text"
          endIcon={<ChevronRight />}>
          View all posts
        </Button>
      </Box>
    </Paper>
  );
};

export default LatestPost;
