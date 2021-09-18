import React, { Component } from "react";

class Key extends Component {
  static defaultProps = {
    num: [1, 2, 3, 4, 5, 6],
  };
  render() {
    let num = this.props.num.map((n) => <li key={n.toString()}>{n}</li>);
    return (
      <div className="Key">
        <h1>hello world form key</h1>
        <ul>{num}</ul>
      </div>
    );
  }
}
export default Key;
