import { useState } from 'react'
import TaskItem from './TaskItem.jsx'
import './App.css'

// A small React fundamentals demo: local state (the input and task list),
// props (each TaskItem receives its task and a callback), and list
// rendering (mapping tasks to TaskItem elements with stable keys).

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Learn useState', done: true },
    { id: 2, text: 'Learn props', done: false },
    { id: 3, text: 'Render a list', done: false },
  ])
  const [input, setInput] = useState('')

  function addTask(e) {
    e.preventDefault()
    const text = input.trim()
    if (!text) return
    setTasks((prev) => [...prev, { id: Date.now(), text, done: false }])
    setInput('')
  }

  function toggleTask(id) {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, done: !task.done } : task)),
    )
  }

  const doneCount = tasks.filter((t) => t.done).length

  return (
    <div className="app">
      <h1>React Basics</h1>
      <p>{doneCount} of {tasks.length} done</p>

      <form onSubmit={addTask}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a task"
        />
        <button type="submit">Add</button>
      </form>

      <ul className="task-list">
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} onToggle={toggleTask} />
        ))}
      </ul>
    </div>
  )
}

export default App
