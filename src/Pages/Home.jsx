import React from "react";
import Hero from "../components/Herosection/Hero";
import CountUp from "../components/CountUp/CountUp";
import ELearning from "../components/E-Learning/ELearning";
import OurPartner from "../components/OurParnter/OurPartner";
import Testimonials from "../components/Testimonial/Testimonials";
import ContactForm from "../components/Form/form";

export default function Home() {
  return (
    <>
      <Hero />
      <CountUp />
      <ELearning />
      <Testimonials />
      <ContactForm />
      <OurPartner />
      
    </>
  );
}
