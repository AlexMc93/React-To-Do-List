const ClearTasks = (props) => {
  const filteringTasks = (event) => {
    const taskArray = [...event.target.parentNode.childNodes];
    taskArray.shift();

    const DeleteStrings = taskArray.filter((task) => {
      return task.classList.value === "deleted";
    });
    const toDelete = DeleteStrings.map((string) => {
      return {
        taskDescription: string.innerText.slice(18, -27),
        dueDate: string.innerText.slice(-16, -6),
      };
    });
    props.clear(toDelete);
  };

  return (
    <button type="submit" onClick={filteringTasks}>
      Clear completed tasks
    </button>
  );
};

export default ClearTasks;
