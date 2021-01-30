import "./App.css";
import React from "react";
import AddTask from "./components/AddTask";

import List from "./components/list";

class App extends React.Component {
  state = {
    tasks: [],
  };

  addTask = (newTask) => {
    this.setState((currentState) => {
      return { tasks: [...currentState.tasks, newTask] };
    });
  };

  clearTasks = (itemArray) => {
    this.setState((currentState) => {
      const unfinishedTasks = [...currentState.tasks].filter((task) => {
        return (
          itemArray.findIndex((clearing) => {
            return (
              clearing.taskDescription === task.taskDescription &&
              clearing.dueDate === task.dueDate
            );
          }) < 0
        );
      });
      return { tasks: unfinishedTasks };
    });
  };

  sortTasks = () => {
    this.setState((currentState) => {
      const tasksToOrder = currentState.tasks.map((task) => {
        task.dueDate = new Date(task.dueDate);
        return task;
      });
      const sortedTasks = tasksToOrder.sort((a, b) => {
        return a.dueDate - b.dueDate;
      });
      const sortedTasksJson = sortedTasks.map((task) => {
        task.dueDate = task.dueDate.toString().slice(0, -34);
        return task;
      });
      return { tasks: sortedTasksJson };
    });
  };

  saveData = () => {
    const currentTasks = this.state;
    localStorage.setItem("data", JSON.stringify(currentTasks));
  };

  componentDidMount = () => {
    const data = localStorage.getItem("data");
    if (data) {
      const state = JSON.parse(data);
      this.setState(state);
    }
  };

  render() {
    return (
      <main>
        <h1>Alex's Epic Awesome To-do List</h1>
        <AddTask add={this.addTask} />
        <List tasks={this.state.tasks} clearFunc={this.clearTasks} />
        <button onClick={this.saveData}>Save Tasks</button>
        <button onClick={this.sortTasks}>Sort By Due Date</button>
      </main>
    );
  }
}

export default App;
