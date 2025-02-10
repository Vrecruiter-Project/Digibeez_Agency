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
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "white",
          zIndex: 1100,
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
          padding: "10px 0"
        }}
      >
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
                className="h-9 md:h-12 cursor-pointer"
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
                  sx={{
                    my: 2,
                    color: "black",
                    fontWeight: "bold",
                    padding: "10px 20px",
                    outline: "none",
                    margin: "0 10px",
                    ":hover": {
                      backgroundColor: "#FCC41B",
                      borderRadius: "30px",
                      transition: "1s ease-in-out",
                    },
                  }}
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
                  py: 1.5,
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
                  mt: 2,
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

      {/* Spacer for Fixed Navbar */}
      <Box sx={{ height: "64px" }} />
    </>
  );
};

export default Nav;
