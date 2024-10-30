import React, { useEffect, useState } from "react";
import "../style/nav.css";
import axios from "axios";

const Nav = () => {
  const userId = sessionStorage.getItem("userId");
  const [data, setData] = useState([]);

  const handleLogout = () => {
    sessionStorage.removeItem("userId");
    window.location.href = "/";
  };

  useEffect(() => {
    const fetchCart = async () => {
      const response = await axios.get(
        `http://localhost:3000/api/v1/carts?userId=${userId}`
      );
      console.log(response);
      setData(response.data.data.length);
    };
    fetchCart();
  }, []);

  return (
    <nav className="nav">
      <div className="logo">
        <h4 className="mb-0">FURNE-X</h4>
      </div>
      <div className="nav-items">
        <a href="/">HOME</a>
        {userId ? (
          <>
            <a href="/my-orders">MY ORDER</a>
            <div className="overlay">{data}</div>
            <a href="/cart">CART</a>
            <button onClick={handleLogout}>LOGOUT</button>
          </>
        ) : (
          <>
            <a href="/signup">SIGNUP</a>
            <a href="/login">LOGIN</a>
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
