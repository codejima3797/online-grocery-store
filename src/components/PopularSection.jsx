import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "../styles/Popular.css";
import WhiteBrickWallpaper from "../assets/white-brick-wallpaper.jpg";
import RedBrickWallpaper from "../assets/red-brick-wallpaper.jpg";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { addToCart } from '../redux/features/cartSlice';

const PopularSection = ({ setIsFading }) => {
  const popularItems = useSelector((state) => state.popular.items);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleNavigation = (destination) => {
    setIsFading(true);
    setTimeout(() => {
      navigate(destination);
    }, 1000);
  };

  const handleSeeDetails = (itemId) => {
    setIsFading(true);
    setTimeout(() => {
      navigate(`/item-details/popular/${itemId}`);
    }, 1000);
  };

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <>
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
              <div className="back-to-shopping__btn--wrapper">
                <button
                  className="back-to-shopping__btn"
                  onClick={() => handleNavigation("/shopping")}
                >
                  <FaArrowLeft />
                  <p>Go Back</p>
                </button>
              </div>
              <div className="header__text">
                <h1 className="popular__title">Popular Items</h1>
                <h4 className="popular__subtitle">
                  We update our 20 most popular items every month to make sure
                  that you, our valued customers, are always kept up to date on
                  our most loved and purchased products!
                </h4>
              </div>
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
                      <button
                        className="popular__item--button see-details"
                        onClick={() => handleSeeDetails(item.id)}
                      >
                        See Details
                      </button>
                      <button
                        className="popular__item--button add-to-cart"
                        onClick={() => handleAddToCart(item)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PopularSection;
