
// import React from "react";
// import Certificate from '../../assets/Certificate/Certificate.png';
// import { Container } from "@mui/material";

// const Certificatee = () => {
//   return (

//   );
// };

// export default Certificatee;

// import React from "react";
// import { Box, Grid, Card, CardContent, Typography, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// import Certificate from '../../assets/Certificate/Certificate.png';

import React from "react";
import { Box, Card, CardContent, Typography, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Certificate from '../../assets/Certificate/Certificate.png';

export default function CertificationCard() {
  return (
    <>
      <Typography variant="h5" align="center" sx={{ mb: 2, fontWeight: "bold" }}>
        Digibeez Certification Program
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>

        <Card sx={{ maxWidth: 1150, p: 3, borderRadius: 3, boxShadow: 3 }}>


          {/* Parent Box for Layout */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              gap: 3
            }}
          >
            {/* Left Side - Certificate Image */}
            <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
              <img
                src={Certificate}
                alt="Certificate"
                style={{ borderRadius: 10 }}
              />
            </Box>

            {/* Right Side - Description */}
            <Box sx={{ flex: 1 }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Unlock Your Digital Potential
                </Typography>
                <Typography variant="body2" sx={{ mt: 1, color: "gray" }}>
                  Gain industry-recognized certification from Digibeez and showcase your expertise in digital marketing,
                  social media management, and advanced marketing strategies. Our certification is designed for individuals
                  and businesses aiming to enhance their skills and credibility.
                </Typography>

                <Typography variant="h6" sx={{ mt: 2, fontWeight: "bold" }}>
                  Why Get Certified with Digibeez?
                </Typography>
                <List dense>
                  {[
                    "Industry Recognition: Build your professional credibility with a trusted certification.",
                    "Hands-on Experience: Learn with real-world projects and practical insights.",
                    "Expert Guidance: Mentorship from top industry professionals.",
                    "Enhance Career Opportunities: Stand out in the competitive digital marketing space.",
                  ].map((text, index) => (
                    <ListItem key={index}>
                      <ListItemIcon>
                        <CheckCircleIcon color="success" />
                      </ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Box>
          </Box>
        </Card>
      </Box>
    </>
  );
}
