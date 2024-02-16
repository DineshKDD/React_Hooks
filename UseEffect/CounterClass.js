import React, { Component } from "react";

export class CounterClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      name: "",
    };
  }

  componentDidMount() {
    document.title = this.state.count;
  }

  componentDidUpdate(prevProsps, prevState) {
    if (prevState.count === this.state.count) {
    }
    document.title = this.state.count;
    console.log("Updating ", prevState.count, " ", this.state.count);
  }

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={(e) => {
            this.setState({ name: e.target.value });
          }}
        ></input>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click {this.state.count}
        </button>
      </div>
    );
  }
}

export default CounterClass;
