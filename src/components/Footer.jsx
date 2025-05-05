import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Footer.css";
import TraderJoeLogoNoText from "../assets/trader-joe-logo-no-text.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa";

const Footer = ({ setIsFading }) => {
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

  const handleNavigation = (destination) => {
    setIsFading(true);
    setTimeout(() => {
      navigate(destination);
    }, 1000);
  };

  return (
    <>
      <footer id="footer">
        <div className="container">
          <div className="footer__row">
            <div className="footer__logo--wrapper">
              <img
                src={TraderJoeLogoNoText}
                alt="Logo"
                className="footer__logo"
                onClick={scrollToHome}
              />
            </div>
            <div className="footer__text--wrapper">
              <h4 className="footer__socials--title">Check out our socials!</h4>
              <div className="footer__socials">
                <Link
                  to="https://www.linkedin.com/in/joseph-gray-41b126128/"
                  target="_blank"
                  className="footer__social"
                >
                  <FaLinkedin />
                </Link>
                <Link
                  to="https://github.com/codejima3797"
                  target="_blank"
                  className="footer__social"
                >
                  <FaGithub />
                </Link>
                <Link
                  to="https://codejima3797.github.io/my-e-portfolio/"
                  target="_blank"
                  className="footer__social"
                >
                  <FaLink />
                </Link>
              </div>
              <div className="footer__links">
                <div
                  className="footer__link"
                  onClick={() => handleNavigation("/about")}
                >
                  About Us
                </div>
                <div
                  className="footer__link"
                  onClick={() => handleNavigation("/")} //create modal here instead of new contact page. Add phone and email capabilities
                >
                  Contact
                </div>
                <div
                  className="footer__link"
                  onClick={() => handleNavigation("/faq")}
                >
                  FAQ
                </div>
              </div>

              <p className="copyright__text">© Copyright Joseph Gray 2024</p>
            </div>
            <div className="footer__logo--wrapper">
              <img
                src={TraderJoeLogoNoText}
                alt="Logo"
                className="footer__logo"
              />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
