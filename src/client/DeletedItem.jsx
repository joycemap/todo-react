import React from "react";
import { hot } from "react-hot-loader";
import TodoApp from "./TodoApp"
class DeletedItem extends React.Component {
render(){

    return(
        <TodoApp deletedItems={this.state.deletedItems}/>
    )
}

}

