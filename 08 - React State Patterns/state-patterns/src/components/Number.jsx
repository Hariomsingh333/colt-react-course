import React, { Component } from "react";

class Number extends Component {
  constructor(props) {
    super(props);
    this.state = { num: 0 };
    this.addOne = this.addOne.bind(this);
  }
  add(cutState) {
    return {
      num: cutState.num + 1,
    };
  }
  addOne() {
    // this.setState({ num: this.state.num + 1 });

    // callback form
    // this.setState((st) => {
    //   return { num: st.num + 1 };
    // });

    // abstract
    this.setState(this.add);
  }
  render() {
    return (
      <div className="Number">
        <h1>Score: {this.state.num}</h1>
        <button onClick={this.addOne}>addOne</button>
      </div>
    );
  }
}
export default Number;
