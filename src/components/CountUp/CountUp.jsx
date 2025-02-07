import React from "react";
import { Box, Typography, Container } from "@mui/material";
import Grid from "@mui/material/Grid2";
import CountUp from "react-countup";

const stats = [
  { value: 500, suffix: "+", label: "Clients" },
  { value: 5000000, suffix: "+", label: "Keywords Ranked" },
  { value: 300, suffix: "+", label: "Real Time Projects" },
  { value: 1000000, suffix: "+", label: "Leads Generated" },
];

function Countup ()  {
  return (
    <Box sx={{ backgroundColor: "#222", color: "white", py: 4 }}>
      <Container>
        <Grid container spacing={3} justifyContent="center">
          {stats.map((stat, index) => (
            <Grid size={{ xs:12, sm:6, md:3}} key={index} textAlign="center">
              <Typography variant="h4" fontWeight="bold">
                <CountUp end={stat.value} duration={3} separator="," suffix={stat.suffix} />
              </Typography>
              <Typography variant="h6">{stat.label}</Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Countup;
