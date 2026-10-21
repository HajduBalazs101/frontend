import React, { useState } from 'react'
import Card from '../Card'
export default function () {
  const [bgColor, setBgColor] = useState()
  console.log("A szülő így látja: " + bgColor)
  function ColorSet(event) {
    setBgColor(event.target.value)
  }
  return ( 
    <div>
    <section className="hero">
        <h2>Welcome to the Adorable Pets Gallery!</h2>
        <p>Explore our cute and lovable pet collection. Find your new best friend!</p>
    </section>
    <div>
    Állíts be kártyaszínt: <input onChange={ColorSet} type='color'></input>
    </div>
    <div className="pets-container">
      <Card cardBgColor = {bgColor}/>
      <Card cardBgColor = {bgColor}/>
      <Card cardBgColor = {bgColor}/>
    </div>
    </div>
  )
}
