// import Box from "@mui/material/Box";
import { Box } from "@mui/material";
import { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/PageSVG.js";

const ObjectViewer = ({ file, setFile }) => {
  // const isMobile = useMediaQuery('(max-width:600px)')
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    console.log("fired");
    setNumPages(numPages);
  }

  return (
    <Box sx={{ display: "flex", justifyContent: "center", overflowY: "auto",width: "100%",
    height: "100%",
    overflowX: "hidden", }}>
      <Box
        onClick={() => setFile(null)}
        sx={{width: {xs:"100%",md:"auto"},
        height: "100%",}}
      >
        {file && (
          <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
            {Array(numPages)
              .fill()
              .map((_, i) => (
                <Page key={i} pageNumber={i + 1} />
              ))}
          </Document>
        )}
        
      </Box>
    </Box>

    // <Box
    //     component={isMobile ? "iframe" : "object"}
    // sx={{position:"relative",zIndex:"1000", width:{md:"80%",xs:"100%"},height:{md:"100%",xs:"80%"}}}
    //   src={file}
    //   data={file}
    //   type={"application/pdf"}
    //   title="file_viewer"
    // ></Box>
  );
};

export default ObjectViewer;