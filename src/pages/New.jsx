import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/New.css";
import WhiteBrickWallpaper from "../assets/white-brick-wallpaper.jpg";
import RedBrickWallpaper from "../assets/red-brick-wallpaper.jpg";

const New = () => {
  const newItems = useSelector((state) => state.new.items);

  return (
    <>
      <div id="outer__div">
        <Navbar />
        <div className="background__images">
          <img
            src={WhiteBrickWallpaper}
            alt="white brick wallpaper"
            className="light-mode__img body__img"
          />
          <img
            src={RedBrickWallpaper}
            alt="red brick wallpaper"
            className="dark-mode__img body__img"
          />
        </div>
        <section id="new__section">
          <div className="container">
            <div className="row">
              <div className="new__header">
                <h1 className="new__title">New Items</h1>
                <h4 className="new__subtitle">
                  Check out our latest additions! We update our selection of new items
                  every week to bring you the freshest products available.
                </h4>
              </div>
              <div className="new__list">
                {newItems.map((item) => (
                  <div key={item.id} className="new__list--item">
                    <img 
                      src={require(`../assets/${item.image}`)} 
                      alt={item.name} 
                      className="new__item--img" 
                    />
                    <div className="new__item--details">
                      <p className="new__item--name">{item.name}</p>
                      <p className="new__item--price">
                        ${item.price}/{item.unit}
                      </p>
                      <div className="new__item--buttons">
                        <button className="new__item--button see-details">See Details</button>
                        <button className="new__item--button add-to-cart">Add to Cart</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default New;
