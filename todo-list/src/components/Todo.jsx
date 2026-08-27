import React, { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer";
const Todo = () => {
  const [todos, settodos] = useState([]);
  const completedTodos = todos.filter((todo) => todo.done).length;
  const totalTodos = todos.length;
  return (
    <div>
      <Form todos={todos} settodos={settodos} />
      <TodoList todos={todos} settodos={settodos} />
      <Footer completedTodos={completedTodos} totalTodos={totalTodos} />
    </div>
  );
};

export default Todo;
