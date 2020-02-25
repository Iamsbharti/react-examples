import React from "react";
import ReactDOM from "react-dom";

//import SetArrayEg from "../src/Components/SetArrayEg";
//import ChildrenApp from "../src/Components/Children/ChildrenApp";

import HocApp from "../src/Components/HOC/HocApp";

const rootElement = document.getElementById("root");
/*ReactDOM.render(<SetArrayEg />, rootElement);*/

/*Rendering the Children eg 
  ReactDOM.render(<ChildrenApp />, rootElement);
*/

/**
 * Render High Order components Eg.
 */
ReactDOM.render(<HocApp indexProps="The Answer to life is" />, rootElement);
