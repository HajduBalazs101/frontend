import React from 'react'
import { Link } from 'react-router-dom'
export default function Home() {
    return (
        <div>
            <h1>Üdv az oldalon!</h1>
            <Link className="button button-primary" to="/jatekosok">Tovább a játékosokhoz</Link>
        </div>
    )
}
