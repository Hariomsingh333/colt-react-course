import React, { Component } from "react";
import Box from "./Box";
import "./BoxContainer.css";
class BoxContainer extends Component {
  static defaultProps = {
    maxNum: 18,
  };
  render() {
    const boxes = Array.from({ length: this.props.maxNum }).map(() => <Box />);
    return (
      <div className="">
        <h1>Color Boxes</h1>
        <h3>Click each Box and see Magic 🙌</h3>
        <div className="BoxContainer">{boxes}</div>
      </div>
    );
  }
}
export default BoxContainer;
