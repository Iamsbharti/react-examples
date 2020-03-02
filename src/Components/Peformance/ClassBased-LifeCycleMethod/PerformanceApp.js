/**This eg is to showcase the pain in performance when a state change occurs and
 * rerendering of components can be optimized.
 * A react component recursievely renders the component until all the components are rendered.
 */
import React, { Component } from "react";
import GrandParent from "./GrandParent";

class PerformanceApp extends Component {
  state = {
    count: 0
  };
  increment = () => {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      };
    });
  };
  render() {
    console.log("[GP] [P] [C] [GC] APP just rendered");
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.increment}>+1</button>
        <GrandParent />
        <GrandParent />
      </div>
    );
  }
}
export default PerformanceApp;
