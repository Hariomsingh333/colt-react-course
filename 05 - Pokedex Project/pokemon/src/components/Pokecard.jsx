import React, { Component } from "react";
import "./Pokecard.css";
const POKE_API =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
class Pokecard extends Component {
  render() {
    let imgSrc = `${POKE_API}${this.props.id}.png`;
    return (
      <div className="Pokecard">
        <h1 className="Pokecard-title">{this.props.name}</h1>
        <img src={imgSrc} alt="Pokemon img" />
        <div className="Pokecard-data">
          <span>Type: {this.props.type}</span>
        </div>
        <div className="Pokecard-data">
          <span>EXP: {this.props.exp}</span>
        </div>
      </div>
    );
  }
}
export default Pokecard;
