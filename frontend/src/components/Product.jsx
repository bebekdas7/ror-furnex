import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "../style/product.css";
import toast from "react-hot-toast";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const userId = sessionStorage.getItem("userId");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/v1/chairs/${id}`
        );
        setProduct(response.data.data);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch the product");
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const data =
    product && userId
      ? {
          productId: product.id,
          productName: product.name,
          productDescription: product.description,
          productPrice: product.price,
          userId: userId,
        }
      : null;

  const handleCart = async () => {
    if (!userId || !product) {
      toast.error("Login to add product to cart");
    } else if (data) {
      try {
        await axios.post(`http://localhost:3000/api/v1/carts`, data);
        toast.success("Product added to cart successfully");
      } catch (error) {
        toast.error("Failed to add product to cart");
      }
    }
  };

  const handleBuyNow = () => {
    if (!userId) {
      toast.error("Please log in to proceed with the purchase.");
    } else {
      navigate(`/order`, {
        state: {
          cartItems: [
            {
              id: product.id,
              productName: product.name,
              productDescription: product.description,
              productPrice: product.price, // Corrected
            },
          ],
          totalPrice: product.price, // Corrected
        },
      });
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="product-page">
      <h2 className="mb-0 mons">{product.name}</h2>
      <div className="product-img">
        <img src={product.imgURL || "/sofa.avif"} alt={product.name} />
      </div>
      <p className="mb-0 var">Price: ${product.price}</p>
      <p className="mb-0 var">{product.description}</p>
      <button className="secondary-btn w-25" onClick={handleBuyNow}>
        Buy now
      </button>
      <button onClick={handleCart} className="btn btn-primary ms-1">
        Add to cart
      </button>
    </div>
  );
};

export default Product;
