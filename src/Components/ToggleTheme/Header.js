import React from "react";
import { ThemeContextConsumer } from "./themeContext";

function Header() {
  return (
    <ThemeContextConsumer>
      {({ theme, toggleTheme }) => (
        <div className={`${theme}-theme`}>
          <h1>{theme === "dark" ? "Dark" : "Light"} Theme</h1>
        </div>
      )}
    </ThemeContextConsumer>
  );
}
export default Header;
