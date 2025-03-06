import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavBar from './components/NavBar.js'
import coffeeCupSVG from './assets/coffee-cup.svg'
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

      </div>
      <h1 className='text-8xl my-4'>Tara kape?</h1>
      <div className='flex justify-center'>
        <div className="card">
          <p>
            <img src={coffeeCupSVG} alt="Coffee Cup" className="logo" />
          </p>
          <p>
            palpitate malala
          </p>
        </div>
      </div>
    </>
  )
}

export default App
