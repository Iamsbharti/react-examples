import React from "react";
import ReactDOM from "react-dom";

//import SetArrayEg from "../src/Components/SetArrayEg";
//import ChildrenApp from "../src/Components/Children/ChildrenApp";
//import HocApp from "../src/Components/HOC/HocApp";
//import ToggleNoHocApp from "../src/Components/ToggleEg-NonHOC/ToggleNoHocApp";
import ToggleHOCApp from "../src/Components/ToggleEg-WithHOC/ToggleHOCApp";

const rootElement = document.getElementById("root");
/*ReactDOM.render(<SetArrayEg />, rootElement);*/

/*Rendering the Children eg 
  ReactDOM.render(<ChildrenApp />, rootElement);
*/

/**
 * Render High Order components Eg.
 * ReactDOM.render(<HocApp indexProps="The Answer to life is" />, rootElement);
 */

/**
 * Render NONHoc Toggle Eg.
 * ReactDOM.render(<ToggleNoHocApp />, rootElement);
 */
ReactDOM.render(<ToggleHOCApp />, rootElement);
