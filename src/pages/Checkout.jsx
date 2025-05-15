import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Checkout.css";
import CheckoutCounter from "../assets/checkout-counter-2.JPG";

const Checkout = () => {
  const [isFading, setIsFading] = useState(false);
  const [cartSubtotal, setCartSubtotal] = useState(0);
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    cardNumber: "",
    expDate: "",
    cvv: "",
  });

  const tax = cartSubtotal * 0.1;
  const total = cartSubtotal + tax;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <div className={`outer__div fade__in ${isFading ? "fade-out" : ""}`}>
        <Navbar setIsFading={setIsFading} />
        <div className="background__images">
        <img
          src={CheckoutCounter}
          alt="white brick wallpaper"
          className="checkout__img"
        />
      </div>
        <section className="checkout-section">
          <div className="container">
            <div className="row">
              <div className="checkout-container">
                <h2>Please enter your information</h2>
                <form onSubmit={handleSubmit}>
                  <div className="form-section">
                    <h3>Shipping Information</h3>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Full Name"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                    />
                    <input
                      type="text"
                      name="address"
                      placeholder="Address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                    />
                    <div className="city-state-zip">
                      <input
                        type="text"
                        name="city"
                        placeholder="City"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                      />
                      <input
                        type="text"
                        name="state"
                        placeholder="State"
                        value={formData.state}
                        onChange={handleInputChange}
                        required
                      />
                      <input
                        type="text"
                        name="zipCode"
                        placeholder="ZIP Code"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-section">
                    <h3>Payment Information</h3>
                    <input
                      type="text"
                      name="cardNumber"
                      placeholder="Card Number"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      required
                    />
                    <div className="card-details">
                      <input
                        type="text"
                        name="expDate"
                        placeholder="MM/YY"
                        value={formData.expDate}
                        onChange={handleInputChange}
                        required
                      />
                      <input
                        type="text"
                        name="cvv"
                        placeholder="CVV"
                        value={formData.cvv}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="order-summary">
                    <h3>Order Summary</h3>
                    <div className="summary-row">
                      <span>Subtotal:</span>
                      <span>${cartSubtotal.toFixed(2)}</span>
                    </div>
                    <div className="summary-row">
                      <span>Tax (10%):</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                    <div className="summary-row total">
                      <span>Total:</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                  <button type="submit" className="checkout-button">
                    Complete Purchase
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <Footer setIsFading={setIsFading} />
      </div>
    </>
  );
};

export default Checkout;
