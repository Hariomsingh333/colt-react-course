import React, { Component } from "react";
import axios from "axios";
import Card from "./Card";
import "./Deck.css";
const api = "https://deckofcardsapi.com/api/deck/new/shuffle/";

class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deck: null,
      drawn: [],
    };
    this.getCard = this.getCard.bind(this);
  }
  async componentDidMount() {
    let deck = await axios.get(api);
    this.setState({
      deck: deck.data,
    });
  }
  async getCard() {
    // make a new req using the new url api
    // https://deckofcardsapi.com/api/deck/${deck_id}/draw/
    try {
      let cardApi = await axios.get(
        `https://deckofcardsapi.com/api/deck/${this.state.deck.deck_id}/draw/`
      );
      //   console.log(cardApi.data);
      if (cardApi.data.remaining === 0) {
        throw new Error("No card remaining!");
      }
      let card = cardApi.data.cards[0];
      this.setState((st) => ({
        drawn: [
          ...st.drawn,
          {
            code: card.code,
            img: card.image,
            name: `${card.value} of ${card.suit}`,
          },
        ],
      }));
    } catch (err) {
      alert(err);
    }
  }

  render() {
    const cards = this.state.drawn.map((c) => (
      <Card key={c.code} img={c.img} name={c.name} />
    ));
    return (
      <div>
        <button onClick={this.getCard}>Get new card</button>
        <div className="Deck-cardarea">{cards}</div>
      </div>
    );
  }
}
export default Deck;
