import React from 'react'

export default function Header(props) {
  function borderSet(e){
    props.setting(Number(e.target.value))
  }
  return (
    <header>
      <nav>
        Kártyák kerete px: <input type='number' onChange={borderSet} min={0} max={100}></input>
      </nav>
        <h1>Adorable Pets</h1>
    </header>
  )
}
