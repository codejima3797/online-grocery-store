import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PopularSection from "../components/PopularSection";

const Popular = () => {
  return (
    <>
      <div id="outer__div">
        <Navbar />
        <PopularSection />
        <Footer />
      </div>
    </>
  );
};

export default Popular;
