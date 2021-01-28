const ClearTasks = (props) => {

    const filteringTasks = (event) => {
       const taskArray = [...event.target.parentNode.childNodes];
       taskArray.shift();

       const toDelete = taskArray.filter((task) => {
            return task.classList.value === "deleted"
       });
       props.toClear(toDelete)
    }

    return (
        <button type="submit" onClick={filteringTasks}>Clear completed tasks</button>
    )
}

export default ClearTasks;