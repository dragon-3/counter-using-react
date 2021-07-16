import React from 'react';
import './App.css';

function Header(props) {
    return(
        <header className="header">
            
            <h1>{props.title}</h1>
            <span className="stats">Players: {props.totalPlayers}</span>
        </header>

        
    )
}


export default Header;