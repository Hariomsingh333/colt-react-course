# Date: 10 / 9 / 2021

# Day:

# React State

### State

- data that changes over times!

### what is State

in React, state is and instance attribute on a component.
<br>
it's always an object, since you'll want to keep track of several keys/values

### initial State

State should be initialized as soon as the component is created.
<br>

So we set it in the **constructor** function

```js
    constructor(props){
```

### React Constructor

if you are building a component with state, you need a standard React constructor

- constructor takes one argument props
- You must call **super(props)** at start of constructor, which "registers" your class as a React Component.
- inside the instance methods, you can refer to **this.state** just like you did **this.props**

```js
import React, { Component } from "react";

class State extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      gameOver: false,
    };
  }
  render() {
    return (
      <div>
        <h1>Hello world</h1>
        <h3>Your state is: {this.state.score}</h3>
      </div>
    );
  }
}
export default State;
```

### another way to define state

i know upper state syntax is ugly and kind of annoying, but we have an alternative way to define state in react

- it's not actually part of javascript, it's experimental.
- you have to use babel in order to use it.
- is not good for learning
- for learning we use the upper state syntax

```js
import React, { Component } from "react";

class State extends Component {
    state = {
      score: 0,
      gameOver: false,
    };
  }
  render() {
    return (
      <div>
        <h1>Hello world</h1>
        <h3>Your state is: {this.state.score}</h3>
      </div>
    );
  }
}
export default State;
```

## Changing State

you thing how to change and update the state. then we a method called setState() to update the state.
<br>

**this.setState()** is built-in react method of changing a component's state.

- don't call this.setState in under the constructor.
- Takes an object describing the state changes
- Patches state object - keys that you didn't specify don't change

```js
import React, { Component } from "react";

class Rando extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
    };
    this.makeTimer();
  }
  makeTimer() {
    setInterval(() => {
      // statement
      let randomNum = Math.floor(Math.random() * this.props.num);
      this.setState({ num: randomNum });
    }, 1000);
  }
  render() {
    return (
      <div>
        <h1>timer using state</h1>
        <h3>{this.state.num}</h3>
      </div>
    );
  }
}
export default Rando;
```

## React Events

State most commonly changes in direct response to some event.

- in React, every JSX element has built-in attribute representing every kind of browser event.
- they are came-cased, like onClick, and take callback function as event listeners.

```js
<button onClick={function (e){
    alert("you clicked me");
}}>
```

## bind

when we work with event and state we need to bind them

```js
import React, { Component } from "react";

class State extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      gameOver: false,
    };
    this.add = this.add.bind(this);
    this.min = this.min.bind(this);
  }
  add(e) {
    this.setState({ score: 100 });
  }
  min() {
    this.setState({ score: 0 });
  }
  render() {
    return (
      <div>
        <h3>Your state is: {this.state.score}</h3>
        <button onClick={this.add}>add</button>
        <button onClick={this.min}>min</button>
      </div>
    );
  }
}
export default State;
```

- but we have a alternative - _just use arrow function_

  <b>when we use <i>arrow function</i> to defined event function we no need to bind them.</b>

```js
import React, { Component } from "react";

class State extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      gameOver: false,
    };
    // this.add = this.add.bind(this);
    // this.min = this.min.bind(this);
  }
  add = (e) => {
    this.setState({ score: 100 });
  };
  min = (e) => {
    this.setState({ score: 0 });
  };
  render() {
    return (
      <div>
        <h3>Your state is: {this.state.score}</h3>
        <button onClick={this.add}>add</button>
        <button onClick={this.min}>min</button>
      </div>
    );
  }
}
export default State;
```
