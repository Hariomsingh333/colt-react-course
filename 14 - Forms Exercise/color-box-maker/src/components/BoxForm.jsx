import React, { Component } from "react";
import uuid from "uuid/v4";
class BoxForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: "",
      width: "",
      color: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    const newBox = { ...this.state, id: uuid() };
    this.props.createBox(newBox);
    this.setState({
      height: "",
      width: "",
      color: "",
    });
  }
  render() {
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="width">width</label>
            <input
              type="text"
              name="width"
              value={this.state.width}
              onChange={this.handleChange}
              id="width"
            />
          </div>
          <div>
            <label htmlFor="height">height</label>
            <input
              type="text"
              name="height"
              value={this.state.height}
              onChange={this.handleChange}
              id="height"
            />
          </div>
          <div>
            <label htmlFor="color">color</label>
            <input
              type="text"
              name="color"
              id="color"
              value={this.state.color}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">Add new color box</button>
        </form>
      </div>
    );
  }
}
export default BoxForm;
