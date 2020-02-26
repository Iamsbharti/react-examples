import React from "react";
import { withToggle } from "./withToggle";

function Favorite(props) {
  return (
    <div>
      <h5>Liked It?</h5>
      <span onClick={props.toggle}>{props.on ? "❤️" : "♡"}</span>
    </div>
  );
}
export default withToggle(Favorite, { onDefaultValue: false });
