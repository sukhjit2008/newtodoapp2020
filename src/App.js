import React, { Component } from "react";
import AddTodos from "./AddTodos/AddTodos";
import TodoList from "./TodoList/TodoList";

export default class App extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <AddTodos />
            <TodoList />
          </div>
        </div>
      </>
    );
  }
}
