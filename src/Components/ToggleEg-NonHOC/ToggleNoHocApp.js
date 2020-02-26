import React, { Component } from "react";
import Menu from "./Menu";
import Favorite from "./Favorite";

class ToggleNoHocApp extends Component {
  render() {
    return (
      <div>
        <Menu />
        <br />
        <Favorite />
      </div>
    );
  }
}
export default ToggleNoHocApp;
