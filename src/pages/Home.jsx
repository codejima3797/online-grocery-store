import React from "react";
import HomeHeader from "../components/HomeHeader";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <div id="outer__div">
        <Navbar />
        <HomeHeader />
      </div>
      <div id="outer__div">
        <section id="home__options">
          <div >Hello</div>
        </section>
      </div>
    </>
  );
};

export default Home;
