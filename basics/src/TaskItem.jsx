function TaskItem({ task, onToggle }) {
  return (
    <li className={task.done ? 'task done' : 'task'}>
      <label>
        <input type="checkbox" checked={task.done} onChange={() => onToggle(task.id)} />
        {task.text}
      </label>
    </li>
  )
}

export default TaskItem
