import React, { Component } from "react";

export default class Messages extends Component {
  render() {
    const msgs = [
      {
        text: "Just watching Netflix",
      },
      {
        text: "goodby",
      },
    ];
    return (
      <div>
        <h1>Looping</h1>
        <ul>
          {msgs.map((m) => (
            <li>{m.text}</li>
          ))}
        </ul>
      </div>
    );
  }
}
