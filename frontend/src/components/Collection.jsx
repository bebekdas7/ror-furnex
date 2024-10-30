import React, { useEffect, useState } from "react";
import "../style/collection.css";
import Card from "../components/Card.jsx";
import axios from "axios";
const Collection = () => {
  const [data, setData] = useState([]);

  //fetch the chairs
  useEffect(() => {
    const fetchChaira = async () => {
      const response = await axios.get("http://localhost:3000/api/v1/chairs");
      setData(response.data);
      console.log(response.data);
    };
    fetchChaira();
  }, []);
  return (
    <main className="collection-main">
      <section className="chair-collection">
        <div className="chair-banner">
          <div className="sofa-banner-header">
            <h2 className="mb-0 var">Chair sets</h2>
          </div>
          <div className="sofa-bnaner-image">
            <img src="/sofa.avif" alt="sofa image" />
          </div>
        </div>
      </section>

      <div className="sofa-listing">
        {data.length > 0 ? (
          data.map((chair) => (
            <Card
              key={chair.id}
              imgURL={chair.imgURL || "sofa.avif"}
              name={chair.name}
              price={chair.price}
              id={chair.id}
            />
          ))
        ) : (
          <p>No chairs available</p>
        )}
      </div>
    </main>
  );
};

export default Collection;
