import React, { Component } from "react";
import UserContext from "./userContext";

class UserName extends Component {
  static contextType = UserContext;
  render() {
    const username = this.context;
    return (
      <header>
        <p>Welcome, {username}!</p>
      </header>
    );
  }
}
export default UserName;
