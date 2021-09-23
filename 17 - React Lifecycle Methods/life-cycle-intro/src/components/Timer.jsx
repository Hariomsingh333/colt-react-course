import React, { Component } from "react";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(),
    };
    console.log("i am constructor");
  }
  componentDidMount() {
    console.log("i am componentdidmount");
    const timeout = setInterval(() => {
      this.setState({
        time: new Date(),
      });
    }, 1000);
  }
  render() {
    return (
      <div>
        <h1>{this.state.time.getSeconds()}</h1>
        {console.log("i am render")}
      </div>
    );
  }
}
export default Timer;
