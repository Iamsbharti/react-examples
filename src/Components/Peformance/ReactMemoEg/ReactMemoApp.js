import React, { Component } from "react";
import GrandParent from "./GrandParent";

class ReactMemoApp extends Component {
  state = {
    count: 0
  };
  increment = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  };
  render() {
    console.log("[GP] [P] [C] [GC] APP just rendered");
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.increment}>+1</button>
        <p>I am app Component</p>
        <GrandParent count={this.state.count} />
        <GrandParent />
      </div>
    );
  }
}

export default ReactMemoApp;
