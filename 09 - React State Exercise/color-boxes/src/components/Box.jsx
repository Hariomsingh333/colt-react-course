import React, { Component } from "react";
import "./Box.css";
import { choice } from "./Helper";
class Box extends Component {
  static defaultProps = {
    allColor: [
      "purple",
      "magenta",
      "lightgreen",
      "pink",
      "red",
      "tomato",
      "blue",
      "lightblue",
    ],
  };
  constructor(props) {
    super(props);
    this.state = {
      color: choice(this.props.allColor),
    };
    this.handleClick = this.handleClick.bind(this);
  }
  pickColor() {
    let newColor = choice(this.props.allColor);
    this.setState({ color: newColor });
  }
  handleClick() {
    console.log("hello world");
    this.pickColor();
  }
  render() {
    return (
      <div
        className="Box"
        style={{ backgroundColor: this.state.color }}
        onClick={this.handleClick}
      ></div>
    );
  }
}
export default Box;
