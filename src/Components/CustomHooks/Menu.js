import React from "react";
import useToggler from "./useToggler";

function Menu() {
  const [show, toggle] = useToggler(true);
  return (
    <div>
      <button onClick={toggle}>{show ? "Hide" : "Show"}Menu</button>
      <nav style={{ display: show ? "block" : "none" }}>
        <h5>User logged in as code42</h5>
        <a href="/">Your Repositories</a>
        <br />
        <a href="/">Your Commits</a>
        <br />
        <a href="/">Your Issues</a>
        <br />
        <a href="/">Your Account</a>
        <br />
      </nav>
    </div>
  );
}
export default Menu;
