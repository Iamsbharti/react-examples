import React, { PureComponent } from "react";
import Parent from "./Parent";

class GrandParent extends PureComponent {
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
