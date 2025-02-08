import React from "react";
import Grid from "@mui/material/Grid2";
import { Box, Button, Container, Typography } from "@mui/material";
import PlacementSwiper from "../CoursesSwiper/PlacementSwiper";
import Zomato from "../../assets/OurPartner/image1.png";
import Lore from "../../assets/OurPartner/image2.png";
import AZGroup from "../../assets/OurPartner/image3.png";
import KraftMyTrip from "../../assets/OurPartner/image4.png";
import Omaxe from "../../assets/OurPartner/image5.png";
const OurPartner = () => {
  const placementItems = [
    {
      image:
        Zomato      
    },
    {
      image:
        Lore
    },
    {
      image:
       AZGroup
    },
    {
      image:
        KraftMyTrip
    },
    {
      image:
        Omaxe
    }
    // {
    //   image:
    //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEhfNZTuKqQVBMKQPkHabC9NI0bzHFkaMCAg&s",
    // },
    // {
    //   image:
    //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkwiruafD-4A_k3Pq1s0qLoLzRP5LENJ8qFA&s",
    // },
    // {
    //   image:
    //     "https://files.codingninjas.com/screenshot_2024-02-08_153909-removebg-preview-1707388361.webp",
    // },
    // {
    //   image:
    //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXAukRfiY4AAOeXYd8XV2ZJ6-otx1jIWstrA&s",
    // },
    // {
    //   image:
    //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ05HsoaVK2suSyWvDs-LuTTs6ljv00L52geQ&s",
    // },
    // {
    //   image:
    //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWTOKnpuow_kaQX1MxCBGg7iagkyYcAJ9w1w&s",
    // },
    // {
    //   image:
    //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTfILAg_K9dxmt7sX2jWvJ2mY61GU10OeA7A&s",
    // },
  ];
  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        mt={{ xs: 0, md: 6, lg: 9 }}
      >
        <Container>
          <Grid container sx={{ mt: 6 }}>
            <Grid size={12}>
              <Typography variant="h4"
                sx={{
                  textAlign: "center",
                  fontWeight: "bold",
                //   fontSize: "30px",
                }}
              >
                Our Partner
              </Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid size={12}>
              <PlacementSwiper placementItems={placementItems} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default OurPartner;
