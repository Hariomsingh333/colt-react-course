import React, { Component } from "react";

class Form extends Component {
  handleClick() {
    alert("you click me");
  }
  render() {
    return (
      <div className="Form">
        <button onClick={this.handleClick}>click me</button>
      </div>
    );
  }
}
export default Form;
