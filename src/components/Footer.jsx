import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Footer.css";
import TraderJoeLogoNoText from "../assets/trader-joe-logo-no-text.png";

const Footer = () => {
  const navigate = useNavigate();

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
      <footer id="footer">
        <div className="container">
          <div className="footer__row">
            <div className="footer__text--wrapper">
              <div className="footer__links">
                <div className="footer__link">About Us</div>
                <div className="footer__link">Contact</div>
                <div className="footer__link">FAQ</div>
              </div>
              <h4 className="footer__socials--title">
                And check out our socials!
              </h4>
              <div className="footer__socials">
                <div className="footer__social">LinkedIn</div>
                <div className="footer__social">GitHub</div>
                <div className="footer__social">Portfolio</div>
              </div>
              <div className="footer__logo--wrapper">
          <img
            src={TraderJoeLogoNoText}
            alt="Logo"
            className="footer__logo"
            onClick={scrollToHome}
          />
        </div>
              <p className="copyright__text">© Copyright 2024</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
