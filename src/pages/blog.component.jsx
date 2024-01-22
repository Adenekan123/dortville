import React, { useState, useEffect } from "react";

import { Paper, Grid, Typography, Button, Backdrop } from "@mui/material";
import BlogCard from "../components/blogCard.component";
import usePdfViewer from "../hooks/usePdfViewer";
import { PictureAsPdf } from "@mui/icons-material";
import ObjectViewer from "../components/object-viewer";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [file,setFile] = usePdfViewer(null);

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
        <Backdrop sx={{zIndex: (theme) => theme.zIndex.drawer + 1}} open={Boolean(file)} onClick={()=>setFile(null)}>
        <ObjectViewer file={file} type="application/pdf" />
    </Backdrop>
      <Paper sx={{ px: { xs: 3, md: 12 }, py: { xs: 3, md: 6 } }}>
        {isLoading ? <h4>Loading...</h4> : ""}
        <Grid container spacing={2}>
          {posts.map((post) => (
            <Grid item xs={12} md={6} lg={3} key={post._id}>
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
      </Paper>
    </>
  );
};

export default Blog;
