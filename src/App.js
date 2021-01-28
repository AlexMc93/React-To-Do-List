import "./App.css";
import React from "react";
import AddTask from "./components/AddTask";
import DeleteTask from "./components/DeleteTask";

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

        <div>
          <ul>
            Task List
            {this.state.tasks.map((task) => {
              return (
                <li key={task}>
                  {task}
                  <DeleteTask toDelete={task} />
                </li>
              );
            })}
          </ul>
        </div>
      </main>
    );
  }
}

export default App;
