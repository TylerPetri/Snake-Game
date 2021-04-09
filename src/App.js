import React from 'react'
import Board from './Board/Board.jsx';
import Gameover from './Gameover/Gameover.jsx'
import { useStoreContext } from './lib/globalstore'

import './App.css';

function App() {
  const [{start, game, end}, dispatch] = useStoreContext()

  return (
    <>
    <div className="App">
      <Board/>
      <Gameover/>
    </div>
    </>
    )
};

export default App;
