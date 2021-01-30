import React from "react";

class AddTask extends React.Component {
  state = {
    taskDescription: "",
    dueDate: "",
    isDeleted: false,
  };

  handleInput = ({ target: { value, id } }) => {
    this.setState(() => {
      return { [id]: value };
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const newTask = this.state;
    newTask.dueDate = new Date(newTask.dueDate).toString().slice(0,-34);
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
        <input type="datetime-local" onChange={this.handleInput} id="dueDate" />
        <button>Submit Task</button>
      </form>
    );
  }
}

export default AddTask;
