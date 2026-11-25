import React from 'react'

export default function ProductCard(props) {
  return (
    <div className='row d-flex justify-content-center m-3'>
      <img src={props.imgUrl} className="card-img-top" alt=""/>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className='card-text'>{props.desc}</p>
            </div>
    </div>
  )
}
