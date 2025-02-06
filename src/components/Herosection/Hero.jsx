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
        height: "100%",
        display: "flex",
        alignItems: "center",
        color: "white",
        py: "2rem",
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
          <Grid item xs={12}>
            <Typography
              variant="h6"
              sx={{
                color: "#FFC107",
                fontWeight: "bold",
                fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" }, // Responsive font size
              }}
            >
              #Top Rated Digital Marketing Agency and Digital Career In Chandigarh
            </Typography>
          </Grid>

          {/* Main Heading */}
          <Grid item xs={12}>
            <Typography
              variant="h3"
              fontWeight="bold"
              sx={{
                fontSize: { xs: "2rem", sm: "3rem", md: "4rem" }, // Responsive font size
              }}
            >
              Your Trusted Partner In The{" "}
              <Typography component="span" variant="h3" color="#FFC107">
                Digital Age
              </Typography>
            </Typography>
          </Grid>

          {/* Subheading */}
          <Grid item xs={12}>
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" }, // Responsive font size
              }}
            >
              Web Design, Develop and Dominate Your Digital Presence
            </Typography>
          </Grid>

          {/* Stats Section */}
          <Grid item xs={12} sm={4}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#FCC41B",
                color: "#000",
                fontWeight: "bold",
                fontSize: { xs: "0.875rem", sm: "1rem", md: "1.25rem" }, // Responsive font size
              }}
            >
              100% Business Growth
            </Button>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#FCC41B",
                color: "#000",
                fontWeight: "bold",
                fontSize: { xs: "0.875rem", sm: "1rem", md: "1.25rem" }, // Responsive font size
              }}
            >
              1000+ Satisfied Clients
            </Button>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#FCC41B",
                color: "#000",
                fontWeight: "bold",
                fontSize: { xs: "0.875rem", sm: "1rem", md: "1.25rem" }, // Responsive font size
              }}
            >
              150+ Completed Projects
            </Button>
          </Grid>

          {/* Ratings Section */}
          <Grid item xs={12}>
            <Box display="flex" justifyContent="center" alignItems="center" gap={0.5}>
              {Array(5).fill().map((_, index) => (
                <StarIcon key={index} sx={{ color: "#FFC107" }} />
              ))}
              <Typography
                sx={{
                  fontSize: { xs: "0.875rem", sm: "1rem", md: "1.25rem" }, // Responsive font size
                }}
              >
                (5.0 out of 500+ Reviews)
              </Typography>
            </Box>
          </Grid>

          {/* Final CTA */}
          <Grid item xs={12}>
            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{
                fontSize: { xs: "1.5rem", sm: "2rem", md: "3rem" }, // Responsive font size
              }}
            >
              Grow Your Business With Us 🚀
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
