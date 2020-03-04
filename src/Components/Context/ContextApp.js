import React, { Component } from "react";
import Header from "./Header";
import Button from "./Button";
import "./contextStyle.css";

class ContextApp extends Component {
  render() {
    return (
      <div>
        <Header />
        <Button />
      </div>
    );
  }
}

export default ContextApp;
