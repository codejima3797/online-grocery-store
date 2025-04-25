import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";
import { PiHouseLineBold } from "react-icons/pi";
import { TiShoppingCart } from "react-icons/ti";
import { CgDarkMode } from "react-icons/cg";
import TraderJoeLogoNoText from "../assets/trader-joe-logo-no-text.png";

const Navbar = () => {
  const navigate = useNavigate();

  function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");
  }

  const scrollToHome = () => {
    navigate("/");
    setTimeout(() => {
      const homeSection = document.getElementById("home__section");
      if (homeSection) {
        homeSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <>
      <nav id="navbar">
        <div className="nav__logo--wrapper navbar__items">
          <img
            src={TraderJoeLogoNoText}
            alt="Logo"
            className="nav__logo"
            onClick={scrollToHome}
          />
        </div>
        <div className="nav__links navbar__items">
          <div className="nav__link">
            <span className="nav__login">Log In</span>{" "}
            <span className="nav__slash">/</span>{" "}
            <span className="nav__signup">Sign Up</span>
          </div>
          <select className="nav__link nav__dropdown">
            <option disabled selected className="nav__option">
              Learn More...
            </option>
            <option className="nav__option">About Us</option>
            <option className="nav__option">Contact</option>
            <option className="nav__option">FAQ</option>
          </select>
          <div className="nav__link">
            <Link to="/" onClick={scrollToHome}>
              <PiHouseLineBold className="nav__icon" />
            </Link>
          </div>
          <div className="nav__link">
            <Link to="/cart">
              <TiShoppingCart className="nav__icon" />
            </Link>
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
