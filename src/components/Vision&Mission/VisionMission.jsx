import React from "react";
import { Box, Card, CardContent, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import VisibilityIcon from "@mui/icons-material/Visibility";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import VisionMissionbg from "../../assets/VisionMission/VisionMission.jpg";
const VisionMission = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        // padding: "50px 20px",
        color: "#fff",
      }}
    >
      <Container>
        {/* Section Title */}
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", marginBottom: "10px",p:"20px", color: "#091009" }}
        >
          What Makes Us Different From Other Online Training & <br /> Digital
          Marketing Company
        </Typography>

        {/* Section Subtitle */}
        <Typography variant="body1" sx={{ margin: "auto", color: "#000" }}>
          Experience 100% Practical Digital Marketing Training in Chandigarh at
          Digibeez. Our distinctive hands-on approach ensures a profound
          understanding of concepts. With a conducive classroom environment and
          a supportive learning ecosystem, even beginners excel and gain
          confidence with us. Join the ranks of successful professionals as
          countless students have launched their careers through our digital
          marketing institute.
        </Typography>
        <Box
          sx={{
            marginTop:"20px",
              backgroundImage: `url(${VisionMissionbg})`,
              paddingY: "40px",
             borderRadius:"10px",
          
            backgroundSize: "cover",
            backgroundPosition: "center",
            //backgroundAttachment: "fixed",
          }}
        >
          {/* Mission & Vision Title */}
          <Typography
            variant="h4"
            sx={{
              color: "#FBC02D",
              fontWeight: "bold",
              paddingBottom:"40px",
              
            }}
          >
            Our Mission and Vision Statement
          </Typography>

          {/* Mission & Vision Content */}
          <Grid
            container
            spacing={4}
            sx={{ marginTop: "20px" }}
            alignItems="center"
          >
            {/* Vision Card */}
            <Grid size={{ xs: 12, md:6, lg:4 }}>
              <Card
                sx={{
                  background: "transparent",
                  color: "#fff",
                  // padding: "20px",
                  borderRadius: "10px",
                }}
              >
                <CardContent >
                  <VisibilityIcon sx={{ fontSize: 50, color: "#FBC02D", }} />
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", marginTop: "10px" }}
                  >
                    Our Vision
                  </Typography>
                  <Typography variant="body2" sx={{ marginTop: "10px",textAlign:"justify" }}>
                    At Digibeez, we envision a world where businesses and
                    individuals thrive in the digital era with the power of
                    marketing and technology. Our goal is to become a leading
                    digital partner that empowers brands and professionals
                    through cutting-edge marketing strategies and high-quality
                    education.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            {/* Mission Card */}
            <Grid size={{ xs: 12, md:5, lg:4 }}>
              <Card
                sx={{
                  background: "transparent",
                  color: "#fff",
                  // padding: "20px",
                  borderRadius: "10px",
                }}
              >
                <CardContent>
                  <TrackChangesIcon sx={{ fontSize: 50, color: "#FBC02D" }} />
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", marginTop: "10px" }}
                  >
                    Our Mission
                  </Typography>
                  <Typography variant="body2" sx={{ marginTop: "10px",textAlign:"justify" }}>
                    At Digibeez, our mission is to empower businesses and
                    individuals with the best digital marketing services and
                    industry-focused IT courses that drive real growth and
                    success. A well-driven IT team will work on real-time
                    projects to provide hands-on experience.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default VisionMission;
