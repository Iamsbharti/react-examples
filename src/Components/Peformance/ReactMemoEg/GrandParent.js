import React from "react";
import Parent from "./Parent";

function GrandParent() {
  console.log("[👴🏼]   [ ]   [ ]   [ ] rendered");
  return (
    <div>
      <p>I am a grandparent component</p>
      <Parent />
      <Parent />
    </div>
  );
}

export default React.memo(GrandParent);
