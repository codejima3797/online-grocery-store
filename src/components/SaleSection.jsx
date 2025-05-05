import React from "react";
import { useSelector, useDispatch } from "react-redux";
import WhiteBrickWallpaper from "../assets/white-brick-wallpaper.jpg";
import RedBrickWallpaper from "../assets/red-brick-wallpaper.jpg";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { addToCart } from '../redux/features/cartSlice';
import '../styles/Sale.css';

const SaleSection = ({ setIsFading }) => {
  const saleItems = useSelector((state) => state.sale.items);
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
      navigate(`/item-details/sale/${itemId}`);
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
      <section id="sale__section">
        <div className="container">
          <div className="row">
            <div className="sale__header">
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
                <h1 className="sale__title">On Sale</h1>
                <h4 className="sale__subtitle">
                  Check out our amazing deals! These items are on sale for a
                  limited time only.
                </h4>
              </div>
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
                      <button 
                        className="sale__item--button see-details"
                        onClick={() => handleSeeDetails(item.id)}
                      >
                        See Details
                      </button>
                      <button 
                        className="sale__item--button add-to-cart"
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

export default SaleSection;
