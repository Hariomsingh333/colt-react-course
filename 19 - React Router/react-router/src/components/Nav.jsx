import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
export default class Nav extends PureComponent {
  render() {
    return (
      <div>
        <nav>
          <Link to="/">home</Link>
          <Link to="/about">about</Link>
          <Link to="/contact">contact</Link>
        </nav>
      </div>
    );
  }
}
