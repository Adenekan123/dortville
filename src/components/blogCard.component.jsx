import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Box,
  IconButton,
  Typography,
} from "@mui/material";

import { Link, Share } from "@mui/icons-material";

const BlogCard = ({ children, src }) => {
  return (
    <Card
      elevation={0}
      sx={{
        boxShadow: "0px 20px 25px rgba(0,0,0,5%)",
        position: "relative",
        "&:hover .MuiBox-root": { height: "200px" },
      }}>
      <CardMedia component="img" alt="green iguana" height="200" image={src} />
      <CardContent sx={{ position: "relative" }}>{children}</CardContent>
      <CardActions disableSpacing sx={{ justifyContent: "space-between" }}>
        <Typography variant="caption" color="secondary.main">
          20-04-2022
        </Typography>
        <IconButton aria-label="share" color="warning" size="small">
          <Share />
        </IconButton>
      </CardActions>

      <Box
        sx={{
          position: "absolute",
          top: "0",
          right: "0",
          backgroundColor: "#2222227b",
          color: "#fff",
          backdropFilter: "saturation(100%) blur(5px)",
          width: "100%",
          height: "0",
          transition: "height .3s ease",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
        }}>
        <Link />
      </Box>
    </Card>
  );
};

export default BlogCard;
