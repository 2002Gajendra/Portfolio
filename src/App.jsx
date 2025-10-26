import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import ReadMore from "./components/ReadMore";
import Development from "./components/WebDevelopment";
import AppDevelopment from "./components/AppDevelopment";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/read-more" element={<ReadMore />} />
        <Route path="/development" element={<Development />} />
        <Route path="/app-development" element={<AppDevelopment />} />
      </Routes>
      <Footer />
    </Router>
  );
}
