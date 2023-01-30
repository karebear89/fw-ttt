import React, { useEffect } from 'react';
import { useState } from 'react';
import GameButton from './gameButton';

function GameBoard (){
    const [xIsNext, setXIsNext] = useState(true);
    const [gameButton, setGameButton] = useState(Array(9).fill(null));
    const [active, setActive] = useState([]);
    const [nonActive, setNonActive] = useState("");
    const [activePlayer, setActivePlayer] = useState("");

    useEffect(() => {
        const active = JSON.parse(localStorage.getItem('selectedButton'));
        if (active === 1) {
            setActive('X');
            setNonActive('O');
            setActivePlayer('X');
        }
        else {
            setActive('O');
            setNonActive('X');
            setActivePlayer('O');
        }
    }, []);

    function handleClick(i) {
        if (gameButton[i]) {
            return;
          }
        const nextButton = gameButton.slice();
        if (xIsNext) {
            nextButton[i] = active;
            setActivePlayer(nonActive);
          } else {
            nextButton[i] = nonActive;
            setActivePlayer(active);
          }
        setGameButton(nextButton);
        setXIsNext(!xIsNext);
    }

    return (
        <>
        <h1 className='h2'>{activePlayer}'s Turn!</h1> 
        <div className='game-board'>
            <GameButton value={gameButton[0]} onButtonClick={() => handleClick(0)}/>
            <GameButton value={gameButton[1]} onButtonClick={() => handleClick(1)}/>
            <GameButton value={gameButton[2]} onButtonClick={() => handleClick(2)}/>
            <GameButton value={gameButton[3]} onButtonClick={() => handleClick(3)}/>
            <GameButton value={gameButton[4]} onButtonClick={() => handleClick(4)}/>
            <GameButton value={gameButton[5]} onButtonClick={() => handleClick(5)}/>
            <GameButton value={gameButton[6]} onButtonClick={() => handleClick(6)}/>
            <GameButton value={gameButton[7]} onButtonClick={() => handleClick(7)}/>
            <GameButton value={gameButton[8]} onButtonClick={() => handleClick(8)}/>
        </div>
        </>
    );
}
  
export default GameBoard;