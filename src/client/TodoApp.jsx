import React from "react";
import { hot } from "react-hot-loader";
import { Button } from "shards-react";
import ItemList from "./List";
import Form from "./components/Form";

var popups = require("popups");

class TodoApp extends React.Component {
  constructor() {
    super();

    this.state = {
      term: "",
      items: [],
      deletedItems: []
    };
    this.removeItem = this.removeItem.bind(this);
  }

  changeHandler(event) {
    console.log("change");
    event.preventDefault();
    this.setState({ term: event.target.value });
    console.log("change", event.target.value);
  }

  onSubmit(event) {
    event.preventDefault();
    if (this.state.term.length > 1 && this.state.term.length < 200) {
      let item = this.state.items;
      let term = this.state.term;
      item.push(term);

      this.setState({
        term: "",
        items: [...item]
      });
    } else {
      popups.alert({
        content:
          "Entries must be more than 1 character and less than 200 characters."
      });
    }
  }

  removeItem(index, item) {
    let deletedItems = this.state.deletedItems;
    deletedItems.push(item);
    let selectedItem = this.state.items.filter(element => element !== item);
    this.setState({ items: selectedItem, deletedItems: deletedItems });

    console.log(selectedItem);
    console.log(deletedItems);
  }

  render() {
    console.log("rendering");
    return (
      <div className="container">
        <input
          onChange={event => {
            this.changeHandler(event);
          }}
          value={this.state.term.toUpperCase()}
          minLength="2"
          maxLength="200"
        />
        <div
          className="btn-toolbar"
          role="toolbar"
          aria-label="Toolbar with button groups"
        >
          <div className="btn-group mr-2" role="group" aria-label="First group">
            <Button
              theme="success"
              onClick={event => {
                this.onSubmit(event);
              }}
            >
              Submit
            </Button>
          </div>
        </div>
        <ItemList items={this.state.items} removeItem={this.removeItem} />
      </div>
    );
  }
}

export default hot(module)(TodoApp);
