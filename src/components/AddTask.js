import React from "react";

class AddTask extends React.Component {
  state = {
    taskDescription: "",
    dueDate: ""
  };

  handleInput = ({ target: { value, id } }) => {
    this.setState((currentState) => {
      return { [id]: value };
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const newTask = this.state;
    this.props.add(newTask);
    this.setState(() => {
      return {
        taskDescription: ""
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
          value={this.state.taskDescription}
        />
        <label>Due: </label>
        <input type="date" onChange={this.handleInput} id="dueDate" />
        <button>Submit Task</button>
      </form>
    );
  }
}

export default AddTask;
