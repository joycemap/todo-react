import React from "react";
import { hot } from "react-hot-loader";
import List from "./List";

var popups = require("popups");
// var moment = require("moment");

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      //input store what we passing as a value to our input
      term: "",
      //items: empty array to store every value we are passing to our todo list
      items: []
    };
  }

  //onChange changes state depending on the current input value. Use this.setState() method to see UI update.
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
      // console.log(item)
      this.setState({
        term: "",
        items: [...item]
      });
      // moment().format();
    } else {
      popups.alert({
        content:
          "Entries must be more than 1 character and less than 200 characters."
      });
    }
  }

   handleClick(event) {
      event.preventDefault();
      console.log('The delete was clicked.');
      item.slice(term);
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
        <button
          onClick={event => {
            this.onSubmit(event);
          }}
        >Submit
        </button>
        <List items={this.state.items} />

        <button
          onClick={event => {
            this.handleClick(event);
          }}
        >Delete
        </button>
      </div>
    );
  }
}

export default hot(module)(App);
