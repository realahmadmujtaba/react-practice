import React from "react";
import TodoItems from "./TodoItems";
import styles from "./todoList.module.css";
const TodoList = ({ todos, settodos }) => {
  const sortedTodos = todos
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));
  return (
    <div className={styles.todoList}>
      {sortedTodos.map((item) => (
        <TodoItems
          key={item.name}
          item={item}
          todos={todos}
          settodos={settodos}
        />
      ))}
    </div>
  );
};

export default TodoList;
