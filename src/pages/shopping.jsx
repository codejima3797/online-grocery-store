import React, { useState } from 'react';
import ShoppingOptions from "../components/ShoppingOptions";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Shopping = () => {
    const [isFading, setIsFading] = useState(false);

    return (
        <div className={`outer__div fade__in ${isFading ? "fade-out" : ""}`}>
            <Navbar setIsFading={setIsFading} />
            <ShoppingOptions setIsFading={setIsFading} />
            <Footer setIsFading={setIsFading} />
        </div>
    );
}

export default Shopping;
