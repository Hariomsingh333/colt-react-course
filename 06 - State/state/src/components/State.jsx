import React, { Component } from "react";

class State extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      gameOver: false,
    };
    this.add = this.add.bind(this);
    this.min = this.min.bind(this);
  }
  add(e) {
    this.setState({ score: 100 });
  }
  min() {
    this.setState({ score: 0 });
  }
  render() {
    return (
      <div>
        <h3>Your state is: {this.state.score}</h3>
        <button onClick={this.add}>add</button>
        <button onClick={this.min}>min</button>
      </div>
    );
  }
}
export default State;
