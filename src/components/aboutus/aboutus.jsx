import React from "react";
import { Box, Typography, Container } from "@mui/material";

export default function AboutUs() {
  return (
    <Container maxWidth="md" sx={{ mt: 5, mb: 5 }}>
      {/* About Us Section */}
      <Box sx={{ textAlign: "center", mb: 3 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          About Us
        </Typography>
      </Box>

      <Typography variant="body1" sx={{ textAlign: "justify" }}>
        Digibeez is a complete Web Development & Digital Marketing company that provides SEO Services, PPC Services,
        and Web designing services, which have contributed to many startups looking to capitalize on limitless
        possibilities that digital marketing can provide. We have established our brand value on the basis of our
        immaculate results, tangible ROI, professional approach to problems, and tailor-made solutions for any clients.
      </Typography>

      <Typography variant="body1" sx={{ textAlign: "justify", mt: 2}}>
        We are a team of highly experienced Senior Developers, Designers, and Digital Marketers who operate in India but
        provide solutions around the world. We have vast experience in the Service and Product Industry. Our startups
        and brands have achieved their defined goals. We always look to serve a huge chunk of the industry and move the
        traction up ad placement and higher CTR. We have cemented our place in digital advertising and search engine
        marketing by earning the tag of a trustworthy digital company providing result-driven advertising and digital
        marketing solutions. We are also actively serving international clients with our wide market presence in India.
      </Typography>

      {/* Service Area Section */}
      <Box sx={{ mt: 4, mb: 2 }}>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Our Major Service Area
        </Typography>
      </Box>

      <Typography variant="body1" sx={{ textAlign: "justify"}}>
        Our service verticals include web development, web designing, search engine marketing, online advertising, 
        social media marketing, content marketing, email marketing, app development, and rich media creative solutions. 
        SEO services, social media optimization, Google AdWords management, and not to forget e-commerce solutions, 
        for which we have expertise.
      </Typography>
    </Container>
  );
}
