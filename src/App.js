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
      }
    );
  };

  clear = (itemArray) => {

    console.log(itemArray, 'ITEM ARRAY')
    
    const clearArray = itemArray.map((item) => {
      return item.innerText.slice(0, -6)
    })

    console.log(clearArray, 'CLEAR ARRAY')

    this.setState((currentState) => {
      console.log(currentState.tasks, 'CURRENT STATE TASKS')
      const unfinishedTasks = [...currentState.tasks].filter((task) => {
        return !clearArray.includes(task)
      }) 
      return { tasks: unfinishedTasks}
    })
  };

  render() {
    return (
      <main>
        <h1>To-do List</h1>
        <AddTask add={this.addTask} />
        <List tasks={this.state.tasks} clearFunc={this.clear}/>
      </main>
    );
  }
}

export default App;
