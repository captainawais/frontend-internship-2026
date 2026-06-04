import React from "react";

function TodoItem({ task, onDelete }) {

  return (

    <div className="todo-item">

      <div className="task-left">

        <h3>{task.category}</h3>

        <p>{task.text}</p>

        <span>⏰ {task.time}</span>

      </div>

      <button
        className="delete-btn"
        onClick={onDelete}
      >
        Delete
      </button>

    </div>

  );
}

export default TodoItem;