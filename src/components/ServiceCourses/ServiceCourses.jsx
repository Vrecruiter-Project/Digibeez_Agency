import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import img1 from "../../assets/ServicesCourses/img1.png";
import img2 from "../../assets/ServicesCourses/img2.png";
import img3 from "../../assets/ServicesCourses/img3.png";
import img4 from "../../assets/ServicesCourses/img4.png";
import img5 from "../../assets/ServicesCourses/img5.png";
import img6 from "../../assets/ServicesCourses/img6.png";
import img7 from "../../assets/ServicesCourses/img7.png";
import img8 from "../../assets/ServicesCourses/img8.png";
import RealisticBee from "../animatedBee/RealisticBee";

const timelineEvents = [
  { id: 1, image: img1, title: "SEO Services", description: "With our effective SEO Services, we'll provide you with the best organic SEO results...", icon: <SchoolIcon />, color: "red" },
  { id: 2, image: img2, title: "Digital Marketing", description: "With our digital marketing services like SEO & PPC, we provide 100% transparent services...", icon: <WorkIcon />, color: "green" },
  { id: 3, image: img3, title: "Website Design", description: "Designing a website plays a crucial role in business development...", icon: <WorkIcon />, color: "blue" },
  { id: 4, image: img4, title: "Website Development", description: "Our Web Development company focuses on clean, compact coding using the latest technology...", icon: <WorkIcon />, color: "pink" },
  { id: 5, image: img5, title: "eCommerce Development", description: "We have a team of professionals who develop all types of eCommerce websites...", icon: <SchoolIcon />, color: "orange" },
  { id: 6, image: img6, title: "Pay Per Click", description: "Our PPC services focus on high conversion rates with low CPC costs...", icon: <WorkIcon />, color: "yellow" },
  { id: 7, image: img7, title: "Google Adwords", description: "For instant business leads, we offer Google AdWords PPC services...", icon: <WorkIcon />, color: "cyan" },
  { id: 8, image: img8, title: "Video Editing", description: "We provide video editing services for various industries across platforms...", icon: <WorkIcon />, color: "black" },
];

const ServiceCourses = () => {
  return (
    <Box sx={{ py: 5, overflow: "hidden" }}>
      <Container>
        <Typography variant="h4" align="center" color="textPrimary" gutterBottom>
          <span style={{ color: "#FCC41B", fontWeight: "bolder" }}>Our</span> Services and Courses
        </Typography>
          <RealisticBee timelineEvents={timelineEvents} />

        <Timeline position="alternate">
          {timelineEvents.map((event) => (
            <TimelineItem key={event.id}>
              <TimelineSeparator>
                <TimelineDot sx={{ backgroundColor: event.color }}>{event.icon}</TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Box
                  sx={{
                    p: 2,
                    borderRadius: "10px",
                    boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
                    backgroundColor: "#fff",
                    textAlign: "center",
                    maxWidth: "400px",
                    mx: "auto",
                  }}
                >
                  <img src={event.image} alt={event.title} style={{borderRadius: "10px", display: "block", margin: "auto" }} />
                  <Typography variant="h6" sx={{ mt: 2, fontWeight: "bold" }}>
                    {event.title}
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1, color: "gray" }}>
                    {event.description}
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      mt: 2,
                      backgroundColor: "#FCC41B",
                      color: "white",
                      borderRadius: "10px",
                      "&:hover": { backgroundColor: "#E6A700" },
                    }}
                  >
                    Read More
                  </Button>
                </Box>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </Box>
  );
};

export default ServiceCourses;
