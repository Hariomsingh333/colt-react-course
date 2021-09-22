import React, { Component } from "react";
import "./Todo.css";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Edit: false,
      task: this.props.task,
    };
    this.handleRemove = this.handleRemove.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }
  handleRemove() {
    this.props.remove(this.props.id);
  }
  toggleForm() {
    this.setState({
      Edit: !this.state.Edit,
    });
  }
  handleUpdate(event) {
    event.preventDefault();
    this.props.update(this.props.id, this.state.task);
    this.setState({ Edit: false });
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  render() {
    let result;
    if (this.state.Edit) {
      result = (
        <div>
          <form onSubmit={this.handleUpdate}>
            <input
              type="text"
              value={this.state.task}
              onChange={this.handleChange}
              name="task"
              id="editText"
              autoComplete="off"
            />
            <button>save</button>
          </form>
        </div>
      );
    } else {
      result = (
        <div>
          <li className={this.props.completed ? "completed" : ""}>
            {this.props.task}
          </li>
          <button onClick={this.toggleForm} className="edit-btn">
            edit
          </button>
          <button onClick={this.handleRemove} className="delete-btn">
            delete
          </button>
        </div>
      );
    }
    return result;
  }
}
export default Todo;
