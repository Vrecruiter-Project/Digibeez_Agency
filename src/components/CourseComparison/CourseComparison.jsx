import React from "react";
import { Box, Typography, Paper, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import Grid from "@mui/material/Grid2";

const CourseComparison = () => {
  const digibeezFeatures = [
    "Expert-Led Training – Learn from industry professionals with real-world experience.",
    "Flexible Learning – Access course materials anytime, anywhere.",
    "Hands-On Projects – Practical exercises to build real skills.",
    "Certification – Get a certificate upon course completion.",
    "Project - Work on Real Time Project with experienced trainer.",
    "Technology - use Latest Technology which is most demanded in industry",
  ];
  const otherCompanyFeatures = [
    "Expert-Led Training – Learn from industry professionals with real-world experience.",
    "Flexible Learning – Access course materials anytime, anywhere.",
    "Hands-On Projects – Practical exercises to build real skills.",
    "Certification – Get a certificate upon course completion.",
    "Project - Work on Real Time Project with experienced trainer.",
    "Technology - use Latest Technology which is most demanded in industry",
  ];

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", p: 5, backgroundColor: "white" }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Our Course
      </Typography>
      <Box sx={{ width: 80, borderBottom: 4, borderColor: "#FFC107", mb: 4 }}></Box>
      {/* <Paper elevation={1} sx={{ p: 3, textAlign: "center" ,  }}> */}
      <Grid container spacing={4} sx={{ maxWidth: 900, width: "100%" }}>
        {/* Digibeez Section */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Paper elevation={3} sx={{ p: 3, textAlign: "center" }}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Digibeez
            </Typography>
            <List>
              {digibeezFeatures.map((feature, index) => (
                <ListItem key={index}
                  sx={{ display: "flex", alignItems: "start", p: 1, gap: 1 }}>

                  <CheckCircleIcon sx={{ color: "green", mt: '  8px' }} />

                  <ListItemText primary={feature} />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>

        {/* Other Company Section */}
        <Grid size={{ xs: 12, md: 6 }} >
          <Paper elevation={3} sx={{ p: 3, textAlign: "center" }}>

            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Other Company
            </Typography>
            <List>
              {otherCompanyFeatures.map((feature, index) => (
                <ListItem key={index} sx={{ display: "flex", alignItems: "start", p: 1, gap: 1 }}>
                  {/* <ListItemIcon> */}
                  <CancelIcon sx={{ color: "red", mt: '  8px' }} />
                  {/* </ListItemIcon> */}
                  <ListItemText primary={feature} />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>
      </Grid>
      {/* </Paper> */}
    </Box >
  );
};

export default CourseComparison;


