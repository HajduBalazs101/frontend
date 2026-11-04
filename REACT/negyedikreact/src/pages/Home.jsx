import React from 'react'
import Card from '../Card'
import image from '../assets/image.jpg'

export default function Home({lang}) {
  return (
    <div>
      <div className="ceg-container">
        <Card src={image} href="App.jsx" title={lang === "HU" ? "Rólunk" : "About us"}/>
        <Card src={image} href="App.jsx" title={lang === "HU" ? "Termékeink" : "Products"}/>
        <Card src={image} href="App.jsx" title={lang === "HU" ? "Híreink" : "News"}/>
      </div>
    </div>
  )
}
