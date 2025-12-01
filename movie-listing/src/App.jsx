import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/Navbar'
import MovieList from './components/movieList/MovieList'

function App() {
  const [count, setCount] = useState(0)

  return (
            <div className='app'>
            <Navbar />

            <MovieList />
        </div>
  )
}

export default App
