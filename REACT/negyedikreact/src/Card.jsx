import React from 'react'
import './App.css'


export default function Card(props) {
  return (
    <>
    <div className="card" style = {{width: "18rem", margin: "5px", backgroundColor: 'white', border: "solid black" + props.borderData + "px" }}>
        <img className="card-img-top" src={props.src} alt="Card image cap"/>
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <a href={props.href}><button className='btn'>--</button></a>
        </div>
    
    </div>
    </>
  )
}
