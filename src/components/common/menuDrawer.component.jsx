import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Box, Drawer, Button, Collapse } from "@mui/material";
import { Menu } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import logo from "../../assets/images/logo1.png";

const MenuDrawer = () => {
  const [navBg, setNavBg] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(!open);
  const handleOpen = () => setOpen(!open);

  const [openServices, setOpenServices] = useState(false);
  const handleClick = () => setOpenServices(!openServices);

  const changeNavBg = () => {
    window.scrollY >= 100 ? setNavBg(true) : setNavBg(false);
  };

  const goOut = () => {
    window.open("https://thevillagemarket.shop/");
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNavBg);
    return () => {
      window.removeEventListener("scroll", changeNavBg);
    };
  }, []);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 2,
          width: "100%",
          backgroundColor: navBg ? "#ffffffe1" : "transparent",
          backdropFilter: "blur(5px)",
        }}>
        <Box component={NavLink} to="/">
          <img
            src={logo}
            alt="logo"
            height={"50px"}
            style={{ transition: ".2s " }}
          />
        </Box>
        <Box onClick={handleOpen}>
          <Menu />
        </Box>
      </Box>
      <Drawer
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            width: 300,
          },
        }}>
        <Box sx={{ width: "auto", pt: 4 }}>
          <Button
            component={NavLink}
            onClick={{ handleClose }}
            style={({ isActive }) =>
              isActive ? { color: "#313DAD" } : { color: "inherit" }
            }
            to="/"
            sx={{ display: "block", px: 3, py: 1 }}>
            Home
          </Button>
          <Button
            component={NavLink}
            to="/services"
            id="services-menu"
            color={"tertiary"}
            aria-controls={open ? "services-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            sx={{ mr: 3, px: 3, py: 1 }}
            endIcon={<AddIcon />}>
            What We Do
          </Button>
          <Collapse in={openServices}>
            <Button
              component={NavLink}
              onClick={{ handleClose }}
              style={({ isActive }) =>
                isActive ? { color: "#313DAD" } : { color: "inherit" }
              }
              to="/services"
              color={"tertiary"}
              sx={{ display: "block", px: 3, py: 1 }}>
              Services
            </Button>
            <Button
              component={NavLink}
              onClick={{ handleClose }}
              style={({ isActive }) =>
                isActive ? { color: "#313DAD" } : { color: "inherit" }
              }
              to="/products"
              color={"tertiary"}
              sx={{ display: "block", px: 3, py: 1 }}>
              Products
            </Button>
          </Collapse>
          <Button
            component={NavLink}
            onClick={{ handleClose }}
            style={({ isActive }) =>
              isActive ? { color: "#313DAD" } : { color: "inherit" }
            }
            to="/about"
            color={"tertiary"}
            sx={{ display: "block", px: 3, py: 1 }}>
            About
          </Button>

          <Button
            onClick={{ handleClose }}
            component={NavLink}
            style={({ isActive }) =>
              isActive ? { color: "#313DAD" } : { color: "inherit" }
            }
            to="/contact"
            color={"tertiary"}
            sx={{ display: "block", px: 3, py: 1 }}>
            Contact
          </Button>
          <Button
            onClick={{ handleClose }}
            component={NavLink}
            to="/careers"
            color={"tertiary"}
            sx={{ display: "block", px: 3, py: 1 }}>
            Careers
          </Button>
          <Button
            onClick={{ handleClose }}
            component={NavLink}
            to="/blog"
            color={"tertiary"}
            sx={{ display: "block", px: 3, py: 1 }}>
            Blog
          </Button>
          <Button
            onClick={goOut}
            color="tertiary"
            sx={{ px: 3, py: 1 }}
            endIcon={<OpenInNewIcon />}>
            Farm Shop
          </Button>
        </Box>
      </Drawer>
    </>
  );
};

export default MenuDrawer;
