import React, { Component } from "react";
import { connect } from "react-redux";

import { DelelteTodo, GetData } from "../Actions/index";

class TodoList extends Component {
  componentDidMount = () => {
    this.props.GetData();
  };
  onDeleteHandler = id => {
    this.props.DelelteTodo(id);
  };
  render() {
    let newList = "Enter todos";

    if (this.props.newTodoList.length > 0) {
      newList = this.props.newTodoList.map((el, i) => {
        return (
          <li className="collection-item" key={el.id}>
            {el.data.todo}
            <div>
              <a
                href="#!"
                onClick={() => this.onDeleteHandler(el.id)}
                className="secondary-content"
              >
                <i className="material-icons">cancel</i>
              </a>
            </div>
          </li>
        );
      });
    }
    return (
      <>
        <div className="col s8">
          <ul className="collection with-header">
            <li className="collection-header">
              <h4>List of Todos</h4>
            </li>
            {newList}
          </ul>
        </div>
      </>
    );
  }
}
const mapStateToProps = state => {
  return {
    newTodoList: state.TodoList.todos
  };
};
export default connect(mapStateToProps, { DelelteTodo, GetData })(TodoList);
