import React from "react";
import ProductApp from "./ProductApp";
import { BrowserRouter } from "react-router-dom";

function ProductIndex() {
  return (
    <BrowserRouter>
      <ProductApp />
    </BrowserRouter>
  );
}
export default ProductIndex;
