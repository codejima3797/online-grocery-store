import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Popular.css";
import WhiteBrickWallpaper from "../assets/white-brick-wallpaper.jpg";
import RedBrickWallpaper from "../assets/red-brick-wallpaper.jpg"

const Popular = () => {
  const popularItems = useSelector((state) => state.popular.items);

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
        <section id="popular__section">
          <div className="container">
            <div className="row">
              <div className="popular__header">
                <h1 className="popular__title">Popular Items</h1>
                <h4 className="popular__subtitle">
                  We update our 20 most popular items every month to make sure
                  that you, our valued customers, are always kept up to date on
                  our most loved and purchased products!
                </h4>
              </div>
              <div className="popular__list">
                {popularItems.map((item) => (
                  <div key={item.id} className="popular__list--item">
                    <img 
                      src={require(`../assets/${item.image}`)} 
                      alt={item.name} 
                      className="popular__item--img" 
                    />
                    <div className="popular__item--details">
                      <p className="popular__item--name">{item.name}</p>
                      <p className="popular__item--price">
                        ${item.price}/{item.unit}
                      </p>
                      <div className="popular__item--buttons">
                        <button className="popular__item--button see-details">See Details</button>
                        <button className="popular__item--button add-to-cart">Add to Cart</button>
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

export default Popular;
