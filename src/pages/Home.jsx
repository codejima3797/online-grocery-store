import React from "react";
import HomeHeader from "../components/HomeHeader";
import HomeOptions from "../components/HomeOptions";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <div id="outer__div">
        <Navbar />
        <HomeHeader />
      </div>
      <div id="outer__div">
        <HomeOptions />
      </div>
    </>
  );
};

export default Home;
