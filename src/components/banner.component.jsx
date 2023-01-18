import React from "react";
import {
  Container,
  Paper,
  Box,
  Stack,
  Grid,
  Typography,
  Button,
  TextField,
  InputAdornment,
  Input,
} from "@mui/material";
import RadiusImage from "./radius-image.component";
import bannerImage from "../assets/images/banner-bg4.jpg";

import { LocationCity, CalendarMonth, TimeToLeave } from "@mui/icons-material";

import verified from "../assets/images/icons8-verified-badge-96.png.crdownload";

const Banner = () => {
  return (
    <Container
      sx={{
        position: "relative",
        pt: 14,
        backgroundColor: "#FAFAFA",
      }}
      maxWidth="false">
      <Box
        sx={{
          width: "270px",
          height: "270px",
          borderRadius: "50%",
          backgroundImage:
            "linear-gradient(to right,rgba(253, 155, 99, 0.089),#ffd4891f)",
          position: "absolute",
          top: "-90px",
          left: "-50px",
          backdropFilter: "blur(10px)",
        }}></Box>
      <Paper
        elevation={0}
        sx={{
          px: 8,
          background: "transparent",
          position: "relative",
          zIndex: 2,
        }}>
        <Grid container justifyContent={"space-between"} alignItems="center">
          <Grid item md={6}>
            <Typography variant="h1" textTransform={"capitalize"}>
              We are Dortville agricultuce
            </Typography>
            <Typography
              variant="h6"
              textTransform={"capitalize"}
              sx={{ mt: 2 }}>
              We produce,process,supply and deliver Agricultural Produce.
            </Typography>

            <Box component={"form"} sx={{ mt: 8 }}>
              <Typography variant="h4" color="secondary">
                Book An Appoint Now
              </Typography>
              <Stack
                direction={"row"}
                sx={{
                  gap: 2,
                  p: 3,
                  mt: 2,
                  background: "#ffffff",
                  backdropFilter: "blur(15px)",
                  boxShadow: "0px 20px 25px rgba(0,0,0,5%)",
                }}>
                <TextField
                  type="text"
                  placeholder="Location"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment>
                        <LocationCity />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  type="date"
                  placeholder="Appointment Date"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment>
                        <CalendarMonth />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  type="time"
                  placeholder="Appointment Time"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment>
                        <TimeToLeave />
                      </InputAdornment>
                    ),
                  }}
                />
                <Button
                  variant="contained"
                  size="large"
                  color="secondary"
                  sx={{ color: "#fff" }}>
                  Submit
                </Button>
              </Stack>
            </Box>
          </Grid>
          <Grid item md={5} sx={{ position: "relative" }}>
            <Box sx={{ position: "absolute", bottom: "50px", left: "20px" }}>
              <img src={verified} alt="verified-icon" height={"120px"} />
            </Box>
            <RadiusImage src={bannerImage} />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Banner;
