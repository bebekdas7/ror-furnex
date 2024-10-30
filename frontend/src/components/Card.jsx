import React from "react";
import "../style/card.css";

const Cards = ({ imgURL, name, price, id }) => {
  return (
    <main className="card">
      <div className="card-img">
        <img src={`${imgURL}`} alt="product image" />
      </div>
      <a href={`/product/${id}`} className="card-details">
        <p className="mb-0 mons">{name}</p>
        <p className="mb-0 mons">${price}</p>
      </a>
    </main>
  );
};

export default Cards;
