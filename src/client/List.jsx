import React from "react";
import { hot } from "react-hot-loader";
// import TodoItem from "./TodoItem";
import { Button } from "shards-react";
var moment = require("moment");
var popups = require("popups");

class ItemList extends React.Component {
  removeItem(e, index, item) {
    this.props.removeItem(index, item);
  }

  render() {
    let ItemList = this.props.items.map((item, index) => {
      let datetime = moment().format('YYYY-MM-DD');
      return (

        <li key={index}>
          {datetime}-{item}
          &nbsp;
          <Button pill theme="secondary" size="sm"
            onClick={event => {
              this.removeItem(event, index, item);
            }}
          >
            Delete
          </Button>
        </li>
      );
    });

    return <ol>{ItemList}</ol>;
  }
}

export default hot(module)(ItemList);
