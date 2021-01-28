import React from 'react';

const DeleteTask = (props) => {

    const lineThrough = (event) => {
        console.log(event);
        console.dir(event);
    }

    return (
        <button onClick={lineThrough}>
            Delete
        </button>
    )
}

export default DeleteTask;