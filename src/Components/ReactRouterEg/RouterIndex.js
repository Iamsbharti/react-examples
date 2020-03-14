import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RouterApp from "./RouterApp";
function RouterIndex() {
  return (
    <Router>
      <RouterApp />
    </Router>
  );
}
export default RouterIndex;
