import React from "react";
import { useState } from "react";
import styles from "./form.module.css";
const Form = ({ todos, settodos }) => {
  const [task, setTask] = useState({ name: "", done: false });
  function handleSubmit(e) {
    e.preventDefault();
    const name = task.name.trim();
    if (!name) return;
    settodos([...todos, { id: crypto.randomUUID(), name, done: false }]);
    setTask({ name: "", done: false });
  }
  return (
    <div>
      <div></div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <input
            className={styles.input}
            onChange={(e) => setTask({ name: e.target.value, done: false })}
            type="text"
            value={task.name}
            placeholder="Add a new todo"
          />
          <button className={styles.button} type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
