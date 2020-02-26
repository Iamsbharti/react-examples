import React, { Component } from "react";

class Favorite extends Component {
  constructor() {
    super();
    this.toggleLike = this.toggleLike.bind(this);
  }
  state = {
    like: false
  };
  toggleLike() {
    this.setState(prevState => {
      return {
        like: !prevState.like
      };
    });
  }
  render() {
    return (
      <div>
        <h5>Liked It?</h5>
        <span onClick={this.toggleLike}>{this.state.like ? "❤️" : "♡"}</span>
      </div>
    );
  }
}
export default Favorite;
