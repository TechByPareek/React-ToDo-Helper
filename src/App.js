import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./MyComponents/Header";
import Todos from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";
import AddTodo from "./MyComponents/AddTodo";
import About from "./MyComponents/About";
import Features from "./MyComponents/Features";
// import Contact from "./MyComponents/Contact";
import Profile from "./MyComponents/Profile";
import "./App.css";

function App() {
  // initTodo holds your initial list of todos that you want to show when the app first loads 
  // Lazy initializer ensures this runs only once
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    // if no todos saved then user starts with an empty array 
    return saved ? JSON.parse(saved) : [];
  });
const [userName, setUserName] = useState(() => {
    return localStorage.getItem("userName") || "";
  });

  // ✅ 2. Save whenever it changes
  useEffect(() => {
    localStorage.setItem("userName", userName);
  }, [userName]);
   

const toggleComplete = (sno) => {
  setTodos(
    todos.map((todo) =>
      todo.sno === sno ? { ...todo, completed: !todo.completed } : todo
    )
  );
};


  // useEffect runs whenever todos change 
  // localStorage is a built-in browser storage that saves data even if you refresh or close the tab 
  // setItem saves data in key-value format 
  // localStorage can only store strings 
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // todos is the current state array of todo objects 
  // setTodos is the function to update this state
  const onDelete = (todo) => {
    console.log("I am on delete of todo ", todo);
    // array.filter(element => condition) - syntax
    // filter does not mutate the original array but it returns a new array 
    // here e represents each item in todos array
    // todo is the item which needs to be deleted
    // e != todo - returns true for all items which are not equal to todo
    // item equal to todo is excluded from the new array 
    // setTodos updates the react state with the new array
    setTodos((prevTodos) => prevTodos.filter((t) => t.sno !== todo.sno));
  };

  // addTodo is used to add a new todo item 
  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc);
    let sno;
    // if no todos present then start with serial number 1
    if (todos.length === 0) {
      sno = 1;
    } else {
      // otherwise take the sno of the last todo and add 1
      sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };

    // spread operator adds the new todo at the end of the array 
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  };

  return (
    // JSX not HTML 
    // have to wrap up in something if nothing then opening and closing tags <>
    <>
      <Router>
        <Header title="My Todos List" searchBar={false} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <AddTodo addTodo={addTodo} />
                {/* If there are no todos, show a message instead of empty space */}
                {todos.length === 0 ? (
                  <p className="no-todos">No tasks yet. Add one above!</p>
                ) : (
                  <Todos todos={todos} onDelete={onDelete}
          toggleComplete={toggleComplete}  />
                  
                )}
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} /> 
          {/* <Route path="/Contact" element={<Contact />} /> */}
          <Route path="/profile" element={<Profile todos={todos} />} />

        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
