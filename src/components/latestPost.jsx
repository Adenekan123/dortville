import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Fade from "react-reveal/Fade";
import Pulse from "react-reveal/Pulse";

import { Paper, Typography, Grid, Box, Button } from "@mui/material";
import BlogCard from "./blogCard.component";

import { ChevronRight } from "@mui/icons-material";

const LatestPost = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:5000/posts")
      .then((response) => response.json())
      .then((items) => {
        const data = items.filter((item, index) => index < 4);
        setPosts(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);
  return (
    <>
      {isLoading ? <h4>Loading...</h4> : ""}
      {posts.length ? (
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
            {posts.map((post) => (
              <Grid item md={3} key={post.title}>
                <Fade bottom>
                  <BlogCard
                    src={`data:${post.image.contentType};base64,${post.image.data}`}
                    postid={post._id}>
                    <Typography gutterBottom variant="h5" component="div">
                      {post.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {post.body.slice(0, 50) + "..."}
                    </Typography>
                  </BlogCard>
                </Fade>
              </Grid>
            ))}
          </Grid>
          <Box sx={{ textAlign: "center", mt: 8 }}>
            <Pulse>
              <Button
                component={NavLink}
                to="/blog"
                color="secondary"
                variant="text"
                endIcon={<ChevronRight />}>
                View all posts
              </Button>
            </Pulse>
          </Box>
        </Paper>
      ) : (
        ""
      )}
    </>
  );
};

export default LatestPost;
