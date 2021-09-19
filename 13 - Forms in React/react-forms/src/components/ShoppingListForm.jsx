import React, { Component } from "react";

class ShoppingListForm extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", qty: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.addItem(this.state);
    this.setState({
      name: "",
      qty: "",
    });
  }
  render() {
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}>
          <label htmlFor="name: ">name</label>
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
            id="name"
          />
          <label htmlFor="qty: ">qty</label>
          <input
            type="text"
            name="qty"
            id="qty"
            onChange={this.handleChange}
            value={this.state.qty}
          />
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}
export default ShoppingListForm;
