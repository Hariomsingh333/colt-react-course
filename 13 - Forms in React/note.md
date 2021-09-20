# Date: 19 / 8 / 2021

# Day: 15

# Forms in React

## Goals

- Build forms with React
- Understand what controlled components are

```js
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
        <form onSubmit={this.handleSubmit}>
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
```

## Writing Forms w/ multiple inputs

when we write multiple inputs in react so every time define onchange function over and over again, so using es6 method to select the name and change the value to simple and useful

```js
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

```

```js
import React, { Component } from "react";

class MultipleForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: " ",
      email: " ",
      password: " ",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  handleSubmit(event) {
    alert(`you type ${this.state.name}`);
  }
  render() {
    return (
      <div className="MultipleForm">
        <h1>Form</h1>
        <form action="" onSubmit={this.handleSubmit}>
          <label htmlFor="name">Your name: </label>
          <input
            type="text"
            name="name"
            id="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input
            type="email"
            placeholder="email"
            value={this.state.email}
            name="email"
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}
export default MultipleForm;
```

## need random key

when you need a random key id use the library called <code>UUID</code>

```js
npm i UUID
```

```js
import { v4 as uuidv4 } from "uuid";
```

```

```
