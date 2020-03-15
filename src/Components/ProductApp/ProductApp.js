import React from "react";
import Home from "./Home";
import ProductPage from "./ProductPage";
import { Link, Route, Switch } from "react-router-dom";
import ProductDetails from "./ProductDetails";

function ProductApp() {
  return (
    <div>
      <Link to="/">Home</Link> | <Link to="/product">Product</Link>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/product" component={ProductPage} />
        <Route path="/product/:productID" component={ProductDetails} />
      </Switch>
    </div>
  );
}

export default ProductApp;
