import React from "react";
import ReactDOM from "react-dom";

//import SetArrayEg from "../src/Components/SetArrayEg";
//import ChildrenApp from "../src/Components/Children/ChildrenApp";
//import HocApp from "../src/Components/HOC/HocApp";
//import ToggleNoHocApp from "../src/Components/ToggleEg-NonHOC/ToggleNoHocApp";
//import ToggleHOCApp from "../src/Components/ToggleEg-WithHOC/ToggleHOCApp";
//import RenderPropsApp from "../src/Components/RenderPropsEg/RenderPropsApp";
//import RenderPropChallangeApp from "../src/Components/RenderPropsChallenge/RenderPropChallengeApp";
//import PropChallange from "../src/Components/RenderPropsChallenge/PropChallenge";
//import PerformanceApp from "../src/Components/Peformance/ClassBased-LifeCycleMethod/PerformanceApp";
//import PureComponentApp from "../src/Components/Peformance/PureComponent/PureComponentApp";
//import ReactMemoApp from "../src/Components/Peformance/ReactMemoEg/ReactMemoApp";
//import ContextApp from "../src/Components/Context/ContextApp";
//import ThemeContext from "../src/Components/Context/themeContext";
import UserNameApp from "../src/Components/Context/UserNameApp";
import UserContext from "../src/Components/Context/userContext";
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
/**
 * Render Toggle HOC Eg.
 * ReactDOM.render(<ToggleHOCApp />, rootElement);
 */
/**
 * Render RenderProps EG for toggle
 * ReactDOM.render(<RenderPropsApp />, rootElement);
 */
/**
 * Render RenderPropChallangeApp App.
 * ReactDOM.render(
  <RenderPropChallangeApp title={"RenerProps using children"} />,
  rootElement
);
 */

//--->Functional components ReactDOM.render(<PropChallange />, rootElement);
/**
 * Rendering Perfomance optimization examples
 * ReactDOM.render(<PerformanceApp />, rootElement);
 * ReactDOM.render(<PureComponentApp />, rootElement);
 * ReactDOM.render(<ReactMemoApp />, rootElement);
 */
/**
 * Context Eg.
 * ReactDOM.render(
  <ThemeContext.Provider value={"dark"}>
    <ContextApp />
  </ThemeContext.Provider>,
  rootElement
);
 */

ReactDOM.render(
  <UserContext.Provider value={"Saurabh"}>
    <UserNameApp />
  </UserContext.Provider>,
  rootElement
);
