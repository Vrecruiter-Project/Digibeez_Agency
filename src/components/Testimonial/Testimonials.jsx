import React from "react";
import { Card, CardContent, Container, Typography } from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import Grid from "@mui/material/Grid2";

const testimonials = [
  {
    quote:
      "The experts at Digibeez transformed our online presence. Their targeted PPC campaigns delivered an incredible ROI, and their content marketing strategy positioned us as industry leaders. Thanks to their efforts, our sales have doubled in just six months!",
  },
  {
    quote:
      "The digital marketing services provided by Digibeez have been instrumental in our growth. They tailored their strategies to meet our specific needs, and the results have been phenomenal. Our website traffic and customer engagement have skyrocketed!",
  },
];

function Testimonials() {
  return (
    <>
      {/* Section Title */}
      <Container sx={{ textAlign: "center", py: 5 }}>
      <Typography variant="h4" sx={{ color: "#FBC02D", fontWeight: "bold" }}>
        Client Testimonials
      </Typography>

      {/* Section Subtitle */}
      <Typography variant="h5 " sx={{ fontWeight: "bold", marginTop: "40px", }}>
        Discover How We’ve Made a Difference for Our Clients.
      </Typography>

      {/* Testimonials Container */}
      <Grid container spacing={12} justifyContent="center" sx={{ marginTop: "40px" }}>
        {testimonials.map((testimonial, index) => (
          <Grid size ={{xs:12, sm:6}} key={index}>
            <Card sx={{ background: "	#1B1212", color: "#fff", padding: "20px", borderRadius: "10px" }}>
              <CardContent>
                <FormatQuoteIcon sx={{ color: "#4CAF50", fontSize: "40px" }} />
                <Typography variant="body1" sx={{ marginTop: "10px",textAlign:"justify" }}>
                  {testimonial.quote}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      </Container>
    </>
  );
};

export default Testimonials;
