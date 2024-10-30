import React from "react";
import "../style/home.css"; // Importing the CSS file

const Home = () => {
  return (
    <div className="home d-flex">
      <div className="home-left">
        <div className="fan">
          <img src="/fan.webp" alt="fan image" />
        </div>
        <div className="sofa">
          <img src="/sofa.avif" alt="sofa image" />
        </div>
        <div className="fridge">
          <img src="/fridge.webp" alt="fridge image" />
        </div>
        <div className="almirah">
          <img src="/almirah.avif" alt="almirah image" />
        </div>
        <div className="tv">
          <img src="/tv.webp" alt="television image" />
        </div>
      </div>
      <div className="home-right">
        <p className="mb-0 kan">WE</p>
        <p className="mb-0 kan">BUILD</p>
        <p className="mb-0 kan">HOME</p>
        <a href="/collection" className="button primary-btn var text-dark">
          Collection
        </a>
      </div>
    </div>
  );
};

export default Home;
