import React, { Component } from "react";
import "./style.css";
export default class Slot extends Component {
  render() {
    const { s1, s2, s3 } = this.props;
    const winner = s1 === s2 && s2 === s3;
    return (
      <div className="slot">
        <h1>{this.props.heading}</h1>
        <p>
          {s1} {s2} {s3}
        </p>
        <p>
          <b>{winner ? "You are a winner :) " : "loser !"}</b>
        </p>
      </div>
    );
  }
}
