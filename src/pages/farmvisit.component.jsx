import React, { useState, useEffect } from "react";

import {
  Container,
  Button,
  Grid,
  Box,
  Typography,
  TextField,
} from "@mui/material";

const initialState = { name: "", date: "", email: "", body: "" };

const Farmvisit = () => {
  const [requestform, setRequestform] = useState(initialState);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [sending, setSending] = useState(false);

  const oninputchange = (e) => {
    const { name, value } = e.target;
    setRequestform({ ...requestform, [name]: value });
  };

  const onsubmit = async (e) => {
    e.preventDefault();

    try {
      setSending(true);
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/farmvisits`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestform),
        }
      );
      if (response.ok) {
        setSending(false);
        setSuccess(true);
      } else {
        setError(true);
        setSending(false);
      }
    } catch (e) {
      console.log(e);
      setSending(false);
      setError(true);
    }
  };

  useEffect(() => {
    if (success || error) {
      const timer = setTimeout(() => {
        setSuccess(false);
        setError(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [success, error]);

  const { name, email, date, body } = requestform;
  return (
    <>
      <Container
        sx={{
          position: "relative",
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
            zIndex: "-1",
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
              Visit Our Farm
            </Typography>
            <Typography
              variant="h6"
              color="grey"
              textTransform={"capitalize"}
              sx={{ mt: 2 }}>
              Interested in joining a vibrant and dynamic team in a growing
              agricultural company committed to innovative agricultural practice
            </Typography>
          </Grid>
          <Grid item md={5} sx={{ position: "relative" }}>
            <Box component="form" onSubmit={onsubmit}>
              <TextField
                id="name"
                name="name"
                label="Name"
                variant="outlined"
                margin="normal"
                sx={{ width: "100%", background: "white" }}
                onChange={oninputchange}
                value={name}
              />
              <TextField
                id="email"
                name="email"
                label="Email"
                variant="outlined"
                margin="normal"
                sx={{ width: "100%", background: "white" }}
                onChange={oninputchange}
                valu={email}
              />
              <TextField
                type="date"
                id="date"
                name="date"
                variant="outlined"
                margin="normal"
                sx={{ width: "100%", background: "white" }}
                onChange={oninputchange}
                value={date}
              />
              <TextField
                id="body"
                name="body"
                label="Note"
                variant="outlined"
                margin="normal"
                multiline
                rows={4}
                sx={{ width: "100%", background: "white" }}
                onChange={oninputchange}
                value={body}
              />
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                sx={{ my: 2 }}>
                Submit
              </Button>
              {success && (
                <p style={{ color: "green", fontWeight: "bold" }}>
                  Farm Visit Request Sent.
                </p>
              )}
              {error && (
                <p style={{ color: "red", fontWeight: "bold" }}>
                  There was an error submitting your feedback. Please try again
                  later.
                </p>
              )}
              {sending && (
                <p style={{ color: "green", fontWeight: "bold" }}>Sending...</p>
              )}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Farmvisit;
