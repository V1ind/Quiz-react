import React, { Component } from "react";

export class TestComponent extends Component {
  constructor() {
    super();
    console.log("constructor");
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log("mounted");
    // this.intervalId = setInterval(() => console.log(Date.now()), 1000);
  }

  componentDidUpdate() {
    console.log("updated");
  }

  componentWillUnmount() {
    console.log("unmounted");
    // clearInterval(this.intervalId);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("should update check");
    return this.state.count !== nextState.count;
  }

  updateHandler = () =>
    this.setState({
      count: this.state.count + 1,
    });

  render() {
    console.log("rendered");
    return (
      <div>
        <h2>Test Component {this.state.count}</h2>
        <button onClick={this.updateHandler}>update</button>
      </div>
    );
  }
}
