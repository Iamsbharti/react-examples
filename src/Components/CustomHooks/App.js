import React from "react";
import useCount from "./useCount";

function App() {
  const { count, increment } = useCount();
  return (
    <div>
      <h2>The Count is {count}</h2>
      <button onClick={increment}>Add 1</button>
    </div>
  );
}
export default App;
