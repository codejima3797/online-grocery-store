import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/About.css";
import WhiteBrickWallpaper from "../assets/white-brick-wallpaper.jpg";
import RedBrickWallpaper from "../assets/red-brick-wallpaper.jpg";

const About = () => {
  const [isFading, setIsFading] = useState(false);

  return (
    <>
      <div className={`outer__div fade__in ${isFading ? "fade-out" : ""}`}>
        <Navbar setIsFading={setIsFading} />
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
        <section id="about__section">
          <div className="container">
            <div className="row">
              <div className="about__heading">
                <h1 className="about__title">About Us</h1>
                <h2 className="about__subtitle">
                  Our business started as a small fresh food stand in
                  Minneapolis, Minnesota 28 years ago. From the beginning, we've
                  made it our mission to provide our community with healthy and
                  affordable food options throughout the year. Thanks to our
                  loyal customers, we have been able to grow our business to
                  provide our food to not only neighboring communities, but to
                  many communities across the country. Even as we expand, our
                  family owned business is committed to always maintaining the
                  quality and affordability of our products so that families
                  across the United State can live happy, healthy lives. Thank
                  you for being one of our valued customers and enjoy shopping
                  with us!
                </h2>
              </div>
              <div className="staff">
                <h2 className="staff__title">Meet Our Team</h2>
                <div className="staff__members">
                  <div className="staff__member">
                    <div className="staff__position">
                      Owner/Co-Founder/Head Delivery Driver/Director of
                      Overly-Long Lectures/Generally Cool Guy
                    </div>
                    <div className="staff__name">Joseph Gray</div>
                  </div>
                  <div className="staff__member">
                    <div className="staff__position">
                      Co-Founder/Director of Acai Bowl Supplies/Co-Director of
                      Coffee Imports/Head of Delivery Fee Collections
                    </div>
                    <div className="staff__name">Ella Bronzeback</div>
                  </div>
                  <div className="staff__member">
                    <div className="staff__position">
                      Head of Smoothie Supplies/Culinary Director of
                      Granola/Co-Director of Coffee Imports/President of Edamame
                      Quality
                    </div>
                    <div className="staff__name">Annie Bambalam</div>
                  </div>
                  <div className="staff__member">
                    <div className="staff__position">
                      Director of Vibes/Chief Executive of Sunscreen
                      Department/Delivery Driver/Wrong English Speaker
                    </div>
                    <div className="staff__name">Dom East</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer setIsFading={setIsFading} />
      </div>
    </>
  );
};

export default About;
