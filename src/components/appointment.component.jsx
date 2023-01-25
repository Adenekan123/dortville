import React from "react";

import {
  Box,
  Grid,
  Button,
  TextField,
  InputAdornment,
  Typography,
} from "@mui/material";

import { LocationOn, CalendarMonth, TimeToLeave } from "@mui/icons-material";

const AppointMent = () => {
  return (
    <>
      <Typography variant="h4" color="secondary" sx={{ mt: 8 }}>
        Book An Appoint Now
      </Typography>
      <Box
        component={"form"}
        sx={{
          px: 3,
          py: 3,
          mt: 1,
          boxShadow: "0px 20px 25px rgba(0,0,0,8%)",
          backdropFilter: " blur(5px)",
          border: "1px solid #eee",
        }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <TextField
              type="text"
              placeholder="Location"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment
                    position="start"
                    sx={{
                      height: "25px",
                      width: "25px",
                      borderRadius: "50%",
                      p: 1,
                      mr: 1,
                      backgroundColor: "warning.main",
                    }}>
                    <LocationOn color="primary" />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <TextField
              type="date"
              placeholder="Appointment Date"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment
                    position="start"
                    sx={{
                      height: "25px",
                      width: "25px",
                      borderRadius: "50%",
                      p: 1,
                      mr: 1,
                      backgroundColor: "warning.main",
                    }}>
                    <CalendarMonth color="primary" />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <TextField
              type="time"
              placeholder="Appointment Time"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment
                    position="start"
                    sx={{
                      height: "25px",
                      width: "25px",
                      borderRadius: "50%",
                      p: 1,
                      mr: 1,
                      backgroundColor: "warning.main",
                    }}>
                    <TimeToLeave color="primary" />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <Button
              variant="contained"
              fullWidth
              size="large"
              color="secondary"
              sx={{ color: "#fff", height: "100%", m: 0 }}>
              Submit
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default AppointMent;
