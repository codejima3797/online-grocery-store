import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Sale.css";
import WhiteBrickWallpaper from "../assets/white-brick-wallpaper.jpg";
import RedBrickWallpaper from "../assets/red-brick-wallpaper.jpg";

const Sale = () => {
  const saleItems = useSelector((state) => state.sale.items);

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
        <section id="sale__section">
          <div className="container">
            <div className="row">
              <div className="sale__header">
                <h1 className="sale__title">On Sale</h1>
                <h4 className="sale__subtitle">
                  Check out our amazing deals! These items are on sale for a limited time only.
                </h4>
              </div>
              <div className="sale__list">
                {saleItems.map((item) => (
                  <div key={item.id} className="sale__list--item">
                    <img 
                      src={require(`../assets/${item.image}`)} 
                      alt={item.name} 
                      className="sale__item--img" 
                    />
                    <div className="sale__item--details">
                      <p className="sale__item--name">{item.name}</p>
                      <p className="sale__item--price">
                        ${item.price}/{item.unit}
                      </p>
                      <div className="sale__item--buttons">
                        <button className="sale__item--button see-details">See Details</button>
                        <button className="sale__item--button add-to-cart">Add to Cart</button>
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

export default Sale;
