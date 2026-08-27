import React from 'react'
import styles from "./footer.module.css";

const Footer = ({completedTodos,totalTodos}) => {
  return (
    <div className={styles.footer}>
        <span className={styles.completedItem}>
            Completed Todos: {completedTodos}
        </span>
        <span className={styles.totalItem}>
            Total Todos: {totalTodos}
        </span>
    </div>
  )
}

export default Footer
