import React from 'react'
import './App.css'


export default function Header(props) {
  function setLanguage(e){
      props.setLang(e.target.value)
  }
  return (
    <header>
        <h1>Ceg</h1>
        <select onChange={setLanguage}>
          <option value="HU">HU</option>
          <option value="EN">EN</option>
        </select>
    </header>
  )
}
