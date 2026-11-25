import React from 'react'
import { Link } from 'react-router-dom'

export default function Card(props) {
  return (
        <div className="card" style={{width: "18rem", backgroundColor: props.Bgcolor}}>
            <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <Link to={props.path} className='btn btn-primary'>Tovább</Link>
            </div>
        </div>
)
}
