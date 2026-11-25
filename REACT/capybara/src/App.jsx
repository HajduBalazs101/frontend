import { useState } from 'react'
import './App.css'

import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Review from './pages/Review'
import { Routes, Route } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)
  
  let path = location.pathname

  return (
    <>
      <Header />

      <Routes>
            <Route  path='/' element={<Home/>}/> 
            <Route  path='/rolunk' element={<About/>}/> 
            <Route  path='/termekek' element={<Products/>}/> 
            <Route  path='/ertekeles' element={<Review/>}/>
            <Route path='*' element={<div>Az oldal nem található.</div>}/>
        </Routes>
      <footer>
        <p>&copy; 2026 Capybara Shop. All rights reserved.</p>
      </footer>
    </>
  )
}

export default App
