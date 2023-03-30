import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Paper, Typography } from "@mui/material";

const BlogPReview = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    console.log("hwere");
    fetch(`${process.env.REACT_APP_API_URL}/posts/${id}`)
      .then((response) => response.json())
      .then((post) => {
        setPost(post[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  return (
    <>
      {post && post.image ? (
        <>
          <Paper
            sx={{
              py: { xs: 3, md: 12 },
              px: { xs: 3, md: 12 },
              background: `linear-gradient(159deg, rgba(38, 47, 87, 0.7203256302521008) 0%,rgba(1, 9, 32, 0.608) 100%),url(data:${post.image.contentType};base64,${post.image.data})`,
              color: "#fff",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}>
            <Typography
              sx={{ typography: { xs: "h4", md: "h3" }, textAlign: "center" }}
              textTransform={"capitalize"}>
              {post.title}
            </Typography>
          </Paper>
          <Paper
            sx={{ py: { xs: 3 }, px: { xs: 3, md: 12 }, textAlign: "justify" }}>
            <Typography variant="body1" sx={{ mb: 3 }}>
              {post.body}
            </Typography>
          </Paper>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default BlogPReview;
