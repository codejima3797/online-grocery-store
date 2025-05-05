import React from "react";
import { useSelector, useDispatch } from "react-redux";
import WhiteBrickWallpaper from "../assets/white-brick-wallpaper.jpg";
import RedBrickWallpaper from "../assets/red-brick-wallpaper.jpg";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { addToCart } from '../redux/features/cartSlice';
import '../styles/New.css';

const NewSection = ({ setIsFading }) => {
  const newItems = useSelector((state) => state.new.items);
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
      navigate(`/item-details/new/${itemId}`);
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
      <section id="new__section">
        <div className="container">
          <div className="row">
            <div className="new__header">
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
                <h1 className="new__title">New Items</h1>
                <h4 className="new__subtitle">
                  Check out our latest additions! We update our selection of new
                  items every week to bring you the freshest products available.
                </h4>
              </div>
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
                      <button 
                        className="new__item--button see-details"
                        onClick={() => handleSeeDetails(item.id)}
                      >
                        See Details
                      </button>
                      <button 
                        className="new__item--button add-to-cart"
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

export default NewSection;
