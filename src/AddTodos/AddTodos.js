import React, { Component } from "react";
import { connect } from "react-redux";
import { AddTodo, CreateData } from "../Actions/index";
class AddTodos extends Component {
  state = {
    todo: ""
  };
  onChangeHandler = e => {
    e.preventDefault();
    this.setState({ todo: e.target.value });
  };
  submitHandler = e => {
    e.preventDefault();
    if (this.state.todo.trim() !== "") {
      const todo = {
        id: new Date(),
        todo: this.state.todo,
        status: false
      };

      this.props.CreateData(todo);
    }
    this.setState({ todo: "" });
  };

  render() {
    return (
      <>
        <h3>Todo List</h3>
        <div className="col s8">
          <div className="row">
            <form className="input-field col s12" onSubmit={this.submitHandler}>
              <input
                type="text"
                id="autocomplete-input"
                className="autocomplete"
                value={this.state.todo}
                onChange={this.onChangeHandler}
              />
              <label htmlFor="autocomplete-input">Add Todo</label>
              <button
                className="waves-effect waves-light btn"
                style={{ marginTop: "1rem" }}
              >
                Add
                <i className="material-icons right">add</i>
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }
}
const mapStateToProps = state => {
  return {
    todo: state.CreateTodo
  };
};
export default connect(mapStateToProps, { AddTodo, CreateData })(AddTodos);
