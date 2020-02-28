import React, { Component } from "react";

class DataFetch extends Component {
  state = {
    loading: false,
    data: null
  };
  componentDidMount() {
    this.setState({ loading: true });
    fetch("https://swapi.co/api/people/1")
      .then(rensponse => rensponse.json())
      .then(data => this.setState({ data: data, loading: false }));
  }
  render() {
    return this.props.children({
      loading: this.state.loading,
      data: this.state.data
    });
  }
}

export default DataFetch;
