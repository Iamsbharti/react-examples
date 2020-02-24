import React from "react";
import "./Appcss.css";

/*{props.children} helps in rendering contents for 
single component making it reusable*/

function Callout(props) {
  console.log(props);
  return <div className="callout">{props.children}</div>;
}
export default Callout;
