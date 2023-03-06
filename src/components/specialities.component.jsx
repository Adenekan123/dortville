import React from "react";
import {
  Box,
  Paper,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";

import Flip from "react-reveal/Flip";

import { Link } from "@mui/icons-material";
import { NavLink } from "react-router-dom";

import crops from "../assets/images/crops.jpg";
import poultry from "../assets/images/poultry.jpg";
import husbandry from "../assets/images/husbandry.jpg";
import rabbitry from "../assets/images/rabbitry.jpg";

const Specialities = () => {
  return (
    <Paper
      elevation={0}
      sx={{ py: 6, px: { xs: 3, md: 12 }, backgroundColor: "#24255B" }}>
      <Container sx={{ textAlign: "center", mb: 8 }} maxWidth="md">
        <Typography
          sx={{
            mb: 1,
            color: "white",
            typography: { xs: "h4", md: "h3" },
          }}>
          Our Specialities
        </Typography>
        <Typography variant="body2" color="#ccc" sx={{ lineHeight: 2 }}>
          We make use of renewable energy in all our farm operations as much as
          possible and ensuring that all wastes generated at the farm are
          recycled and reused on the farm.
        </Typography>
      </Container>

      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <Flip bottom>
            <Card
              elevation={0}
              sx={{
                textAlign: "center",
                boxShadow: "0px 20px 25px rgba(0,0,0,4%)",
                borderRadius: "8px",
                position: "relative",
                "&:hover .MuiBox-root": { height: "180px" },
              }}>
              <CardMedia sx={{ height: 180 }} image={crops} title="crops" />
              <CardContent>
                <Typography variant="h6">Crop Production</Typography>
              </CardContent>
              <Box
                component={NavLink}
                to="/products/crops"
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
          </Flip>
        </Grid>

        <Grid item xs={12} md={3}>
          <Flip bottom>
            <Card
              elevation={0}
              sx={{
                textAlign: "center",
                boxShadow: "0px 20px 25px rgba(0,0,0,4%)",
                borderRadius: "8px",
                position: "relative",
                "&:hover .MuiBox-root": { height: "180px" },
              }}>
              <CardMedia sx={{ height: 180 }} image={poultry} title="poultry" />
              <CardContent>
                <Typography variant="h6">Poultry Faming</Typography>
              </CardContent>
              <Box
                component={NavLink}
                to="/products/poultry"
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
          </Flip>
        </Grid>

        <Grid item xs={12} md={3}>
          <Flip bottom>
            <Card
              elevation={0}
              sx={{
                textAlign: "center",
                boxShadow: "0px 20px 25px rgba(0,0,0,4%)",
                borderRadius: "8px",
                position: "relative",
                "&:hover .MuiBox-root": { height: "180px" },
              }}>
              <CardMedia
                sx={{ height: 180 }}
                image={rabbitry}
                title="rabbitry"
              />
              <CardContent>
                <Typography variant="h6">Rabbitry Farming</Typography>
              </CardContent>
              <Box
                component={NavLink}
                to="/products/rabbitry"
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
          </Flip>
        </Grid>
        <Grid item xs={12} md={3}>
          <Flip bottom>
            <Card
              elevation={0}
              sx={{
                textAlign: "center",
                boxShadow: "0px 20px 25px rgba(0,0,0,4%)",
                borderRadius: "8px",
                position: "relative",
                "&:hover .MuiBox-root": { height: "180px" },
              }}>
              <CardMedia sx={{ height: 180 }} image={crops} title="crops" />
              <CardContent>
                <Typography variant="h6">
                  Fruit and Vegetable Farming
                </Typography>
              </CardContent>
              <Box
                component={NavLink}
                to="/products/vegetable"
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
          </Flip>
        </Grid>
        <Grid item xs={12} md={6}>
          <Flip bottom>
            <Card
              elevation={0}
              sx={{
                textAlign: "center",
                boxShadow: "0px 20px 25px rgba(0,0,0,4%)",
                borderRadius: "8px",
                position: "relative",
                "&:hover .MuiBox-root": { height: "180px" },
              }}>
              <CardMedia
                sx={{ height: 180 }}
                image={husbandry}
                title="husbandry"
              />
              <CardContent>
                <Typography variant="h6">
                  Livestock Farming & Animal Husbandry
                </Typography>
              </CardContent>
              <Box
                component={NavLink}
                to="/products/livestock"
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
          </Flip>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Specialities;
