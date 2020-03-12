import { useState } from "react";

function useCount() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(prevCount => prevCount + 1);
  }

  return { count, increment };
}
export default useCount;
