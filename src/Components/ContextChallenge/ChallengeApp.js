import React, { Component } from "react";
import { UserContextConsumer } from "./userContext";
import Header from "./Header";
import "./challengeStyle.css";

class ChallengeApp extends Component {
  render() {
    return (
      <div>
        <Header />
        <UserContextConsumer>
          {({ username, _ }) => <p>No new Notifications for {username}</p>}
        </UserContextConsumer>
      </div>
    );
  }
}
export default ChallengeApp;
