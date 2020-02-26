import React, { Component } from "react";

class Toggle extends Component {
  state = {
    on: this.props.defaultOnValue
  };
  toggle = () => {
    this.setState(prevState => {
      return {
        on: !prevState.on
      };
    });
  };
  render() {
    const Component = this.props.component;
    return (
      <Component on={this.state.on} toggle={this.toggle} {...this.props} />
    );
  }
}
export function withToggle(component, value) {
  return function(props) {
    return (
      <Toggle
        component={component}
        defaultOnValue={value.defaultOnValue}
        {...props}
      />
    );
  };
}
