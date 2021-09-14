import React, { Component } from "react";
import { choice } from "./Helper";
import Coin from "./Coin";
import "./CoinContainer.css";
class CoinContainer extends Component {
  static defaultProps = {
    coins: [
      { side: "heads", imgUrl: "https://tinyurl.com/react-coin-heads-jpg" },
      {
        side: "tails",
        imgUrl:
          "https://upload.wikimedia.org/wikipedia/commons/8/88/1884_trade_dollar_rev.jpg",
      },
    ],
  };
  constructor(props) {
    super(props);
    this.state = {
      currCoin: null,
      nFlip: 0,
      nHead: 0,
      nTails: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  flipCoin() {
    let newCoin = choice(this.props.coins);
    this.setState((st) => {
      return {
        currCoin: newCoin,
        nFlip: st.nFlip + 1,
        nHead: st.nHead + (newCoin.side === "head" ? 1 : 0),
        nTails: st.nTails + (newCoin.side === "tails" ? 1 : 0),
      };
    });
  }
  handleClick() {
    this.flipCoin();
  }
  render() {
    return (
      <div className="CoinContainer">
        <h1>Let's Flip A Coin!</h1>
        <button onClick={this.handleClick} className="btn">
          Flip the coin
        </button>
        {this.state.currCoin === null ? (
          ""
        ) : (
          <Coin info={this.state.currCoin} />
        )}
        <p>
          Out of {this.state.nFlip},filps there have been {this.state.nHead}{" "}
          Head and {this.state.nTails} Tails
        </p>
      </div>
    );
  }
}
export default CoinContainer;
