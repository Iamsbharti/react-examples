import React from "react";
export default React.memo(function GrandChild() {
  console.log("[ ]   [ ]   [ ]   [👶🏻] rendered");
  return (
    <div>
      <p>I am grandchild component</p>
    </div>
  );
});
