import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/Home.css";
import WhiteBrickWallpaper from "../assets/white-brick-wallpaper.jpg";
import RedBrickWallpaper from "../assets/red-brick-wallpaper.jpg";
import TraderJoeLogoNoText from "../assets/trader-joe-logo-no-text.png";
import LogoTextCurved from "../assets/logo-text-curved.png";
import { FaChevronCircleUp } from "react-icons/fa";
import SwingingLeftDoor from "../assets/swinging-left-door.PNG";
import SwingingRightDoor from "../assets/swinging-right-door.PNG";

const HomeHeader = () => {
  const navigate = useNavigate();
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleDoorClick = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      navigate('/shopping');
    }, 2000);
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
      <div className={`zoom__container ${isTransitioning ? 'zoom__transition--active' : ''}`}>
        <section id="home__section">
          <div className="home__container home__items">
            <div className="row">
              <div className="homepage__wrapper">
                <h1 className="homepage__title">
                  Welcome to Trader Joe Grocery Delivery!
                </h1>
                <div className="header__content">
                  <div className="homepage__text">
                    <h2 className="homepage__para">
                      Delivering to homes, apartments, and businesses in your area
                      since 1997! Order from us now and get all of our fresh,
                      organic groceries delivered from our shelves to yours in
                      under an hour. Guaranteed!
                    </h2>
                  </div>
                  <div className="sliding__doors--wrapper">
                    <img
                      src={SwingingLeftDoor}
                      alt=""
                      className="sliding__door--left"
                    />
                    <img
                      src={SwingingRightDoor}
                      alt=""
                      className="sliding__door--right"
                    />
                    <div className="doors__content">
                      <div className={`scroll__down--wrapper ${isTransitioning ? 'zoom__transition--active' : ''}`} onClick={handleDoorClick}>
                        <FaChevronCircleUp
                          className="scroll__down--btn"
                        />
                        <h4 className={`scroll__down--text ${isTransitioning ? 'zoom__transition--active' : ''}`}>Head inside!</h4>
                      </div>
                    </div>
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
              </div>
            </div>
          </div>
        </section>
      </div>
      {isTransitioning && <div className="zoom__overlay zoom__overlay--active" />}
    </>
  );
};

export default HomeHeader;
