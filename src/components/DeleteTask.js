import React from "react";

const DeleteTask = (props) => {
  const lineThrough = (event) => {
    if (event.target.parentNode.classList.value === "") {
      event.target.parentNode.classList.add("deleted");
    } else {
      event.target.parentNode.classList.remove("deleted");
    }
  };

  return <button onClick={lineThrough}>Delete</button>;
};

export default DeleteTask;
