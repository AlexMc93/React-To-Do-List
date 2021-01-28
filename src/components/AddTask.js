import React from 'react';

class AddTask extends React.Component {
    state = {
        newTask: ""
    }

    handleInput = (event) => {
        this.setState((currentState) => {
          return {newTask: event.target.value}
        })
      }
    
    handleSubmit = (event) => {
    event.preventDefault();
    const newTask = this.state.newTask
    this.props.add(newTask)
    }

    render() {
        return (
        <form onSubmit={this.handleSubmit}>
            <label>Add a new task: </label>
            <input type="text" onChange={this.handleInput}/>
            <button type="submit">Submit task</button>
        </form>
        )
    }
}

export default AddTask