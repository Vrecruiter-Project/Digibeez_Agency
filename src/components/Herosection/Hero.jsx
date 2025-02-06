import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import Grid from "@mui/material/Grid2";
import StarIcon from "@mui/icons-material/Star";
import backgroundImage from "../../assets/Hero/herobg.png"; // Ensure correct path

const Hero = () => {
  return (
    <Box
      sx={{
        position: "relative",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        color: "white",
      }}
    >
      {/* Dark Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor:"#36340A",
          opacity: 0.7,
           // Dark overlay for readability
        }}
      />

      <Container sx={{ position: "relative", zIndex: 2 }}>
        <Grid container spacing={3} justifyContent="center" textAlign="center">
          {/* Top Tagline */}
          <Grid size ={{xs:12}} >
            <Typography variant="h6" sx={{ color: "#FFC107", fontWeight: "bold" }}>
              #Top Rated Digital Marketing Agency and Digital Career In Chandigarh
            </Typography>
          </Grid>

          {/* Main Heading */}
          <Grid size ={{xs:12}} >
            <Typography variant="h3" fontWeight="bold">
              Your Trusted Partner In The{" "}
              <Typography component="span" variant="h3" color="#FFC107">
                Digital Age
              </Typography>
            </Typography>
          </Grid>

          {/* Subheading */}
          <Grid size ={{xs:12}} >
            <Typography variant="h6">Web Design, Develop and Dominate Your Digital Presence</Typography>
          </Grid>

          {/* Stats Section */}
          <Grid size ={{xs:12 , sm:4}} >
            <Button variant="contained" sx={{ backgroundColor: "#FCC41B", color: "#000", fontWeight: "bold" }}>
              100% Business Growth
            </Button>
          </Grid>
          <Grid size ={{xs:12 , sm:4}} >
            <Button variant="contained" sx={{ backgroundColor: "#FCC41B", color: "#000", fontWeight: "bold" }}>
              1000+ Satisfied Clients
            </Button>
          </Grid>
          <Grid size ={{xs:12 , sm:4}} >
            <Button variant="contained" sx={{ backgroundColor: "#FCC41B", color: "#000", fontWeight: "bold" }}>
              150+ Completed Projects
            </Button>
          </Grid>

          {/* Ratings Section */}
          <Grid size ={{xs:12}} >
            <Box display="flex" justifyContent="center" alignItems="center" gap={0.5}>
              {Array(5).fill().map((_, index) => (
                <StarIcon key={index} sx={{ color: "#FFC107" }} />
              ))}
              <Typography>(5.0 out of 500+ Reviews)</Typography>
            </Box>
          </Grid>

          {/* Final CTA */}
          <Grid size ={{xs:12}} >
            <Typography variant="h4" fontWeight="bold">
              Grow Your Business With Us 🚀
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
