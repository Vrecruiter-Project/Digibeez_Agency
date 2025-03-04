import React from "react";
import Hero from "../components/Herosection/Hero.jsx";
import CountUp from "../components/CountUp/CountUp";
import ELearning from "../components/E-Learning/ELearning";
import OurPartner from "../components/OurParnter/OurPartner";
import Testimonials from "../components/Testimonial/Testimonials";
import ContactForm from "../components/Form/form";
import VisionMission from "../components/Vision&Mission/VisionMission.jsx";
import CourseComparison from "../components/CourseComparison/CourseComparison";
import ServiceCourses from '../components/ServiceCourses/ServiceCourses'

export default function Home() {
  return (
    <>
      <Hero />
      <CountUp />
      <ServiceCourses />
      <ELearning />
      <VisionMission />
      <CourseComparison />
      <ContactForm />
      <Testimonials />
      <OurPartner />
    </>
  );
}
