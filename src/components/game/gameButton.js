function GameButton({value, onButtonClick}) {
    return <button className="game-button" onClick={onButtonClick}>{ value }</button>;
}

export default GameButton;