import React, { useState } from "react";
import "../styles.css";

export default function SetArrayEg() {
  const [arr, setarr] = useState(["a", "b", "c"]);
  const handleClick = () => {
    setarr([...arr, "z"]);
  };
  return (
    <div>
      <h1>{arr}</h1>
      <button onClick={handleClick}>+</button>
    </div>
  );
}
