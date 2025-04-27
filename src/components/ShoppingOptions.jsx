import React from "react";
import ShoppingOptionsBasket from "../assets/options-basket.png";
import "../styles/Shopping.css";
import { Link } from "react-router-dom";
import GroceryEntrance2 from "../assets/grocery-entrance-2.jpg"

const ShoppingOptions = () => {

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
              <Link to="/new" className="shopping__basket--wrapper">
                <img
                  src={ShoppingOptionsBasket}
                  alt="Shopping Basket"
                  className="shopping__basket"
                />
                <h3 className="shopping__basket--text home__items">New</h3>
              </Link>
              <Link to="/popular" className="shopping__basket--wrapper">
                <img
                  src={ShoppingOptionsBasket}
                  alt="Shopping Basket"
                  className="shopping__basket"
                />
                <h3 className="shopping__basket--text home__items">Popular</h3>
              </Link>
              <Link to="/sale" className="shopping__basket--wrapper">
                <img
                  src={ShoppingOptionsBasket}
                  alt="Shopping Basket"
                  className="shopping__basket"
                />
                <h3 className="shopping__basket--text home__items">On Sale</h3>
              </Link>
              <Link to="/deliBakery" className="shopping__basket--wrapper">
                <img
                  src={ShoppingOptionsBasket}
                  alt="Shopping Basket"
                  className="shopping__basket"
                />
                <h3 className="shopping__basket--text home__items">
                  Deli/Bakery
                </h3>
              </Link>
              <Link to="/aisles" className="shopping__basket--wrapper">
                <img
                  src={ShoppingOptionsBasket}
                  alt="Shopping Basket"
                  className="shopping__basket"
                />
                <h3 className="aisle__search--text home__items">
                  Explore By Aisle
                </h3>
              </Link>
              <Link to="/search" className="shopping__basket--wrapper">
                <img
                  src={ShoppingOptionsBasket}
                  alt="Shopping Basket"
                  className="shopping__basket"
                />
                <h3 className="aisle__search--text home__items">
                  Quick Search
                </h3>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShoppingOptions;
