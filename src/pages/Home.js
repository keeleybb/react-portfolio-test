import React from "react";
import Intro from "../components/intro/intro";
import Portfolio from "../components/portfolio/portfolio"
import Parallax from "../components/parallax/parallax"
import Contact from "../components/contact/contact"
import Footer from "../components/footer/footer"


const Home = () => {
  return (
    <div className="m12">
      <Intro />
      <Portfolio />
      <Parallax />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
