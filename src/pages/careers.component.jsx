import React from "react";
import { Container, Button, Grid, Box, Typography } from "@mui/material";

import farmer from "../assets//images/farmer.jpg";

const Careers = () => {
  return (
    <>
      <Container
        sx={{
          position: "relative",
          zIndex: -1,
          p: { xs: 5 },
          backgroundColor: "#FAFAFA",
        }}
        maxWidth="false">
        <Box
          sx={{
            width: "270px",
            height: "270px",
            borderRadius: "50%",
            backgroundImage:
              "linear-gradient(to right,rgba(168, 253, 99, 0.089),#b5fab51f)",
            position: "absolute",
            top: "-90px",
            left: "-50px",
            backdropFilter: "blur(10px)",
          }}></Box>

        <Grid
          container
          spacing={2}
          justifyContent={"space-between"}
          alignItems="center"
          sx={{ position: "relative", zIndex: 1, px: { md: 8 } }}>
          <Grid item md={6}>
            <Typography
              sx={{ typography: { xs: "h3", md: "h1" } }}
              textTransform={"capitalize"}>
              Be part of our mission
            </Typography>
            <Typography
              variant="h6"
              color="grey"
              textTransform={"capitalize"}
              sx={{ mt: 2 }}>
              Interested in joining a vibrant and dynamic team in a growing
              agricultural company committed to innovative agricultural practice
            </Typography>
            <Box>
              <Button
                variant="contained"
                color="secondary"
                sx={{ py: 2, mt: 3 }}>
                Submit your CV for our review
              </Button>
            </Box>
          </Grid>
          <Grid
            item
            md={5}
            sx={{ position: "relative", order: { xs: "-1", md: "1" } }}>
            <Box
              component={"img"}
              alt="fermer"
              src={farmer}
              sx={{ width: "100%", borderRadius: "10px" }}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Careers;
