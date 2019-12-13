import { connect } from "react-redux";

import React, { Component } from "react";
import { saveToDoItem } from "../store/todo/actions";

class ToDoListComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.saveToDoItem({ item: this.state.value });
    this.setState({ value: "" });
  }

  handleOnChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    const { items } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleOnChange}
          placeholder="What needs to be done?"
          value={this.state.value}
          type="text"
        />
        <input type="submit" value="Submit" />
        {items.map((todo, i) => (
          <div className="todo" key={i}>
            <div className="todo-text">{todo}</div>
          </div>
        ))}
      </form>
    );
  }
}

export const ToDoList = connect(
  state => ({
    items: state.todo.items
  }),
  { saveToDoItem }
)(ToDoListComponent);
