import React, { useState } from 'react'
import Card from '../components/Card'

export default function Home() {

    /*
    let cardContents = [
        {
            imgSrc: "",
            title: "Rólunk",
            link: "About.jsx"
        },
        {
            imgSrc: "",
            title: "Termékeink",
            link: "Products.jsx"
        },
        {
            imgSrc: "",
            title: "Értékelj minket!",
            link: "Review.jsx"
        }
    ]
        */

    const [bgColor, setBgColor] = useState("")

    function ColorSet(event) {
        
        setBgColor(event.target.value)
    }


    return (
        <div className='row container'>
            
            <Card cardBgColor={bgColor} path="/rolunk" title="Rólunk" imgSrc="https://live.staticflickr.com/65535/50274643972_c7b8c62e6f_b.jpg" link="About.jsx"/>
            <Card cardBgColor={bgColor} path="/termekek" title="Termékeink" imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT76MJfOLsfebbHuWWQIQj4w3pfAyCGO_wLSoY8qecgLnkWXpRR8xxnG-k&s=10" link="Products.jsx"/>
            <Card cardBgColor={bgColor} path="/ertekeles" title="Értékelj minket!" imgSrc="https://ichef.bbci.co.uk/news/1024/branded_news/5e46/live/20c632c0-74d9-11ef-a725-bd96b768a0bf.jpg" link="Review.jsx"/>

            <input className="w-25" onChange={ColorSet} type="color" />
            
            {/*cardContents.map((card) => {
                return <Card key={cardContents.indexOf(card)} title={card.title} imgSrc={card.imgSrc} link={card.link}/>
            })*/}

        </div>
    )
}
