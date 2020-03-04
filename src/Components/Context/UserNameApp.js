import React, { Component } from "react";
import UserName from "./UserName";
import "./stylesContext.css";
import UserContext from "./userContext";

class UserNameApp extends Component {
  static contextType = UserContext;
  render() {
    const username = this.context;
    return (
      <div>
        <UserName />
        <main>
          <p className="main">No new notifications, {username}!</p>
        </main>
      </div>
    );
  }
}
export default UserNameApp;
