import { useEffect, useState } from 'react'
import './App.css'

const localCount = parseInt(localStorage.getItem("count")) || 0
const videoId = "dQw4w9WgXcQ"

function App() {
  const [count, setCount] = useState(localCount)

  useEffect(()=>{
    localStorage.setItem("count", String(count))
    if(count == Math.floor(Math.random() * 10 + 1)){
      const url = `https://www.youtube.com/embed/${videoId}?autoplay=1&fs=1&modestbranding=1&playsinline=1`
      const newWindow = window.open(url, "_blank", "fullscreen=yes")
      newWindow.focus()
    }
  },[count])

  return (
    <div className="App">
      <div className="card">
        <div>
          <h2>Chasing the Clicks</h2>
        </div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  )
}

export default App
