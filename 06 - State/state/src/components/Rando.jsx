import React, { Component } from "react";

class Rando extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
    };
    this.makeTimer();
  }
  makeTimer() {
    setInterval(() => {
      // statement
      let randomNum = Math.floor(Math.random() * this.props.num);
      this.setState({ num: randomNum });
    }, 1000);
  }
  render() {
    return (
      <div>
        <h1>timer using state</h1>
        <h3>{this.state.num}</h3>
      </div>
    );
  }
}
export default Rando;
