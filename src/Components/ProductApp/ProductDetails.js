import React from "react";
import { useParams } from "react-router-dom";
import productData from "./productData";

function ProductDetails() {
  const { productID } = useParams();
  console.log(productID);
  const io = productData.find(prod => prod.id === productID);

  return (
    <div>
      <h1>Product Details</h1>
      {io.name} - ${io.price}
      <hr />
      {io.description}
    </div>
  );
}
export default ProductDetails;
