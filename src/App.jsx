import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React +shravan </h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          are gundu ga  {count}
        </button>
        <button onClick={() => alert("are gundu ga")}>
          are gundu ga  {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and dont save this brought 
        </p>
      </div>
      <p className="read-the-docs">
        Click Shravan and play with him again 
      </p>
    </>
  )
}

export default App
