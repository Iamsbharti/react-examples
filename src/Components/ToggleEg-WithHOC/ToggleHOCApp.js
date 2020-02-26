import React from "react";
import Menu from "./Menu";
import Favorite from "./Favorite";

function ToggleHOCApp() {
  return (
    <div>
      <Menu />
      <hr />
      <Favorite />
    </div>
  );
}
export default ToggleHOCApp;
