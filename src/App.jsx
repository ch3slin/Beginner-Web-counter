import { useEffect, useState } from 'react'
import './App.css'

const localCount = parseInt(localStorage.getItem("count")) || 0

function App() {
  const [count, setCount] = useState(localCount)

  useEffect(()=>{
    localStorage.setItem("count", String(count))
  },[count])

  return (
    <div className="App">
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  )
}

export default App
