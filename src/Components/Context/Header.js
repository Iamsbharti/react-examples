import React, { Component } from "react";
import ThemeContext from "./themeContext";
import "./contextStyle.css";
class Header extends Component {
  static contextType = ThemeContext;
  render() {
    const theme = this.context;
    console.log("header theme" + theme);
    return (
      <header className={`${theme}` - theme}>
        <h1>{theme === "dark" ? "Dark" : "Light"} Theme</h1>
      </header>
    );
  }
}

export default Header;
