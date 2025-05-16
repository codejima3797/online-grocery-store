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
    cardName: "",
    billingAddress: "",
    cardNumber: "",
    expDate: "",
    cvv: "",
  });

  const [errors, setErrors] = useState({});

  const tax = cartSubtotal * 0.1;
  const total = cartSubtotal + tax;

  const validateInput = (name, value) => {
    let error = "";
    
    switch (name) {
      case "fullName":
      case "cardName":
        if (!/^[A-Za-z]+\s[A-Za-z]+$/.test(value)) {
          error = "Please enter a valid full name (letters only)";
        }
        break;
      
      case "address":
      case "billingAddress":
        if (!/^\d+\s+[A-Za-z\s.]+$/.test(value)) {
          error = "Please enter a valid address (street number followed by street name)";
        }
        break;
      
      case "city":
        if (!/^[A-Za-z\s]+$/.test(value)) {
          error = "Please enter a valid city name (letters only)";
        }
        break;
      
      case "state":
        const validStates = [
          "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut",
          "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
          "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan",
          "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire",
          "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio",
          "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
          "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia",
          "Wisconsin", "Wyoming"
        ];
        if (!validStates.includes(value)) {
          error = "Please enter a valid US state name";
        }
        break;
      
      case "zipCode":
        if (!/^\d{5}$/.test(value)) {
          error = "Please enter a valid 5 digit ZIP code";
        }
        break;
      
      case "cardNumber":
        if (!/^\d{16}$/.test(value.replace(/\s/g, ""))) {
          error = "Please enter a valid 16 digit card number";
        }
        break;
      
      case "expDate":
        const month = parseInt(value.substring(0, 2));
        const year = parseInt(value.substring(3));
        const currentYear = new Date().getFullYear();
        
        if (!/^\d{2}\/\d{4}$/.test(value) || month < 1 || month > 12 || year < currentYear) {
          error = "Please enter a valid expiration date (MM/YYYY)";
        }
        break;
      
      case "cvv":
        if (!/^\d{3,4}$/.test(value)) {
          error = "Please enter a valid 3 or 4 digit CVV";
        }
        break;
      
      default:
        break;
    }
    
    return error;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    
    const error = validateInput(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateInput(key, formData[key]);
      if (error) newErrors[key] = error;
    });
    
    setErrors(newErrors);
    
    // If no errors, proceed with form submission
    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted:", formData);
    }
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
                <form className="checkout-form" onSubmit={handleSubmit}>
                  <div className="form-section">
                    <h3>Delivery Information</h3>
                    <div className="input-group">
                      <label htmlFor="fullName">Full Name</label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        placeholder="John Doe"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                      />
                      {errors.fullName && <span className="error-message">{errors.fullName}</span>}
                    </div>
                    <div className="input-group">
                      <label htmlFor="address">Street Address</label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        placeholder="123 Main St"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                      />
                      {errors.address && <span className="error-message">{errors.address}</span>}
                    </div>
                    <div className="city-state-zip">
                      <div className="input-group">
                        <label htmlFor="city">City</label>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          placeholder="City"
                          value={formData.city}
                          onChange={handleInputChange}
                          required
                        />
                        {errors.city && <span className="error-message">{errors.city}</span>}
                      </div>
                      <div className="input-group">
                        <label htmlFor="state">State</label>
                        <input
                          type="text"
                          id="state"
                          name="state"
                          placeholder="State"
                          value={formData.state}
                          onChange={handleInputChange}
                          required
                        />
                        {errors.state && <span className="error-message">{errors.state}</span>}
                      </div>
                      <div className="input-group">
                        <label htmlFor="zipCode">ZIP Code</label>
                        <input
                          type="text"
                          id="zipCode"
                          name="zipCode"
                          placeholder="12345"
                          value={formData.zipCode}
                          onChange={handleInputChange}
                          required
                        />
                        {errors.zipCode && <span className="error-message">{errors.zipCode}</span>}
                      </div>
                    </div>
                  </div>
                  <div className="form-section">
                    <h3>Payment Information</h3>
                    <div className="input-group">
                      <label htmlFor="cardName">Name on Card</label>
                      <input
                        type="text"
                        id="cardName"
                        name="cardName"
                        placeholder="John Doe"
                        value={formData.cardName}
                        onChange={handleInputChange}
                        required
                      />
                      {errors.cardName && <span className="error-message">{errors.cardName}</span>}
                    </div>
                    <div className="input-group">
                      <label htmlFor="billingAddress">Billing Address</label>
                      <input
                        type="text"
                        id="billingAddress"
                        name="billingAddress"
                        placeholder="123 Main St"
                        value={formData.billingAddress}
                        onChange={handleInputChange}
                        required
                      />
                      {errors.billingAddress && <span className="error-message">{errors.billingAddress}</span>}
                    </div>
                    <div className="card-details">
                      <div className="input-group">
                        <label htmlFor="cardNumber">Card Number</label>
                        <input
                          type="text"
                          id="cardNumber"
                          name="cardNumber"
                          placeholder="1234 5678 9012 3456"
                          value={formData.cardNumber}
                          onChange={handleInputChange}
                          required
                          className="card-number"
                        />
                        {errors.cardNumber && <span className="error-message">{errors.cardNumber}</span>}
                      </div>
                      <div className="input-group">
                        <label htmlFor="expDate">Expiration Date</label>
                        <input
                          type="text"
                          id="expDate"
                          name="expDate"
                          placeholder="MM/YYYY"
                          value={formData.expDate}
                          onChange={handleInputChange}
                          required
                          className="exp-date"
                        />
                        {errors.expDate && <span className="error-message">{errors.expDate}</span>}
                      </div>
                      <div className="input-group">
                        <label htmlFor="cvv">CVV</label>
                        <input
                          type="text"
                          id="cvv"
                          name="cvv"
                          placeholder="123"
                          value={formData.cvv}
                          onChange={handleInputChange}
                          required
                          className="cvv"
                        />
                        {errors.cvv && <span className="error-message">{errors.cvv}</span>}
                      </div>
                    </div>
                  </div>
                  <div className="order-summary">
                    <h3>Order Summary</h3>
                    <div className="summary-row">
                      <span>Subtotal:</span>
                      <span>${cartSubtotal.toFixed(2)}</span>
                    </div>
                    <div className="summary-row">
                      <span>Tax:</span>
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
