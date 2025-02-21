import React from "react";
import { Container, Typography, List, ListItem, ListItemText, Divider } from "@mui/material";

const SeoDetails = () => {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Understanding SEO
      </Typography>
      <Typography variant="body1" paragraph>
        SEO is the process of optimizing a website to rank higher on search engine results pages (SERPs). Unlike paid advertising, SEO focuses on organic traffic by improving a website's relevance and authority. A well-executed SEO strategy ensures that a website appears in front of the right audience, driving valuable traffic and potential customers.
      </Typography>

      <Divider sx={{ my: 2 }} />

      {/* On-Page SEO */}
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        On-Page SEO
      </Typography>
      <Typography variant="body1">
        On-page SEO involves optimizing individual web pages to improve their search engine rankings. This includes:
      </Typography>
      <List sx={{ pl: 2 }}>
        <ListItemText primary="• Keyword Optimization: Identifying and integrating relevant keywords in content, headings, and meta descriptions." />
        <ListItemText primary="• Content Quality: Creating valuable, engaging, and informative content that meets user intent." />
        <ListItemText primary="• Meta Tags: Optimizing title tags and meta descriptions to improve click-through rates." />
        <ListItemText primary="• Internal Linking: Connecting pages within a website to enhance navigation and strengthen link structure." />
      </List>

      <Divider sx={{ my: 2 }} />

      {/* Off-Page SEO */}
      <Typography variant="h6" fontWeight="bold">
        Off-Page SEO
      </Typography>
      <Typography variant="body1" >
        Off-page SEO focuses on improving a website's credibility and authority through external factors, such as:
      </Typography>
      <List sx={{ pl: 2 }}>
        <ListItemText primary="• Backlinks: Acquiring high-quality backlinks from authoritative websites to boost domain authority." />
        <ListItemText primary="• Social Media Signals: Engaging on social platforms to drive traffic and enhance brand presence." />
        <ListItemText primary="• Guest Blogging: Writing content for reputable websites to earn backlinks and build relationships." />
      </List>

      <Divider sx={{ my: 2 }} />

      {/* Technical SEO */}
      <Typography variant="h6" fontWeight="bold">
        Technical SEO
      </Typography>
      <Typography variant="body1">
        Technical SEO ensures that a website is optimized for search engine crawlers and provides a smooth user experience. Key elements include:
      </Typography>
      <List sx={{ pl: 2 }}>
        <ListItemText primary="• Site Speed Optimization: Enhancing loading speed for better user experience and rankings." />
        <ListItemText primary="• Mobile-Friendliness: Ensuring the website is responsive on all devices." />
        <ListItemText primary="• Secure Websites (HTTPS): Implementing SSL certificates for better security and trustworthiness." />
        <ListItemText primary="• XML Sitemaps & Robots.txt: Helping search engines index pages efficiently." />
      </List>

      <Divider sx={{ my: 2 }} />

      {/* Video & Image SEO */}
      <Typography variant="h6" fontWeight="bold" >
        Video SEO
      </Typography>
      <Typography variant="body1" gutterBottom>
        Video SEO involves optimizing titles, descriptions, and off-page strategies to get your videos to rank on YouTube or Google search.
      </Typography>
      <Typography variant="h6" fontWeight="bold">
        Image SEO
      </Typography>
      <Typography variant="body1">
        Image SEO relies on alt tags and technical strategies to help images on your website rank higher in Google Images search.
      </Typography>

      <Divider sx={{ my: 2 }} />

      {/* Benefits of SEO */}
      <Typography variant="h6" fontWeight="bold">
        Benefits of SEO
      </Typography>
      <Typography variant="body1" >
        Implementing an effective SEO strategy offers several benefits, such as:
      </Typography>
      <List sx={{ pl: 2 }}>
        <ListItemText primary="• Increased Organic Traffic: Higher search rankings drive more visitors to your website." />
        <ListItemText primary="• Enhanced User Experience: Optimized websites provide better navigation and readability." />
        <ListItemText primary="• Higher Conversion Rates: Targeted organic traffic brings more potential customers." />
        <ListItemText primary="• Cost-Effective Marketing: Unlike paid advertising, SEO provides long-term benefits at a lower cost." />
      </List>

      <Divider sx={{ my: 2 }} />

      {/* Conclusion */}
      <Typography variant="h6" fontWeight="bold">
        Conclusion
      </Typography>
      <Typography variant="body1" paragraph>
        SEO is a fundamental pillar of digital marketing that helps businesses establish a strong online presence, drive traffic, and enhance brand authority. By focusing on organic growth, SEO is a long-term, sustainable strategy that yields significant returns, making it an essential component of any digital marketing plan.
      </Typography>
    </Container>
  );
};

export default SeoDetails;
