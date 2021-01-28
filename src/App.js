import "./App.css";
import React from "react";
import AddTask from "./components/AddTask";

import List from "./components/list";

class App extends React.Component {
  state = {
    tasks: [],
  };

  addTask = (newTask) => {
    this.setState(
      (currentState) => {
        return { tasks: [...currentState.tasks, newTask] };
      },
      () => {
        console.log(this.state.tasks);
      }
    );
  };

  render() {
    return (
      <main>
        <h1>To-do List</h1>
        <AddTask add={this.addTask} />
        <List tasks={this.state.tasks} />
      </main>
    );
  }
}

export default App;
