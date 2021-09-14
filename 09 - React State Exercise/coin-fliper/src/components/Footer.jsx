import React, { Component } from "react";
import "./Footer.css";
class Footer extends Component {
  render() {
    return (
      <div className={Footer}>
        <footer>
          <p>
            made with 💛 by{" "}
            <a href="https://www.twitter.com/harixom" target="__blank">
              Hari om
            </a>
          </p>
        </footer>
      </div>
    );
  }
}
export default Footer;
