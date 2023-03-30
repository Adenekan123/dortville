import React, { useState, useEffect } from "react";

import { Paper, Grid, Typography } from "@mui/material";
import BlogCard from "../components/blogCard.component";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${process.env.REACT_APP_API_URL}/posts`)
      .then((response) => response.json())
      .then((data) => {
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
        {isLoading ? <h4>Loading...</h4> : ""}
        <Grid container spacing={2}>
          {posts.map((post) => (
            <Grid item xs={12} md={6} lg={3} key={post._id}>
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
            </Grid>
          ))}
        </Grid>
      </Paper>
    </>
  );
};

export default Blog;
