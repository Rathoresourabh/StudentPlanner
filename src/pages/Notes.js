
import React, { useEffect, useState } from "react";
import AddTodo from "../components/Notes/AddTodo";
import ListTodo from "../components/Notes/ListTodo"

function Notes() {
  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem("todos")) || []
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);


  function addTodo(todo) {
    setTodos([...todos, todo]);
  }

  function deleteTodo(id) {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodos);
  }
  return (
    <div>
      <AddTodo addTodo = {addTodo} />
      <ListTodo todos = {todos} deleteTodo = {deleteTodo} />
    </div>
  );
}

export default Notes;
