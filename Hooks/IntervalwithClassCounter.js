import React, { Component } from "react";

export class IntervalwithClassCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }

  tick = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <h2>{this.state.count}</h2>
      </div>
    );
  }
}

export default IntervalwithClassCounter;
