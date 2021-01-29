import React from "react";

const DeleteTask = (props) => {
  const lineThrough = (event) => {
    if (event.target.parentNode.classList.value === "") {
      props.toDelete.isDeleted = !props.toDelete.isDeleted
      event.target.parentNode.classList.add("deleted");
    } else {
      event.target.parentNode.classList.remove("deleted");
      props.toDelete.isDeleted = !props.toDelete.isDeleted
    }
  };

  return <button onClick={lineThrough}>Delete</button>;
};

export default DeleteTask;
