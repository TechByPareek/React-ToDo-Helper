import React from "react";

const Todo = ({ todo, onDelete, toggleComplete }) => {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed || false}
        onChange={() => toggleComplete(todo.sno)}
      />
      <span className={todo.completed ? "todo-text completed" : "todo-text"}>
        {todo.title} - {todo.desc}
      </span>
      <div className="todo-buttons">
        <button onClick={() => onDelete(todo)}>Delete</button>
      </div>
    </div>
  );
};

export default Todo;
