import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Player from './Player';
import Counter from './Counter';


class App extends React.Component {

  state = {
    players: [
      {
        name: "Sean",
        id: 1
      },
      {
        name: "Bruna",
        id: 2
      },
      {
        name: "Tim",
        id: 3
      },
      {
        name: "Tiffany",
        id: 4
      },
    ]
  };

  HandleRemovePlayer = (id) => {
    this.setState( prevState => {
        return {
            players: prevState.players.filter(p => p.id !== id)
        };
    });
}

  render() {
    return (
      <div>
        <Header title="scoreboard" totalPlayers={this.state.players.length}/>
        {/*Players list*/}
        {this.state.players.map( player => 
          <Player 
            name={player.name}
            id={player.id}
            key={player.id.toString()}
            removePlayer={this.HandleRemovePlayer}
          />
          
          
        )}
        
      </div>
    );
  }
  
}

export default App;