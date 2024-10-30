import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/cart.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const id = sessionStorage.getItem("userId");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCartItem = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/v1/carts?userId=${id}`
        );
        setCartItems(response.data.data);
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };
    fetchCartItem();
  }, [id]);

  const handleDeleteCart = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/v1/carts/${id}`);
      setCartItems(cartItems.filter((item) => item.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const handleCheckout = () => {
    const totalPrice = cartItems.reduce(
      (acc, item) => acc + item.productPrice,
      0
    );
    navigate("/order", { state: { cartItems, totalPrice } });
  };

  return (
    <div>
      <h2>Cart Items</h2>
      <table border="1" className="table table-striped">
        <thead>
          <tr>
            <th>Item ID</th>
            <th>Item Name</th>
            <th>Description</th>
            <th className="price-cell">Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.productName}</td>
              <td>{item.productDescription}</td>
              <td className="price-cell">{item.productPrice}</td>
              <td>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => handleDeleteCart(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="checkout-section">
        <button className="btn btn-sm btn-warning" onClick={handleCheckout}>
          Proceed to checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
