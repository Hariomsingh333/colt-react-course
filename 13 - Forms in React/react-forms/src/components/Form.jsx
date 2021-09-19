import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { val: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      val: event.target.value,
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    alert(`you type ${this.state.val}`);
    this.setState({
      val: " ",
    });
  }
  render() {
    return (
      <div className="Form">
        <form action="" onSubmit={this.handleSubmit}>
          <label htmlFor="name">name</label>
          <input
            type="text"
            value={this.state.val}
            onChange={this.handleChange}
            name="name"
            id="name"
          />
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}
export default Form;
