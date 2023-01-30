import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/home';
import Waiting from './components/waiting';
import Game from './components/game';
  
export default function CreateRouter () {
    return (
        <Router>
            <Routes>
                <Route path="/" element={< Home />}></Route>
                <Route path='/waiting' element={< Waiting />}></Route>
                <Route path='/game' element={< Game />}></Route>
            </Routes>
        </Router>
    )
}