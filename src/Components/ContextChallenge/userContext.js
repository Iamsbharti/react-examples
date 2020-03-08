import React, { Component } from "react";
const { Provider, Consumer } = React.createContext();

class UserContextProvider extends Component {
  state = {
    username: "bob42"
  };
  setUserName = newName => {
    this.setState({ username: newName });
  };
  render() {
    return (
      <Provider
        value={{ username: this.state.username, setUserName: this.setUserName }}
      >
        {this.props.children}
      </Provider>
    );
  }
}
export { UserContextProvider, Consumer as UserContextConsumer };
