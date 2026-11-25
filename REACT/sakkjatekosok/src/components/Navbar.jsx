import React from 'react'
import '../App.css'

import { Link, NavLink } from 'react-router-dom'
export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <NavLink className='isActive nav-link' to="/">Főoldal</NavLink>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="isActive nav-link" to="/jatekosok">
                                Játékosok
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="isActive nav-link" to="/ujjatekos">Új játékos</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
