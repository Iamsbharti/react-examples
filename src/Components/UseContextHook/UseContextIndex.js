import React from "react";
import { ThemeContextProvider } from "./themeContext";
import UseContextApp from "./UseContextApp";

function UseContextIndex() {
  return (
    <ThemeContextProvider>
      <UseContextApp />
    </ThemeContextProvider>
  );
}
export default UseContextIndex;
