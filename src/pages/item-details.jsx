import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/ItemDetails.css";
import ItemDetailsInfo from "../components/ItemDetailsInfo";

const ItemDetails = () => {
  const [isFading, setIsFading] = useState(false);

  return (
    <>
      <div className={`outer__div fade__in ${isFading ? "fade-out" : ""}`}>
        <Navbar setIsFading={setIsFading} />
        <ItemDetailsInfo setIsFading={setIsFading} />
        <Footer setIsFading={setIsFading} />
      </div>
    </>
  );
};

export default ItemDetails;
