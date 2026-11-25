import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

export default function Card(props) {
    
  return (
    <div className="card h-100" style={{borderWidth : props.border + props.tipuss, backgroundColor : props.szin}}>
        <img src={props.imgsrc} className="card-img-top" alt="gta" title='gta'/>
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            
        </div>
    </div>
  )
}
