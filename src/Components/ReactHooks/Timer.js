import React, { useState, useEffect } from "react";
import randomcolor from "randomcolor";

function Timer() {
  const [time, setTime] = useState(new Date());
  const [count, SetCount] = useState(0);
  const [color, setColor] = useState();

  //Update timer
  useEffect(() => {
    const intervalId = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(intervalId);
  }, []);

  //update color and count
  useEffect(() => {
    setColor(randomcolor());
    SetCount(prevCount => prevCount + 1);
  }, [time]);

  return (
    <div style={{ color: color }}>
      <h1>{time.toLocaleTimeString()}</h1>
      <h2>Seconds Elapsed from last Refresh--{count}</h2>
    </div>
  );
}

export default Timer;
