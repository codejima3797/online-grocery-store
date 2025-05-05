import React from "react";
import ShoppingOptionsBasket from "../assets/options-basket.png";
import "../styles/Shopping.css";
import { useNavigate } from "react-router-dom";
import GroceryEntrance2 from "../assets/grocery-entrance-2.jpg";

const ShoppingOptions = ({ setIsFading }) => {
  const navigate = useNavigate();

  const handleNavigation = (destination) => {
    setIsFading(true);
    setTimeout(() => {
      navigate(destination);
    }, 1000);
  };

  return (
    <>
      <div className="background__images">
        <img
          src={GroceryEntrance2}
          alt="white brick wallpaper"
          className="light-mode__img--shopping"
        />
        <img
          src={GroceryEntrance2}
          alt="red brick wallpaper"
          className="dark-mode__img--shopping"
        />
      </div>
      <section id="shopping__options">
        <div className="container">
          <div className="row">
            <div className="options__header">
              <h1 className="options__title home__items">Time to shop!</h1>
              <h3 className="options__subtitle home__items">
                Choose one of our options below
              </h3>
            </div>
            <div className="shopping__baskets">
              <div
                className="shopping__basket--wrapper"
                onClick={() => handleNavigation("/new")}
              >
                <img
                  src={ShoppingOptionsBasket}
                  alt="Shopping Basket"
                  className="shopping__basket"
                />
                <h3 className="shopping__basket--text home__items">New</h3>
              </div>
              <div
                className="shopping__basket--wrapper"
                onClick={() => handleNavigation("/popular")}
              >
                <img
                  src={ShoppingOptionsBasket}
                  alt="Shopping Basket"
                  className="shopping__basket"
                />
                <h3 className="shopping__basket--text home__items">Popular</h3>
              </div>
              <div
                className="shopping__basket--wrapper"
                onClick={() => handleNavigation("/sale")}
              >
                <img
                  src={ShoppingOptionsBasket}
                  alt="Shopping Basket"
                  className="shopping__basket"
                />
                <h3 className="shopping__basket--text home__items">On Sale</h3>
              </div>
              <div
                className="shopping__basket--wrapper"
                onClick={() => handleNavigation("/deli-bakery")}
              >
                <img
                  src={ShoppingOptionsBasket}
                  alt="Shopping Basket"
                  className="shopping__basket"
                />
                <h3 className="shopping__basket--text home__items">
                  Deli/Bakery
                </h3>
              </div>
              <div
                className="shopping__basket--wrapper"
                onClick={() => handleNavigation("/aisles")}
              >
                <img
                  src={ShoppingOptionsBasket}
                  alt="Shopping Basket"
                  className="shopping__basket"
                />
                <h3 className="aisle__search--text home__items">
                  Explore By Aisle
                </h3>
              </div>
              <div
                className="shopping__basket--wrapper"
                onClick={() => handleNavigation("/search")}
              >
                <img
                  src={ShoppingOptionsBasket}
                  alt="Shopping Basket"
                  className="shopping__basket"
                />
                <h3 className="aisle__search--text home__items">
                  Quick Search
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShoppingOptions;
