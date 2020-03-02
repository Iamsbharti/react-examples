import React from "react";
import Child from "./Child";

function Parent() {
  console.log("[ ]   [👩🏼‍⚕️]   [ ]   [ ] rendered");
  return (
    <div>
      <p>I am parent component</p>
      <Child />
      <Child />
    </div>
  );
}
export default React.memo(Parent);
