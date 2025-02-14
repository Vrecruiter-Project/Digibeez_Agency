import { Routes, Route } from "react-router-dom";
import React from 'react'
import Home from "../src/Pages/Home";
import About from "../src/Pages/About";
import Service from "../src/Pages/Services";
import Courses from "../src/Pages/Courses";

export default function Approutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
    </>
  )
}


