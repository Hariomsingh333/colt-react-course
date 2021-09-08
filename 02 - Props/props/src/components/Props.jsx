import React, { Component } from "react";

export default class Props extends Component {
  render() {
    // console.log(this.props);
    return (
      <div>
        <h1>Bio data</h1>
        <p>Name: {this.props.name}</p>
        <p>age: {this.props.age}</p>
        <p>Funny: {this.props.isFunny}</p>
        <p>job: {this.props.job}</p>
        <p>
          hobbies:
          <ul>
            {this.props.hobbies.map((h) => (
              <li>{h}</li>
            ))}
          </ul>
        </p>
      </div>
    );
  }
}
