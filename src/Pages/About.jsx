import React from 'react';
import Ourwebsites from '../components/Ourwebsites/Ourwebsite';
import CertificationCard from '../components/Certificate/Certificate';
import Learners from '../components/Learners/Learners';
import AboutUs from '../components/aboutus/aboutus';
import Abouthero from '../components/abouthero/Abouthero';
import Countup from '../components/CountUp/CountUp';
import PlacementProcess from '../components/Placementprocess/Placement';



export default function About() {
  return (
    <>
      <Abouthero />
      <Countup />
      <AboutUs />
      <PlacementProcess />
      <Learners />
      <CertificationCard />
      <Ourwebsites />

    </>
  )
}
