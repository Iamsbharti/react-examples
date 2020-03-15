import React from "react";
import productData from "./productData";
import { Link } from "react-router-dom";

function ProductPage() {
  const productComponent = productData.map(product => (
    <div key={product.id}>
      <Link to={`/product/${product.id}`}>
        <h2>{product.name}</h2>
      </Link>
      <p>${product.price} Only</p>
      <hr />
    </div>
  ));
  return (
    <div>
      <h1 style={{ color: "green" }}>Products Page</h1>
      {productComponent}
    </div>
  );
}
export default ProductPage;
