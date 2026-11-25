import React from 'react'
import { Link } from 'react-router-dom'

export default function ChessCards({ players }) {
    return (
        <div className="container mt-4">
            <div className="row g-4">
                {players.map((player) => (
                    <div key={player.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div className="card h-100 shadow-sm">
                            <img src={player.image_url} className="card-img-top" alt={player.name} style={{ height: '220px', objectFit: 'cover' }} />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">{player.name}</h5>
                                <p className="card-text mb-1"><strong>Születési dátum:</strong> {player.birth_date}</p>
                                <p className="card-text mb-3"><strong>VB címek:</strong> {player.world_ch_won}</p>
                                <Link to="/idplayer" className="btn btn-primary mt-auto"> <span className="button-arrow" aria-hidden="true">→</span> </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
