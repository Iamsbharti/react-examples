import React, { Component } from "react";

class Menu extends Component {
  constructor() {
    super();
    this.toggleShow = this.toggleShow.bind(this);
  }
  state = {
    show: false
  };
  toggleShow() {
    this.setState(prevState => {
      return {
        show: !prevState.show
      };
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.toggleShow}>
          {this.state.show ? "Hide" : "Show"}Menu
        </button>
        <nav style={{ display: this.state.show ? "block" : "none" }}>
          <h4>Logged in as Coder42</h4>
          <a href="/">Your Repositories</a>
          <a href="/">Your Gist</a>
          <a href="/">Your Profile</a>
          <a href="/">Your Commits</a>
        </nav>
      </div>
    );
  }
}
export default Menu;
