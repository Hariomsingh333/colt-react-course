# Date: 27 / 9 / 2021

# Day: 23

# React Router

## React Router - Part 1

### Goals

- Describe what client-side routing is and why it's useful
- Compare client-side routing to server-side routing
- implement basic client-side routing with React Router

## Routing

in react we have two type of routing

- client-side routing
- server-side routing

### server-side routing

- Traditional routing is "Server-side routing"
  - clicking a **anchor tag** link causes browser to request a new page & replace entire DOM
- Server decides what HTML to return based on URL requested, entire page refreshes

### Client-side Routing

- client-side routing handles mapping between URL bar and the content a user
  - sees via browser rather than via server.
- sites that exclusively use client-side routing are **single-page applications.**
- we use javascript to manipulate the URL bar with a web api called history

we use react-router

you can use what every you want

react-router is not office routing option there are tens of option

### react-router

install

```js
npm i react-router
```

fist go to index.js and cover the app file using react-router

```js
// index.js
import { BrowserRouter } from "react-router-dom";
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
```

in index.js we need cover the app component using the react-router-dom <code>BrowserRouter</code>

then we need define the route

### Route

- first we need to import Route from "react-router-dom"
- then define path

```js
// app.js
import { Route } from "react-router-dom";

      <Route path="/About">
        <About />
      </Route>
      <Route path="/Contact">
        <Contact />
      </Route>
```

### switch and exact

then we cover all the component using switch

- first we import switch from react-router-dom
- then cover all thing in under teh switch
- we need to define a attribute called exact
- switch mean only one of them component is true and only one component will show in our DOM

```js
// app.js

import { Route, Switch } from "react-router-dom";

<Switch>
  <Route component={Home} path="/" exact />
  <Route exact path="/About">
    <About />
  </Route>
  <Route exact path="/Contact">
    <Contact />
  </Route>
</Switch>;
```

## Link Component

- the **Link** component acts as a replacement for anchor tag.
- instead of an href attribute , **Link** use a _to_ prop
- Clicking on **Link** does not issue a GET request.

```js
//Nav.jsx
import { Link } from "react-router-dom";
<nav>
  <Link to="/">home</Link>
  <Link to="/about">about</Link>
  <Link to="/contact">contact</Link>
</nav>;
```
