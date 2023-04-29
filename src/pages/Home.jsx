import React from "react";
import Hero from "../components/home/Hero";
import Feature from "../components/home/Feature";
import Testimonial from "../components/home/Testimonial";
import Download from "../components/home/Download";
import FAQs from "../components/home/FAQs";
import Team from "../components/home/Team";
import Footer from "../components/home/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <Feature />
      <Testimonial />
      <Download />
      <FAQs />
      <Team />
      <Footer />
    </>
  );
};

export default Home;
