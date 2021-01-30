const ClearTasks = (props) => {
  const handleSubmit = (event) => {

    const taskArray = [...event.target.parentNode.childNodes];
    taskArray.shift();

    const taskStrings = taskArray.filter((task) => {
      return task.classList.value === "deleted";
    });

    const toDelete = taskStrings.map((string) => {
      return {
        taskDescription: string.innerText.slice(18, -48),
        dueDate: string.innerText.slice(-37, -16),
      };
    });

    props.toClear(toDelete);
  };

  return (
    <button type="submit" onClick={handleSubmit}>
      Clear completed tasks
    </button>
  );
};

export default ClearTasks;
