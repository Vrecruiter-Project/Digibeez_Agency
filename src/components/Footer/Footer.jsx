import React from "react";
import { Container, Typography, Link, Box, IconButton } from "@mui/material";
import { Email, Phone, Instagram, Facebook, LinkedIn, Twitter, YouTube } from "@mui/icons-material";
import Grid from "@mui/material/Grid2";

const Footer = () => {
  return (
    <Box sx={{
      bgcolor: "#2e1f19", color: "white", py: 5, mt: 5, "&::before": {
        content: '""',
        position: "absolute",
        top: "-100px",
        left: 0,
        width: "100%",
        height: "100px",
        backgroundImage: 'url("")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }
    }}>
      <Container sx={{}}>
        <Grid container spacing={4}>
          {/* Contact Section */}
          <Grid size={{ xs: 12, sm: 3 }}>
            <Typography variant="h6" gutterBottom>
              <b>digibeez</b>
            </Typography>
            <Typography variant="body1">Contact us</Typography>
            <Typography variant="body1" sx={{ display: "flex", alignItems: "center", mt: 1 }}>
              <Phone sx={{ mr: 1 }} /> +91 9518035030
            </Typography>
            <Typography variant="body1" sx={{ display: "flex", alignItems: "center", mt: 1 }}>
              <Email sx={{ mr: 1 }} /> support@digibeez.in
            </Typography>
          </Grid>

          {/* Company Section */}
          <Grid size={{ xs: 12, sm: 3 }}>
            <Typography variant="h6" gutterBottom>
              digibeez
            </Typography>
            {[
              "Careers",
              "Privacy policy",
              "Terms & conditions",
              "Pricing & refund policy",
              "Bug bounty",
              "Review",
              "Press release",
            ].map((text) => (
              <Typography variant="body1" key={text}>
                <Link href="#" color="inherit" underline="none">
                  {text}
                </Link>
              </Typography>
            ))}
          </Grid>

          {/* Courses Section */}
          <Grid size={{ xs: 12, sm: 3 }}>
            <Typography variant="h6" gutterBottom>
              Courses
            </Typography>
            {[
              "Web Development",
              "Web Designing",
              "Graphic Designing",
              "Video Editing",
              "Digital Marketing",
            ].map((text) => (
              <Typography variant="body1" key={text}>
                <Link href="#" color="inherit" underline="none">
                  {text}
                </Link>
              </Typography>
            ))}
          </Grid>

          {/* Community Section */}
          <Grid size={{ xs: 12, sm: 3 }}>
            <Typography variant="h6" gutterBottom>
              Community
            </Typography>
            {[
              "10X Club",
              "Student Chapters",
              "Hire from us",
            ].map((text) => (
              <Typography variant="body1" key={text}>
                <Link href="#" color="inherit" underline="none">
                  {text}
                </Link>
              </Typography>
            ))}
          </Grid>
        </Grid>

        {/* Social Media Section */}
        <Box sx={{ textAlign: "center", mt: 4 }}>
          <IconButton sx={{ color: '#FCC41B' }} href="#" ><Instagram /></IconButton>
          <IconButton sx={{ color: '#FCC41B' }} href="#" ><Facebook /></IconButton>
          <IconButton sx={{ color: '#FCC41B' }} href="#" ><LinkedIn /></IconButton>
          <IconButton sx={{ color: '#FCC41B' }} href="#" ><Twitter /></IconButton>
          <IconButton sx={{ color: '#FCC41B' }} href="#" ><YouTube /></IconButton>
        </Box>

        {/* Copyright */}
        <Box sx={{ textAlign: "center", mt: 2, opacity: 0.7 }}>
          <Typography variant="body1">Copyright © digibeez. All rights reserved</Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

