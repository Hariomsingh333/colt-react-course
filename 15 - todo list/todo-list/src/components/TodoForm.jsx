import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "./TodoForm.css";
class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { task: "" };
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
    this.props.create({ ...this.state, id: uuidv4(), completed: false });
    this.setState({
      task: "",
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="todo">Add New Todo: </label>
        <input
          type="text"
          value={this.state.task}
          onChange={this.handleChange}
          name="task"
          id="todo"
          placeholder="New Todo"
        />
        <button>Add Todo</button>
      </form>
    );
  }
}

export default TodoForm;
