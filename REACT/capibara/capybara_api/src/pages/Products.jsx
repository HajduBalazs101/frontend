import React, { useState } from 'react'
import ProductCard from '../components/ProductCard'
export default function Products(props) {
  
  //tomb
  const [adatok, setAdatok] = useState([])
  useEffect(() => {
      fetch("/data.json")
      .then(res => res.json())
      .then(data => {
        setAdatok(data)
      })
  }, [])
  
  
  return (
    <div className='row d-flex justify-content-center m-3'>
      {
      adatok.map(adat => <ProductCard name={adat.name} imgUrl = {adat.imgUrl} desc = {adat.desc}/>)
      }
    </div>
  )
}
