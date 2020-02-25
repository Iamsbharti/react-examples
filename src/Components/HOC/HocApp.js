import React from "react";
import { withFavNo } from "./withFavNo";

function HocApp(props) {
  const style = {
    color: "blue",
    fontFamily: "chiller",
    marginLeft: "30px"
  };
  return (
    <div style={style}>
      <h1 style={{ color: "green", fontFamily: "consolas" }}>
        High Order Components.
      </h1>
      <h1>{props.indexProps}</h1>
      <h2>{props.favNo}</h2>
    </div>
  );
}
export default withFavNo(HocApp);
