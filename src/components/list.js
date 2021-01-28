import DeleteTask from "./DeleteTask";

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
      </ul>
    </div>
  );
};

export default List;
