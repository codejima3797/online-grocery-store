import React, { useState } from "react";
import NewSection from "../components/NewSection";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/New.css";

const New = () => {
  const [isFading, setIsFading] = useState(false);

  return (
    <>
      <div className={`outer__div fade__in ${isFading ? "fade-out" : ""}`}>
        <Navbar setIsFading={setIsFading} />
        <NewSection setIsFading={setIsFading} />
        <Footer setIsFading={setIsFading} />
      </div>
    </>
  );
};

export default New;
