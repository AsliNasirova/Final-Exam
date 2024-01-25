import React from "react";
import { useState } from "react";
import Card from "../Card/card";
import { useEffect } from "react";
import './product.scss'
import { FaHeart } from "react-icons/fa";
const Product = () => {
  const [product, setproduct] = useState([]);
  async function getProduct() {
    const data = await fetch("http://localhost:3000");
    const res = await data.json();
    setproduct(res);
  }
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div className="productArea">
      <div className="productBox">
        {product &&
          product.map((item) => (
            <Card
              key={item._id}
              id={item._id}
              image={item.image}
              title={item.title}
              price={item.price}
            />
          ))}
      </div>
      
    </div>
  );
};

export default Product;
