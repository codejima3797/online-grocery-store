import React from "react";
import SaleSection from "../components/SaleSection";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Sale.css";

const Sale = () => {
  return (
    <>
      <div className="outer__div">
        <Navbar />
        <SaleSection />
        <Footer />
      </div>
    </>
  );
};

export default Sale;
