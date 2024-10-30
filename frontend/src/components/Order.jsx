import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "../style/order.css";
import toast from "react-hot-toast";

const Order = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cartItems } = location.state || {};
  const [buyerName, setBuyerName] = useState("");
  const [buyerEmail, setBuyerEmail] = useState("");
  const [buyerAddress, setBuyerAddress] = useState("");
  const userId = sessionStorage.getItem("userId");

  if (!userId) {
    toast.error("You must be logged in to place an order.");
    navigate("/login");
    return null;
  }

  if (!cartItems || cartItems.length === 0) {
    return <p>No items in your cart for ordering.</p>;
  }

  const totalPrice = cartItems.reduce((total, item) => {
    return total + (parseFloat(item.productPrice) || 0);
  }, 0);


  const handleOrderSubmit = async (e) => {
    e.preventDefault();

    const orderDetails = {
      userId,
      buyerName,
      buyerEmail,
      buyerAddress,
      items: cartItems.map((item) => ({
        productId: item.id,
        productName: item.productName,
        productPrice: item.productPrice,
      })),
      totalPrice,
    };

    try {
      await axios.post("http://localhost:3000/api/v1/orders", orderDetails);
      toast.success("Order placed successfully!");
      navigate("/my-orders");
    } catch (error) {
      toast.error("Failed to place order. Please try again.");
    }
  };

  return (
    <div className="order-page">
      <h3 className="mb-0 mons">Review Your Order</h3>
      <div className="order-items">
        {cartItems.map((item) => (
          <div key={item.id} className="order-item">
            <h4>{item.productName}</h4>
            <p>Description: {item.productDescription}</p>
            <p>Price: ${item.productPrice}</p>
          </div>
        ))}
      </div>
      <h4>Total Price: ${totalPrice.toFixed(2)}</h4>

      <form onSubmit={handleOrderSubmit}>
        <div className="form-field">
          <label className="mons mt-4">Buyer Name:</label>
          <input
            className="form-control"
            type="text"
            value={buyerName}
            onChange={(e) => setBuyerName(e.target.value)}
            required
          />
        </div>
        <div className="form-field">
          <label className="mons">Buyer Email:</label>
          <input
            className="form-control"
            type="email"
            value={buyerEmail}
            onChange={(e) => setBuyerEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-field">
          <label className="mons">Buyer Address:</label>
          <textarea
            className="form-control"
            value={buyerAddress}
            onChange={(e) => setBuyerAddress(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="primary-btn">
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Order;
