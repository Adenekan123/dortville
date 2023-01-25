import React, { useState, useEffect } from "react";

import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Collapse,
  Typography,
} from "@mui/material";
import { Menu, Add, Remove } from "@mui/icons-material";
import logo from "../../assets/images/logo1.png";

const MenuDrawer = () => {
  const [navBg, setNavBg] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(!open);
  const handleOpen = () => setOpen(!open);

  const [openServices, setOpenServices] = useState(false);
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
        <img
          src={logo}
          alt="logo"
          height={"50px"}
          style={{ transition: ".2s " }}
        />
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
        <List>
          <ListItemButton>
            <ListItemText primary="Home" />
          </ListItemButton>
          <ListItemButton onClick={() => setOpenServices(!openServices)}>
            <ListItemText primary="Services" />
            {openServices ? <Remove /> : <Add />}
          </ListItemButton>
          <Collapse in={openServices} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Sales and supply of agricultural produce" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Supply of Agricultural farm inputs and raw materials" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Poultry Consultancy and Poultry Equipment" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Animal Husbandry Management" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Agricultural Training and Consultancy Services" />
              </ListItemButton>
            </List>
          </Collapse>
          <ListItemButton>
            <ListItemText primary="About" />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="Contact" />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="Careers" />
          </ListItemButton>
        </List>
      </Drawer>
    </>
  );
};

export default MenuDrawer;
