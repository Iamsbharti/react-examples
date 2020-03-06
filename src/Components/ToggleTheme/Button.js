import React from "react";
import { ThemeContextConsumer } from "./themeContext";

function Button() {
  return (
    <ThemeContextConsumer>
      {({ theme, toggleTheme }) => (
        <button onClick={toggleTheme} className={`${theme}-theme`}>
          Switch Theme
        </button>
      )}
    </ThemeContextConsumer>
  );
}
export default Button;
