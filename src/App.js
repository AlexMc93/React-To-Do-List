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

  render() {
    return (
      <main>
        <h1>To-do List</h1>
        <AddTask add={this.addTask} />
        <List tasks={this.state.tasks} clearFunc={this.clear} />
      </main>
    );
  }
}

export default App;
