import React from "react";
import { Box, Grid, TextField, Typography, Button } from "@mui/material";

const ContactForm = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        padding: 4,
        maxWidth: "1000px",
        margin: "auto",
        marginTop: "50px",
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      <Typography variant="h6" align="center" sx={{ color: "#FBB03B", fontWeight: "bold", mb: 1 }}>
        Get In Touch
      </Typography>
      <Typography variant="h4" align="center" sx={{ fontWeight: "bold", mb: 3 }}>
        We Want To Help
      </Typography>

      <Grid container spacing={3}>
        {/* First Name */}
        <Grid item xs={12} md={6}>
          <TextField fullWidth label="First Name" placeholder="Enter Your First Name" variant="outlined" />
        </Grid>

        {/* Last Name */}
        <Grid item xs={12} md={6}>
          <TextField fullWidth label="Last Name" placeholder="Enter Your Last Name" variant="outlined" />
        </Grid>

        {/* Mobile Number */}
        <Grid item xs={12} md={6}>
          <TextField fullWidth label="Mobile Number" placeholder="Enter Your Mobile Number" variant="outlined" />
        </Grid>

        {/* Email ID */}
        <Grid item xs={12} md={6}>
          <TextField fullWidth label="Email Id" placeholder="Enter Your Email Id" variant="outlined" />
        </Grid>

        {/* Message */}
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Message"
            placeholder="Enter Your Message Here"
            multiline
            rows={4}
            variant="outlined"
          />
        </Grid>

        {/* Submit Button */}
        <Grid item xs={12} textAlign="center" >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#FBB03B",
              color: "#fff",
              fontWeight: "bold",
              paddingX: 5,
              paddingY: 1.5,
              "&:hover": { backgroundColor: "#e69500" },
            }}
          >
            SEND US
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactForm;
