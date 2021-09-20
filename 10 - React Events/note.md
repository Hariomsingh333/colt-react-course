# Date: 17 / 9 / 2021

# Day: 13

# The world of react events

## Goals

- Attach event handlers to components in React
- Use method binding to preserve the _this_ contest with event handlers
- pass event handles down as props to child components
- understand teh _key_ props that React asks for when mapping over data

## React Events

You can attach event handlers to HTML element in React via special reserved attributes.
<br>

### Examples:

- **Mouse events:** <code>OnClick</code>, <code>onMouseOver</code>, etc.
- **Form events:** <code>onSubmit</code>, etc
- **keyboard events:** <code>onKeyDown</code>, <code>onKeyUP</code>, <code>onKeyPress</code>
- [go to page](https://reactjs.org/docs/events.html)

```js
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
```

## The Joys of Method Binding

there are three ways to fix this

1. Use _bind_ inline
2. Use an arrow function
3. Method bind in the constructor

### bind inline

```js
<div className="Binding">
  <button onClick={this.handleClick.bind(this)}>msg</button>
</div>
```

i am not suggest that way to bind function to this, because every time render runs then every time bind create a new function.

### bind in the constructor

best way to bind thing in the constructor.

```js
  constructor(props){
      super(props);
      this.handleClick = this.handleClick.bind(this)
  }

```

## React Keys

you face the error

**Warning: Each child in an array or iterator should have a unique "key" prop**

- When mapping over data and returning components, you get a warning about keys for list items

- **Key** is a special string attr to include when creating list fo element

```js
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
```
