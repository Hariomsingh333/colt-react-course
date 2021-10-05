import React, { Component, createContext } from "react";

export const MyContext = createContext();

class PropsContext extends Component {
  constructor(props) {
    super(props);
    this.state = {
      call: "hello",
    };
  }
  render() {
    return (
      <MyContext.Provider value={{ ...this.state }}>
        <div>{this.props.children}</div>
      </MyContext.Provider>
    );
  }
}
export default PropsContext;
