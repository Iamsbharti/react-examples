import React from "react";
import ThemeContext from "./themeContext";

function Header() {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <div className={`${theme}-theme`}>
          <h1>{theme === "dark" ? "Dark" : "Light"}Theme</h1>
        </div>
      )}
    </ThemeContext.Consumer>
  );
}

export default Header;
