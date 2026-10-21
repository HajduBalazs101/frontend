import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

import './App.css'
import Header from './Header'
import Home from './pages/Home'

function App() {
  const [borderWidth, setBorderWidth] = useState()  

  return (
    <>
    <Header setting={setBorderWidth}/>
    <Home/>
    <footer>
        <p>&copy; 2025 Adorable Pets. All rights reserved.</p>
    </footer>
    </>
  )
}

export default App
