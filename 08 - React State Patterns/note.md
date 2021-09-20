# Date: 13 / 9 / 2021

# Day: 9

# React State Patterns

## Goals

- learn how to update state based off of existing state
- Properly manage state updates for mutable data structures

# Updating Existing State

## Setting State Using State

if you we want to update the number or add the number using state

```js
import React, { Component } from "react";

class ScoreKeeper extends Component {
  constructor(props) {
    super(props);
    this.state = { num: 0 };
    this.addOne = this.addOne.bind(this);
  }
  addOne() {
    this.setState({ num: this.state.num + 1 });
  }
  render() {
    return (
      <div className="ScoreKeeper">
        <h1>i am ScoreKeeper</h1>
        <h3>Score: {this.state.num}</h3>
        <button onClick={this.addOne}>add one</button>
      </div>
    );
  }
}

export default ScoreKeeper;
```

- this will work, but this is not a good idea

### Callback from

if a call to setState() depends on current state, the safest thing is to use the alternate **"callback form"**

### setState callback from (syntax)

<code>this.setState(callback)</code>

<br>

instead of passing and object, pass it a callback with current state as a parameter.
**The callback should return and object representing the new state.**

```js
this.setState((curState) => ({ count: curState.count + 1 }));
```

```js
  addThree() {
    this.setState((st) => {
      return { num: st.num + 3 };
    });
  }
```

another way to do this is **Abstracting State**, this is nice way to do this

## Abstracting State updates

The fact that you can pass a function to <code>this.setState</code> lends itself nicely to a more advanced pattern called _functional setState_

```js
function incrementCounter(prevState) {
  return { count: prevState.count + 1 };
}

this.setState(incrementCounter);
```

```js
  incrementScore(curState) {
    return {
      num: curState.num + 3,
    };
  }
  addThree() {
    this.setState(this.incrementScore);
  }


```
