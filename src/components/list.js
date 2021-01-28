import DeleteTask from "./DeleteTask";
import ClearTasks from "./ClearTasks";

const List = (props) => {
  return (
    <div>
      <ul>
        Task List
        {props.tasks.map((task) => {
          return (
            <li key={task}>
              {task}
              <DeleteTask toDelete={task} />
            </li>
          );
        })}
        <ClearTasks toClear={props.clearFunc}/>
      </ul>
    </div>
  );
};

export default List;
