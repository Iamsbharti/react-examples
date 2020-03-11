import React, { Component } from "react";

const ThemeContext = React.createContext();

class ThemeContextProvider extends Component {
  state = {
    theme: "dark"
  };
  toggleTheme = () => {
    this.setState(prevTheme => {
      return {
        theme: prevTheme.theme === "dark" ? "light" : "dark"
      };
    });
  };
  render() {
    return (
      <ThemeContext.Provider
        value={{ theme: this.state.theme, toggleTheme: this.toggleTheme }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
export { ThemeContextProvider, ThemeContext };
