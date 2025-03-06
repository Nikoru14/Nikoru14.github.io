import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavBar from './components/NavBar.js'
import reactLogo from './assets/coffee-beans.svg'
import viteLogo from './assets/coffee-cup.svg'
import './App.css'

const App = () => {
  const [count, setCount] = useState(0)

  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };


  return (
    <>
      <div>
        <NavBar />
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Mama order Ice Coffee tomorrow</h1>
      <div className="card">
        <button onClick={() => openInNewTab('https://food.grab.com')}>
          YES BUTTON ONLY
        </button>
        <button className="bg-sky-500 hover:bg-sky-700">Save changes</button>

        <p>
        </p>
        <p>
          test commit
        </p>
      </div>
      <p className="read-the-docs">
      </p>
    </>
  )
}

export default App
