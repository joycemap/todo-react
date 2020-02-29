import React from "react";
import { hot } from "react-hot-loader";
import { Button } from "shards-react";

var moment = require("moment");

class TodoItem extends React.Component {
  //   removeItem() {
  //     this.props.removeTodo();
  //   }

  removeItem(e, index, item) {
    this.props.removeTodo(index, item);
  }

  render() {
    let i = this.props.index;
    let item = this.props.item;
    let datetime = moment().format();
    return (
      //key is the id
      <li key={i}>
        {datetime}-{item}
        <Button
          onClick={event => {
            this.removeItem(event, index, item);
          }}
        >
          Delete
        </Button>
      </li>
    );
  }
}

export default hot(module)(TodoItem);
