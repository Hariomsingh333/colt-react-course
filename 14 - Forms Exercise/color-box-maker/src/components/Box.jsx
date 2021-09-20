import React, { Component } from "react";

class Box extends Component {
  render() {
    return (
      <div className="">
        <div
          style={{
            height: `${this.props.height}rem`,
            width: `${this.props.width}rem`,
            backgroundColor: this.props.color,
          }}
        ></div>
      </div>
    );
  }
}
export default Box;
