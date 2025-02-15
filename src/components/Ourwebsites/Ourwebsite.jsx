import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import jobhub from "../../assets/Ourwebsites/jobhub.png";
import digibeez from "../../assets/Ourwebsites/d.png";


export default function OurWebsites() {
  const websites = [
    {
      name: "Digibeez",
      img: digibeez,
      link: "https://digibeez.in/",
    },

    {
      name: "JobHub",
      img: jobhub,
      link: "https://www.jobhub.world/",
    },
  ];
  return (

    <Box >

      <Typography
        variant="h5"
        sx={{
          textAlign: "center", fontWeight: "bold", mt: 4
        }} > Explore Our Website

      </Typography>

      <Box
        sx={{

          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 3,
          mt: 4
        }}
      >
        {websites.map((item, index) => (
          <Card
            key={index}
            sx={{
              width: 250,
              display: "flex",
              m: 1,
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              p: 2,
              borderRadius: 3,
              boxShadow: 3,
              transition: "0.3s",
              ":hover": {
                transform: "scale(1.05)",
                boxShadow: 5,
              },
            }}
          >

            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <img
                src={item.img}
                alt={item.name}
                style={{
                  mt: '20px',
                  objectFit: "center",
                  borderRadius: "10px",
                }}
              />
            </a>
            <CardContent>
              <Typography variant="h6" align="center" >
                {item.name}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
