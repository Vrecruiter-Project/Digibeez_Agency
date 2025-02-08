import { Box, Card } from "@mui/material";
import React from "react";
import styled from "styled-components";
import Grid from "@mui/material/Grid2";

const Container = styled.div`
  .slider {
    margin-top: 20px;
    padding: 2em 0;
    overflow: hidden;
    position: relative;
    width: 100%;
  }

  .slide-track {
    display: flex;
    gap: 2em;
    animation: scroll 30s linear infinite;
    width: calc(2 * ${(props) => props.placementItems.length} * 150px);
  }

  .slide {
    flex: 0 0 auto;
    width: 150px;
    height: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .slide img {
    object-fit: contain; /* Prevents image distortion */
    max-width: 100%;
    max-height: 100%;
    display: block; /* Removes extra spacing */
  }

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-${(props) => props.placementItems.length} * 150px));
    }
  }
`;

const PlacementSwiper = ({ placementItems }) => {
  const duplicatedItems = [...placementItems, ...placementItems];

  return (
    <Container placementItems={placementItems}>
      <div className="slider">
        <div className="slide-track">
          {duplicatedItems.map((item, index) => (
            <Box key={index}>
              <Card
                sx={{
                  // p: 2,
                  width: "150px",
                  height: "150px",
                  display: "flex", // Make card a flex container
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 2,
                }}
              >
                <Grid
                  container
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%", // Ensures full height usage
                  }}
                >
                  <Grid
                    item
                    xs={12}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%", // Ensures full height usage
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.details}
                      style={{
                        maxWidth: "80%", // Ensures image does not overflow
                        maxHeight: "80%",
                        objectFit: "contain",
                      }}
                    />
                  </Grid>
                </Grid>
              </Card>
            </Box>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default PlacementSwiper;
