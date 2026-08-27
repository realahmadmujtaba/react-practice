import { useState } from 'react'
import { PlusIcon, MinusIcon, ResetIcon } from '@radix-ui/react-icons'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="counter">
      <h1>Counter</h1>
      <p className="count">{count}</p>
      <div className="controls">
        <button onClick={() => setCount((c) => c - 1)} aria-label="Decrement">
          <MinusIcon />
        </button>
        <button onClick={() => setCount(0)} aria-label="Reset">
          <ResetIcon />
        </button>
        <button onClick={() => setCount((c) => c + 1)} aria-label="Increment">
          <PlusIcon />
        </button>
      </div>
    </div>
  )
}

export default App
