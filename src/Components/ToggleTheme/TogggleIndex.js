import React from "react";
import { ThemeContextProvider } from "./themeContext";
import ToggleThemeApp from "./ToggleThemeApp";
function ToggleIndex() {
  return (
    <ThemeContextProvider>
      <ToggleThemeApp />
    </ThemeContextProvider>
  );
}

export default ToggleIndex;
