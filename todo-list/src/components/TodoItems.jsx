import React from "react";
import styles from "./todoItems.module.css";
const TodoItems = ({ item, todos, settodos }) => {
  function handleDelete(item) {
    settodos(todos.filter((todo) => todo.id !== item.id));
  }
  function handleClick(id) {
    settodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  }
  const className = item.done ? styles.completed : "";
  return (
    <div className={styles.todoItems}>
      <div className={styles.itemName}>
        <span className={className} onClick={() => handleClick(item.id)}>
          {item.name}
        </span>
        <span>
          <button
            onClick={() => handleDelete(item)}
            className={styles.deleteButton}
          >
            x
          </button>
        </span>
      </div>
      <hr className={styles.line} />
    </div>
  );
};

export default TodoItems;
