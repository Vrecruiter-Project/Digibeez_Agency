import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Container,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Link } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import LogoLight from "../../assets/NavbarLogo/trace.png";

const pages = ["Home", "About Us", "Services", "Courses"];

const Nav = ({ onButtonClick }) => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = (state) => () => setOpenDrawer(state);

  return (
    <AppBar position="static" sx={{ backgroundColor: "white" }}>
      <Container>
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          {/* Logo (Left Side) */}
          <Box sx={{ display: "flex", flexGrow: 1 }}>
            <img
              src={LogoLight}
              alt="Logo"
              style={{ height: "50px", width: "auto", cursor: "pointer" }}
            />
          </Box>

          {/* Desktop Navigation (Centered) */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: "black", fontWeight: "bold" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* Demo Button (Right Side in Desktop) */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <Button
              variant="contained"
              sx={{
                backgroundColor: "#FCC41B",
                color: "#000",
                px: 3,
              }}
              component={Link}
              href="https://digibeez.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a Free Demo
            </Button>
          </Box>

          {/* Mobile Menu Button (Right Side) */}
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              position: "absolute",
              right: 0,
            }}
          >
            <IconButton size="large" color="black" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>

      {/* Full-Screen Drawer (Right-Side Menu) */}
      <Drawer anchor="right" open={openDrawer} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: 250,
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: 3,
          }}
        >
          {/* Close Button */}
          <IconButton
            sx={{ alignSelf: "flex-end", mr: 2 }}
            onClick={toggleDrawer(false)}
          >
            <CloseIcon />
          </IconButton>

          {/* Menu Items */}
          <List>
            {pages.map((page) => (
              <ListItem button key={page} onClick={toggleDrawer(false)}>
                <ListItemText primary={page} />
              </ListItem>
            ))}
            
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#FCC41B",
                color: "#000",
                px: 3,
              }}
              component={Link}
              href="https://digibeez.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a Free Demo
            </Button>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Nav;
