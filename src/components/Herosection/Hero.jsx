import React, { useState } from "react";
import { Box, Typography, Button, Container, Rating, Grid } from "@mui/material";
import backgroundImage from "../../assets/Hero/herobg.png"; // Ensure correct path
import Star from "../../assets/Hero/star.png"; // Ensure correct path

const Hero = () => {
  const [value, setValue] = useState(5);
  return (
    <Box
      sx={{
        position: "relative",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        color: "white",
        py: { xs: "2rem", md: "4rem" },
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
          backgroundColor: "#36340A",
          opacity: 0.7,
        }}
      />
      <Container sx={{ position: "relative", zIndex: 2 }}>
        <Grid container spacing={2} textAlign="center" justifyContent="center">
          {/* Top Tagline */}
          <Grid item xs={12}>
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ fontSize: { xs: "0.9rem", sm: "1.1rem", md: "1.3rem" } }}
            >
              # <span className="text-amber-300">Top Rated</span> Digital Marketing Agency in Chandigarh
            </Typography>
          </Grid>

          {/* Main Heading */}
          <Grid item xs={12}>
            <Typography
              variant="h3"
              fontWeight="bold"
              sx={{ fontSize: { xs: "2rem", sm: "3rem", lg: "4rem" } }}
            >
              Your Trusted Partner In The {" "}
              <Typography
                component="span"
                variant="h3"
                fontWeight="bold"
                color="#FFC107"
                sx={{ fontSize: { xs: "2rem", sm: "3rem", lg: "4rem" } }}
              >
                Digital Age
              </Typography>
            </Typography>
          </Grid>

          {/* Subheading */}
          <Grid item xs={12}>
            <Typography variant="h6" sx={{ fontSize: { xs: "1rem", sm: "1.2rem" } }}>
              Web Design, Develop and Dominate Your Digital Presence
            </Typography>
          </Grid>

          {/* Ratings Section */}
          <Grid item xs={12}>
            <Box display="flex" justifyContent="center" alignItems="center" gap={1} sx={{ flexDirection: { xs: "column", sm: "row" } }}>
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => setValue(newValue)}
              />
              <Typography sx={{ fontSize: { xs: "0.875rem", sm: "1rem" } }}>
                (5.0 out of 500+ Reviews)
              </Typography>
            </Box>
          </Grid>

          {/* Call to Action */}
          <Grid item xs={12}>
            <Box display="flex" justifyContent="center" alignItems="center">
              <Typography fontWeight="bold" sx={{ fontSize: { xs: "1.5rem", sm: "2rem" } }}>
                Grow Your Business With Us
              </Typography>
              <img src={Star} alt="star" style={{ marginLeft: "0.5rem", height: "40px" }} />
            </Box>
          </Grid>

          {/* Stats Section */}
          <Box sx={{  width: { xs: "100%", sm: "90%" , md: "60%" }, display: "flex", flexWrap: "wrap", justifyContent: "center",  }} >
            {["1000+ Satisfied Clients", "500+ Successful Campaigns", "10+ Years of Experience"].map(
              (text, index) => (
                <Grid item xs={12} sm={4} key={index} mt={2}>
                  <Button
                    variant="contained"
                    sx={{
                      py: "0.5rem",
                      width: "200px",
                      margin: "0.2rem",
                      backgroundColor: "#FCC41B",
                      fontSize: { xs: "0.8rem", sm: "1rem" },
                      color: "#000",
                      borderRadius: "10px",
                    }}
                  >
                    {text}
                  </Button>
                </Grid>
              )
            )}
          </Box>
        </Grid>
      </Container>
    </Box >
  );
};

export default Hero;
