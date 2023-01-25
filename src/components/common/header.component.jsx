import React, { useState, useEffect } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import MenuDrawer from "./menuDrawer.component";

import logo from "../../assets/images/logo1.png";
import farmtools from "../../assets/icons/farmtools.png";
import poultry from "../../assets/icons/poultry.png";
import husbandry from "../../assets/icons/husbandary.png";
import consultant from "../../assets/icons/training.png";
import supply from "../../assets/icons/supply.png";
const Header = () => {
  const [navBg, setNavBg] = useState(false);

  const [menuAnchor, setMenuAnchor] = useState(null);
  const open = Boolean(menuAnchor);
  const handleClick = (event) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleClose = () => {
    setMenuAnchor(null);
  };

  const theme = useTheme();
  const matchMobile = useMediaQuery(theme.breakpoints.down("md"));

  const changeNavBg = () => {
    window.scrollY >= 100 ? setNavBg(true) : setNavBg(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNavBg);
    return () => {
      window.removeEventListener("scroll", changeNavBg);
    };
  }, []);
  return (
    <AppBar component="nav" elevation={0} color="transparent">
      <Toolbar
        sx={{
          justifyContent: "space-between",
          width: "100%",
          padding: "0px !important",
          boxShadow: navBg ? "0px 20px 25px rgba(0,0,0,5%)" : "none",
        }}>
        {matchMobile ? (
          <MenuDrawer />
        ) : (
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{
              width: "100%",
              px: 12,
              py: 2,
              backgroundColor: navBg ? "#ffffffe1" : "transparent",
              backdropFilter: "blur(5px)",
            }}>
            <img
              src={logo}
              alt="logo"
              height={navBg ? "50px" : "100px"}
              style={{ transition: ".2s " }}
            />
            <Box sx={{ width: "auto" }}>
              <Button color={"tertiary"} sx={{ mr: 3 }}>
                Home
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
                About
              </Button>
              <Button color={"tertiary"} sx={{ mr: 3 }}>
                Contact
              </Button>
              <Button color={"tertiary"}>Careers</Button>
            </Box>
          </Stack>
        )}

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
    </AppBar>
  );
};

export default Header;
