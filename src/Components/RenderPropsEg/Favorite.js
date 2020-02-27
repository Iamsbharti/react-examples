import React from "react";
import Toggle from "./Toggle";

function Favorite() {
  return (
    <Toggle
      render={({ on, toggle }) => {
        return (
          <div>
            <h4>Liked?</h4>
            <span onClick={toggle}>{on ? "❤️" : "♡"}</span>
          </div>
        );
      }}
    />
  );
}

export default Favorite;
