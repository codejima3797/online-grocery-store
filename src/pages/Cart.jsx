import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../redux/features/cartSlice";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Cart.css";

const Cart = () => {
  const [isFading, setIsFading] = useState(false);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
//  const totalItems = useSelector((state) => state.cart.totalItems);

  const handleRemoveItem = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const handleUpdateQuantity = (itemId, newQuantity) => {
    if (newQuantity > 0) {
      dispatch(updateQuantity({ id: itemId, quantity: newQuantity }));
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className={`outer__div fade__in ${isFading ? "fade-out" : ""}`}>
      <div className="cart-page">
        <Navbar setIsFading={setIsFading} />
        <div className="cart-container">
          <h1 className="cart-title">Your Cart</h1>
          {cartItems.length === 0 ? (
            <p className="cart-empty">Your cart is empty.</p>
          ) : (
            <div className="cart">
              <div className="cart-items">
                {cartItems.map((item) => (
                  <div key={item.id} className="cart-item">
                    <img
                      src={require(`../assets/${item.image}`)}
                      alt={item.name}
                      className="cart-item-image"
                    />
                    <div className="item-details">
                      <h3>{item.name}</h3>
                      <p>
                        ${item.price}
                      </p>
                    </div>
                    <div className="quantity-controls">
                      <button
                        onClick={() =>
                          handleUpdateQuantity(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() =>
                          handleUpdateQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </div>
                    <button
                      className="remove-btn"
                      onClick={() => handleRemoveItem(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
              <div className="cart-summary">
                <h2>Total: ${calculateTotal().toFixed(2)}</h2>
                <button className="checkout-btn">Proceed to Checkout</button>
              </div>
            </div>
          )}
        </div>
        <Footer setIsFading={setIsFading} />
      </div>
    </div>
  );
};

export default Cart;
