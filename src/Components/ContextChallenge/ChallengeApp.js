import React, { Component } from "react";
import { UserContextConsumer } from "./userContext";
import Header from "./Header";
import "./challengeStyle.css";

class ChallengeApp extends Component {
  state = { username: "" };
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <main>
        <Header />
        <UserContextConsumer>
          {({ username, setUserName }) => (
            <>
              <p>No new Notifications for {username}</p>
              <input
                type="text"
                name="username"
                value={this.state.username}
                placeholder="New UserName"
                onChange={this.handleChange}
              />
              <button onClick={() => setUserName(this.state.username)}>
                Change UserName
              </button>
            </>
          )}
        </UserContextConsumer>
      </main>
    );
  }
}
export default ChallengeApp;
