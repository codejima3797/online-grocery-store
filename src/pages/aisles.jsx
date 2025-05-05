import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Aisles = () => {
  const [isFading, setIsFading] = useState(false);

  return (
    <>
      <div className={`outer__div fade__in ${isFading ? "fade-out" : ""}`}>
        <Navbar setIsFading={setIsFading} />
        <div className="container">
          <div className="row">
            <div>Hello</div>
          </div>
        </div>
        <Footer setIsFading={setIsFading} />
      </div>
    </>
  );
}

export default Aisles;
