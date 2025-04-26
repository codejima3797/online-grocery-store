import React from "react";
import "../styles/Home.css";
import WhiteBrickWallpaper from "../assets/white-brick-wallpaper.jpg";
import RedBrickWallpaper from "../assets/red-brick-wallpaper.jpg";
import TraderJoeLogoNoText from "../assets/trader-joe-logo-no-text.png";
import LogoTextCurved from "../assets/logo-text-curved.png";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import LeftDoor from "../assets/swinging-left-door";
import RightDoor from "../assets/swinging-right-door";

const HomeHeader = () => {
  const scrollToOptions = () => {
    const optionsSection = document.getElementById("home__options");
    if (optionsSection) {
      optionsSection.scrollIntoView({ behavior: "smooth" });
    }
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
      <section id="home__section">
        <div className="home__container home__items">
          <div className="row">
            <div className="homepage__wrapper">
              <div className="header__content">
                <div className="homepage__text">
                  <h1 className="homepage__title">
                    Welcome to Trader Joe Grocery Delivery!
                  </h1>
                  <h2 className="homepage__para">
                    Delivering to homes, apartments, and businesses in your area
                    since 1997! Order from us now and get all of our fresh,
                    organic groceries delivered from our shelves to yours in
                    under an hour. Guaranteed!
                  </h2>
                </div>
                <div className="sliding__doors--wrapper">
                  <img src={LeftDoor} alt="" className="sliding__door--left" />
                  <img src={RightDoor} alt="" className="sliding__doors--right" />
                </div>
                <div className="header__logo--wrapper">
                  <img
                    src={TraderJoeLogoNoText}
                    alt="Logo"
                    className="header__logo"
                  />
                  <img
                    src={LogoTextCurved}
                    alt="Logo"
                    className="header__logo--text"
                  />
                </div>
              </div>
              <div className="homepage__bottom">
                <h4 className="scroll__down--text">Get shopping!</h4>
                <div className="scroll__down--wrapper">
                  <IoIosArrowDropdownCircle
                    className="scroll__down--btn"
                    onClick={scrollToOptions}
                  />
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
