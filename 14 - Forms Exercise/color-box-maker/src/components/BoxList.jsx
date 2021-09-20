import React, { Component } from "react";
import Box from "./Box";
import BoxForm from "./BoxForm";
class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = { boxes: [] };
    this.create = this.create.bind(this);
  }
  create(newBox) {
    this.setState({
      boxes: [...this.state.boxes, newBox],
    });
  }
  render() {
    const AllBox = this.state.boxes.map((box) => (
      <Box
        key={box.id}
        height={box.height}
        width={box.width}
        color={box.color}
      />
    ));
    return (
      <div>
        <h1>Color Box maker thingy</h1>
        <BoxForm createBox={this.create} />
        {AllBox}
      </div>
    );
  }
}
export default BoxList;
