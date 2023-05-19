import React from "react";
import Hero from "../components/home/Hero";
import Feature from "../components/home/Feature";
import Testimonial from "../components/home/Testimonial";
import AboutUs from "../components/home/AboutUs";
import Download from "../components/home/Download";
import FAQs from "../components/home/FAQs";
import Team from "../components/home/Team";
import Footer from "../components/home/Footer";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Feature />
      <Testimonial />
      <AboutUs />
      <Download />
      <FAQs />
      <Team />
      <Footer />
    </>
  );
};

export default Home;
