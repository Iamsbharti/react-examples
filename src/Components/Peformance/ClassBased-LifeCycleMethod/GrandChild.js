import React, { Component } from "react";
class GrandChild extends Component {
  render() {
    console.log("[ ]   [ ]   [ ]   [👶🏻] rendered");
    return <p>I am GrandChild</p>;
  }
}
export default GrandChild;
