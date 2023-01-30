import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../style/home.scss';
  
function Home (){
    const [active, setActive] = useState("");

    useEffect(() => {
      const storedSelectedButton = parseInt(localStorage.getItem('selectedButton') || '1');
      setActive(storedSelectedButton);
    }, [])

    const handleClick = (event) => {
      setActive(event.target.id);
      localStorage.setItem('selectedButton', event.target.id);
    }
  
    return (
      <div className="container">
        <header>
            <h1>Welcome</h1>
        </header>
        <main>
          <h2>Pick Your Player</h2>
  
          <div className='player-choice'>
            <button key={1} id={"1"} className={active === "1" ? 'active playerX' : 'playerX'} onClick={handleClick}>X</button>
            <button key={2} id={"2"} className={active === "2" ? 'active playerO' : 'playerO'} onClick={handleClick}>O</button>
          </div>
          <Link to="/waiting">
            <button className='start-game'>Match me with my opponent</button>
          </Link>
        </main>
      </div>
    );
}
  
export default Home;