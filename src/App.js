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

  clear = (itemArray) => {
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

  sort = () => {
    this.setState((currentState) => {
      const tasksToOrder = currentState.tasks.map((task) => {
        task.dueDate = new Date(task.dueDate);
        return task;
      });
      const sortedTasks = tasksToOrder.sort((a, b) => {
        return a.dueDate - b.dueDate;
      });
      const sortedTasksJson = sortedTasks.map((task) => {
        task.dueDate = task.dueDate.toString();
        return task;
      });
      return { tasks: sortedTasksJson };
    });
  };

  saveData = (allTasks) => {
    localStorage.setItem("data", JSON.stringify(allTasks));
  };

  handleClick = () => {
    const currentTasks = this.state;
    this.saveData(currentTasks);
  };

  componentDidMount = () => {
    const data = localStorage.getItem("data");
    if (data) {
      const state = JSON.parse(data);
      console.log(state);
      this.setState(state);
    }
  };

  render() {
    return (
      <main>
        <h1>To-do List</h1>
        <AddTask add={this.addTask} />
        <List tasks={this.state.tasks} clearFunc={this.clear} />
        <button onClick={this.handleClick}>Save Tasks</button>
        <button onClick={this.sort}>sort Tasks</button>
      </main>
    );
  }
}

export default App;
