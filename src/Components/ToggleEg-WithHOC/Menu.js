import React from "react";
import { withToggle } from "./withToggle";

function Menu(props) {
  return (
    <div>
      <button style={{ cursor: "pointer" }} onClick={props.toggle}>
        {props.on ? "Hide " : "Show "}Menu
      </button>
      <nav style={{ display: props.on ? "block" : "none" }}>
        <h6>User Logged in as Coder42</h6>
        <a href="/">My Repositories</a>
        <a href="/">My Gists</a>
        <a href="/">Profile</a>
        <a href="/">Commits</a>
      </nav>
    </div>
  );
}

export default withToggle(Menu, { onDefaultValue: true });
