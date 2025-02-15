import React from 'react';
import Ourwebsites from '../components/Ourwebsites/Ourwebsite';
import CertificationCard from '../components/Certificate/Certificate';
import Learners from '../components/Learners/Learners';
import AboutUs from '../components/aboutus/aboutus';
import Abouthero from '../components/abouthero/Abouthero';
import Countup from '../components/CountUp/CountUp';



export default function About() {
  return (
    <>
      <Abouthero />
      <Countup />
      <AboutUs />
      <Learners />
      <CertificationCard />
      <Ourwebsites />

    </>
  )
}
