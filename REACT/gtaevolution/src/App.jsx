import { useState } from 'react'
import './App.css'
import Header from './Header'
import Card from './Card'
import 'bootstrap/dist/css/bootstrap.css';
import gtaI from './assets/GTA_-_Box_Front.jpg'
import gtaII from './assets/GTA2_Box_art.jpg'
import gtaIII from './assets/GTA3boxcover.jpg'
import gtaVC from './assets/images.jpg'
import gtaSA from './assets/gtasa.jpg'
import gtaIV from './assets/GTAIV.jpg'
import gtaV from './assets/GTAV.png'
import gtaVI from './assets/GTAVI.jpg'


function App() {
  const [bgColor, setBgColor] = useState(0)
  const [borderWidth, setborderWidth] = useState(0)
  const [tipus, settipus] = useState("")
  function setColor(e) {
    setBgColor(e.target.value);
  }
  function setBorder(e) {
    setborderWidth(e.target.value);
  }
  function tipusSet(e) {
    settipus(e.target.value);
  }
  return (
    <div className="container">
      <div className="d-flex gap-2 justify-content-center my-3">
        <input type='color' onChange={setColor} aria-label="Kártya háttere"/>
        <input type='number' onChange={setBorder} aria-label="Szegély szélessége"/>
        <input type='text' onChange={tipusSet} aria-label="Szegély típusa"/>
      </div>
      <Header/>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 g-3">
        <div className="col"><Card imgsrc={gtaI} szin={bgColor} border={borderWidth} tipuss={tipus} title="GTA I"/></div>
        <div className="col"><Card imgsrc={gtaII} szin={bgColor} border={borderWidth} tipuss={tipus} title ="GTA II"/></div>
        <div className="col"><Card imgsrc={gtaIII} szin={bgColor} border={borderWidth} tipuss={tipus} title ="GTA III"/></div>
        <div className="col"><Card imgsrc={gtaVC} szin={bgColor} border={borderWidth} tipuss={tipus} title ="GTA Vice City"/></div>
        <div className="col"><Card imgsrc={gtaSA} szin={bgColor} border={borderWidth} tipuss={tipus} title ="GTA San Andreas"/></div>
        <div className="col"><Card imgsrc={gtaIV} szin={bgColor} border={borderWidth} tipuss={tipus} title ="GTA IV"/></div>
        <div className="col"><Card imgsrc={gtaV} szin={bgColor} border={borderWidth} tipuss={tipus} title ="GTA V"/></div>
        <div className="col"><Card imgsrc={gtaVI} szin={bgColor} border={borderWidth} tipuss={tipus} title ="GTA VI"/></div>
      </div>
    </div>
  )
}

export default App
