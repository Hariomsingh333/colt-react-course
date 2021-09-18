import React, { Component } from "react";

class Binding extends Component {
  static defaultProps = {
    msg: ["hello world", "hello react", "hello JavaScript"],
  };
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    const msg = this.props.msg;
    let random = Math.floor(Math.random() * msg.length);
    console.log(msg[random]);
  }
  render() {
    return (
      <div className="Binding">
        <button onClick={this.handleClick}>msg</button>
      </div>
    );
  }
}
export default Binding;
