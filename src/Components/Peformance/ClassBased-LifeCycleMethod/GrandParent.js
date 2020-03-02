import React, { Component } from "react";
import Parent from "./Parent";

class GrandParent extends Component {
  shouldComponentUpdate(nextProp, nextState) {
    //console.log("update:" + nextProp.count + "::" + this.props.count);
    if (nextProp.count === this.props.count) {
      return false;
    }
    return true;
  }
  render() {
    console.log("[👴🏼]   [ ]   [ ]   [ ] rendered");
    return (
      <div>
        <p>I am a grandparent component</p>
        <Parent />
        <Parent />
      </div>
    );
  }
}
export default GrandParent;
