import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  Box,
  AppBar,
  Toolbar,
  Button,
  Menu,
  MenuItem,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

import MenuDrawer from "./menuDrawer.component";

import logo from "../../assets/images/logo1.png";

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

  const goOut = () => {
    window.open("https://thevillagemarket.shop/");
  };

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
    <AppBar
      component="nav"
      elevation={0}
      position="static"
      sx={{
        backgroundColor: "transparent",
        zIndex: 10,
      }}>
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
              backdropFilter: navBg ? "blur(5px)" : "none",
            }}>
            <Box component={NavLink} to="/">
              <img
                src={logo}
                alt="logo"
                height={navBg ? "50px" : "70px"}
                style={{ transition: ".2s " }}
              />
            </Box>
            <Box sx={{ width: "auto" }}>
              <Button
                component={NavLink}
                style={({ isActive }) =>
                  isActive ? { color: "#313DAD" } : { color: "inherit" }
                }
                to="/"
                sx={{ mr: 3 }}>
                Home
              </Button>
              <Button
                component={NavLink}
                to="#"
                id="services-button"
                color={"tertiary"}
                aria-controls={open ? "services-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                sx={{ mr: 3 }}
                endIcon={<KeyboardArrowDownIcon />}>
                What we Do
              </Button>
              <Button
                component={NavLink}
                style={({ isActive }) =>
                  isActive ? { color: "#313DAD" } : { color: "inherit" }
                }
                to="/about"
                color={"tertiary"}
                sx={{ mr: 3 }}>
                About
              </Button>
              <Button
                component={NavLink}
                style={({ isActive }) =>
                  isActive ? { color: "#313DAD" } : { color: "inherit" }
                }
                to="/contact"
                color={"tertiary"}
                sx={{ mr: 3 }}>
                Contact
              </Button>
              <Button
                component={NavLink}
                style={({ isActive }) =>
                  isActive ? { color: "#313DAD" } : { color: "inherit" }
                }
                to="/careers"
                color={"tertiary"}
                sx={{ mr: 3 }}>
                Careers
              </Button>
              <Button
                component={NavLink}
                style={({ isActive }) =>
                  isActive ? { color: "#313DAD" } : { color: "inherit" }
                }
                to="/blog"
                color={"tertiary"}
                sx={{ mr: 3 }}>
                Blog
              </Button>
              <Button
                onClick={goOut}
                color="tertiary"
                endIcon={<OpenInNewIcon />}>
                Farm Shop
              </Button>
            </Box>
          </Stack>
        )}

        <Menu
          id="services-menu"
          anchorEl={menuAnchor}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "services-button",
          }}>
          <MenuItem onClick={handleClose}>
            <Button
              color="tertiary"
              component={NavLink}
              to="/services"
              style={({ isActive }) =>
                isActive ? { color: "#313DAD" } : { color: "inherit" }
              }>
              Services
            </Button>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <Button
              color="tertiary"
              component={NavLink}
              to="/products"
              style={({ isActive }) =>
                isActive ? { color: "#313DAD" } : { color: "inherit" }
              }>
              Products
            </Button>
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
