import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import ChessPlayers from './components/ChessPlayers'
import NewChessPlayer from './components/NewChessPlayer'
import SingleChessPlayer from './components/SingleChessPlayer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Routes>
            <Route  path='/' element={<Home/>}/> 
            <Route path='*' element={<Home/>}/>
            <Route path='/jatekosok' element={<ChessPlayers/>}/>
            <Route path='/ujjatekos' element={<NewChessPlayer/>}/>
            <Route path='/idplayer' element={<SingleChessPlayer/>}/>
    </Routes>
    </>
  )
}

export default App
