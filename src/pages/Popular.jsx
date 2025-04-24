import React from "react";
import Navbar from "../components/Navbar";
import "../styles/Popular.css";

const Popular = () => {
  return (
    <>
      <div id="outer__div">
        <Navbar />
        <section id="popular__section"></section>
        <div className="container">
          <div className="row">
            <h1 className="popular__title">Popular Items</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Popular;
