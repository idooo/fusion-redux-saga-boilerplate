import React, { useState, useEffect } from "react";
import { CounterButton } from "./CounterButton";
import { ToDoList } from "./ToDoList";

const Root = () => {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState("");

  // useEffect(() => {
  //   fetch("/api/todos")
  //     .then(async res => await res.json())
  //     .then(res => setTodos(res));
  // }, []);


  return (
    <React.Fragment>
      <h1>todos</h1>
      <h2><CounterButton/></h2>
      <div className="container">

       <ToDoList/>
      </div>
    </React.Fragment>
  );
};

export default <Root />;
