import React from "react";

class AddTask extends React.Component {
  state = {
    taskDescription: "",
    dueDate: ""
  };

  handleInput = ({target: {value, id}}) => {
    this.setState((currentState) => {
      return { [id]: value };
    }, () => {
      console.log(this.state)
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const newTask = this.state;
    this.props.add(newTask);
    this.setState(() => {
      return { 
        taskDescription: "",
        dueDate: ""
      };
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Add a new task: </label>
        <input
          id="taskDescription"
          type="text"
          onChange={this.handleInput}
          value={this.state.newTask}
        />
        <label>Due: </label>
        <input 
          type="date" 
          onChange={this.handleInput}
          id="dueDate"
        />
        <button type="submit">Submit task</button>
      </form>
    );
  }
}

export default AddTask;
