import React from 'react';
import './App.css';
import Counter from './Counter';

function Player(props) {
    return(
        <header className="player">
            
            <span className="player-name">
                <button onClick={() => props.removePlayer(props.id)}>×</button>
                {props.name}
            </span>

            <Counter />
        </header>
    )
}





export default Player;