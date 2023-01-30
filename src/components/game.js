import React from 'react';
import '../style/game.scss'; 
import GameBoard from './game/gameBoard';
  
function Game (){
    return (
      <div className="container">
        <header className='game-header'>
            <div className='game-popup'>Now in Game</div>
        </header>
        <main className='game-page'>
            <GameBoard/>
        </main>
      </div>
    );
}
  
export default Game;