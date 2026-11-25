import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import ChessCards from './ChessCards';
export default function ChessPlayers() {
  const [players, setPlayers] = useState([]);
    
    useEffect(() => {
    fetch('https://chess.sulla.hu/chess')
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  return (
    <>
    <ChessCards players = {players}/>
    </>
  )
}
