import React from "react";
import HomeHeader from "../components/HomeHeader";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <div id="outer__div">
        <Navbar />
        <HomeHeader />
        <Footer />
      </div>
    </>
  );
};

export default Home;
