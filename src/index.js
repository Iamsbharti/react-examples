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
//import UserNameApp from "../src/Components/Context/UserNameApp";
//import UserContext from "../src/Components/Context/userContext";
//import FuContextApp from "../src/Components/FunctionalContext/FuContextApp";
//import UserContext from "../src/Components/FunctionalContext/userContext";
//import FunThemeApp from "../src/Components/FunctionThemeContext/FunThemeApp";
//import ThemeContext from "../src/Components/FunctionThemeContext/themeContext";
//import ToggleIndex from "../src/Components/ToggleTheme/TogggleIndex";
//import ChallengeIndex from "../src/Components/ContextChallenge/ChallengeIndex";
//import UseStateHooksApp from "../src/Components/ReactHooks/UseStateHooksApp";
//import UseEffectHooksApp from "./Components/ReactHooks/UseEffectHooksApp";
//import Timer from "./Components/ReactHooks/Timer";
import ReactRefApp from "./Components/ReactRef/ReactRefApp";
const rootElement = document.getElementById("root");
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

  ---Functional Context Render
  ReactDOM.render(
  <ThemeContext.Provider value={"light"}>
    <FunThemeApp />
  </ThemeContext.Provider>,
  rootElement

  ReactDOM.render(<ToggleIndex />, rootElement);
  ReactDOM.render(<ChallengeIndex />, rootElement);
);
);
 */
/**
 * Hooks
 * ReactDOM.render(<UseStateHooksApp />, rootElement);
 * ReactDOM.render(<UseEffectHooksApp />, rootElement);
 * ReactDOM.render(<Timer />, rootElement);
 */
ReactDOM.render(<ReactRefApp />, rootElement);
