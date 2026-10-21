import React from 'react'

export default function Card(props) {
    console.log("A gyerek ezt kapta: " + props.cardBgColor)
  return (
    
    <div className="card" style = {{width: "18rem", margin: "5px", backgroundColor: props.cardBgColor}}>
        <img className="card-img-top" src="..." alt="Card image cap"/>
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        </div>
    </div>
  )
}
