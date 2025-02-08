import React from "react";
import {
  Box,
  Container,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import eLearningImage from "../../assets/ELearning/learning.png"; // Replace with your actual image path
import Grid from "@mui/material/Grid2";
import foot from "../../assets/Fotterheader/fotterbg.png";
function ELearning() {
  return (
    <Box>
      <Container sx={{ py: 5, backgroundColor: "white" }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
          sx={{ textAlign: "center", py: 3 }}
        >
          Best digital marketing institute in Chandigarh for freshers
        </Typography>
        <Grid container spacing={4} alignItems="center">
          {/* Left Side - Text Content */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="body1" sx={{ textAlign: "justify" }}>
              Are you searching for a great digital marketing school in
              Chandigarh for beginners?
              <strong> DigiBeez </strong> is an excellent option! They provide
              training that focuses on what's important in the industry and
              includes real projects. Their courses cover various topics like
              improving website visibility, online advertising, social media,
              and content creation, giving newcomers the skills they need to
              find a job. With hands-on experience, certification, and support
              for job placements, DigiBeez helps you build a solid foundation
              for a successful career in digital marketing.
            </Typography>

            {/* Why Choose DigiBeez? */}
            <Typography variant="h6" fontWeight="bold" marginTop={"30px"}>
              <EmojiObjectsIcon sx={{ color: "#FFC107", mr: 1 }} />
              Why Choose DigiBeez?
            </Typography>

            <List>
              {[
                "Beginner-friendly courses",
                "Live projects & internships",
                "Expert mentorship",
                "100% placement assistance",
              ].map((item, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <CheckCircleIcon sx={{ color: "#4CAF50" }} />
                  </ListItemIcon>
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>
          </Grid>

          {/* Right Side - Image */}
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <img
              style={{ alignItems: "center" }}
              src={eLearningImage}
              alt="Image"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ELearning;
