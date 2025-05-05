import React, { useState } from "react";
import HomeHeader from "../components/HomeHeader";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  const [isFading, setIsFading] = useState(false);

  return (
    <>
      <div className={`outer__div fade__in ${isFading ? "fade-out" : ""}`}>
        <Navbar setIsFading={setIsFading} />
        <HomeHeader setIsFading={setIsFading} />
        <Footer setIsFading={setIsFading} />
      </div>
    </>
  );
};

export default Home;
