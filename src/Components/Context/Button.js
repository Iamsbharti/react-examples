import React, { Component } from "react";
import ThemeContext from "./themeContext";
import "./contextStyle.css";
class Button extends Component {
  static contexType = ThemeContext;
  render() {
    const theme = this.context;
    console.log("button -theme:" + theme);
    return <button className={`${theme}-theme`}>Switch Theme</button>;
  }
}

export default Button;
