import React from "react";
import { BrowserRouter } from "react-router-dom";
import ServiceApp from "./ServiceApp";
import "./style.css";
function ServiceIndex() {
  return (
    <BrowserRouter>
      <ServiceApp />
    </BrowserRouter>
  );
}
export default ServiceIndex;
