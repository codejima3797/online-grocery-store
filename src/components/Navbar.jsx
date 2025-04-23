import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { PiHouseLineBold } from "react-icons/pi";
import { TiShoppingCart } from "react-icons/ti";
import { CgDarkMode } from "react-icons/cg";
import TraderJoeLogoNoText from "../assets/trader-joe-logo-no-text.png";

const Navbar = () => {
  function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");
  }

  return (
    <>
      <nav id="navbar">
        <div className="nav__logo--wrapper navbar__items"><img src={TraderJoeLogoNoText} alt="Logo" className="nav__logo" /></div>
        <div className="nav__links navbar__items">
          <select className="nav__link nav__dropdown">
            More (dropdown menu)
            <option disabled selected className="nav__option">
              Learn More...
            </option>
            <option className="nav__option">About Us</option>
            <option className="nav__option">Contact</option>
            <option className="nav__option">FAQ</option>
          </select>
          <div className="nav__link">
            <Link to="/">
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
