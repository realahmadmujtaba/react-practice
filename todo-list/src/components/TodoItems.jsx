import React from "react";
import styles from "./todoItems.module.css";
const TodoItems = ({ item, todos, settodos }) => {
  function handleDelete(item) {
    console.log(item);
    settodos(todos.filter((todo) => todo !== item));
  }
  function handleClick(name) {
    settodos(
      todos.map((todo) =>
        todo.name === name ? { ...todo, done: !todos.done } : todo
      )
    );
    // This will toggle(change) the done status of the todo item
    console.log(todos);
  }
  const className = item.done ? styles.completed : "";
  return (
    <div className={styles.todoItems}>
      <div className={styles.itemName}>
        <span className={className} onClick={() => handleClick(item.name)}>
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
