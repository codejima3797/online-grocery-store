import React, { useState } from "react";
import SaleSection from "../components/SaleSection";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Sale.css";

const Sale = () => {
  const [isFading, setIsFading] = useState(false);

  return (
    <>
      <div className={`outer__div fade__in ${isFading ? "fade-out" : ""}`}>
        <Navbar setIsFading={setIsFading} />
        <SaleSection setIsFading={setIsFading} />
        <Footer setIsFading={setIsFading} />
      </div>
    </>
  );
};

export default Sale;
