import React from "react";
import { Grid, Card, CardContent, Typography, Button, Box, Container } from "@mui/material";
import { Work, Assignment, School, People, ListAlt, Phone } from "@mui/icons-material";

const PlacementProcess = () => {
  const steps = [
    { icon: <People fontSize="large" />, title: "Expert Mentors", desc: "All Our Trainers are Industry Experts Having Experience." },
    { icon: <Work fontSize="large" />, title: "Project Preparation", desc: "All Of It Gets Prepared on Our Projects & Case Studies." },
    { icon: <School fontSize="large" />, title: "Course Program", desc: "Our Expert Counsellors Will Help You Find The Ideal Course For Yourself." },
    { icon: <ListAlt fontSize="large" />, title: "Grooming Session", desc: "Adept Grooming, Live Projects, Real-Time Case Management." },
    { icon: <Assignment fontSize="large" />, title: "Assignment Process", desc: "Real Job Training, Case Studies, Task Assignments." },
    { icon: <Phone fontSize="large" />, title: "Interview Calls", desc: "Our Placement Cell Takes Care Of Job Assistance After Training." }
  ];

  return (
    <Box sx={{ textAlign: "center", p: 8, backgroundColor: "#000", color: "#fff" }}>
      <Container>
        <Typography variant="h4" mb={4} gutterBottom>Placement Process</Typography>
        <Grid container spacing={3} justifyContent="center">
          {steps.map((step, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ textAlign: "center", p: 2, height: "100%" }}>
                <CardContent>
                  <Box sx={{ color: "#ffb400", mb: 1 }}>{step.icon}</Box>
                  <Typography variant="h6">{step.title}</Typography>
                  <Typography variant="body2" color="textSecondary">{step.desc}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Button variant="contained" sx={{ mt: 4, backgroundColor: "#ffb400", color: "#000" }}>
          Book Free Demo
        </Button>
      </Container>
    </Box>
  );
};

export default PlacementProcess;
