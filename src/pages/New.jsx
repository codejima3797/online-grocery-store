import React from "react";
import NewSection from "../components/NewSection";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/New.css";

const New = () => {

  return (
    <>
      <div className="outer__div">
        <Navbar />
        <NewSection />
        <Footer />
      </div>
    </>
  );
};

export default New;
