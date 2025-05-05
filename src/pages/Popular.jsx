import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PopularSection from "../components/PopularSection";

const Popular = () => {
  const [isFading, setIsFading] = useState(false);

  return (
    <>
      <div className={`outer__div fade__in ${isFading ? "fade-out" : ""}`}>
        <Navbar setIsFading={setIsFading} />
        <PopularSection setIsFading={setIsFading} />
        <Footer setIsFading={setIsFading} />
      </div>
    </>
  );
};

export default Popular;
