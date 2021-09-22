import React, { Component } from "react";

import Todo from "./Todo";
import TodoForm from "./TodoForm";
import "./TodoList.css";
// import Footer from "./Footer";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: [],
    };
    this.create = this.create.bind(this);
    this.remove = this.remove.bind(this);
    this.update = this.update.bind(this);
  }
  create(newTodo) {
    this.setState({
      todo: [...this.state.todo, newTodo],
    });
  }
  remove(id) {
    this.setState({
      todo: this.state.todo.filter((t) => t.id !== id),
    });
  }
  update(id, updatedTask) {
    let updatedTodos = this.state.todo.map((todo) => {
      if (todo.id === id) {
        return { ...todo, task: updatedTask };
      }
      return todo;
    });
    this.setState({ todo: updatedTodos });
  }
  render() {
    const todos = this.state.todo.map((todo) => {
      return (
        <Todo
          task={todo.task}
          key={todo.id}
          id={todo.id}
          completed={todo.completed}
          remove={this.remove}
          update={this.update}
        />
      );
    });
    return (
      <div className="TodoList">
        <h1> Todo list</h1>
        {/* <Todo /> */}
        <TodoForm create={this.create} />
        {todos}
        {/* <Footer /> */}
      </div>
    );
  }
}
export default TodoList;
