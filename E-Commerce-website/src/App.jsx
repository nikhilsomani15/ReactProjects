import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './assets/components/Navbar'
import Home from './assets/components/Home'
import { Route, Routes } from 'react-router-dom'
import Checkout from './assets/components/Checkout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Routes>
        <Route path='/checkout' element={
          <>
          <Navbar/>
          <Checkout/>
          </>
        }/>

        <Route path='/' element={
          <>
          <Navbar/>
          <Home/>
          </>
        } />

        <Route path='*' element={<h1>Error</h1>}/>
      </Routes>

    </>
  )
}

export default App
