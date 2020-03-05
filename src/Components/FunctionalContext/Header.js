import React from "react";
import UserContext from "./userContext";

function Header() {
  return (
    <header>
      <UserContext.Consumer>
        {username => <h1>Welcome {username}!!</h1>}
      </UserContext.Consumer>
    </header>
  );
}
export default Header;
