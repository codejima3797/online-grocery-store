import React, { useState, useSyncExternalStore } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import { PiHouseLineBold } from "react-icons/pi";
import { TiShoppingCart } from "react-icons/ti";
import { CgDarkMode } from "react-icons/cg";
import TraderJoeLogoNoText from "../assets/trader-joe-logo-no-text.png";
import { useSelector } from 'react-redux';
import ContactModal from "./ContactModal";
import { SignIn, SignUp, useUser, useClerk } from "@clerk/clerk-react";

// These functions subscribe to the browser's hashchange event
const subscribe = (callback) => {
  window.addEventListener('hashchange', callback);
  return () => window.removeEventListener('hashchange', callback);
};

// This function gets the current value of the hash
const getSnapshot = () => window.location.hash;

const Navbar = ({ setIsFading }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const cartItems = useSelector((state) => state.cart.totalItems);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { isSignedIn, user } = useUser();
  const { signOut } = useClerk();

  // useSyncExternalStore guarantees the component will re-render when the hash changes
  const hash = useSyncExternalStore(subscribe, getSnapshot);

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

  const openAuthModal = () => setIsAuthModalOpen(true);

  const closeAuthModal = () => {
    // Clear the hash in the URL when the modal closes
    navigate(location.pathname, { replace: true });
    setIsAuthModalOpen(false);
  };

  const showSignUp = hash.startsWith('#signup');

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
            {isSignedIn ? (
              <div className="user-menu">
                <span className="nav__login">{user.emailAddresses[0].emailAddress}</span>
                <button onClick={() => signOut()} className="sign-out-button">Sign Out</button>
              </div>
            ) : (
              <span className="nav__login" onClick={openAuthModal}>Sign Up / Log In</span>
            )}
          </div>
          <select 
            className="nav__link nav__dropdown"
            onChange={(e) => {
              const value = e.target.value;
              if (value === "about") {
                handleNavigation("/about");
              } else if (value === "contact") {
                setIsContactModalOpen(true);
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
          {location.pathname !== "/cart" && (
          <div className="nav__link">
            <div onClick={() => handleNavigation("/cart")} className="cart-icon-wrapper">
              <TiShoppingCart className="nav__icon" />
              {cartItems > 0 && (
                <span className="cart-count">{cartItems}</span>
              )}
            </div>
          </div>
          )}
          <div className="nav__link">
            <CgDarkMode
              className="nav__icon dark-mode"
              onClick={toggleDarkMode}
            />
          </div>
          {/* burger for mobile */}
        </div>
      </nav>
      {isAuthModalOpen && (
        <div className="modal-overlay" onClick={closeAuthModal}>
          <div className="modal-content auth-modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={closeAuthModal}>×</button>
            {showSignUp ? (
              <SignUp signInUrl="#signin" routing="hash" />
            ) : (
              <SignIn signUpUrl="#signup" routing="hash" />
            )}
          </div>
        </div>
      )}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </>
  );
};

export default Navbar;
