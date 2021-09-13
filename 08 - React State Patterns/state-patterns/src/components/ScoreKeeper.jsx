import React, { Component } from "react";

class ScoreKeeper extends Component {
  constructor(props) {
    super(props);
    this.state = { num: 0 };
    this.addOne = this.addOne.bind(this);
    this.addThree = this.addThree.bind(this);
  }
  addOne() {
    this.setState({ num: this.state.num + 1 });
  }
  // addThree() {
  //   this.setState((st) => {
  //     return { num: st.num + 3 };
  //   });
  // }
  incrementScore(curState) {
    return {
      num: curState.num + 3,
    };
  }
  addThree() {
    this.setState(this.incrementScore);
  }
  render() {
    return (
      <div className="ScoreKeeper">
        <h1>i am ScoreKeeper</h1>
        <h3>Score: {this.state.num}</h3>
        <button onClick={this.addOne}>add one</button>
        <button onClick={this.addThree}>add three</button>
      </div>
    );
  }
}

export default ScoreKeeper;
