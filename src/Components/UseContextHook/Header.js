import React, { useContext } from "react";
import { ThemeContext } from "./themeContext";

function Header(props) {
  const context = useContext(ThemeContext);
  return (
    <Header className={`${context.theme}-theme`}>
      <h2>{context.theme === "dark" ? "Dark" : "Light"} Theme</h2>
    </Header>
  );
}
export default Header;
