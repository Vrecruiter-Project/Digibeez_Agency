import React from "react";
import Hero from "../components/Herosection/Hero";
import CountUp from "../components/CountUp/CountUp";
import ELearning from "../components/E-Learning/ELearning";
import OurPartner from "../components/OurParnter/OurPartner";

export default function Home() {
  return (
    <>
      <Hero />
      <CountUp />
      <ELearning />
      <OurPartner />
    </>
  );
}
