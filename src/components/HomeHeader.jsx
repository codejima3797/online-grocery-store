import React from "react";
import "../styles/Home.css";
import WhiteBrickWallpaper from "../assets/white-brick-wallpaper.jpg";
import RedBrickWallpaper from "../assets/red-brick-wallpaper.jpg";
import TraderJoeLogoNoText from "../assets/trader-joe-logo-no-text.png";
import TraderJoeLogoText from "../assets/trader-joe-logo-text.png";
import FreshProduceImage from "../assets/fresh-produce.jpg";
import Fridge from "../assets/stocked-fridge.jpg";
import { IoIosArrowDropdownCircle } from "react-icons/io";

const HomeHeader = () => {
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
      <section id="home__section">
        <div className="home__container home__items">
          <div className="row">
            <div className="homepage__wrapper">
              <div className="produce__image--wrapper">
                <img
                  src={FreshProduceImage}
                  alt=""
                  className="produce__image"
                />
              </div>
              <div className="homepage__header--wrapper">
                <div className="header__logo--wrapper">
                  <img
                    src={TraderJoeLogoNoText}
                    alt="Logo"
                    className="header__logo"
                  />
                  <img
                    src={TraderJoeLogoText}
                    alt="Logo"
                    className="header__logo--text"
                  />
                </div>
                <div className="header__title--wrapper">
                  <h1 className="header__title">
                    All of our fresh, organic groceries delivered from our
                    shelves to yours in under an hour. Guaranteed!
                  </h1>
                </div>
              </div>
              <div className="fridge__image--wrapper">
                <img src={Fridge} alt="" className="fridge__image" />
              </div>
              <div className="homepage__bottom">
                <h4 className="scroll__down--text">Get shopping!</h4>
                <div className="scroll__down--wrapper">
                  <IoIosArrowDropdownCircle className="scroll__down--btn" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeHeader;
