import React, { Component } from "react";
import axios from "axios";
import "./Quotes.css";
class Quotes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      loader: true,
    };
  }
  componentDidMount() {
    const url = "https://type.fit/api/quotes";
    const random = Math.floor(Math.random() * 1000);
    axios.get(url).then((res) => {
      setInterval(() => {
        this.setState({ quote: res.data[random].text, loader: false });
      }, 3000);
    });
  }
  render() {
    return (
      <div>
        <h1>Random Quote</h1>
        <h3>always remember...</h3>
        {this.state.loader ? (
          <div className="loader"></div>
        ) : (
          <div className="">
            <p>{this.state.quote}</p>
          </div>
        )}
      </div>
    );
  }
}
export default Quotes;
