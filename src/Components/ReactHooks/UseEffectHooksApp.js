import React, { useState, useEffect } from "react";
import randomcolor from "randomcolor";
function UseEffectHooksApp() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("");

  function increment() {
    setCount(prevCount => prevCount + 1);
  }
  function decrement() {
    setCount(prevCount => prevCount - 1);
  }
  function reset() {
    setCount(prevCount => 0);
  }

  useEffect(() => {
    setColor(randomcolor());
  }, [count]);

  return (
    <div style={{ color: color }}>
      <h2>{count}</h2>
      <button onClick={increment}>Increment</button>
      <hr />
      <button onClick={decrement}>Decrement</button>
      <hr />
      <button onClick={reset}>Reset</button>
    </div>
  );
}
export default UseEffectHooksApp;
