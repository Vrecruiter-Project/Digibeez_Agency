import React from 'react';
import OurWebsites from '../components/OurWebsites/OurWebsites';
import CertificationCard from '../components/Certificate/Certificate';
import Learners from '../components/Learners/Learners';
import AboutUs from '../components/aboutus/aboutus';
import { Container } from '@mui/material';

export default function About() {
  return (
    <>


      <AboutUs />
      <Learners />
      <CertificationCard />
      <OurWebsites />


    </>
  )
}
