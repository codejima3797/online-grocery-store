import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import { PiHouseLineBold } from "react-icons/pi";
import { TiShoppingCart } from "react-icons/ti";
import { CgDarkMode } from "react-icons/cg";
import TraderJoeLogoNoText from "../assets/trader-joe-logo-no-text.png";
import { useSelector } from 'react-redux';

const Navbar = ({ setIsFading }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const cartItems = useSelector((state) => state.cart.totalItems);


  function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");
  }

  const handleNavigation = (destination) => {
    setIsFading(true);
    setTimeout(() => {
      navigate(destination);
    }, 1000);
  };

  return (
    <>
      <nav id="navbar">
        <div className="nav__logo--wrapper navbar__items">
          <img
            src={TraderJoeLogoNoText}
            alt="Logo"
            className="nav__logo"
            onClick={() => handleNavigation("/")}
          />
        </div>
        <div className="nav__links navbar__items">
          <div className="nav__link">
            <span className="nav__login">Log In</span>{" "}
            <span className="nav__slash">/</span>{" "}
            <span className="nav__signup">Sign Up</span>
          </div>
          <select 
            className="nav__link nav__dropdown"
            onChange={(e) => {
              const value = e.target.value;
              if (value === "about") {
                handleNavigation("/about");
              } else if (value === "faq") {
                handleNavigation("/faq");
              }
              e.target.value = "default";
            }}
          >
            <option value="default" disabled selected className="nav__option">
              Learn More...
            </option>
            <option value="about" className="nav__option">About Us</option>
            <option value="contact" className="nav__option">Contact</option>
            <option value="faq" className="nav__option">FAQ</option>
          </select>
          {location.pathname !== "/" && (
            <div className="nav__link">
              <div onClick={() => handleNavigation("/")}>
                <PiHouseLineBold className="nav__icon" />
              </div>
            </div>
          )}
          <div className="nav__link">
            <div onClick={() => handleNavigation("/cart")} className="cart-icon-wrapper">
              <TiShoppingCart className="nav__icon" />
              {cartItems > 0 && (
                <span className="cart-count">{cartItems}</span>
              )}
            </div>
          </div>
          <div className="nav__link">
            <CgDarkMode
              className="nav__icon dark-mode"
              onClick={toggleDarkMode}
            />
          </div>
          {/* burger for mobile */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
