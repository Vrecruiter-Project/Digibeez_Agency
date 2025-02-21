import React from "react";
import { Container, Typography, Box, CardContent, CardMedia, Divider } from "@mui/material";
import Grid from '@mui/material/Grid2';
import seo from '../../../../assets/Services/seo.png';

const SeoGuide = () => {
  return (
    <Container sx={{ mt: 4 }} >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Grid container spacing={2} >
          {/* Text Section */}
          <Grid size={{ xs: 12, md: 6 }} >
            <CardContent>
              <Typography variant="h5" fontWeight="bold" fontSize={30} pb={1} >
                What Is SEO? A Search Engine Optimization Guide
              </Typography>
              <Divider sx={{ my: 2 }} />
              <Typography fontSize={18} variant="body1" color="text.secondary" sx={{ mt: 1 }}>
                SEO, or search engine optimization, is the lowest-cost and most
                effective way to drive traffic to your website. But what exactly
                is SEO, and how does it work? How can you make SEO work for you?
                That’s what you’ll learn in this guide.
              </Typography>
            </CardContent>
          </Grid>

          {/* Image Section */}
          <Grid item xs={12} md={5}>
            <CardMedia
              component="img"
              image={seo}
              style={{ width: "100%" }}
              alt="SEO Illustration"
              sx={{ borderRadius: 2 }}
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default SeoGuide;
