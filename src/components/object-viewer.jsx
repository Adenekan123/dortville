import { Box, useMediaQuery } from "@mui/material";
import React from "react";



const ObjectViewer = ({ file, type }) => {
    const isMobile = useMediaQuery('(max-width:600px)')
  return (
    <Box
        component={isMobile ? "iframe" : "object"}
    sx={{position:"relative",zIndex:"1000", width:{md:"80%",xs:"100%"},height:{md:"100%",xs:"80%"}}}
      src={file}
      data={file}
      type={"application/pdf"}
      title="file_viewer"
    ></Box>
  );
};

export default ObjectViewer;
