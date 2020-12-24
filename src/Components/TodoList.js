import React, { Component } from "react";
import Todo from "./Todo";
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
      todoTab: [],
    };
  }

  handleChange = (e) => {
    this.setState({
      task: e.target.value,
    });
  };

  addTask = () => {
    this.state.task !== ""
      ? this.setState({
          todoTab: [
            ...this.state.todoTab,
            { id: Date.now(), task: this.state.task, isDone: false },
          ],
          task: "",
        })
      : alert("please enter a valid task");
  };
  taskDone = (id) => {
    this.setState({
      todoTab: this.state.todoTab.map((item) =>
        item.id === id ? { ...item, isDone: !item.isDone } : item
      ),
    });
  };

  deleteTask = (id) => {
    this.setState({
      todoTab: this.state.todoTab.filter((item) => item.id !== id),
    });
  };

  render() {
    return (
      <div>
        <div className="todo_list">
          <h1>List of what we should do this week</h1>
          <input
            type="text"
            placeholder="enter a new task"
            onChange={this.handleChange}
            value={this.state.task}
          />
          <button onClick={this.addTask}>Add</button>
        </div>
        <div className="list">
          {this.state.todoTab.map((item) => (
            <Todo taskDone={this.taskDone} deleteTask={this.deleteTask} item={item} key={item.id} />
          ))}
        </div>
      </div>
    );
  }
}

export default TodoList;
