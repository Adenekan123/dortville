import React, { useState } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
  Container,
} from "@mui/material";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import farmtools from "../../assets/icons/farmtools.png";
import poultry from "../../assets/icons/poultry.png";
import husbandry from "../../assets/icons/husbandary.png";
import consultant from "../../assets/icons/training.png";
import supply from "../../assets/icons/supply.png";
const Header = () => {
  const [menuAnchor, setMenuAnchor] = useState(null);
  const open = Boolean(menuAnchor);
  const handleClick = (event) => {
    setMenuAnchor(event.currentTarget);
  };
  const handleClose = () => {
    setMenuAnchor(null);
  };
  return (
    <AppBar component="nav" elevation="0" color="transparent">
      <Container maxWidth={"xl"}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h5">DortVille</Typography>
          <Box>
            <Button color={"tertiary"} sx={{ mr: 3 }}>
              Home
            </Button>
            <Button color={"tertiary"} sx={{ mr: 3 }}>
              About
            </Button>
            <Button
              id="services-menu"
              color={"tertiary"}
              aria-controls={open ? "services-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              sx={{ mr: 3 }}
              endIcon={<KeyboardArrowDownIcon />}>
              Services
            </Button>
            <Button color={"tertiary"} sx={{ mr: 3 }}>
              Contact
            </Button>
            <Button color={"tertiary"}>Jobs</Button>
          </Box>
          <Menu anchorEl={menuAnchor} open={open} onClose={handleClose}>
            <MenuItem onClick={handleClose}>
              <Box
                sx={{
                  backgroundColor: "#eee",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mr: 1,
                }}>
                <img src={supply} alt="supplies" width={"25px"} />
              </Box>
              <Typography>Sales and supply of agricultural produce</Typography>
            </MenuItem>

            <MenuItem onClick={handleClose}>
              <Box
                sx={{
                  backgroundColor: "#eee",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mr: 1,
                }}>
                <img
                  src={farmtools}
                  alt="supplies"
                  width={"25px"}
                  height={"25px"}
                />
              </Box>
              <Typography>
                Supply of Agricultural farm inputs and raw materials
              </Typography>
            </MenuItem>

            <MenuItem onClick={handleClose}>
              <Box
                sx={{
                  backgroundColor: "#eee",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mr: 1,
                }}>
                <img
                  src={poultry}
                  alt="supplies"
                  width={"25px"}
                  height={"25px"}
                />
              </Box>
              <Typography>Poultry Consultancy and Poultry Equipment</Typography>
            </MenuItem>

            <MenuItem onClick={handleClose}>
              <Box
                sx={{
                  backgroundColor: "#eee",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mr: 1,
                }}>
                <img
                  src={husbandry}
                  alt="supplies"
                  width={"25px"}
                  height={"25px"}
                />
              </Box>
              <Typography>Animal Husbandry Management</Typography>
            </MenuItem>

            <MenuItem onClick={handleClose}>
              <Box
                sx={{
                  backgroundColor: "#eee",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mr: 1,
                }}>
                <img
                  src={consultant}
                  alt="supplies"
                  width={"25px"}
                  height={"25px"}
                />
              </Box>
              <Typography>
                Agricultural Training and Consultancy Services
              </Typography>
            </MenuItem>
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
