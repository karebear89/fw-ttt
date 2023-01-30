import React, { useEffect }  from 'react';

import { useNavigate } from 'react-router-dom'
  
function Waiting (){
const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/game')
    }, 4000)
  }, [navigate]);

  return  (
    <div className="container">
    <main className='waiting-for-opponent'>
      <h1 className='h2'>Waiting to find your opponent ...</h1>

      <div className='player-choice'>
        <span className='playerX'>X</span>
        <span className='playerO'>O</span>
      </div>
    </main>
  </div>
  );

}
  
export default Waiting;