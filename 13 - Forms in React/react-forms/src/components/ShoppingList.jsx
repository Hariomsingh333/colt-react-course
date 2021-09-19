import React, { Component } from "react";
import ShoppingListForm from "./ShoppingListForm";
import uuid from "uuid/v4";
class ShoppingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { name: "milk", qty: 2, id: uuid() },
        { name: "bread", qty: 4, id: uuid() },
      ],
    };
    this.addItem = this.addItem.bind(this);
  }
  addItem(item) {
    let NewItems = { ...item, id: uuid() };
    this.setState((state) => ({
      items: [...state.items, NewItems],
    }));
  }

  renderItems() {
    return (
      <ul>
        {this.state.items.map((item) => (
          <li>
            {item.name}: {item.qty}
          </li>
        ))}
      </ul>
    );
  }
  render() {
    return (
      <div>
        <h1>Shopping list</h1>
        {this.renderItems()}
        <ShoppingListForm addItem={this.addItem} />
      </div>
    );
  }
}

export default ShoppingList;
