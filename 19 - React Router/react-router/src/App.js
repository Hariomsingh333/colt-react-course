import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Nav from "./components/Nav";
import { Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route component={Home} path="/" exact />
        <Route exact path="/About">
          <About />
        </Route>
        <Route exact path="/Contact">
          <Contact />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
