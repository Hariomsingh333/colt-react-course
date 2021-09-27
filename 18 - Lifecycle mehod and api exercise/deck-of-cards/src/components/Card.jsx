import React, { Component } from "react";
import "./Card.css";
export class Card extends Component {
  constructor(props) {
    super(props);
    //   transform: translate(10px, 100px) rotate(50deg);
    let angle = Math.random() * 90 - 45;
    let xpos = Math.random() * 40 - 20;
    let ypos = Math.random() * 40 - 20;
    this._transform = `translate(${xpos}px, ${ypos}px) rotate(${angle}deg)`;
  }
  render() {
    return (
      <img
        style={{ transform: this._transform }}
        className="Card"
        src={this.props.img}
        alt={this.props.name}
      />
    );
  }
}

export default Card;
