import React from "react";
import Header from "./Header";
import Button from "./Button";
import "./funThemestyles.css";
import ThemeContext from "./themeContext";
function FunThemeApp() {
  return (
    <div>
      <Header />
      <ThemeContext.Consumer>
        {theme => <Button theme={theme} />}
      </ThemeContext.Consumer>
      <Button />
    </div>
  );
}
export default FunThemeApp;
