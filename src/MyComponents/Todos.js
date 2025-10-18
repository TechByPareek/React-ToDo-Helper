import React from "react";
import Todo from "./Todo";

const Todos = ({ todos, onDelete, toggleComplete }) => {
  const myStyle = {
    minHeight: "70vh",
    margin: "10px auto",
  };

  return (
    <div className="container" style={myStyle}>
      <h3 className="text-center">Todos List</h3>

      {/* Conditional rendering */}
      {todos.length === 0 ? (
        <p className="text-center">No todos to display</p>
      ) : (
        todos.map((todo) => (
          <Todo
            todo={todo}
            key={todo.sno}
            onDelete={onDelete}
            toggleComplete={toggleComplete} // pass the function
          />
          
        ))
      )}
    </div>
  );
};

export default Todos;
