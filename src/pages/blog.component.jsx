import React from "react";

import { Paper, Grid, Typography } from "@mui/material";
import BlogCard from "../components/blogCard.component";

import crops from "../assets/images/crops.jpg";
import poultry from "../assets/images/poultry.jpg";
import rabbitry from "../assets/images/rabbitry.jpg";
import husbandry from "../assets/images/husbandry.jpg";

const Blog = () => {
  return (
    <>
      {/* <Paper
        sx={{
          py: { xs: 3, md: 12 },
          px: { xs: 3, md: 12 },
          backgroundColor: "#eee",
        }}>
        <Typography
          sx={{ typography: { xs: "h3", md: "h1" }, textAlign: "center" }}
          textTransform={"capitalize"}>
          Our Farm Blog Posts
        </Typography>
      </Paper> */}
      <Paper sx={{ px: { xs: 3, md: 12 }, py: { xs: 3, md: 6 } }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={3}>
            <BlogCard src={crops}>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </BlogCard>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
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
          <Grid item xs={12} md={6} lg={3}>
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
          <Grid item xs={12} md={6} lg={3}>
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
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography sx={{ mt: 4 }} variant="h4" component="div">
              Recent Posts
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <BlogCard src={crops}>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </BlogCard>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
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
          <Grid item xs={12} md={6} lg={3}>
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
          <Grid item xs={12} md={6} lg={3}>
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
        </Grid>
      </Paper>
    </>
  );
};

export default Blog;
