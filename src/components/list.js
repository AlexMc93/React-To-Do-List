import DeleteTask from "./DeleteTask";
import ClearTasks from "./ClearTasks";

const List = (props) => {
  return (
    <div>
      <ul>
        Task List
        <br></br>
        <br></br>
        {props.tasks.map((task) => {
          return (
            <li key={task.taskDescription} className={task.toDelete ? console.log('true') : console.log('false')}>
              Task Description: {task.taskDescription}
              <br></br>
              Due Date: {task.dueDate}
              <DeleteTask toDelete={task} />
              <br></br>
              <br></br>
            </li>
          );
        })}
        <br></br>
        <ClearTasks clear={props.clearFunc} />
      </ul>
    </div>
  );
};

export default List;
