import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

import './App.css'
import Header from './Header'
import Home from './pages/Home'

function App() {
  const [lang, setLang] = useState("HU")
  return (
    <>
    <Header setLang = {setLang}/>
    <Home lang = {lang}/>
    </>
  )
}

export default App
