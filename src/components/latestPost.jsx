import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";


import { Paper, Typography, Grid, Box, Button, Backdrop } from "@mui/material";
import BlogCard from "./blogCard.component";

import { ChevronRight, PictureAsPdf } from "@mui/icons-material";
import ObjectViewer from "./object-viewer";
import usePdfViewer from "../hooks/usePdfViewer";

const LatestPost = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [file,setFile] = usePdfViewer(null);



  useEffect(() => {
    setIsLoading(true);
    fetch(`${process.env.REACT_APP_API_URL}/posts`)
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
    <Backdrop sx={{zIndex: (theme) => theme.zIndex.drawer + 1}} open={Boolean(file)} onClick={()=>setFile(null)}>
        <ObjectViewer setFile={setFile}  file={file} type="application/pdf" />
    </Backdrop>
      {isLoading ? <h4>Loading...</h4> : ""}
      {posts.length ? (
        <Paper
          elevation={0}
          sx={{
            py: { xs: 3, md: 6 },
            px: { xs: 3, md: 12 },
            backgroundColor: "#FAFAFA",
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
              mb: 5,
              typography: { xs: "h4", md: "h3" },
            }}
          >
            Our Farm Blog
          </Typography>
          <Grid container spacing={3}>
            {posts.map((post) => (
              <Grid item xs={12} md={3} key={post.title}>
                 <BlogCard src={post.image.url} postid={post._id}>
                    <Typography gutterBottom variant="h6" component="div">
                      {post.title}
                    </Typography>
                    <Button
                      onClick={()=>setFile(post.pdf.url)}
                      fullWidth
                      variant="outlined"
                      color="secondary"
                      startIcon={<PictureAsPdf />}
                      sx={{mt:3}}
                    >
                      Continue Reading
                    </Button>
                  </BlogCard>
              </Grid>
            ))}
          </Grid>
          <Box sx={{ textAlign: "center", mt: 8 }}>
              <Button
                component={NavLink}
                to="/blog"
                color="secondary"
                variant="text"
                endIcon={<ChevronRight />}
              >
                View all posts
              </Button>
          </Box>
        </Paper>
      ) : (
        ""
      )}
    </>
  );
};

export default LatestPost;
