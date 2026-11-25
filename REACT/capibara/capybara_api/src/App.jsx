import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import Review from './pages/Review'
import Products from './pages/Products'
import About from './pages/About'
import { Routes, Route } from 'react-router-dom'

function App(props) {
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

        <footer className="site-footer">
              <p>2025 Adorable Capybaras. All rights reserved.</p>
        </footer>
    </>
  )
}

export default App
