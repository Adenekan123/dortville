import React from "react";

import { Paper, Typography } from "@mui/material";

import crops from "../assets/images/crops.jpg";

const BlogPReview = () => {
  return (
    <>
      <Paper
        sx={{
          py: { xs: 3, md: 12 },
          px: { xs: 3, md: 12 },
          background: `linear-gradient(159deg, rgba(38, 47, 87, 0.7203256302521008) 0%,rgba(1, 9, 32, 0.608) 100%),url(${crops})`,
          color: "#fff",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
        <Typography
          sx={{ typography: { xs: "h4", md: "h3" }, textAlign: "center" }}
          textTransform={"capitalize"}>
          Post headline example
        </Typography>
      </Paper>
      <Paper
        sx={{ py: { xs: 3 }, px: { xs: 3, md: 12 }, textAlign: "justify" }}>
        <Typography variant="h5" sx={{ mb: 3 }}>
          Post Slugline example
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          Do you like Cheese Whiz? Spray tan? Fake eyelashes? That's what is
          Lorem Ipsum to many—it rubs them the wrong way, all the way. It's
          unreal, uncanny, makes you wonder if something is wrong, it seems to
          seek your attention for all the wrong reasons. Usually, we prefer the
          real thing, wine without sulfur based preservatives, real butter, not
          margarine, and so we'd like our layouts and designs to be filled with
          real words, with thoughts that count, information that has value.
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          Do you like Cheese Whiz? Spray tan? Fake eyelashes? That's what is
          Lorem Ipsum to many—it rubs them the wrong way, all the way. It's
          unreal, uncanny, makes you wonder if something is wrong, it seems to
          seek your attention for all the wrong reasons. Usually, we prefer the
          real thing, wine without sulfur based preservatives, real butter, not
          margarine, and so we'd like our layouts and designs to be filled with
          real words, with thoughts that count, information that has value.
        </Typography>
      </Paper>
    </>
  );
};

export default BlogPReview;
