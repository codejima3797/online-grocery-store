import React from 'react';
import ShoppingOptions from "../components/ShoppingOptions";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Shopping = () => {
    return (
        <div className="outer__div fade__in--shopping">
            <Navbar />
            <ShoppingOptions />
            <Footer />
        </div>
    );
}

export default Shopping;
