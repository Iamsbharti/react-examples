import React, { useContext } from "react";
import { ThemeContext } from "./themeContext";

function Button(props) {
  const context = useContext(ThemeContext);
  return (
    <header className={`${context.theme}-theme`}>
      <h2>{context.theme === "light" ? "Light" : "Dark"} Theme</h2>
    </header>
  );
}
export default Button;
