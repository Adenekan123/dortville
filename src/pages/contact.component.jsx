import React from "react";

import { Container, Paper, Grid, Typography, Stack } from "@mui/material";

import AppointMent from "../components/appointment.component";

import { PhoneAndroid, Email, LocationOn } from "@mui/icons-material";

const Contact = () => {
  return (
    <>
      <Container
        sx={{
          position: "relative",
          p: { xs: 3, md: 8 },
          backgroundColor: "#FAFAFA",
        }}
        maxWidth="false">
        {/* <Box
          sx={ {
            width: "270px",
            height: "270px",
            borderRadius: "50%",
            backgroundImage:
              "linear-gradient(to right,rgba(168, 253, 99, 0.089),#b5fab51f)",
            position: "absolute",
            top: "-90px",
            left: "-50px",
            backdropFilter: "blur(10px)",
          } }></Box> */}

        <Grid
          container
          justifyContent={"space-between"}
          alignItems="center"
          sx={{ position: "relative", zIndex: 1, px: { md: 8 } }}>
          <Grid item md={6}>
            <Typography
              sx={{ typography: { xs: "h3", md: "h1" } }}
              textTransform={"capitalize"}>
              We're here
            </Typography>
            <Typography variant="h6" sx={{ mt: 2 }}>
              One Door is Always open for a Good Chat.
            </Typography>
            <AppointMent />
          </Grid>
          <Grid item md={5} sx={{ position: "relative" }}>
            <Stack
              direction="row"
              sx={{ alignItems: "center", mb: 3, mt: { xs: 4, md: 0 } }}>
              <PhoneAndroid color="secondary" />
              <Typography variant="h6" sx={{ textAlign: "center", ml: 2 }}>
                +234 810 873 0632
              </Typography>
            </Stack>
            <Stack direction="row" sx={{ mb: 3, alignItems: "center" }}>
              <Email color="secondary" />
              <Typography variant="h6" sx={{ ml: 2 }}>
                dorfvillefarms@gmail.com
              </Typography>
            </Stack>
            <Stack direction="row" sx={{ alignItems: "center", mb: 3 }}>
              <LocationOn color="secondary" />
              <Typography variant="h6" sx={{ ml: 2 }}>
                Dorfville Avenue, off Moniya Iseyin Road, Ijaye town Akinyele
                LGA, Ibadan, Oyo state - Nigeria
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>

      <Paper
        elevation={0}
        sx={{
          py: { xs: 0, md: 6 },
          px: { xs: 0, md: 12 },
          position: "relative",
          backgroundColor: "#020350",
        }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253170.88378852958!2d3.73603125273021!3d7.487867388844086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1039ee218ed50eb3%3A0xad8184fa103cb64d!2sAkinyele%20Local%20Government%20Area!5e0!3m2!1sen!2sng!4v1674895654210!5m2!1sen!2sng"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="mapp address"></iframe>
      </Paper>
    </>
  );
};

export default Contact;
