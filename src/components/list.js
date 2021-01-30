import CompleteTask from "./CompleteTask";
import ClearTasks from "./ClearTasks";

const List = (props) => {
  return (
      <ul>
        Task List
        <br></br>
        <br></br>

        {
          props.tasks.map((task) => {
            return (
              <li key={task.taskDescription} className={task.isDeleted ? "deleted" : ""}>
                Task Description: {task.taskDescription}
                <br></br>

                Due Date: {task.dueDate}
                <CompleteTask toDelete={task} />
                <br></br>
                <br></br>

              </li>
            );
          })
        }
        <br></br>

        <ClearTasks toClear={props.clearFunc} />
      </ul>
  );
};

export default List;
