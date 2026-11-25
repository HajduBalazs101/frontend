import React from 'react'
import { useState } from 'react'
import Card from '../components/Card'


export default function Home(props) {

          const [Bgcolor, setBgColor] = useState("")
          
          function ColorSet(event){
            setBgColor(event.target.value)
          }
        
    let cardContents = [
        {
            imgSrc: "",
            path : "/rolunk",
            title: "Rólunk",
            link: "About.jsx"
        },
        {
            imgSrc: "",
            path : "/termekek",
            title: "Termékeink",
            link: "Products.jsx"
        },
        {
            imgSrc: "",
            path: "/ertekeles",
            title: "Értékelés",
            link: "Review.jsx"
        },
    ]
  return (
    <>
        <input onChange={ColorSet} type="color"/>
        <div className='d-flex justify-content-center flex-wrap gap-3'>
            
            {cardContents.map((card) => {
                return <Card key={card.link} path={card.path} cardBgColor={Bgcolor} title={card.title} imgSrc={card.imgSrc} link={card.link} />            })}
        </div>
    </>
  )
}
