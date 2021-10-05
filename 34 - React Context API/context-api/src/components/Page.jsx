import React, { Component } from "react";
import { MyContext } from "../context/PropsContext";
class Page extends Component {
  static contextType = MyContext;
  render() {
    console.log(this.context);
    const { call } = this.context;
    return (
      <div>
        <h1>Hello world</h1>
        <h3>{call}</h3>
      </div>
    );
  }
}
export default Page;
