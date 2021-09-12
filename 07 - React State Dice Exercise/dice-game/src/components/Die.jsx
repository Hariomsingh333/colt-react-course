import React, { Component } from "react";
import "./Die.css";
class Die extends Component {
  render() {
    return (
      <div className="Die">
        {/* <h1>Hello Die</h1> */}
        <i
          className={`fas fa-dice-${this.props.face} ${
            this.props.rolling ? "shaking" : ""
          }`}
        />
      </div>
    );
  }
}
export default Die;
