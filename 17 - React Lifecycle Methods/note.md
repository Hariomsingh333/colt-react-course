# Date: 23 / 9 / 2021

# Day: 19

# Intro to React Lifecycle Methods

React Lifecycle method is build in react method called lifecycle method we use them all the time.

## React Component Lifecycle

Every component comes with methods that allow developers to update application state and reflect the changes to the UI before

- there are three mai phases to know about.
  - mounting
  - updating
  - unmounting

## How it's work

every time react run, first run <code>constructor</code> --> then ---> <code>render</code> --> then --> <code>componentDidMount</code>(a life cycle method)

### componentDidMount()

- this method runs after the component is mounted
- "mounting" is the first time the component is rendered to DOM.
- This is a good place to load any data via AJAX/API.
- Calling **setState()** here it's a good place and it will trigger re-render.

```js
import React, { Component } from "react";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(),
    };
    console.log("i am constructor");
  }
  componentDidMount() {
    console.log("i am componentdidmount");
    const timeout = setInterval(() => {
      this.setState({
        time: new Date(),
      });
    }, 1000);
  }
  render() {
    return (
      <div>
        <h1>{this.state.time.getSeconds()}</h1>
        {console.log("i am render")}
      </div>
    );
  }
}
export default Timer;
```

### Api Example

- make a random quotes generator
- make a loader

```js
import React, { Component } from "react";
import axios from "axios";
import "./Quotes.css";
class Quotes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      loader: true,
    };
  }
  componentDidMount() {
    const url = "https://type.fit/api/quotes";
    const random = Math.floor(Math.random() * 1000);
    axios.get(url).then((res) => {
      setInterval(() => {
        this.setState({ quote: res.data[random].text, loader: false });
      }, 3000);
    });
  }
  render() {
    return (
      <div>
        <h1>Random Quote</h1>
        <h3>always remember...</h3>
        {this.state.loader ? (
          <div className="loader"></div>
        ) : (
          <div className="">
            <p>{this.state.quote}</p>
          </div>
        )}
      </div>
    );
  }
}
export default Quotes;
```

## Async, await

- github user image and name

```js
import React, { Component } from "react";
import axios from "axios";
class GithubUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: "",
      name: "",
    };
  }
  async componentDidMount() {
    const url = `https://api.github.com/users/${this.props.name}`;
    let res = await axios.get(url);
    console.log(res);
    this.setState({
      img: res.data.avatar_url,
      name: res.data.name,
    });
  }
  render() {
    return (
      <div>
        <h3>name: {this.state.name}</h3>
        <img src={this.state.img} alt={this.state.name} />
      </div>
    );
  }
}
export default GithubUser;
```

## ComponentDidUpdate

### update

This a suitable place to implement any side effect operations.

- syncing up with localStorage
- auto saving

## componentWillUnmount()

when component is unmounted or destroyed, this will be called.
this is a place to do some clean up like:

- Invalidating timers
- Canceling network request
- Removing Event handlers directly put on DOM
- cleaning up subscriptions

```js
// example
componentWillUnmount(){
  componentDidMount(){
this.timer = setInterval(()=>{

},1000)
  }
  clearInterval(this.timer)
}
```
