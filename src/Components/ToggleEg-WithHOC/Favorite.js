import React from "react";
import { withToggle } from "./withToggle";

function Favorite(props) {
  const spanStyle = {
    cursor: "pointer"
  };
  return (
    <div>
      <h5>Liked It?</h5>
      <span style={spanStyle} onClick={props.toggle}>
        {props.on ? "❤️" : "♡"}
      </span>
    </div>
  );
}
export default withToggle(Favorite, { onDefaultValue: false });
