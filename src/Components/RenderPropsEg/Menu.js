import React from "react";
import Toggle from "./Toggle";

function Menu() {
  return (
    <Toggle
      defaultOnValue="true"
      render={toggleObj => {
        return (
          <div>
            <button onClick={toggleObj.toggle}>
              {toggleObj.on ? "Hide" : "Show"}Menu
            </button>
            <nav style={{ display: toggleObj.on ? "block" : "none" }}>
              <h4>User Logged in as Coder42!</h4>
              <p>
                <a href="/">My repositories</a>
              </p>
              <p>
                <a href="/">My Gist</a>
              </p>
              <p>
                <a href="/">Profile</a>
              </p>
              <p>
                <a href="/">Commits</a>
              </p>
              <p>
                <a href="/">Status</a>
              </p>
            </nav>
          </div>
        );
      }}
    />
  );
}

export default Menu;
